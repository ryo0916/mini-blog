import preval from "babel-plugin-preval/macro";

const posts = preval`
  module.exports = require('./getArticles.js');
`;

module.exports = posts;
