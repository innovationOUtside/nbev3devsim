from PIL import Image
import numpy as np

import pandas as pd
from IPython.display import display
from tqdm import tqdm

from sklearn.preprocessing import normalize

# Provide a tqdm class with an audio response on completion
#via https://github.com/tqdm/tqdm/issues/988
from tqdm.notebook import tqdm as tqdm_notebook_orig

class tqdm_notebook(tqdm_notebook_orig):
    def close(self, *args, **kwargs):
        if self.disable:
            return
        super(tqdm_notebook, self).close(*args, **kwargs)

        from IPython.display import Javascript, display
        display(Javascript('''
        var ctx = new AudioContext()
        function tone(duration=1.5, frequency=400, type='sin'){
          var o = ctx.createOscillator(); var g = ctx.createGain()
          o.frequency.value = frequency; o.type = type
          o.connect(g); g.connect(ctx.destination)
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration)
        }
        tone(1.5, 600)'''))
        
tqdma = tqdm_notebook


def load_MNIST_images_array(fn='mnist_batch_0.png'):
    """Load data in from a MNIST images file."""
    #Load in the image data file
    img = Image.open(fn)
    # Turn the image data into a multidimensional array
    # of 3000 separate 28 x 28 arrays
    images_array = np.array(img).reshape((3000, 28, 28))

    return images_array

import json

def load_MNIST_labels(fn = 'labels.txt'):
    """Load in MNIST labels data."""
    # The labels.txt file contains 3000 digit labels in the same order as the image data file
    with open(fn, 'r') as f:
        labels = json.load(f)
    return labels

def load_MNIST_images_and_labels(images_file='mnist_batch_0.png', labels_file='labels.txt', images=True):
    """Load in MNIST images and labels data"""
    images_array = load_MNIST_images_array(images_file)
    labels = load_MNIST_labels(labels_file)
    if images:
        return get_images_list_from_images_array(images_array), labels
    return images_array, labels

def report_light_sensor(state, side='left'):
    """Print a report of the sensor values."""
    
    print(f"""
RGB: {state[side+'_light_raw']}
Reflected light intensity: {state[side+'_light']}
Reflected light intensity per cent: {state[side+'_light_pc']}
Full reflected light intensity (%): {state[side+'_light_full']}
""")
#robotState = %sim_robot_state
#report_light_sensor(robotState.state, 'left')

# Specific to simulator 

def sensor_image_focus(img, centre=(3, 3, 17, 17),
                       resize=None, bw=False):
    """Extract the focal point of the sensor image."""
    if resize=='auto':
        resize = img.size
    
    cropped_image = img.crop(centre)
    if resize:
        cropped_image = cropped_image.resize(resize, Image.LANCZOS)
    
    if bw:
        cropped_image = make_image_black_and_white(cropped_image)
        
    return cropped_image


def get_sensor_image_pair(image_data, index=None, mode='greyscale', threshold=127):
    """Return a left right pair of images."""
    if image_data.empty:
        return
    if index is None and len(image_data)>=2:
        l_index = -2
        r_index = -1
    else:
        l_index =  (2 * index)
        r_index = l_index + 1      
    left_img = sensor_image_focus(generate_image(image_data, l_index))
    right_img = sensor_image_focus(generate_image(image_data, r_index))
    if mode=='greyscale':
        left_img = left_img.convert("L")
        right_img = right_img.convert("L")
    elif mode=='bw':
        left_img = make_image_black_and_white(left_img, threshold=threshold)
        right_img = make_image_black_and_white(right_img, threshold=threshold)
    return left_img, right_img

# Generic?


def predict_from_image(MLP, _image_image):
    """Test a trained MLP against a single image / class."""
    # Linearise the raw image data
    # as one dimensional list of values
    flat_image = array_from_image(_image_image).reshape((1, _image_image.size[0], _image_image.size[1]))

    # Normalise the values in the list
    # to bring them into the range 0..1
    normalised_flat_image = normalize(flat_image, norm='max')

    # Display the image, along with prediction
    display(_image_image, MLP.predict(normalised_flat_image))


