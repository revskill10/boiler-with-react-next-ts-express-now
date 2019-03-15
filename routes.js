const nextRoutes = require ('next-routes');
const routes = (module.exports = nextRoutes ());

routes
  .add ('index', '/')
  .add ('about', '/about')
  .add ('contact', '/contact')
  .add ('posts', '/posts')
  .add ('post', '/post/:id');
