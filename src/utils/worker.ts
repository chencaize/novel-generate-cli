const axios = require("axios");
const cheerio = require("cheerio");
import { sleep } from "./common";


export async function mbwxs(info: any) {

    let times = 0;

    let result, isSuccess = false;
    while (!isSuccess) {
        if (times < info.retrytimes) {
            try {
                let url = `https://www.mbwxs.com/info/${info.bookid}/${info.page}.html`
                const resp = await axios.get(url, {
                    "accept": `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "zh-CN,zh;q=0.9",
                    "cache-control": "no-cache",
                    "cookie": "PHPSESSID=7ogtpseeh0rq5bdpsavbeep83q; Hm_lvt_5c096d87c6193092a5b779f2f5c3a22f=1680342046,1680406502; loadnum_12425_0=NaN; Hm_lpvt_5c096d87c6193092a5b779f2f5c3a22f=1680410421",
                    "pragma": "no-cache",
                    "referer": url,
                    "sec-ch-ua": `"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"`,
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "Windows",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
                });
                const $ = cheerio.load(resp.data);

                const txt = `\n\n第${info.chapter}章\n\n${$("#BookText").text()}`;

                await sleep(info.sleeptimes);

                result = { order: info.order, buffer: Buffer.from(txt) };
                isSuccess = true;
            } catch (error) {
                isSuccess = false;
            }
        } else {
            console.error(`\n${info.page}失败,已重试${times}次`);
            isSuccess = true;
        }

        times++;
    }

    return result;
}
