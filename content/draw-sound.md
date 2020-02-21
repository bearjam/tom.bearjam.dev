<script type="module" src="./dist/drawing-board.js"></script>
<script type="module" src="./dist/wave-renderer.js"></script>

## Sound Drawing Experiment

This is a work in progress, playing with drawing sound.
Ideas for next iterations include:

* Plugging many together
* Using drawn signals to modulate
* Working in the same context as peers over a LAN

The following [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) can be played with in this browser window.
Source code linked inline.

### Waveform Drawing Component [source](https://gitlab.com/tombear/drawing-board)

<drawing-board id="db0"></drawing-board>

### Waveform Rendering Component [source](https://gitlab.com/tombear/wave-renderer)

<wave-renderer source-element-id="db0"></wave-renderer>
