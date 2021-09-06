/// <reference path="adapter.ts" />
import {AdapterPattern} from "./adapter";

export namespace AdapterPatternDemo {
    export namespace Demo {

        export function show(): void {
            const adapter: AdapterPattern.Adapter = new AdapterPattern.Adapter();
            adapter.call();
        }
    }
}
