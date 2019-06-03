const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false});

/**
 * Router for api
 */
const {apiRouter, apiV1Router} = require('./routers/apiRouter');
app.use('/api/', apiRouter({jsonParser}));
app.use('/api/v1', apiV1Router({jsonParser}));

/**
 * Router for mdx-go created HTML
 */
const {mdxRouter} = require('./routers/mdxRouter');
const html = mdxRouter(process.env.HTML_DIR);
app.use(html);


module.exports = app;
