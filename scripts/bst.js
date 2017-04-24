var checkDuplicate = function(){
         document.getElementById('id01').style.display = "block";
    }
function BinarySearchTree() {
    this.root = null;
}
BinarySearchTree.prototype.push = function (val) {
    var root = this.root;
    if (!root) {
        this.root = new Node(val);
        this.root.x = 500;
        this.root.y = 70;
        this.root.r = 18;
        bst.renderCircleBST(this.root.x, this.root.y, this.root.r, "red");
        bst.renderTextBST(this.root.x, this.root.y, this.root.value);
        return;
    }
    var currentNode = root;
    var newNode = new Node(val);
    for (var i = 0; currentNode; i++) {
        if (parseInt(val) === currentNode.value) {
           checkDuplicate();
            return;
        }
        else if (val < currentNode.value) {
            if (!currentNode.left) {
                newNode.x = currentNode.x - (250 / Math.pow(2,i));
                newNode.y = currentNode.y + 70;
                newNode.r = this.root.r;
                currentNode.left = newNode;
                bst.renderCircleBST(newNode.x, newNode.y, newNode.r, "red");
                bst.renderLineBST([newNode.x, newNode.y], [currentNode.x, currentNode.y], "red");
                bst.renderTextBST(newNode.x, newNode.y, newNode.value);
                break;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else {
            if (!currentNode.right) {
                newNode.x = currentNode.x +  (250 / Math.pow(2,i));
                newNode.y = currentNode.y + 70;
                newNode.r = this.root.r;
                currentNode.right = newNode;
                bst.renderCircleBST(newNode.x, newNode.y, newNode.r, "red");
                bst.renderLineBST([newNode.x, newNode.y], [currentNode.x, currentNode.y], "red");
                bst.renderTextBST(newNode.x, newNode.y, newNode.value);
                break;
            }
            else {
                currentNode = currentNode.right;
            }
        }

    }

}
BinarySearchTree.prototype.renderCircleBST = function (x, y, r, color) {
    circleDraw(x, y, r, color);
}
BinarySearchTree.prototype.renderTextBST = function (x, y, text) {
    textMarker(x, y, text);
}
BinarySearchTree.prototype.renderLineBST = function (p1, p2, color) {
    lineDraw(p1, p2, color);
}

var bst = new BinarySearchTree();

