/// <reference path="chainOfResponsibility.ts" />
import { ChainOfResponsibilityPattern } from './chainOfResponsibility'

export namespace ChainOfResponsibilityPatternDemo {
    export namespace Demo {
        export function show(): void {
            let i: number
            let max: number

            const reqs = [2, 7, 23, 34, 4, 5, 8, 3]

            const h1 = new ChainOfResponsibilityPattern.ConcreteHandler1(3)
            const h2 = new ChainOfResponsibilityPattern.ConcreteHandler2(7)
            const h3 = new ChainOfResponsibilityPattern.ConcreteHandler3(20)

            h1.setHandler(h2)
            h2.setHandler(h3)

            for (i = 0, max = reqs.length; i < max; i += 1) {
                h1.operation('operation is fired!', reqs[i])
            }
        }
    }
}
