"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMAND = exports.CONST_VIRS = void 0;
var path = require("path");
exports.CONST_VIRS = {
    threadpool: {
        filename: path.resolve(__dirname, "utils/worker.js")
    },
    spinner: {
        start: "任务开始执行...",
        exec: "任务执行中...%s",
        end: "\n任务执行完毕...",
        style: "|/-\\",
    },
    filetype: {
        txt: ".txt",
        pdf: ".pdf",
        mobi: ".mobi",
        epub: ".epub"
    },
    defaultfilename: "novel"
};
exports.COMMAND = {
    MBWXS: "mbwxs",
};
