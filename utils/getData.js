import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
    try {
        const dataPath = path.join('data', 'data.json');
        const dataJson = await fs.readFile(dataPath, 'utf8');
        const data = JSON.parse(dataJson);
        return data;
    }catch (error){
        console.error(error);
        return [];
    }
}