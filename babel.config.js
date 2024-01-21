module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    ["babel-plugin-inline-react-svg",
    "@babel/plugin-proposal-private-property-in-object"]
  ]
};
