/// <reference path="abstractFactory.ts" />

import { AbstractFactoryPattern } from './abstractFactory'

export namespace AbstractFactoryPatternDemo {
    export namespace Demo {
        export function show(): void {
            // Abstract factory1
            const factory1: AbstractFactoryPattern.AbstractFactory =
                new AbstractFactoryPattern.ConcreteFactory1()
            const tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory1)
            tester1.test()

            // Abstract factory2
            const factory2: AbstractFactoryPattern.AbstractFactory =
                new AbstractFactoryPattern.ConcreteFactory2()
            const tester2: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory2)
            tester2.test()
        }
    }
}
