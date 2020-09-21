# +
import matplotlib.pyplot as plt
import numpy as np

from PIL import Image

from sklearn.preprocessing import normalize

import pandas as pd


# +
from sklearn.neural_network import MLPClassifier

# tqdm provides progress bars to wrap around iterators
from tqdm.notebook import tqdm
from sklearn.utils._testing import ignore_warnings
from sklearn.exceptions import ConvergenceWarning

@ignore_warnings(category=ConvergenceWarning)
def progress_tracked_training(data, labels, MLP=None, hidden_layer_sizes=(30), max_iterations=40):
    """MLP trainer with progress bar."""
    iterator_start = 0
    if not MLP:
        #Create the initial network
        MLP = MLPClassifier(hidden_layer_sizes=hidden_layer_sizes, max_iter=1,
                        verbose=False)
        iterator_start += 1
        max_iterations += 1
    #provide an initial training iteration to define the classes
    MLP.fit(data, labels)

    #Now cycle through the remaining iterations
    for i in tqdm(range(iterator_start, max_iterations)):
        # Perform another training iteration
        MLP.partial_fit(data, labels)
        
    return MLP



# -

def reshape_data(img, n_images=3000, size=(28, 28)):
    # Turn the image data into a multidimensional array
    # of 3000 separate 28 x 28 arrays
    images_array = np.array(img).reshape(n_images, size[0], size[1])

    flat_images = np.array(img).reshape(n_images, size[0]*size[1])
    
    normalised_flat_images = normalize(flat_images, norm='max', axis=1)
    
    return images_array, flat_images, normalised_flat_images


# +
# TO DO - this doesn't work for arbitrary sized networks...

def preview_weights(MLP, size=(28, 28)):
    #Create a grid of image axes
    fig, axes = plt.subplots(8, 5)

    # Get the axes in the form of a list
    axes_list = axes.ravel()

    # Find the global min / max value to ensure all weights are shown on the same scale
    vmin, vmax = MLP.coefs_[0].min(), MLP.coefs_[0].max()

    #Iterate through MLP node weights, plotting each set in its own figure
    for coef, ax in zip(MLP.coefs_[0].T, axes_list):
        weights_NxM_array = coef.reshape(size[0], size[1])
        #We can display the weight array as a matrix in a new figure window.
        ax.matshow(weights_NxM_array, cmap=plt.cm.gray, vmin=.5 * vmin,
                   vmax=.5 * vmax)

        # Remove axis tick marks for a cleaner display
        ax.set_xticks(())
        ax.set_yticks(())

    plt.show()


# +
# TO DO - this doesn't work for arbitrary sized networks...

def multiply_image_by_weights(MLP, img, labels, image_number=0, normalised=False):
    """Function to display an input image and multiply it by node weights."""
    
    def multiplied_plot(images):
        fig, axes = plt.subplots(8, 5)
        # use global min / max to ensure all weights are shown on the same scale
        vmin, vmax = MLP.coefs_[0].min(), MLP.coefs_[0].max()
        for coef, ax in zip(MLP.coefs_[0].T, axes.ravel()):
            # Multiply input by weight
            coef = np.multiply(coef, images[image_number])
            ax.matshow(coef.reshape(28, 28), cmap=plt.cm.gray, vmin=.5 * vmin,
                       vmax=.5 * vmax)
            ax.set_xticks(())
            ax.set_yticks(())

        plt.show()
    
    images_array, flat_images, normalised_flat_images = reshape_data(img)

    displayImageLabelPairFromArray(images_array, labels, image_number)
    if normalised:
        multiplied_plot(normalised_flat_images)
    else:
        multiplied_plot(flat_images)


# -

def displayImageLabelPairFromArray(images_array, labels, index):
    """Display the image and label for a MNIST digit by index value."""
    # The display() function is provided "for free" within Jupyter notebooks
    display( Image.fromarray(images_array[index]), labels[index])


def _test_display(MLP, sample, label):
    """Test an input on a classifier and display the result"""
    display(f'Expected label: {label}')
    display(f'Input image {Image.fromarray(sample)}')
    display(pd.DataFrame(MLP.predict_proba([sample])).T.plot(kind='bar'))


# +
from .sensor_data import array_from_image
from .sensor_data import zoom_img


def prediction_class_chart(MLP, normalised_flat_image):
    """Display prediction class chart."""
    # Get the prediction for likelihood of class membership as a dataframe
    _dfx = pd.DataFrame(MLP.predict_proba(normalised_flat_image)).T

    #Plot the class predictions as a bar chart
    _dfx.plot(kind='bar', legend=False, title="Confidence score for each class")


