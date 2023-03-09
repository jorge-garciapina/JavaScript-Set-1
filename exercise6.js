// Define the tree structure using nested objects
const tree = {
  value: "A",
  children: [
    {
      value: "a",
      children: [
        {
          value: "aa",
          children: [],
        },
      ],
    },
    {
      value: "b",
      children: [
        {
          value: "ba",
          children: [],
        },
        {
          value: "bb",
          children: [],
        },
      ],
    },
    {
      value: "c",
      children: [
        {
          value: "ca",
          children: [],
        },
        {
          value: "cb",
          children: [
            {
              value: "cba",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

// Define the function to display all elements in the tree
function displayTree(tree) {
  console.log(tree.value); // Display the value of the current node
  if (tree.children) {
    tree.children.forEach((child) => {
      displayTree(child); // Recursively display the children of the current node
    });
  }
}

// Call the function with the tree structure
displayTree(tree);
