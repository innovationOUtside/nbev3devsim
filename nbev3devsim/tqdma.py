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