def get_random_image(images_array, labels, show=False, index=None):
    """Return a random image and label."""
    # images_array may also be images_list

    # Check that the length of the labels list
    # matches the length of the images array
    assert len(labels) == len(images_array)
    
    # If no index  value is provided,
    # generate a valid, random index value within the
    # bounds of the dataset array / list size
    if index is None:
        index = random.randint(0, len(images_array)-1)

    image = images_array[ index ] if isinstance(images_array[ index ], Image.Image) else Image.fromarray(images_array[ index ])
 
    # Get the corresponding label
    label = labels[index] 
    
    # If required, display the zoomed image
    if show:
        print(f"Image label: {label}")
        zoom_img(image)
        
    # Return the image,
    # along with the corresponding label
    return image, label


def style_df(df, bw=False, colorTheme='Blues', threshold=127):
    """Return a styled dataframe (not a dataframe...)."""
    vals = df.values.ravel()
    # If we only have two colours, force bw:
    if len(pd.unique(vals))<=2:
        bw = True
        threshold = int(np.mean(pd.unique(df.values.ravel())))
        
    if bw:
        _bw = lambda x: 'background: black; color:white' if int(x)<threshold else 'background: white;color:black'
        return df.style.applymap(_bw)
    
    # Set limits based on overall dataframe values
    return df.style.background_gradient(cmap=colorTheme, vmin= min(vals), vmax=max(vals))


def image_data_to_array(image_data, index=0, size=(20, 20, 3)):
    """Convert the image data string to a numpy array."""
    image_array = np.array(image_data).reshape(size).astype(np.uint8)
    return image_array

def get_resized_images_array(images_array, size=(20, 20)):
    """Get resized images array."""
    idfr=[]
    for i in tqdm(images_array, "Get resized images"):
        idfr.append(array_from_image(Image.fromarray(i).resize(size, Image.LANCZOS), size=size))
    return idfr

def array_from_image(img, size=(28, 28)):
    """Get array from image."""
    _array = np.array(image_data_from_image(img)).astype(np.uint8)
    # Reshape as a 28x28 array
    image_array = _array.reshape((size[0], size[1]))
    return image_array

def get_images_list_from_images_array(images_array):
    """Get images list from images_array."""
    images_list = [image_from_array(image_array) for image_array in images_array]
    return images_list

def image_from_array(image_array, mode='L'):
    """Generate an image from an array."""
    return Image.fromarray(image_array).convert(mode)


def image_data_from_image(img):
    """Get image data from image."""
    return img.getdata()


def df_from_image(img, show=True, colorTheme='Blues'):
    """Return a dataframe from image data."""
    img_df = pd.DataFrame(np.reshape(list(img.getdata()), img.size))
    if show:
        display(style_df(img_df))
    return img_df

#bw_df = df_from_image(img)


def image_from_df(df):
    """Return an image from a dataframe."""
    return image_from_array( df.values.astype(np.uint8) )


# was: image_data_to_array
def raw_image_data_to_array(tmp, index=0, size=(20, 20, 3), col='vals'):
    """Convert the image data string to a numpy array."""
    
    if isinstance(tmp, pd.DataFrame):
        if 'vals' in tmp.columns:
            if index >= tmp.shape[0]:
                print(f"There are only {tmp.shape[0]} samples in the dataset.")
                return 

            # TO DO: we need to better detect the image size: (x, y, depth)
            tmp = tmp.iloc[index][col].split(',')
        else:
            print(f"An unrecognised dataframe was provided (no {col} column?).")
            return 

    #return np.array(tmp).reshape(size[0], size[1], size[2]).astype(np.uint8)
    return image_data_to_array(tmp, index, size)


    
