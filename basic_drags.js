document.addEventListener("dragenter",onDragEnter);
document.addEventListener("dragleave",onDragLeave);
document.addEventListener("drop",onDrop);
document.addEventListener("dragover",onDragOver);

var _currentDragger, _currentDropLocation;
function onDragEnter(){
    console.log('dragEntered');
}
function onDragLeave(){
    console.log('dragLeave');
}
function onDrop(){
    console.log('drop');
}
function onDragOver(e){
    _currentDropLocation = e.target;
    console.log('onDragOver');
}
function onDragStart(){
    console.log('onDragStart');
}
function onDragEnd(e){
    //var z = document.createElement('div');
    //z.innerHTML = _currentDragger
    _currentDropLocation.appendChild(e.target);
    console.log('onDragEnd',);
}
var element = document.getElementsByClassName('dropZone');
var _draggers = document.querySelectorAll('.dragger')
_draggers[0].ondragstart = onDragStart;
_draggers[0].ondragend = onDragEnd;
console.log(_draggers);
console.log(element);
element[0].style.background = "#0000ff"
element[0].style.width="200"
element[0].style.height="100"