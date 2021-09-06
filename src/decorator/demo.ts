/// <reference path="decorator.ts" />
import { DecoratorPattern } from './decorator'

export namespace DecoratorPatternDemo {
    export namespace Demo {
        export function show(): void {
            const decorator1: DecoratorPattern.Decorator = new DecoratorPattern.ConcreteDecorator(
                1,
                new DecoratorPattern.ConcreteComponent('Comp1')
            )

            decorator1.operation()
        }
    }
}