def collected_image(df, index=0, size=(20, 20, 3)):
    """Render collected data as an image.
    """
    def _process_robot_image_data(data):
        """Process the robot image data and return a dataframe."""
        print('You should really be passing a dataframe... I will try to fix it.')
        df = pd.DataFrame(columns=['side', 'vals', 'clock'])
        for r in data:
            _r = r.split()
            if len(_r)==3:
                tmp=_r[1].split(',')
                k=4
                del tmp[k-1::k]
                df = pd.concat([df, pd.DataFrame([{'side':_r[0],
                                                'vals': ','.join(tmp),
                                                'clock':_r[2]}])])
        df.reset_index(drop=True,inplace=True)
        return df

    if isinstance(df, list):
        # try this...
        df = _process_robot_image_data(df)
        
    vv = raw_image_data_to_array(df, index, size)
    
    #This is assuming a depth of 3
    vvi = Image.fromarray(vv, 'RGB')

    return vvi

def generate_image(image_data_df, index=0,
                   size=(20, 20, 3), mode='greyscale',
                   crop=None,
                   resize=None, fill=255, threshold=127):
    """Generate image from each row of dataframe."""
    #  TO DO: len(pixels) == x * y assume we have greyscale
    #  TO DO: len(pixel) ==  x * y * 3 then we have RGB
    _img = collected_image(image_data_df, index, size)
    if resize=='auto':
        resize = _img.size
    if mode=='greyscale':
        _img = _img.convert("L")
    elif mode=='bw':
        _img = make_image_black_and_white(_img, threshold=threshold)
    if crop:
        _img = _img.crop(crop)
    if resize:
        _img = _img.resize(resize, Image.LANCZOS)
    return _img



def make_image_black_and_white(img, threshold=127):
    """Convert an image to a black and white image."""
    #convert('1') converts to black and white;
    # use a custom threshold via:
    # https://stackoverflow.com/a/50090612/454773
    
    fn = lambda x : 255 if x > threshold else 0

    img = img.convert('L').point(fn, mode='1')
    return img

def generate_bw_image(image_data, index=0, size=(20, 20, 3), threshold = 127,
                      crop=None, resize=None):
    """Generate dataframe with black and white image data."""
    
    img = generate_image(image_data, index, size, crop=crop, resize=resize)
    
    bw = make_image_black_and_white(img, threshold)
    return bw

#img = generate_bw_image(roboSim.image_data)

# Create signature from row
#Streak code cribbed from:
# https://joshdevlin.com/blog/calculate-streaks-in-pandas/
def generate_signature_from_series(s, fill=255, threshold=127, binarise=False):
    """
    Create a signature for the data based on:
     - the initial value in a row
     - the longest run of black pixels
     - the longest run of white pixels
     - the number of transitions / edges
    """
    
    if binarise:
        s = [255 if x>threshold else 0 for x in s]

    data = pd.DataFrame(s)
    data.columns = ['v']
    data['start'] = data['v'].ne(data['v'].shift(fill_value=fill))
    data['_id'] = data['start'].cumsum()
    data['counter'] = data.groupby('_id').cumcount() + 1
    data['end'] = data['v'].ne(data['v'].shift(-1, fill_value=fill))
    
    transitions = data['end'].sum()
    longest_white = data[data['end'] & data['v']]['counter'].max()
    longest_black = data[data['end'] & ~data['v']]['counter'].max()
    
    longest_white = 0 if pd.isnull(longest_white) else longest_white
    longest_black = 0 if pd.isnull(longest_black) else longest_black
    
    initial_value = s.iloc[0]

    return transitions, initial_value, longest_white, longest_black


from sklearn import preprocessing

