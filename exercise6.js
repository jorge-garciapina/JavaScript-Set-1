// 6.	Create a tree structure and a function that will
// display all of the elements in that tree. The function
// should not require any change in case the structure changes.

function printElementsInTree(tree) {
  // -output- is an object that saves the elements
  //  present in every indexOfLayer of the tree
  let output = {};

  let indexOfLayer = 0;
  while (indexOfLayer <= 10) {
    indexOfLayer++;
    output[`indexOfLayer${indexOfLayer}`] = {};
    if (indexOfLayer === 1) {
      for (let element of Object.entries(tree)) {
        output[`indexOfLayer${indexOfLayer}`][element[0]] = element[1];
        console.log(element[0]);
      }
    } else {
      for (let element of Object.values(
        output[`indexOfLayer${indexOfLayer - 1}`]
      )) {
        for (let branch of Object.entries(element)) {
          output[`indexOfLayer${indexOfLayer}`][branch[0]] = branch[1];
          console.log(branch[0]);
        }
      }
    }

    if (Object.keys(output[`indexOfLayer${indexOfLayer}`]).length === 0) {
      break;
    }
  }
}
// To try the solution:
// 1- Solution of the example:
// let tree1Example = {
//   a: {
//     aa: {},
//   },
//   b: {
//     ba: {},
//     bb: {},
//   },
//   c: {
//     ca: {},
//     cb: { cba: { cbaa: {} } },
//   },
// };

// printElementsInTree(tree1Example);

// Another solution (with more entries)
let tree1 = {
  a: {
    aa: {
      aaa: { aaaa: { aaaaa: { aaaaaa: { aaaaaaa: {} } } }, aaab: {}, aaac: {} },
    },
    ab: { aba: {} },
    ac: { aca: { acaa: {}, acab: {} }, acb: {}, acb: {}, acd: {} },
  },
  b: {
    ba: { baa: {}, bab: {}, bac: {} },
    bb: {},
    bc: {},
  },
  c: {
    ca: { caa: {} },
    cb: {},
  },
};
printElementsInTree(tree1);

