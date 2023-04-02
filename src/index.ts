import { IConfig, MBWXSConfig, handleConfig, handleMBWXSConfig } from "./interfaces";
import { CONST_VIRS, COMMAND } from "./vir";
import { MbwxsExector } from "./exector";
import { TxtFile, PdfFile, MobiFile, EpubFile } from "./utils/genfile";
const chalk = require("chalk");

async function exec(config: IConfig) {
    try {
        console.log(CONST_VIRS.spinner.start);

        handleConfig(config);

        let cmd = config.source;
        let exector;
        
        //add command handler here
        switch (cmd) {
            case COMMAND.MBWXS:
                handleMBWXSConfig(config as MBWXSConfig);
                exector = new MbwxsExector();
                break;
            default: break;
        }

        const buffer = await exector?.exec(config as MBWXSConfig);
        
        let generateFile;
        switch (config.filetype) {
            case CONST_VIRS.filetype.txt:
                generateFile = new TxtFile();
                break;
            case CONST_VIRS.filetype.pdf:
                generateFile = new PdfFile();
                break;
            case CONST_VIRS.filetype.epub:
                generateFile = new EpubFile();
                break;
            case CONST_VIRS.filetype.mobi:
                generateFile = new MobiFile();
                break;
            default: break;
        }

        generateFile?.generate(buffer as Buffer, config.filename);

        console.log(CONST_VIRS.spinner.end);
    } catch (error) {
        console.log(chalk.white(error));
    }
}

module.exports = exec;