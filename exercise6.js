// 6.	Create a tree structure and a function that will
// display all of the elements in that tree. The function
// should not require any change in case the structure changes.

// To solve this problem I decided to give a recursive solution.
// The function that returns the elements in that tree is a method
// of the class Tree, which is define below:

class Tree {
  constructor(mainTree) {
    // -this.mainTree- and -this.output- are the only properties
    // that will be visible to the user
    this.mainTree = mainTree;
    this.output = [];

    // I decided to put this variables in the prototype because
    // they need to be available in the scope of an instance
    // of this class, but they are not useful to the user.
    // This is the counter:
    Tree.prototype.layer = 0;
    // This is an object that will serve as a vault that will
    // store the values obtained in evey iteration of the
    // recursive call.
    Tree.prototype.treeBranches = {
      0: { default: "notvalid" },
    };
  }

  // --------------START: PART 1 -----------------------
  // PART 1: AUXILIARY FUNCTIONS:

  // This function is used to append an element in the
  // "iteration vaul2 (Tree.prototype.treeBranches)
  appendElement(chilElement) {
    Tree.prototype.treeBranches[String(this.layer)] = chilElement;
  }

  // This is a function that allows the code to obtained
  // an output in a particular way (as convinience)
  children(chilElement, outputType = "number") {
    if (outputType === "boolean") {
      return Object.keys(chilElement).length === 0;
    } else if (outputType === "entries") {
      return Object.entries(chilElement);
    } else if (outputType === "keys") {
      return Object.keys(chilElement);
    } else if (outputType === "values") {
      return Object.values(chilElement);
    } else if (outputType === "number") {
      return Object.keys(chilElement).length;
    }
  }
  // --------------END: PART 1 -----------------------

  // --------------START: PART 2 -----------------------
  // PART 1: SOLUTION TO THE PROBLEM:
  // As I said before, this is a recirsive solution:
  branchFinder() {
    // ----START: STOPPING CONSIDITIONS FOR THE RECURSIVE CALL -------

    // CONDITION 1: The user provided an empty input:
    if (this.children(this.mainTree, "boolean")) {
      return [];
    }

    // CONDITION 2: The last element in Tree.prototype.treeBranches
    // is empty (see example 1, below), this means that there are not
    // more calculations to make, thus, no more recursion is needed.
    else if (
      this.children(
        Tree.prototype.treeBranches[String(Tree.prototype.layer)],
        "boolean"
      )
    ) {
      // Now that there are not more recursion, the code
      // extract the infomacion from the elements in the vault
      // i.e. from Tree.prototype.treeBranches. As can be seen
      // in example 1, it only needs to extract the keys
      // of every layer.
      for (let elmntInLayer of this.children(
        Tree.prototype.treeBranches,
        "entries"
      )) {
        for (let child of this.children(elmntInLayer[1], "keys"))
          this.output.push(child);
      }
    }

    // EXAMPLE 1: Layer 3 is an empty object:
    // Tree.prototype.treeBranches = {
    //   Layer 0: {
    //     a: {-a- branch},
    //     b: {-b- branch},
    //     c: {-c- branch},
    //   },
    //   Layer 1:{
    //     aa:{-aa- branch},
    //     ab:{-ab- branch},
    //     ba:{-ba- branch},
    //     bb:{-bb- branch},
    //     bc:{-bc- branch},
    //     ca:{-ca- branch},
    //   }
    //   Layer 2:{
    //     aaa:{-aaa- branch},
    //     aab:{-aab- branch},
    //     baa:{-baa- branch},
    //     bba:{-bba- branch},
    //     bbb:{-bbb- branch},
    //     caa:{-caa- branch},
    //     cab:{-cab- branch},
    //     cac:{-cac- branch},
    //   }
    //   Layer 3:{}
    // }

    // ----END: STOPPING CONSIDITIONS FOR THE RECURSIVE CALL -------

    // If any of the stopping conditon is fulfill, the code proceeds
    // doing the recursive call:
    else {
      //------------------ START: INITIALIZATION ----------------------
      // This is executed only the first time, i.e. when
      // Tree.prototype.layer === 0, with this the code redefine
      // Layer 0 of Example 1. "Redefines", because in the constructor
      // it was defined:  0: { default: "notvalid" }, but that was
      // defined that way just to be able to make work CONDITION 2.
      if (Tree.prototype.layer === 0) {
        Tree.prototype.treeBranches = {};
        Tree.prototype.treeBranches[Tree.prototype.layer] = {};
        for (let branch of this.children(this.mainTree, "entries")) {
          Tree.prototype.treeBranches[Tree.prototype.layer][branch[0]] =
            branch[1];
        }
      }
      //------------------ END: INITIALIZATION ---------------------

      //------------------ START: RECURSIVE CALL ----------------------
      // In few words this solution works as follos: It iterates over
      // the elements of one layer, and extract all the children
      // of these elements, i.e. it extract information of the next
      // layer.

      // 1- Creation of the layer + 1 object, in this the code will
      // save all the cildren of the elements in this layer:
      Tree.prototype.treeBranches[String(Tree.prototype.layer + 1)] = {};
      // 2- Iteration over the elements of the current layer:
      for (let branch of this.children(
        Tree.prototype.treeBranches[String(Tree.prototype.layer)],
        "entries"
      )) {
        // 3- Extraction of the children elements:
        for (let childBranch of this.children(branch[1], "entries")) {
          // Extract all the children and append to the next layer
          Tree.prototype.treeBranches[String(Tree.prototype.layer + 1)][
            childBranch[0]
          ] = childBranch[1];
        }
      }

      // Once the code has extracted all the children, that iteration finishes
      // and proceed to work with the next layer
      Tree.prototype.layer++;
      // ... and the recursion call is make
      this.branchFinder();
      //------------------ END: RECURSIVE CALL ---------------------
    }
  }
  // --------------END: PART 2 -----------------------
}

// To try the solution:
// 1- Solution of the example:
let tree1Example = {
  a: {
    aa: {},
  },
  b: {
    ba: {},
    bb: {},
  },
  c: {
    ca: {},
    cb: { cba: {} },
  },
};

let example = new Tree(tree1Example);
example.branchFinder();
console.log(example);

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
let aNewTree = new Tree(tree1);
aNewTree.branchFinder();
console.log(aNewTree);
