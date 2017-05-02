const a = 500,
    b = 70,
    c = 18,
    d = 250;
var arr1 = [];
function createElement() {
    this.svg = document.getElementsByTagName('svg')[0]; //The declaration for SVG tag
    this.button = document.getElementById('butt');
    this.searchbutton = document.getElementById('search-butt');
    this.deletebutton = document.getElementById('delete-butt');
    this.close = document.getElementsByClassName('popup-1')[0];
    this.close1 = document.getElementsByClassName('popup-2')[0];
}
var elem = new createElement();
function checkingDuplicacy(myArray, x) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === x) {
            return true;
        }
    }
    return false;
}
function clearBST() {
    while (elem.svg.lastChild) {
        elem.svg.removeChild(elem.svg.lastChild);
    }
}
elem.close.addEventListener('click',closepopup1);
function closepopup1(){
document.getElementById('id01').style.display='none';
}
elem.close1.addEventListener('click',closepopup2);
function closepopup2(){
document.getElementById('id02').style.display='none';
}
elem.button.addEventListener('click', parseInput);
elem.searchbutton.addEventListener('click', function () {
    var searchVal = document.getElementById('search-input').value;
    var val = parseInt(searchVal);
    var color = elem.svg.getElementsByTagName('circle');
    for (var i = 0; i < color.length; i++) {
        if (color[i].getAttributeNS(null, 'fill') === 'green') {
            color[i].parentNode.removeChild(color[i]);
        }
    }
    bst.search(val, bst);  //searching the node from the present bst.....
    document.getElementById('search-input').value = '';
});
elem.deletebutton.addEventListener('click', function () {
    clearBST();
    delete bst.root;
    delete bst.left;
    delete bst.right;
    var deleteVal = document.getElementById('delete-input').value;
    if (isNaN(parseInt(deleteVal))) {
        checkString();
    }
    var a = arr1.indexOf(deleteVal);
    if (a >= 0) {
        arr1.splice(a, 1);
    }
    bst.delete(arr1);  //deleting the specific node...
    document.getElementById('delete-input').value = '';
});
function insert(arr) {
    delete bst.root;
    delete bst.left;
    delete bst.right;
    for (var k = 0; k < arr.length; k++) {
        if (!checkingDuplicacy(arr1, arr[k])) {
            arr1.push(arr[k]);
        }
    }
    bst.push(arr1); //inserting node to the bst..
    document.getElementById('input').value = '';
}
function parseInput() {
    var insertedVal = document.getElementById('input').value;
    var arr = insertedVal.split(',');
    insert(arr);
}


