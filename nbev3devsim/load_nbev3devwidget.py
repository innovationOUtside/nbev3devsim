# Run this cell to set up the robot simulator environment

#Load the nbtutor extension
#%load_ext nbtutor

#Reset the notebook style
from IPython.core.display import display, HTML, Javascript

display(HTML("<style>#notebook-container { width:50%; float:left !important;}</style>"))
display(Javascript('''
$(function() {
    $("#notebook-container").resizable({
        handles: 'e',
        //containment: '#container',

    });     
});  
'''))
#https://stackoverflow.com/questions/4688162/jquery-resizable-dynamic-maxwidth-option
#display(Javascript('document.getElementById("notebook-container").classList.add("ui-resizable");'))
#display(HTML("<style>#notebook-container { width:50%; float:left !important; resize:horzontal; position: fixed; bottom: 0px; height: 100%;}</style>"))
#<div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;">::after</div>


#Launch the simulator
from nbev3devsim import ev3devsim_nb as eds

#%load_ext nbev3devsim

roboSim = eds.Ev3DevWidget()

roboSim.set_element("response", '')
             
display(roboSim)
roboSim.element.dialog()

#robotState = eds.RobotState(roboSim)
#robotState.update()

roboSim.js_init("""
element.dialog({ "title" : "Robot Simulator" }).dialogExtend({
        "maximizable" : true,
        "dblclick" : "maximize",
        "icons" : { "maximize" : "ui-icon-arrow-4-diag" }});
""")


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
