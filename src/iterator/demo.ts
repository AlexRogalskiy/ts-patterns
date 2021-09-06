/// <reference path="iterator.ts" />
import { IteratorPattern } from './iterator'

export namespace IteratorPatternDemo {
    export namespace Demo {
        export function show(): void {
            const nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65]
            const numbers: IteratorPattern.Numbers = new IteratorPattern.Numbers(nArray)
            const it: IteratorPattern.ConcreteIterator =
                numbers.createIterator() as IteratorPattern.ConcreteIterator

            while (it.hasNext()) {
                console.log(it.next())
            }
        }
    }
}
