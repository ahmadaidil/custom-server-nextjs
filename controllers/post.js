const axios = require('axios');
const app = require('../config/app');
const routes = require('../config/routes');

module.exports = async (req, res) => {
  let posts = [];
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = data;
  } catch(err) {
    console.error(err);
  }
  return app.render(req, res, routes.post, { posts });
};
