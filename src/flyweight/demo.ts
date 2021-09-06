/// <reference path="flyweight.ts" />
import { FlyweightPattern } from './flyweight'

export namespace FlyweightPatternDemo {
    export namespace Demo {
        export function show(): void {
            const factory: FlyweightPattern.FlyweightFactory = new FlyweightPattern.FlyweightFactory()

            const conc1: FlyweightPattern.ConcreteFlyweight = factory.getFlyweight(
                'conc1'
            ) as FlyweightPattern.ConcreteFlyweight
            const conc2: FlyweightPattern.ConcreteFlyweight = factory.getFlyweight(
                'conc2'
            ) as FlyweightPattern.ConcreteFlyweight

            conc1.operation('1')
            conc2.operation('2')
        }
    }
}
