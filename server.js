import http from 'node:http';

import {serveStatic} from "./utils/serveStatic.js";
import {handleGet} from "./handlers/routeHandlers.js";
import {handlePost} from "./handlers/routeHandlers.js";

const PORT = 3000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    const urlObject = new URL(req.url, `http://${req.headers.host}`);
    if(req.url === '/api' && req.method === 'GET'){
        return await handleGet(res);
    }else if(req.url === '/api' && req.method === 'POST'){
        return await handlePost(req, res);
    } else if(!req.url.startsWith('/api')){
        return await serveStatic(req, res, __dirname);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});