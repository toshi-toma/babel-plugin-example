const { transform } = require("@babel/core");

const src = "var foo = 'foo'";

const plugin = ({ types }) => ({
  visitor: {
    VariableDeclaration: ({ node }) => {
      if (node.kind === "var") {
        node.kind = "const";
      }
    }
  }
});

const { code } = transform(src, { plugins: [plugin] });
console.log(code);
