/// <reference path="state.ts" />
import { StatePattern } from './state'

export namespace StatePatternDemo {
    export namespace Demo {
        export function show(): void {
            const context: StatePattern.Context = new StatePattern.Context(new StatePattern.ConcreteStateA())
            context.request()
            context.request()
            context.request()
            context.request()
            context.request()
            context.request()
            context.request()
            context.request()
        }
    }
}
