export async function parseJSONBody(req){
    let body = "";
    for await (let chunk of req){
        body += chunk;
    }
    try{
        body = JSON.parse(body);
        return body;
    }catch(error){
        throw new Error(`Invalid JSON format: ${error}`);
    }
}