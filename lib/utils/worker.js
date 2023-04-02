"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mbwxs = void 0;
var axios = require("axios");
var cheerio = require("cheerio");
var common_1 = require("./common");
function mbwxs(info) {
    return __awaiter(this, void 0, void 0, function () {
        var times, result, isSuccess, url, resp, $, txt, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    times = 0;
                    isSuccess = false;
                    _a.label = 1;
                case 1:
                    if (!!isSuccess) return [3 /*break*/, 9];
                    if (!(times < info.retrytimes)) return [3 /*break*/, 7];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    url = "https://www.mbwxs.com/info/".concat(info.bookid, "/").concat(info.page, ".html");
                    return [4 /*yield*/, axios.get(url, {
                            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                            "accept-encoding": "gzip, deflate, br",
                            "accept-language": "zh-CN,zh;q=0.9",
                            "cache-control": "no-cache",
                            "cookie": "PHPSESSID=7ogtpseeh0rq5bdpsavbeep83q; Hm_lvt_5c096d87c6193092a5b779f2f5c3a22f=1680342046,1680406502; loadnum_12425_0=NaN; Hm_lpvt_5c096d87c6193092a5b779f2f5c3a22f=1680410421",
                            "pragma": "no-cache",
                            "referer": url,
                            "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "Windows",
                            "sec-fetch-dest": "document",
                            "sec-fetch-mode": "navigate",
                            "sec-fetch-site": "same-origin",
                            "sec-fetch-user": "?1",
                            "upgrade-insecure-requests": "1",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
                        })];
                case 3:
                    resp = _a.sent();
                    $ = cheerio.load(resp.data);
                    txt = "\n\n\u7B2C".concat(info.chapter, "\u7AE0\n\n").concat($("#BookText").text());
                    return [4 /*yield*/, (0, common_1.sleep)(info.sleeptimes)];
                case 4:
                    _a.sent();
                    result = { order: info.order, buffer: Buffer.from(txt) };
                    isSuccess = true;
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    isSuccess = false;
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    console.error("\n".concat(info.page, "\u5931\u8D25,\u5DF2\u91CD\u8BD5").concat(times, "\u6B21"));
                    isSuccess = true;
                    _a.label = 8;
                case 8:
                    times++;
                    return [3 /*break*/, 1];
                case 9: return [2 /*return*/, result];
            }
        });
    });
}
exports.mbwxs = mbwxs;
