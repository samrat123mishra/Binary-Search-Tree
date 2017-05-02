var checkDuplicate = function () {
    document.getElementById('id01').style.display = "block";
}
var checkString = function () {
    document.getElementById('id02').style.display = "block";
}
var ev = new Event('onduplicate');
document.addEventListener('onduplicate', function (e) {
    checkDuplicate();
});
function checkIfArrayIsUnique(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray.length; j++) {
            if (i != j) {
                if (myArray[i] === myArray[j]) {
                    document.dispatchEvent(ev);//for the duplicate values
                    return true;
                }
            }
        }
    }
    return false;
}
function BinarySearchTree() {
    this.root = null;
}
BinarySearchTree.prototype.push = function (val) {
    var check = checkIfArrayIsUnique(val);
    if (check) {
        return;
    }
    if (isNaN(parseInt(val))) {
        checkString();
    } else {
        for (var j = 0; j < val.length; j++) {
            var root = this.root,
                color = 'red';
            if (!root) { //if there is no root...
                this.root = new Node(val[j]);
                this.root.x = a;
                this.root.y = b;
                this.root.r = c;
                bst.renderCircleBST(this.root.x, this.root.y, this.root.r, color);
                bst.renderTextBST(this.root.x, this.root.y, this.root.value);
                continue;
            }
            var currentNode = root;
            var newNode = new Node(val[j]);
            for (var i = 0; currentNode; i++) {
                if (parseInt(val[j]) === currentNode.value) {
                    checkDuplicate();
                    return;
                }
                if (val[j] < currentNode.value) { //for insertion in the left child...
                    if (!currentNode.left) {
                        newNode.x = currentNode.x - (d / Math.pow(2, i));
                        newNode.y = currentNode.y + b;
                        newNode.r = this.root.r;
                        currentNode.left = newNode;  //assigning new node to currentNode of left..
                        bst.renderLineBST([newNode.x, newNode.y], [currentNode.x-(c/2), currentNode.y+(c/2)], color);
                        bst.renderCircleBST(newNode.x, newNode.y, newNode.r, color);
                        bst.renderTextBST(newNode.x, newNode.y, newNode.value);
                        break;
                    }
                    else {
                        currentNode = currentNode.left;
                    }
                }
                else {  //for the insertion in the right child...
                    if (!currentNode.right) {
                        newNode.x = currentNode.x + (d / Math.pow(2, i));
                        newNode.y = currentNode.y + b;
                        newNode.r = this.root.r;
                        currentNode.right = newNode;  //assigning new node to currentNode of right..
                        bst.renderLineBST([newNode.x, newNode.y], [currentNode.x+(c/2), currentNode.y+(c/2)], color);
                        bst.renderCircleBST(newNode.x, newNode.y, newNode.r, color);
                        bst.renderTextBST(newNode.x, newNode.y, newNode.value);
                        break;
                    }
                    else {
                        currentNode = currentNode.right;
                    }
                }

            }
        }
    }
}
BinarySearchTree.prototype.renderCircleBST = function (x, y, r, color) {  //function for rendering bst circle...
    circleDraw(x, y, r, color);
}
BinarySearchTree.prototype.renderTextBST = function (x, y, text) {  //function for rendering bst text...
    textMarker(x, y, text);
}
BinarySearchTree.prototype.renderLineBST = function (p1, p2, color) { //function for rendering bst line...
    lineDraw(p1, p2, color);
}
var bst = new BinarySearchTree(); //creation of bst object...