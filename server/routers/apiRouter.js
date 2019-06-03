const express = require('express');
const fs = require('fs');
const path = require('path');

function apiRouter({jsonParser}) {
    const router = express.Router();
    router.use(jsonParser);
    router.get( '/', (req,res)=> {
        return res.send({
            versions: [
                '/v1'
            ],
            routes: [
                'v1/hi'
            ]
        })
    } );


    return router;
}

function apiV1Router({jsonParser}) {
    const router = express.Router();
    router.use(jsonParser);
    router.get( '/', (req,res)=> {
        return res.send({
            routes: [
                '/hi'
            ]
        })
    } );
    router.get( '/hi', (req,res)=> {
        return res.status(418).send({hi: 'Roy'})
    } );

    return router;
}

module.exports = {apiRouter,apiV1Router};
