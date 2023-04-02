const { Piscina } = require("piscina");
import { MBWXSConfig } from "../interfaces";
import { Exector } from "./index";
import { CONST_VIRS } from "../vir";

class MbwxsExector extends Exector {
    async exec(config: MBWXSConfig): Promise<Buffer> {

        this.threadpool = new Piscina({
            filename: CONST_VIRS.threadpool.filename,
            minThreads: config.threadnumber,
            maxThreads: config.threadnumber,
        })

        const tasks: any = [];

        let order = 0;
        for (let i = config.startchapter - 1; i < config.endchapter; i++) {
            tasks.push(this.threadpool.run({ bookid: config.bookid, chapter: i + 1, page: i, order: ++order, retrytimes: config.retrytimes, sleeptimes: config.sleeptimes }, { name: "mbwxs" }));
            if (config.pageperchapter > 1) {
                for (let j = 1; j <= config.pageperchapter; j++) {
                    tasks.push(this.threadpool.run({ bookid: config.bookid, chapter: i + 1 + "_" + j, page: i + "_" + j, order: ++order, retrytimes: config.retrytimes, sleeptimes: config.sleeptimes }, { name: "mbwxs" }));
                }
            }
        }

        this.spinner.start();

        let res = await Promise.all(tasks);

        this.spinner.stop();

        res = res.sort((a: any, b: any): number => {
            return a?.order - b?.order;
        })

        let buffers: Array<Buffer> = [];
        res.forEach(item => {
            if (item?.buffer) {
                buffers.push(Buffer.from(item.buffer));
            }
        })

        let newBuffer = Buffer.concat(buffers);

        return newBuffer;
    }
}

export default MbwxsExector;