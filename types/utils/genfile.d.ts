/// <reference types="node" />
export declare class GenerateFile {
    outputDir: String;
    constructor();
    generate(buf: Buffer, filename: String): void;
}
export declare class TxtFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void;
}
export declare class PdfFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void;
}
export declare class MobiFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void;
}
export declare class EpubFile extends GenerateFile {
    generate(buf: Buffer, filename: String): void;
}
