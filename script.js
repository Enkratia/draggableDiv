const wrapper = document.querySelector(".wrapper"),
  header = wrapper.querySelector("header");


function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);

  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${top + movementY}px`;
}

header.addEventListener("mousedown", () => {
  header.classList.add("move");
  header.addEventListener("mousemove", onDrag);
})

window.addEventListener("mouseup", () => {
  header.classList.remove("move");
  header.removeEventListener("mousemove", onDrag);
})