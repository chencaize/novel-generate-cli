export interface IConfig {
    source: string;
    filename: string;
    filetype: string;
    threadnumber: number;
}
export interface MBWXSConfig extends IConfig {
    bookid: number;
    startchapter: number;
    endchapter: number;
    pageperchapter: number;
    retrytimes: number;
    sleeptimes: number;
}
export declare function handleConfig(config: IConfig): void;
export declare function handleMBWXSConfig(config: MBWXSConfig): void;
