/// <reference path="flyweight.ts" />
import {FlyweightPattern} from "./flyweight";

export namespace FlyweightPatternDemo {
    export namespace Demo {
        export function show(): void {
            const factory: FlyweightPattern.FlyweightFactory = new FlyweightPattern.FlyweightFactory(),

                conc1: FlyweightPattern.ConcreteFlyweight = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc1"),
                conc2: FlyweightPattern.ConcreteFlyweight = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc2");

            conc1.operation("1");
            conc2.operation("2");
        }
    }
}

