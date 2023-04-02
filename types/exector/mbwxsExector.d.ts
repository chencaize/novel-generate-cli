/// <reference types="node" />
import { MBWXSConfig } from "../interfaces";
import { Exector } from "./index";
declare class MbwxsExector extends Exector {
    exec(config: MBWXSConfig): Promise<Buffer>;
}
export default MbwxsExector;
