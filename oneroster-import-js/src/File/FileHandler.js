import fs from "fs"
import {parse} from "csv-parse"
export default class FileHandler{
    constructor(){}
    async open(filePath, mode = 'r'){
        let isFileReadable = false
        try{
            await fs.promises.access(filePath, fs.constants.R_OK)
            isFileReadable = true
        } catch(e) {
        }
        const filePathExists = fs.existsSync(filePath)
        const fileHandler = fs.createReadStream(filePath, {
            flag: mode,
            encoding: 'UTF-8',
        })
        if (!filePathExists || !isFileReadable || !fileHandler) {
            throw new Error('File to import cannot be loaded.')
        }
        return fileHandler
    }
    getContents(fileName){
        var fileContent = fs.readFileSync(fileName,'utf8') 
        return fileContent
    }

    async readCsvLines(handle, length = 0, delimiter = ',', enclosure = '"', escape = '\\') {
        const parsedFileLines = []
        return new Promise((resolve, reject) => handle.pipe(parse({ delimiter: ",", escape, enclosure})).on('data', (data) => {
            parsedFileLines.push(data)
        })
        .on('end', () => {
            resolve(parsedFileLines)
        }))
    }
}

