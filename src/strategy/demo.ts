/// <reference path="strategy.ts" />
import { StrategyPattern } from './strategy'

export namespace StrategyPatternDemo {
    export namespace Demo {
        export function show(): void {
            let context: StrategyPattern.Context = new StrategyPattern.Context(
                new StrategyPattern.ConcreteStrategy1()
            )

            context.executeStrategy()

            context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy2())
            context.executeStrategy()

            context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy3())
            context.executeStrategy()
        }
    }
}
