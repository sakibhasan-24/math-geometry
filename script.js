function calculateTriangle() {
  //   console.log("clicked");
  // get first input value
  const inputFieldOfBase = parseFloat(
    document.getElementById("triangle-base").value
  );
  const inputFieldOfHeight = parseFloat(
    document.getElementById("triangle-height").value
  );
  const area = 0.5 * inputFieldOfBase * inputFieldOfHeight;

  //   set the area
  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerText = area;
  history(area);
}
function rectangleArea() {
  const inputFieldOfWidth = getInputValue("reactangle-width");
  const inputFieldOfLength = getInputValue("reactangle-length");
  const area = inputFieldOfLength * inputFieldOfWidth;
  setTheArea("rectangle-area", area);
  history(area);
}

function parallelogramArea() {
  const inputFieldOfBase = getInputValue("parallelogram-base");
  const inputFieldOfHeight = getInputValue("parallelogram-height");
  const area = inputFieldOfBase * inputFieldOfHeight;
  setTheArea("parallelogram-area", area);
  history(area);
}

function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = input.value;
  return parseFloat(inputValue);
}
function setTheArea(inputId, area) {
  const areaPosition = document.getElementById(inputId);
  areaPosition.innerText = area;
}

function history(area) {
  const setAllArea = document.getElementById("history");
  const count = setAllArea.childElementCount;
  const p = document.createElement("p");
  const btn = document.createElement("button");
  btn.innerHTML = `<button onclick="clearValue()">clear History </button>`;
  p.innerHTML = `<span>${count + 1} : ${area} cm<sup>2</sup></span> ${
    btn.innerHTML
  } `;
  setAllArea.appendChild(p);
}
function clearValue() {
  document.getElementById("history").innerHTML = "";
}
