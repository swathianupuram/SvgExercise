function myFunction() {
    var a = document.getElementById("xAxis").value;
    var b = document.getElementById("yAxis").value;
    var c = document.getElementsByTagName("circle");
    var d = c[0].setAttribute('cx', a);
    var e = c[0].setAttribute('cy', b);
}
