const a = 500,
    b = 70,
    c = 18,
    d = 250;
function createElement() {
    this.svg = document.getElementsByTagName('svg')[0]; //The declaration for SVG tag
    this.button = document.getElementById('butt');
    this.searchbutton = document.getElementById('search-butt');
}
var elem = new createElement();
elem.button.addEventListener('click', function () {
    var insertedVal = document.getElementById('input').value;
    var arr = insertedVal.split(',');
    bst.push(arr);
    console.log(bst);
    //checkIfArrayIsUnique(arr);
    document.getElementById('input').value = '';
});
elem.searchbutton.addEventListener('click',function(){
    var searchVal = document.getElementById('search-input').value;
    var val = parseInt(searchVal);
    var color = elem.svg.getElementsByTagName('circle');
    for(var i=0;i<color.length;i++){
        if(color[i].getAttributeNS(null,'fill') === 'green'){
            color[i].parentNode.removeChild(color[i]);
        }
    }
    bst.search(val,bst);
    document.getElementById('search-input').value = '';
});


