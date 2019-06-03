const {app} = require( './app' );

const port = 3000;

const htmlDir = process.env.HTML_DIR;
/**
 * Start server
 */
app.listen(port, () => {
    console.log(
        `App started http://localhost:${port}!`,
        `HTML Dir ${htmlDir}`
    )
});
