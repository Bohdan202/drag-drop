const ceil1 = document.querySelector('.ceil1');
const ceil2 = document.querySelector('.ceil2');
const ceil3 = document.querySelector('.ceil3');
const ceil4 = document.querySelector('.ceil4');
const ceil5 = document.querySelector('.ceil5');
const ceil6 = document.querySelector('.ceil6');
const ceil7 = document.querySelector('.ceil7');
const ceil8 = document.querySelector('.ceil8');
const ceil9 = document.querySelector('.ceil9');

const cross = document.querySelector('.cross');
const circle = document.querySelector('.circle');

const itemArea = document.querySelector(".item-area");


ceil1.ondragover = letDrop;
ceil2.ondragover = letDrop;
ceil3.ondragover = letDrop;
ceil4.ondragover = letDrop;
ceil5.ondragover = letDrop;
ceil6.ondragover = letDrop;
ceil7.ondragover = letDrop;
ceil8.ondragover = letDrop;
ceil9.ondragover = letDrop;
itemArea.ondragover = letDrop;

function letDrop (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    
}

cross.ondragstart = dragCross;
circle.ondragstart = dragCircle;


let k=0;
function dragCross (event) {
  if (k === 0) {
    event.dataTransfer.setData("id", event.target.id);
    event.dataTransfer.effectAllowed = "copy";
    z = true;
  } else {
    event.dataTransfer.setData("id", null);
    z = false;
  }
  
}

function dragCircle (event) {
  if (k === 1) {
    event.dataTransfer.setData("id", event.target.id);
    event.dataTransfer.effectAllowed = "copy";
    z = true;
  } else {
    event.dataTransfer.setData("id", null);
    z = false;
  }
  
}

ceil1.ondrop = drop;
ceil2.ondrop = drop;
ceil3.ondrop = drop;
ceil4.ondrop = drop;
ceil5.ondrop = drop;
ceil6.ondrop = drop;
ceil7.ondrop = drop;
ceil8.ondrop = drop;
ceil9.ondrop = drop;
//itemArea.ondrop = drop;

function drop (event) {
  
  event.preventDefault();
   let itemId = event.dataTransfer.getData('id');
   console.log(itemId);
   
   if (itemId && document.getElementById(itemId)) {
     if (event.target.tagName !== "IMG") {
    event.target.appendChild(document.getElementById(itemId).cloneNode(true));
     } else z = false;
   }
  
  if (z && k === 0)
    k = 1;
  else if (z && k === 1)
    k = 0;
   
if (ceil1.children[0].id == "cross" && ceil2.children[0].id == "cross" && ceil3.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil4.children[0].id == "cross" && ceil5.children[0].id == "cross" && ceil6.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil7.children[0].id == "cross" && ceil8.children[0].id == "cross" && ceil9.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil1.children[0].id == "cross" && ceil5.children[0].id == "cross" && ceil9.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil3.children[0].id == "cross" && ceil5.children[0].id == "cross" && ceil7.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil1.children[0].id == "cross" && ceil4.children[0].id == "cross" && ceil7.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil2.children[0].id == "cross" && ceil5.children[0].id == "cross" && ceil8.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil3.children[0].id == "cross" && ceil6.children[0].id == "cross" && ceil9.children[0].id == "cross") {
    alert("Cross winner!");
    location = location;
} else if (ceil1.children[0].id == "circle" && ceil2.children[0].id == "circle" && ceil3.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
} else if (ceil4.children[0].id == "circle" && ceil5.children[0].id == "circle" && ceil6.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
} else if (ceil7.children[0].id == "circle" && ceil8.children[0].id == "circle" && ceil9.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
} else if (ceil1.children[0].id == "circle" && ceil4.children[0].id == "circle" && ceil7.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
} else if (ceil2.children[0].id == "circle" && ceil5.children[0].id == "circle" && ceil8.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
} else if (ceil3.children[0].id == "circle" && ceil6.children[0].id == "circle" && ceil9.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
} else if (ceil1.children[0].id == "circle" && ceil5.children[0].id == "circle" && ceil9.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
} else if (ceil3.children[0].id == "circle" && ceil5.children[0].id == "circle" && ceil7.children[0].id == "circle") {
    alert("Circle winner!");
    location = location;
}  else {
    alert("Error!!!!");
}

}

cross.ondragover = copyElemCross;
circle.ondragover = copyElemCircle;

let z = true;
function copyElemCross (event) {
  if (z) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }
}

function copyElemCircle (event) {
    if (z) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }
}


 
