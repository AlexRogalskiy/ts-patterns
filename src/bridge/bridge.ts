export namespace BridgePattern {
    export class Abstraction {
        implementor: Implementor
        constructor(imp: Implementor) {
            this.implementor = imp
        }

        callIt(s: String): void {
            throw new Error(`This method is abstract!, message${s}`)
        }
    }

    export class RefinedAbstractionA extends Abstraction {
        constructor(imp: Implementor) {
            super(imp)
        }

        callIt(s: String): void {
            console.log('This is RefinedAbstractionA')
            this.implementor.callee(s)
        }
    }

    export class RefinedAbstractionB extends Abstraction {
        constructor(imp: Implementor) {
            super(imp)
        }

        callIt(s: String): void {
            console.log('This is RefinedAbstractionB')
            this.implementor.callee(s)
        }
    }

    export interface Implementor {
        callee(s: any): void
    }

    export class ConcreteImplementorA implements Implementor {
        callee(s: any): void {
            console.log('`callee` of ConcreteImplementorA is being called.')
            console.log(s)
        }
    }

    export class ConcreteImplementorB implements Implementor {
        callee(s: any): void {
            console.log('`callee` of ConcreteImplementorB is being called.')
            console.log(s)
        }
    }
}
