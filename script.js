var count = 1;
var control;
function fill(control) {
    if (count <= 9) {


        if (count % 2 != 0) {

            document.getElementById(control.id).innerHTML = "X";

        }

        else {
            document.getElementById(control.id).innerHTML = "O";
        }

        count++;

        if (Checkwin()) {

            setTimeout(function () { swal("Winner😉"); reset(); }, 1000);
        }
        else if (count == 10) {
            draw();

        }
    }
}
function reset() {
    for (var i = 1; i <= 9; i++) {

        document.getElementById('div' + i).innerHTML = "";
    }
    count = 1;
}
function Checkwin() {
    if (checkCondition('div1', 'div2', 'div3') || checkCondition('div4', 'div5', 'div6') || checkCondition('div7', 'div8', 'div9') ||
        checkCondition('div1', 'div4', 'div7') || checkCondition('div2', 'div5', 'div8') || checkCondition('div3', 'div6', 'div9') ||
        checkCondition('div1', 'div5', 'div9') || checkCondition('div3', 'div5', 'div7')) {
        return true;

    }
}
function checkCondition(div1, div2, div3) {
    if (getData(div1) != "" && getData(div2) != "" &&
        getData(div3) != "" && getData(div1) == getData(div2) && getData(div2) == getData(div3)) {
        return true;
    }
}
function getData(div) {
    return document.getElementById(div).innerHTML;
}
function draw() {
    if (!Checkwin()) {
        setTimeout(function () { swal("Match Draw 😜"); reset(); }, 900);

    }
}