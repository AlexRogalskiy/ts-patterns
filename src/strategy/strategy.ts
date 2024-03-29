export namespace StrategyPattern {
    export interface Strategy {
        execute(): void
    }

    export class ConcreteStrategy1 implements Strategy {
        execute(): void {
            console.log('`execute` method of ConcreteStrategy1 is being called')
        }
    }

    export class ConcreteStrategy2 implements Strategy {
        execute(): void {
            console.log('`execute` method of ConcreteStrategy2 is being called')
        }
    }

    export class ConcreteStrategy3 implements Strategy {
        execute(): void {
            console.log('`execute` method of ConcreteStrategy3 is being called')
        }
    }

    export class Context {
        private strategy: Strategy

        constructor(strategy: Strategy) {
            this.strategy = strategy
        }

        executeStrategy(): void {
            this.strategy.execute()
        }
    }
}
