var svg = document.getElementsByTagName('svg')[0]; //The declaration for SVG tag
var button = document.getElementById('butt');

button.addEventListener('click', function () {
    var insertedVal = document.getElementById('input').value;
    bst.push(insertedVal);
    console.log(bst);
});
function Node(val) {
    this.value = parseInt(val);
    this.left = null;
    this.right = null;
    this.x = 500;
    this.y = 70;
    this.r=15;
}
function BinarySearchTree() {
    this.root = null;
}
BinarySearchTree.prototype.push = function (val) {

    var root = this.root;

    if (!root) {
        this.root = new Node(val);
        circle.draw(this.root.x, this.root.y, this.root.r);
        return;
    }

    var currentNode = root;
    var newNode = new Node(val);

    for (var i=1;currentNode;i++) {

        if (val < currentNode.value) {
            if (!currentNode.left) {
                newNode.x = currentNode.x - (100/i);
                newNode.y = currentNode.y + 70;
                currentNode.left = newNode;               
                circle.draw(newNode.x, newNode.y, newNode.r);
                line.draw([newNode.x, newNode.y],[currentNode.x,currentNode.y]);
                break;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else {
            if (!currentNode.right) {
                newNode.x = currentNode.x + (100/i);
                newNode.y = currentNode.y + 70;
                currentNode.right = newNode;
                circle.draw(newNode.x, newNode.y, newNode.r);
                line.draw([newNode.x, newNode.y],[currentNode.x,currentNode.y]);
                break;
            }
            else {
                currentNode = currentNode.right;
            }
        }

    }
}
var bst = new BinarySearchTree();

// bst.push(3);
// bst.push(2);
// bst.push(4);
// bst.push(1);
// bst.push(5);