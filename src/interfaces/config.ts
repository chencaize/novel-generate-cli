import { CONST_VIRS, COMMAND } from "../vir";

export interface IConfig {
    source: string,
    filename: string,
    filetype: string,
    threadnumber: number,
}

export interface MBWXSConfig extends IConfig {
    bookid: number,
    startchapter: number,
    endchapter: number,
    pageperchapter: number,
    retrytimes: number,
    sleeptimes: number,
}

export function handleConfig(config: IConfig) {
    if (!config.source) {
        config.source = COMMAND.MBWXS;
    }
    
    if (!config.filename) {
        config.filename = CONST_VIRS.defaultfilename;
    }

    if (!config.filetype) {
        config.filetype = CONST_VIRS.filetype.txt;
    }

    if (!config.threadnumber) {
        config.threadnumber = 12;
    } else {
        config.threadnumber = parseInt("" + config.threadnumber);
    }
}

export function handleMBWXSConfig(config: MBWXSConfig) {
    if (!config.bookid) {
        throw Error("mbwxs bookid is empty");
    } else {
        config.bookid = parseInt("" + config.bookid);
    }

    if (!config.startchapter) {
        config.startchapter = 1;
    } else {
        config.startchapter = parseInt("" + config.startchapter);
    }

    if (!config.endchapter) {
        throw Error("endchapter is empty");
    } else {
        config.endchapter = parseInt("" + config.endchapter);
    }

    if (!config.pageperchapter) {
        config.pageperchapter = 2;
    } else {
        config.pageperchapter = parseInt("" + config.pageperchapter);
    }

    if (!config.retrytimes) {
        config.retrytimes = 3;
    } else {
        config.retrytimes = parseInt("" + config.retrytimes);
    }

    if (!config.sleeptimes) {
        config.sleeptimes = 500;
    } else {
        config.sleeptimes = parseInt("" + config.sleeptimes);
    }
}