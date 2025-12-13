import path from 'node:path';
import fs from 'node:fs/promises';

import {sendResponse} from "./sendResponse.js";
import {getContentType} from './getContentType.js';

export async function serveStatic(req, res, baseDir) {

    const publicDir = path.join(baseDir, 'public');
    const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);

    try{
        const content = await fs.readFile(filePath);
        const ext = path.extname(filePath);
        const contentType = getContentType(ext);

        sendResponse(res, 200, contentType, content);
    }catch (error){
        if(error.code === 'ENOENT'){
            const notFoundPath = path.join(publicDir, '404.html');
            const notFoundContent = await fs.readFile(notFoundPath);
            sendResponse(res, 404, 'text/html', notFoundContent);
        }
        else{
            sendResponse(res, 500, 'text/html', `<html><h1>Internal Server Error ${error.code}</h1></html>`);
        }
    }
}