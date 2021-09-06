export namespace FlyweightPattern {
    export interface Flyweight {
        operation(s: String): void
    }

    export class ConcreteFlyweight implements Flyweight {
        private _instrinsicState: string

        get instrinsicState(): string {
            return this._instrinsicState
        }

        set instrinsicState(value: string) {
            this._instrinsicState = value
        }

        constructor(instrinsicState: string) {
            this._instrinsicState = instrinsicState
        }

        operation(s: String): void {
            console.log('`operation` of ConcreteFlyweight', s, 'is being called!')
        }
    }

    export class UnsharedConcreteFlyweight implements Flyweight {
        private _allState: number

        get allState(): number {
            return this._allState
        }

        set allState(value: number) {
            this._allState = value
        }

        constructor(allState: number) {
            this._allState = allState
        }

        operation(s: String): void {
            console.log('`operation` of UnsharedConcreteFlyweight', s, 'is being called!')
        }
    }

    export class FlyweightFactory {
        private fliesMap: { [s: string]: Flyweight } = {} as any

        constructor() {}

        getFlyweight(key: string): Flyweight {
            if (this.fliesMap[key] === undefined || null) {
                this.fliesMap[key] = new ConcreteFlyweight(key)
            }
            return this.fliesMap[key]
        }
    }
}
