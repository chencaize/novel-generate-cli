const path = require("path");
const fse = require("fs-extra");

export class GenerateFile {
    outputDir: String;

    constructor() {
        this.outputDir = process.cwd();
    }

    generate(buf: Buffer, filename: String) {
        throw Error("must override");
    }
}

export class TxtFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void {
        let file = path.resolve(this.outputDir, filename + ".txt");
        fse.writeFileSync(file, buf);
    }
}

export class PdfFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void {
        console.log("暂不支持pdf");
    }
}

export class MobiFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void {
        console.log("暂不支持mobi");
    }
}

export class EpubFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void {
        console.log("暂不支持epub");
    }
}