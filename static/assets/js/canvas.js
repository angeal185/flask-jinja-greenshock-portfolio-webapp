
function Particles() {
    this.canvas = document.getElementById("canvas"), this.ctx = this.canvas.getContext("2d"), this.colors = ["255, 255, 255", "90, 90, 200", "50, 150, 50"], this.minRadius = 10, this.maxRadius = 255, this.minOpacity = .005, this.maxOpacity = .6, this.minSpeed = .005, this.maxSpeed = 1, this.numParticles = 60
}

Particles.prototype._rand = function(t, i) {
    return Math.random() * (i - t) + t
}, Particles.prototype.init = function() {
    this.render(), this.createCircle()
}, Particles.prototype.render = function() {
    var t = this;
    t.canvas.width = windowW, t.canvas.height = windowH, $(window).on("resize", t.render)
}, Particles.prototype.createCircle = function() {
    for (var t = [], i = 0; i < this.numParticles; i++) {
        var a = this,
            e = a.colors[~~a._rand(0, a.colors.length)];
        vy = a._rand(a.minSpeed, a.maxSpeed), vx = a._rand(a.minSpeed, a.maxSpeed), r = 1, t[i] = {
            radius: r,
            xPos: a._rand(0, canvas.width),
            yPos: a._rand(0, canvas.height),
            xVelocity: a._rand(a.minSpeed, a.maxSpeed),
            yVelocity: vy,
            color: "rgba(" + e + "," + a._rand(a.minOpacity, a.maxOpacity) + ")"
        }, a.draw(t, i)
    }
    a.animate(t)
}, Particles.prototype.draw = function(t, i) {
    var a = this,
        e = a.ctx;
    e.fillStyle = t[i].color, e.beginPath(), e.arc(t[i].xPos, t[i].yPos, t[i].radius, 0, 2 * Math.PI, !1), e.fill()
}, Particles.prototype.animate = function(t) {
    function i() {
        e.clearRect(0, 0, canvas.width, canvas.height);
        for (var r = 0; r < a.numParticles; r++) t[r].xPos += t[r].xVelocity, t[r].yPos -= t[r].yVelocity, t[r].xPos > a.canvas.width + t[r].radius || t[r].yPos > a.canvas.height + t[r].radius ? a.resetParticle(t, r) : a.draw(t, r);
        window.requestAnimationFrame(i)
    }
    var a = this,
        e = a.ctx;
    window.requestAnimationFrame(i)
}, Particles.prototype.resetParticle = function(t, i) {
    var a = this,
        e = a._rand(0, 1);
    e > 1 ? (t[i].xPos = -t[i].radius, t[i].yPos = a._rand(0, canvas.height)) : (t[i].xPos = a._rand(0, canvas.width), t[i].yPos = canvas.height + t[i].radius), a.draw(t, i)
};
var particle = new Particles;
particle.init();
