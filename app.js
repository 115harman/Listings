'use strict';
const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const propertyController = require('./controllers/api/property/property.controller');
const lookupController = require('./controllers/api/lookup/lookup.controller');
const database = require('./data-access/database');
const seeder = require('./data-access/seeder')
//const globalTunnel = require('global-tunnel');
const port = 3000;

class Server {

    constructor() {
        this.initExpressMiddleWare();
        this.initCustomMiddleware();
        this.initDB();
        this.initRoutes();
        this.start();
    }

    initExpressMiddleWare() {
        app.use(favicon(__dirname + '/public/images/favicon.ico'));
        app.use(express.static(__dirname + '/public'));
    }

    start() {
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

    initRoutes() {
        app.use('/property', propertyController.router);
        app.use('/lookup', lookupController.router);

        // redirect all others to the index (HTML5 history)
        app.all('/*', (req, res) => {
            res.sendFile(__dirname + '/public/index.html');
        });
    }

    initDB() {
        database.open(() => {
            seeder.init();
        });
    }

    initCustomMiddleware() {
        /*globalTunnel.initialize({
            host: '10.74.151.6',
            port: 8080,
          });*/
        /*if (process.platform === "win32") {
            require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            }).on("SIGINT", () => {
                console.log('SIGINT: Closing MongoDB connection');
                database.close();
            });
        }*/

        process.on('SIGINT', () => {//capture Ctrl + C
            console.log('SIGINT: Closing MongoDB connection');
            database.close();
            //globalTunnel.end();
        });
    }
}

const server = new Server();