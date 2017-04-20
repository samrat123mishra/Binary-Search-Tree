function createElement() {
    this.svg = document.getElementsByTagName('svg')[0]; //The declaration for SVG tag
    this.button = document.getElementById('butt');
}
var elem = new createElement();
elem.button.addEventListener('click', function () {
    var insertedVal = document.getElementById('input').value;
    bst.push(insertedVal);
});

