/// <reference path="facade.ts" />
import { FacadePattern } from './facade'

export namespace FacadePatternDemo {
    export namespace Demo {
        export function show(): void {
            const facade: FacadePattern.Facade = new FacadePattern.Facade()

            facade.operation1()

            facade.operation2()
        }
    }
}
