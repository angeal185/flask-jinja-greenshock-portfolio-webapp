$(document).ready(function() {
    function e(e, r, t) {
        var a = document.querySelector(r),
            o = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(o, a.text), e.compileShader(o);
        var n = document.querySelector(t),
            i = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(i, n.text), e.compileShader(i);
        var g = e.createProgram();
        return e.attachShader(g, o), e.attachShader(g, i), e.linkProgram(g), e.useProgram(g), g
    }

    function r() {
        gl = a.getContext("webgl");
        var r = a.width,
            t = a.height;
        gl.viewport(0, 0, r, t), a.addEventListener("mousemove", function(e) {
            g = e.pageX / a.width, l = e.pageY / a.height
        }, !1);
        var i = e(gl, "#sv", "#sf"),
            c = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, c), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, -1, 1, 1]), gl.STATIC_DRAW);
        var u = gl.getAttribLocation(i, "vPosition");
        gl.vertexAttribPointer(u, 2, gl.FLOAT, !1, 0, 0), gl.enableVertexAttribArray(u), o = gl.getUniformLocation(i, "time"), n = gl.getUniformLocation(i, "mouse");
        var d = new Float32Array([a.width, a.height]);
        gl.uniform2fv(gl.getUniformLocation(i, "resolution"), d)
    }

    function t() {
        gl.uniform1f(o, (Date.now() - i) / 1e3), gl.uniform2fv(n, new Float32Array([g, l])), gl.drawArrays(gl.TRIANGLE_FAN, 0, 4), requestAnimationFrame(t)
    }
    var a = document.querySelector("#cnv");
    a.width = window.innerWidth, a.height = window.innerHeight;
    var o, n, i = Date.now(),
        g = 0,
        l = 0;
    r(), t()
});
