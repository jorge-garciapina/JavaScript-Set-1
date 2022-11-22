// Create a function that will set the color, font-size,
// and background color of a DOM element.
// 1. If there are fewer arguments, it should
// place a default value.
// To fullfill this requirement the arguments of the function be
// initiallized: color = "white", fntSize = "2rem", bckGroung = "black"
function setProp(color = "white", fntSize = "2rem", bckGroung = "black") {
  // when the function is called a new scope is created,
  // in this scope -this- will be the object that will
  // be modified.
  this.style.color = color;
  this.style.fontSize = fntSize;
  this.style.backgroundColor = bckGroung;
  return;
}

// Element that will be modified, extracted from the DOM
const elemento = document.getElementById("elemnt1");

// In this part the code creates a scope in which
// the element from the DOM -elemento- will
// become -this-, and the function will become a method
// of the -elemento- object.
elemento.newScope = setProp;

// Finally, the functions called.
elemento.newScope("blue", "6rem", "red");
