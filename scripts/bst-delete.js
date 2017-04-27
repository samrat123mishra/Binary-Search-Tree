BinarySearchTree.prototype.delete = function (val) {
    var check = checkIfArrayIsUnique(val);
    if (check) {
        return;
    }
    else {
        for (var j = 0; j < val.length; j++) {
            var root = this.root;
            if (!root) {
                this.root = new Node(val[j]);
                this.root.x = a;
                this.root.y = b;
                this.root.r = c;
                bst.renderCircleBST(this.root.x, this.root.y, this.root.r, "red");
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
                if (val[j] < currentNode.value) {
                    if (!currentNode.left) { //when bst contains one left child...
                        newNode.x = currentNode.x - (d / Math.pow(2, i));
                        newNode.y = currentNode.y + b;
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
                    if (!currentNode.right) { //checking the right inorder successor
                        newNode.x = currentNode.x + (d / Math.pow(2, i));
                        newNode.y = currentNode.y + b;
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
    }
}