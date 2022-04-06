const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("drag start has been trigered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("drag end has been trigered");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    console.log("Dragover has been triggred");
    e.preventDefault();
  });

  whiteBox.addEventListener("dragenter", (e) => {
    console.log("Dragenter has been triggred");
    e.target.className += ' dashed'
  });

  whiteBox.addEventListener("dragleave", (e) => {
    console.log("Dragleave has been triggred");
    e.target.className = 'whiteBox'
  });

  whiteBox.addEventListener("drop", (e) => {
    console.log("Drop has been triggred");
    e.target.append(imgBox);
  });
}
