
# pipe

  Canvas "pipe" between two points.

## Installation

    $ component install component/pipe

## Example

```html
<canvas width=1000 height=1000 style="border: 1px solid #eee"></canvas>
<script>
  var raf = require('raf');
  var pipe = require('pipe');
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  var a = { x: 500, y: 300 };
  var b = { x: 500, y: 500 };
  var g = 0;
  var x;
  var y;

  canvas.onmousemove = function(e){
    x = e.offsetX;
    y = e.offsetY;
  };

  function draw(){
    ctx.strokeStyle = '#ddd';
    canvas.width = canvas.width;
    b.x = x;
    b.y = y;
    pipe(ctx, a, b);
  }

  function animate() {
    raf(animate);
    draw();
  }

  animate();
</script>
```

## License

  MIT
