export namespace FlyweightPattern {

    export interface Flyweight {
        operation(s: String): void;
    }

    export class ConcreteFlyweight implements Flyweight {
        private _instrinsicState: String;

        get instrinsicState(): String {
            return this._instrinsicState;
        }

        set instrinsicState(value: String) {
            this._instrinsicState = value;
        }

        constructor(instrinsicState: String) {
            this._instrinsicState = instrinsicState;
        }

        public operation(s: String): void {
            console.log("`operation` of ConcreteFlyweight", s, " is being called!");
        }
    }

    export class UnsharedConcreteFlyweight implements Flyweight {
        private _allState: number;

        get allState(): number {
            return this._allState;
        }

        set allState(value: number) {
            this._allState = value;
        }

        constructor(allState: number) {
            this._allState = allState;
        }

        public operation(s: String): void {
            console.log("`operation` of UnsharedConcreteFlyweight", s, " is being called!");
        }
    }

    export class FlyweightFactory {

        private fliesMap: { [s: string]: Flyweight; } = <any>{};

        constructor() {
        }

        public getFlyweight(key: string): Flyweight {

            if (this.fliesMap[key] === undefined || null) {
                this.fliesMap[key] = new ConcreteFlyweight(key);
            }
            return this.fliesMap[key];
        }
    }
}
