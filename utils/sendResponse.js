export function sendResponse(res, statusCode, header, content) {
    res.statusCode = 200;
    res.setHeader('Content-Type', header);
    res.end(content);
}