from .sensor_data import generate_signature

def class_predict_from_image(MLP, img, quiet=True, zoomview=False,
                             confidence=False, signature=False):
    """Class prediction from an image."""
    flat_image = array_from_image(img).reshape(1, img.size[0]*img.size[1])

    if signature:
        _signature = generate_signature(img, linear=True)
        flat_signature = np.array(_signature).reshape(1, img.size[0]*4)
        normalised_flat_image = normalize(flat_signature, norm='max', axis=1)
    else:
        # We can normalise the values so they fall in the range 0..1
        normalised_flat_image = normalize(flat_image, norm='max', axis=1)
    
    if not quiet:
        if zoomview:
            zoom_img(img)
        else:
            display(img)

    if confidence:
        prediction_class_chart(MLP, normalised_flat_image)

    return MLP.predict(normalised_flat_image)[0]


# +
from .sensor_data import jiggle, crop_and_zoom_to_fit

def predict_and_report_from_image(MLP, img, label='',
                                  jiggled=False, cropzoom=False,
                                  quiet=False, zoomview=False,
                                  confidence=False,
                                  signature=False):
    """Predict the class and report on its correctness."""
    if jiggled:
        img = jiggle(img)
    if cropzoom:
        img = crop_and_zoom_to_fit(img)

    prediction = class_predict_from_image(MLP, img, quiet=quiet,
                                          zoomview=zoomview, confidence=confidence, signature=signature)

    if label != '':
        print(f"MLP predicts {prediction} compared to label {label}; classification is {prediction == label}")
    else:
         print(f"MLP predicts {prediction}")


# -

# Is this deprecated in favour of grabbed_image_predictor?
def test_display(MLP, img, label=''):
    """Test an image against a pretrained classifier and display the result"""
    flat_image = array_from_image(img).reshape(1, img.size[0]*img.size[1])
    normalised_flat_image = normalize(flat_image, norm='max', axis=1)
    
    # Get the prediction for likelihood of class membership as a dataframe
    _df = pd.DataFrame(MLP.predict_proba(normalised_flat_image)).T
    
    #Plot the class predictions as a bar chart
    _df.plot(kind='bar', legend=False, title="Confidence score for each class")
    
    prediction = MLP.predict(normalised_flat_image)[0]
    # Report the actual and predicted class labels
    if label != '':
        print(f'Actual label: {label}')
        print(f'Predicted label: {prediction} [{prediction == label}]')
    else:
        print(f'Predicted label: {prediction}')
        
    # Display the sample as an image
    display(img)


# We need a function that will accept a test image and that will:
# - test it;
# - display it;
# - display the test chart
def image_class_predictor(MLP, img, label='', size=None,
                            greyscale_convert=True, eds_crop=False):
    """Predict class from image.
    The size parameter is a tuple."""
    if greyscale_convert:
        # Convert to grayscale
        img = img.convert('L')
        
    #This is currently a hack for TM129/nbev3devsim
    if (eds_crop and img.size==(20, 20)) or img.size==(20, 20):
        print("Cropping image focus..")
        img = img.crop((3, 3, 18, 18))
    
    # TO DO - can we detect the network input and resize to that?
    if size and img.size!=size:
        print("Resizing")
        img = img.resize(resize, Image.LANCZOS)
    
    #resized_image_bw_list = list(img.getdata())

    # get data as normalised array
    resized_image_bw_array = np.array(img.getdata()).astype(np.uint8)
    normalised_resized_image_bw_array = normalize([resized_image_bw_array], norm='max', axis=1)

    # Get the prediction for likelihood of class membership as a dataframe
    _dfx = pd.DataFrame(MLP.predict_proba(normalised_resized_image_bw_array)).T

    #Plot the class predictions as a bar chart
    _dfx.plot(kind='bar', legend=False, title="Confidence score for each class")

    prediction = MLP.predict(normalised_resized_image_bw_array)[0]
    # Report the actual and predicted class labels
    if label != '':
        # Report the actual and predicted class labels
        print(f'Actual label: {label}')
        print(f'Predicted label: {prediction} [{prediction == label}]')
    else:
        # Report the predicted class label
        print(f'Predicted label: {prediction}')
        
    # Display the sample as an image
    display(img)

from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix

def generate_N_random_samples(randfunc, num_samples=100):
    """Generate a test collection on a specified number of samples."""
    test_list = []
    test_labels = [] 

    for i in range(num_samples):
        (_test_image, _test_label) = randfunc()
        
        if jiggled:
            _test_image = jiggle(_test_image)
        if cropzoomed:
            _test_image = crop_and_zoom_to_fit(_test_image)

        _im_array = array_from_image(_test_image)
        test_list.append(array_from_image(_test_image).reshape(1, _test_image.size[0]*_test_image.size[1]))
        test_labels.append(_test_label)
    return test_list, test_labels


