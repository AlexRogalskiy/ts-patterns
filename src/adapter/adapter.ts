export namespace AdapterPattern {
    export class Adaptee {
        method(): void {
            console.log('`method` of Adaptee is being called')
        }
    }

    export interface Target {
        call(): void
    }

    export class Adapter implements Target {
        call(): void {
            console.log('Adapter `call` method is being called')
            const adaptee: Adaptee = new Adaptee()
            adaptee.method()
        }
    }
}
