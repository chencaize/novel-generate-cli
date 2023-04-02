"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMBWXSConfig = exports.handleConfig = void 0;
var vir_1 = require("../vir");
function handleConfig(config) {
    if (!config.source) {
        config.source = vir_1.COMMAND.MBWXS;
    }
    if (!config.filename) {
        config.filename = vir_1.CONST_VIRS.defaultfilename;
    }
    if (!config.filetype) {
        config.filetype = vir_1.CONST_VIRS.filetype.txt;
    }
    if (!config.threadnumber) {
        config.threadnumber = 12;
    }
    else {
        config.threadnumber = parseInt("" + config.threadnumber);
    }
}
exports.handleConfig = handleConfig;
function handleMBWXSConfig(config) {
    if (!config.bookid) {
        throw Error("mbwxs bookid is empty");
    }
    else {
        config.bookid = parseInt("" + config.bookid);
    }
    if (!config.startchapter) {
        config.startchapter = 1;
    }
    else {
        config.startchapter = parseInt("" + config.startchapter);
    }
    if (!config.endchapter) {
        throw Error("endchapter is empty");
    }
    else {
        config.endchapter = parseInt("" + config.endchapter);
    }
    if (!config.pageperchapter) {
        config.pageperchapter = 2;
    }
    else {
        config.pageperchapter = parseInt("" + config.pageperchapter);
    }
    if (!config.retrytimes) {
        config.retrytimes = 3;
    }
    else {
        config.retrytimes = parseInt("" + config.retrytimes);
    }
    if (!config.sleeptimes) {
        config.sleeptimes = 500;
    }
    else {
        config.sleeptimes = parseInt("" + config.sleeptimes);
    }
}
exports.handleMBWXSConfig = handleMBWXSConfig;
