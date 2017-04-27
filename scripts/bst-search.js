BinarySearchTree.prototype.search = function (searchVal, obj) {
    var currentNode = obj.root,
        color = 'green';
    if (obj.root === null || typeof (obj.root) === 'undefined') {
        alert('no node to be searched');
        return;
    }
    if (obj.root.value === searchVal) {
        bst.renderCircleBST(this.root.x, this.root.y, this.root.r, color);
        bst.renderTextBST(this.root.x, this.root.y, this.root.value);
        return;
    }
    for (var i = 0; currentNode; i++) {

        if (searchVal < currentNode.value) {
            if (currentNode.left === null) {
                alert('no node to be searched');
                return;
            }
            if (searchVal === currentNode.left.value) {
                bst.renderCircleBST(currentNode.left.x, currentNode.left.y, this.root.r, color);
                bst.renderTextBST(currentNode.left.x, currentNode.left.y, currentNode.left.value);
                break;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else if (searchVal > currentNode.value) {
            if (currentNode.left === null) {
                alert('no node to be searched');
                return;
            }
            if (searchVal === currentNode.right.value) {
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