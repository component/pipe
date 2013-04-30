
/**
 * Expose `pipe()`.
 */

module.exports = pipe;

/**
 * Draw a pipe between `a` and `b`.
 *
 * @param {Context2d} ctx
 * @param {Point} a
 * @param {Point} b
 * @api public
 */

function pipe(ctx, a, b) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  var dist = distance(a, b);
  var dx = (a.x - b.x < 0 ? dist : -dist) * .2;
  var dy = dist * .8;
  ctx.quadraticCurveTo(
    a.x + (b.x - a.x) / 2 + dx,
    a.y + (b.y - a.y) / 2 + dy,
    b.x,
    b.y)
  ctx.stroke();
  ctx.restore();
}

/**
 * Distance between `a` and `b`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Number}
 * @api private
 */

function distance(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}
