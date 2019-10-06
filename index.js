module.exports = ({ types }) => ({
  name: "var-to-const",
  visitor: {
    VariableDeclaration: ({ node }) => {
      if (node.kind === "var") {
        node.kind = "const";
      }
    }
  }
});

