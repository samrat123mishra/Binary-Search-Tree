BinarySearchTree.prototype.search = function (searchVal, obj) {
    var currentNode = obj.root,
        color = 'green';
    if (obj.root === null || typeof (obj.root) === 'undefined') {
        alert('no node to be searched');
        return;
    }
    if (obj.root.value === searchVal) { //when searched node if found in the root of bst...
        bst.renderCircleBST(this.root.x, this.root.y, this.root.r, color);
        bst.renderTextBST(this.root.x, this.root.y, this.root.value);
        return;
    }
    for (var i = 0; currentNode; i++) {
        if (searchVal < currentNode.value) {
            if (searchVal === currentNode.left.value) { //when searched node is found in the left child of bst...
                bst.renderCircleBST(currentNode.left.x, currentNode.left.y, this.root.r, color);
                bst.renderTextBST(currentNode.left.x, currentNode.left.y, currentNode.left.value);
                break;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else if (searchVal > currentNode.value) {

            if (searchVal === currentNode.right.value) { //when searched node is found in the right child of bst...
                bst.renderCircleBST(currentNode.right.x, currentNode.right.y, this.root.r, color);
                bst.renderTextBST(currentNode.right.x, currentNode.right.y, currentNode.right.value);
                break;
            }
            else {
                currentNode = currentNode.right;
            }
        }

    }

}