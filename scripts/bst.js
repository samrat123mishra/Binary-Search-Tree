elem.button.addEventListener('click', function () {
    var insertedVal = document.getElementById('input').value;
    bst.push(insertedVal);
});
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
        render.cDraw(this.root.x,this.root.y,this.root.r,"red");
        render.tMarker(this.root.x,this.root.y,this.root.value);
        return;
    }
    var currentNode = root;
    var newNode = new Node(val);
    for (var i = 1; currentNode; i++) {
         if(parseInt(val) === currentNode.value){
            document.getElementById('id01').style.display="block";
            return;
        }
        else if (val < currentNode.value) {
            if (!currentNode.left) {
                newNode.x = currentNode.x - (100 / i);
                newNode.y = currentNode.y + 70;
                newNode.r=this.root.r;
                currentNode.left = newNode;
                render.cDraw(newNode.x, newNode.y, newNode.r,"red");
                render.lDraw([newNode.x, newNode.y], [currentNode.x, currentNode.y],"red");
                render.tMarker(newNode.x, newNode.y, newNode.value);
                break;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else {
            if (!currentNode.right) {
                newNode.x = currentNode.x + (100 / i);
                newNode.y = currentNode.y + 70;
                newNode.r=this.root.r;
                currentNode.right = newNode;
                render.cDraw(newNode.x, newNode.y, newNode.r,"red");
                render.lDraw([newNode.x, newNode.y], [currentNode.x, currentNode.y],"red");
                render.tMarker(newNode.x, newNode.y, newNode.value);
                break;
            }
            else {
                currentNode = currentNode.right;
            }
        }
       
    }
}
function renderBST() {
    this.cDraw = function(x,y,r,color){
        circleDraw(x,y,r,color);
    };
    this.tMarker=function(x,y,text){
        textMarker(x,y,text);
    };
    this.lDraw = function(p1,p2,color){
        lineDraw(p1,p2,color);
    };
}
var render = new renderBST();

var bst = new BinarySearchTree();

