const path = require('path');

require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals');
require('babel-core/register');

require.extensions['.css'] = () => {
  return;
};

const host = 'localhost';
const port = 3005;

const express   = require('express');
// const morgan    = require('morgan');
const app       = express();

// app.use(morgan('combined'));
app.use(express.static('src/static'));

app.set('views', __dirname);
app.set('view engine', 'ejs');

const webpack    = require('webpack');
const config     = require('../../webpack.config.js').default;
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const compiler   = webpack(config);

app.use(
  webpackDev(
    compiler,
    {
      hot: true,
      publicPath: config.output.publicPath,
      stats: { colors: true }
    }
  )
);

app.use(webpackHot(compiler));

app.get('*', require('./render').default);

app.listen(port, function() {
  console.log(`Server listening on: ${host}:${port}`);
});
