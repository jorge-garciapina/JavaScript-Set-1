// 4.	Create a function that can copy either all or specific
// properties of an object into another. The functionality
// should depend on the arguments received.

// prop =[] is the inizialization value, in case the user
// decides or not to provide optional properties to copy.
function copyProp(objectA, objectB, prop = []) {
  // In this part the code extracts the entries of objB
  let propertiesB = Object.entries(objectB);
  // First case: the user did not provid restrictions
  // on properties to follow, thus, all properties are
  // copied.
  if (prop.length === 0) {
    for (let property of propertiesB) {
      objectA[property[0]] = property[1];
    }
    return objectA;
  }
  // Second case: the user provided properties to follow:
  else {
    for (let property of propertiesB) {
      if (prop.indexOf(property[0]) !== -1) {
        objectA[property[0]] = property[1];
      }
    }
    return objectA;
  }
}

let objA = {};
let objB = {
  property1: "value1",
  property2: "value2",
  property3: "value3",
  property4: "value4",
  property5: "value5",
  property6: "value6",
  property7: "value7",
};

objA = copyProp(objA, objB, ["property3", "property6"]);
console.log(objA);