def generate_signature(img, threshold=127, normalise=None,
                       linear=False,
                       segment=None, fill=255, show=False
                       ):
    """Generate signature from image."""
    if isinstance(img, Image.Image):
        bw_img = make_image_black_and_white(img, threshold=threshold) if threshold is not None else img
        if show:
            zoom_img(bw_img)
        _rows, _cols = bw_img.size
        _array = np.array(list(bw_img.getdata())).reshape((_rows, _cols))
        _df = pd.DataFrame(_array)
    elif isinstance(img, pd.DataFrame):
        _df = img
    else:
        # if  array
        _df = pd.DataFrame(img)

    # Experimental    
    if segment:
        _df.drop(_df.index[segment], inplace=True)

    _signatures = _df.apply(generate_signature_from_series, fill=fill, axis=1)
    _df = pd.DataFrame(list(_signatures))
    """
    #Normalise down columns - the scales max val to 1 rther than normalise vector
    if normalise is not None:
        # if normalise=0 normalise down cols (features) rows
        # if 1, normalise across rows
        # We would expect to pass 0 here to normalise features
        if normalise:
            _df = _df.T
        _array = _df.values # Returns an array
        min_max_scaler = preprocessing.MinMaxScaler()
        scaled = min_max_scaler.fit_transform(_array)
        _df = pd.DataFrame(scaled)
        if normalise:
            _df = _df.T
    """
    if linear:
        if normalise:
            return normalize([_df.values.ravel()])
        return _df.values.ravel()
    return _df

## Zoomed image display

from matplotlib import pyplot as plt
import numpy as np
from matplotlib.ticker import MaxNLocator


def preview_state_image(data, size=(20, 20, 4), mode='RGB', zoom = True, retval = True):
    """Preview the image from the robot state."""
    _array = raw_image_data_to_array(data.split(','),
                       size=size)
    _img = image_from_array(_array, mode=mode)
    if zoom:
        zoom_img(_img)
    
    if retval:
        return _img

def get_image_from_state(data, size=(20, 20, 4), mode='RGB', zoom = True):
    """Get image from robotstate."""
    return  preview_state_image(data, size=size, mode=mode, zoom = zoom, retval = True)
# robotState = %sim_robot_state
# preview_state_image(robotState.state['sensor1dataArray'])

def zoom_img(img, size=(5, 5), grid=True):
    """Zoom the display of the sensor captured image."""
    plt.figure(figsize = size)

    #plt.axis('off')
    
    #
    
    if grid:
        plt.grid()
        plt.xticks(range(0, img.size[0]+1))
        plt.yticks(range(0, img.size[1]+1))
    else:
        ax = plt.gca()
        ax.xaxis.set_major_locator(MaxNLocator(integer=True))
        ax.yaxis.set_major_locator(MaxNLocator(integer=True))
  
    plt.imshow(np.asarray(img.convert('RGB')),
               extent=(0, img.size[0], img.size[1], 0))
    
    
    

# Focus on image
# The following routines willdrop all background rows/columns
# from left/right/upper/lower edge of dataframe

#https://stackoverflow.com/a/54405767/454773
def background_column(s, background=255, threshold=None):
    """Report whether all values in a column are the same."""
    a = s.to_numpy()
    return (a[0] == a).all() and a[0] == background

def clear_columns(df, reverse=False, transpose=False, background=255, threshold=None):
    """Clear edge columns / rows in dataframe
    where all values the same."""
    
    if transpose:
        df = df.T
    
    if reverse:
        df = df.loc[:, ::-1].copy()
    
    # TO DO  - clear edge columns that are above/below a specified threshold
    for c in df:
        if background_column(df[c], background):
            df.drop(columns=[c], inplace=True)
        else:
            break

    if reverse:
        df = df.loc[:, ::-1]
        
    if transpose:
        df = df.T

    return df

    
#bw_df = pd.DataFrame(np.reshape(list(bw.getdata()), (20,20)))
def trim_image(bw_df, background=255, reindex=False,
               show=True, colorTheme='Blues', image=False, threshold=False):
    """Take an image dataframe and trim its edges."""
    if isinstance(bw_df, Image.Image):
        bw_df = df_from_image(bw_df, show=show)
 
    bw_dfx = clear_columns(bw_df, False, False, background=background)
    bw_dfx = clear_columns(bw_dfx, False, True, background=background)
    bw_dfx = clear_columns(bw_dfx, True, False, background=background)
    bw_dfx = clear_columns(bw_dfx, True, True, background=background)
                          
        
    if reindex:
        bw_dfx.reset_index(drop=True, inplace=True)
        bw_dfx.columns = list(range(bw_dfx.shape[1]))
    
    if show:
        display(style_df(bw_dfx, colorTheme=colorTheme))
    
    if image:
        return image_from_df(bw_dfx)

    return bw_dfx

