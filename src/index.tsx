import app from 'apprun';
import site from './_site';

import layout from './layout';
import pages from './_lib';

// import web components
import './components/counter';
import './components/my-xkcd';

app.on('/', () => app.run('/google'));

const config = {
  title: 'My AppRun Site',
  element: 'main',
  layout,
  pages,
  eventRoot: '/',
};

site.start(config);
