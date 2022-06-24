import fs from "fs"
import getLine from "get-line";

export default class FileHandler{
    constructor(){}
    async open(filePath, mode = 'r'){
        let isFileReadable = await fs.promises.access(file, fs.constants.R_OK)
        const filePathExists = fs.existsSync(filePath)
        const fileHandler = fs.open(filePath, mode)
        // const fileHandler = fs.createReadStream(filePath, {
        //     flag: mode,
        //     encoding: 'UTF-8',
        // })
        if (!filePathExists || !isFileReadable || !fileHandler) {
            // throw exception
        }
        return fileHandler
    }
    async getContents(fileName){
        var fileContent = fs.readFileSync(fileName,'utf8') 
        return fileContent
    }

    async readCsvLine(handle, length = 0, delimiter = ',', enclosure = '"', escape = '\\') {
        // TODO: Find some alternative for this getLine package
        const getLine = getLine({lines: [0, length], encoding: 'utf8', newline: '\n'});


        // TODO
        return handle.pipe(getLine)
    }
}