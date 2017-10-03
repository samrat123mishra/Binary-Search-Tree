class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    push(val) {
        var check = checkIfArrayIsUnique(val);
        if (check) {
            return;
        }
        if (isNaN(parseInt(val))) {
            checkString();
        } else {
            for (let j = 0; j < val.length; j++) {
                var root = this.root,
                    color = 'red';
                if (!root) { //if there is no root...
                    this.root = new Node(val[j]);
                    this.root.x = a;
                    this.root.y = b;
                    this.root.r = c;
                    draw.circleDraw(this.root.x, this.root.y, this.root.r, color);
                    draw.textMarker(this.root.x, this.root.y, this.root.value);
                    continue;
                }
                var currentNode = root;
                var newNode = new Node(val[j]);
                for (let i = 0; currentNode; i++) {
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
                            draw.lineDraw([newNode.x, newNode.y], [currentNode.x - (c / 2), currentNode.y + (c / 2)], color);
                            draw.circleDraw(newNode.x, newNode.y, newNode.r, color);
                            draw.textMarker(newNode.x, newNode.y, newNode.value);
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
                            draw.lineDraw([newNode.x, newNode.y], [currentNode.x + (c / 2), currentNode.y + (c / 2)], color);
                            draw.circleDraw(newNode.x, newNode.y, newNode.r, color);
                            draw.textMarker(newNode.x, newNode.y, newNode.value);
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
    search(searchVal, obj) {
        var currentNode = obj.root,
            color = 'green';
        if (obj.root === null || typeof (obj.root) === 'undefined') {
            alert('no node to be searched');
            return;
        }
        if (obj.root.value === searchVal) { //when searched node if found in the root of bst...
            draw.circleDraw(this.root.x, this.root.y, this.root.r, color);
            draw.textMarker(this.root.x, this.root.y, this.root.value);
            return;
        }
        for (let i = 0; currentNode; i++) {
            if (searchVal < currentNode.value) {
                if (currentNode.left === null) {
                    alert('no node to be searched');
                    return;
                }
                if (searchVal === currentNode.left.value) { //when searched node is found in the left child of bst...
                    draw.circleDraw(currentNode.left.x, currentNode.left.y, this.root.r, color);
                    draw.textMarker(currentNode.left.x, currentNode.left.y, currentNode.left.value);
                    break;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
            else if (searchVal > currentNode.value) {
                if (currentNode.right === null) {
                    alert('no node to be searched');
                    return;
                }
                if (searchVal === currentNode.right.value) { //when searched node is found in the right child of bst...
                    draw.circleDraw(currentNode.right.x, currentNode.right.y, this.root.r, color);
                    draw.textMarker(currentNode.right.x, currentNode.right.y, currentNode.right.value);
                    break;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
    delete(val) {
        var check = checkIfArrayIsUnique(val);
        if (check) {
            return;
        }
        else {
            for (let j = 0; j < val.length; j++) {
                var root = this.root;
                if (!root) {
                    this.root = new Node(val[j]);
                    this.root.x = a;
                    this.root.y = b;
                    this.root.r = c;
                    draw.circleDraw(this.root.x, this.root.y, this.root.r, "red");
                    draw.textMarker(this.root.x, this.root.y, this.root.value);
                    continue;
                }
                var currentNode = root;
                var newNode = new Node(val[j]);
                for (let i = 0; currentNode; i++) {
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
                            draw.circleDraw(newNode.x, newNode.y, newNode.r, "red");
                            draw.lineDraw([newNode.x, newNode.y], [currentNode.x, currentNode.y], "red");
                            draw.textMarker(newNode.x, newNode.y, newNode.value);
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
                            draw.circleDraw(newNode.x, newNode.y, newNode.r, "red");
                            draw.lineDraw([newNode.x, newNode.y], [currentNode.x, currentNode.y], "red");
                            draw.textMarker(newNode.x, newNode.y, newNode.value);
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
}
var bst = new BinarySearchTree(); //creation of bst object...

