"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpubFile = exports.MobiFile = exports.PdfFile = exports.TxtFile = exports.GenerateFile = void 0;
var path = require("path");
var fse = require("fs-extra");
var GenerateFile = /** @class */ (function () {
    function GenerateFile() {
        this.outputDir = process.cwd();
    }
    GenerateFile.prototype.generate = function (buf, filename) {
        throw Error("must override");
    };
    return GenerateFile;
}());
exports.GenerateFile = GenerateFile;
var TxtFile = /** @class */ (function (_super) {
    __extends(TxtFile, _super);
    function TxtFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TxtFile.prototype.generate = function (buf, filename) {
        var file = path.resolve(this.outputDir, filename + ".txt");
        fse.writeFileSync(file, buf);
    };
    return TxtFile;
}(GenerateFile));
exports.TxtFile = TxtFile;
var PdfFile = /** @class */ (function (_super) {
    __extends(PdfFile, _super);
    function PdfFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PdfFile.prototype.generate = function (buf, filename) {
        console.log("暂不支持pdf");
    };
    return PdfFile;
}(GenerateFile));
exports.PdfFile = PdfFile;
var MobiFile = /** @class */ (function (_super) {
    __extends(MobiFile, _super);
    function MobiFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobiFile.prototype.generate = function (buf, filename) {
        console.log("暂不支持mobi");
    };
    return MobiFile;
}(GenerateFile));
exports.MobiFile = MobiFile;
var EpubFile = /** @class */ (function (_super) {
    __extends(EpubFile, _super);
    function EpubFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EpubFile.prototype.generate = function (buf, filename) {
        console.log("暂不支持epub");
    };
    return EpubFile;
}(GenerateFile));
exports.EpubFile = EpubFile;
