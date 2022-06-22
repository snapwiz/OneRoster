import fs from "fs"
import getLine from "get-line";

export default class FileHandler{
    constructor(){}
    open(filePath, mode = 'r'){
        let isFileReadable = true
        fs.access(file, fs.constants.R_OK, (err) => {
            if (err) {
                isFileReadable = false
            }
        });
        const filePathExists = fs.existsSync(filePath)
        const fileHandler = fs.open(filePath, mode)
        const fileHandler = fs.createReadStream(filePath, {
            flag: mode,
            encoding: 'UTF-8',
        })
        if (!filePathExists || !isFileReadable || !fileHandler) {
            // throw exception
        }
        return fileHandler
    }
    getContents(fileName){
        var fileContent = fs.readFileSync(fileName,'utf8') 
        return fileContent
    }
    readCsvLine(handle, length = 0, delimiter = ',', enclosure = '"', escape = '\\') {
        // TODO: Find some alternative for this getLine package
        const getLine = getLine({lines: [0, length], encoding: 'utf8', newline: '\n'}, cb);

        // TODO
        return handle.pipe(getLine)
    }
}