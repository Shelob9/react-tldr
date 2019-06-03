const express = require('express');
const fs = require('fs');
const path = require('path');

/**
 * Router to serve built files from MDX-GO
 * @param htmlDir
 * @returns {Router}
 */
function mdxRouter(htmlDir) {
    const router = express.Router();
    const middleware = function timeLog(req, res, next) {
        //console.log('Time: ', Date.now());
        next()
    };
    router.use(middleware);

    /**
     * Generic not found response
     */
    function notFoundResponse({res, message}) {

        res.status(404).send(message ? message : {message: 'File not found'})
    }

    /**
     * Send file or index.html of directory
     */
    function respondWithFileOrIndex({res, fileName}) {
        const index = `${process.cwd()}/${htmlDir}/${fileName}/index.html`;
        if (fs.existsSync(index)) {
            return respondWithWithFile({res, fileName: `${fileName}/index.html`});
        }
        notFoundResponse({res, message: `${fs.existsSync(index)}   ${fileName} Not Found`})
    }

    /**
     * Create a file response
     *
     * IMPORTANT: File is assumed to exist
     */
    function respondWithWithFile({res, fileName}) {

        const options = {
            root: htmlDir,
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };
        res.sendFile(fileName, options, function (err) {
            if (err) {
               throw err;
            }
        });
    }

    /**
     * If a file is a JavaScript file, return it, else treat as section/html
     */
    function respondWithJsMaybe({req, res, fileName, next}) {
        if ('.js' === path.extname(fileName)) {
            return respondWithWithFile({res, fileName});
        } else {
            return respondWithFileOrIndex({req, res, fileName});
        }

    }

    /**
     * Show index at root
     */
    router.get('/', function (req, res) {
        respondWithWithFile({req, res, fileName: 'index.html'});
    });

    /**
     * Handle all other GET requests
     */
    router.get(/^\/(.*)/, function (req, res) {
        const fileName = req.params[0];
        respondWithJsMaybe({req, res, fileName});

    });


    return router;
}


module.exports = {
    mdxRouter
};