def test_and_report_images(MLP, test_images, test_labels, 
                           jiggled=False, cropzoomed=False):
    """Test and report on pre-trained MLP using a provided set of test images."""
    flat_image = np.array(test_images).reshape(len(test_images), test_images[0].size)

    # Normalise the values in the list
    # to bring them into the range 0..1
    normalised_flat_images = normalize(flat_image, norm='max')
    predictions = MLP.predict(normalised_flat_images)

    print("Classification report:\n",
          classification_report(test_labels, predictions))
    print("\n\nConfusion matrix:\n",
          confusion_matrix(test_labels, predictions))

    print("Training set score: {}".format(MLP.score(normalised_flat_images, test_labels)))
    print("Test set score: {}".format(MLP.score(normalised_flat_images, test_labels)))

def test_and_report_random_images(MLP, randfunc, num_samples=100, 
                                  jiggled=False, cropzoomed=False):
    """Test and report on pre-trained MLP using specified number of random images."""

    test_list, test_labels = generate_N_random_samples(randfunc=randfunc, num_samples=num_samples )
    test_and_report_images(MLP, test_list, test_labels, jiggled, cropzoomed)


# +
#https://www.tensorflow.org/lite/guide/python
# #%pip install https://dl.google.com/coral/python/tflite_runtime-2.1.0.post1-cp37-cp37m-linux_x86_64.whl
#https://github.com/frogermcs/MNIST-TFLite/blob/master/notebooks/mnist_model.tflite 
# downloaded mnist_model.tflite
import tflite_runtime.interpreter as tflite

def cnn_load(fpath='./mnist.tflite',
             fpath_labels='./mnist_tflite_labels.txt'):
    """Load tensorflow lite model."""
    interpreter = tflite.Interpreter(model_path=fpath)

    interpreter.allocate_tensors()

    tf_labels = []
    if fpath_labels:
        with open(fpath_labels, 'r') as f:
            tf_labels = [line.strip() for line in f.readlines()]
        
    return (interpreter, tf_labels)

#cnn = cnn_load()

def cnn_get_details(cnn):
    """Unpack details of tensorflow-lite model."""
    (interpreter, tf_labels) = cnn
    
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()

    # check the type of the input tensor
    floating_model = input_details[0]['dtype'] == np.float32

    height = input_details[0]['shape'][1]
    width = input_details[0]['shape'][2]

    return input_details, output_details, floating_model, height, width

#input_details, output_details, floating_model, height, width = cnn_get_details(cnn_interpreter)

def cnn_rank_results(results, rank=5):
    """Display ordered list of top cnn classification results."""
    # Go defensive
    rank = 5 if not isinstance(rank, int) else rank
    rank = min(len(results), rank)
    top_k = results.argsort()[-rank:][::-1]

    # This is a hack
    # We seem to be normalising wrt 255, so support that?
    floating_model = max(sum(top_k, [])) > 1

    for i in top_k:
        if floating_model:
            print('{:08.6f}: {}'.format(float(results[i]), tf_labels[i]))
        else:
            print('{:08.6f}: {}'.format(float(results[i] / 255.0), tf_labels[i]))
    

def cnn_test_with_image(cnn, img, tf_labels='', retval=False, rank=None):
    """Test an image against a pretrained tensorflow-lite CNN."""
    interpreter, _tf_labels = cnn
    if not tf_labels:
        tf_labels = _tf_labels
    
    display(img);

    input_details, output_details, floating_model, height, width = cnn_get_details(cnn)
    
    tf_test_img = img.resize((width, height))
    input_data = np.expand_dims(tf_test_img, axis=0)
    if floating_model:
        input_data = (np.float32(input_data) - 127.5) / 127.5
        
    interpreter.set_tensor(input_details[0]['index'], input_data.reshape(input_details[0]['shape']))
    interpreter.invoke()

    output_data = interpreter.get_tensor(output_details[0]['index'])
    results = np.squeeze(output_data)
 
    #[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 
    #Plot the class predictions as a bar chart
    if tf_labels and len(tf_labels)==len(results):
        results_df = pd.DataFrame(results, index=tf_labels)
    else:
        results_df = pd.DataFrame(results)

    results_df.plot(kind='bar', legend=False,
                    title="Confidence score for each class")

    if rank:
        cnn_rank_results(results, rank)

    if retval:
        return results

#(test_img, test_label) = get_random_image()

#cnn_test_with_image(cnn, test_img);