#trim_image( df_from_image (img))


def crop_and_pad_to_fit(img, background=255, scale=1, quiet=True, threshold=None):
    """Crop an image then pad it back to fit the original image size."""
    if not quiet:
        display("Original image:")
        zoom_img(img)

    _trimmed_image_df = trim_image( df_from_image(img, show=False), background=background, show=False)
    _cropped_image = image_from_df(_trimmed_image_df)
    
    _image_mode = 'L' #greyscale image mode
    _shift_image = Image.new(_image_mode, img.size, background)
    _csize = _cropped_image.size
    display(_cropped_image)
    _xy_offset = (int((img.size[0] - _csize[0])/2),
                 int((img.size[1] - _csize[1])/2))
    _shift_image.paste(_cropped_image, _xy_offset)
    return _shift_image


def crop_and_zoom_to_fit(img, background=0, scale=1, quiet=True):
    """Crop an image then zoom back to fit the original image size."""
    if not quiet:
        display("Original image:")
        zoom_img(img)

    _trimmed_image_df = trim_image( df_from_image(img, show=False), background=background, show=False)
    _cropped_image = image_from_df(_trimmed_image_df)
    
    # TO DO - allow a scale function that scales up and down within the image frame
    # TO DO - scaling <1.0 should scale then paste the image into the centre of the full size frame
    _resized_image = _cropped_image.resize(img.size, Image.LANCZOS)
    return _resized_image


import random

def jiggle(img, background=0, quiet=True):
    """Jiggle the image a bit so it's not quite centred."""
    _image_size = img.size
    if not quiet:
        display("Original image")
        zoom_img(img)
        
    _trimmed_image_df = trim_image( df_from_image(img, show=False), background=0, show=False)
    _cropped_image = image_from_df(_trimmed_image_df)
    (_xt, _yt) = _cropped_image.size
    
    _image_mode = 'L' #greyscale image mode
    _shift_image = Image.new(_image_mode, _image_size, background)

    # What causes this to fail?
    if _image_size[0]<_xt or _image_size[1]<_yt:
        return img

    # Set an offset for where to paste the image
    # The limit of the jiggling depends on the size of the cropped image
    _x = random.randint(0, _image_size[0]-_xt )
    _y = random.randint(0, _image_size[1]-_yt )
    _xy_offset = (_x, _y)

    _shift_image.paste(_cropped_image, _xy_offset) 
    
    return _shift_image


    #if _shift_image.size!=(_x, _y):
    #    if not quiet:
    #        print("Resizing")
    #    _shift_image = _shift_image.resize((_x, _y), Image.LANCZOS)
    #
    #return _shift_image

#jiggle(img, quiet=False)



def get_image_features(image):
    """Return image data as a list."""
    return list(image.getdata())

def get_images_features(images_list, normalise=True):
    """Return list of image features lists"""

    images_data = []

    for image in images_list:
        images_data.append(list(image.getdata()))

    if normalise:
        # The axis=1 arguments normalises each indivial image vector
        images_data = normalize(images_data, axis=1)
    return images_data


""" LEGACY

type(images_array), images_array.shape
#(numpy.ndarray, (3000, 28, 28))

from sklearn.preprocessing import normalize

# Get the dimensions of the images array as the number of images
# and each individual image array size
(array_n, array_x, array_y) = images_array.shape

# Create a list of "flat" images,
# where each image is represented as one dimensional list
# containing column*row individual pixel values
flat_images = images_array.reshape(array_n, array_x*array_y)

# We can normalise the values so they fall in the range 0..1
normalised_flat_images = normalize(flat_images, norm='max', axis=1)


test_limit = 100
train_limit = len(normalised_flat_images) - test_limit

# Train the MLP on a subset of the images

MLP.fit(normalised_flat_images[:train_limit], labels[:train_limit])
"""