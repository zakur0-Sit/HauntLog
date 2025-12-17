import path from "node:path";
import fs from "node:fs/promises";

import {getData} from "./getData.js";

export async function addNewSighting(newSighting) {
    try{
        const data = await getData();
        data.push(newSighting);
        const filePath = path.join('data', 'data.json');
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

    }catch (error) {
        throw new Error(error);
    }
}