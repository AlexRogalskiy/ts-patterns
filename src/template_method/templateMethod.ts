export namespace TemplateMethodPattern {
    export class AbstractClass {
        method1(): void {
            throw new Error('Abstract Method')
        }

        method2(): void {
            throw new Error('Abstract Method')
        }

        method3(): void {
            throw new Error('Abstract Method')
        }

        templateMethod(): void {
            console.log('templateMethod is being called')
            this.method1()
            this.method2()
            this.method3()
        }
    }

    export class ConcreteClass1 extends AbstractClass {
        method1(): void {
            console.log('method1 of ConcreteClass1')
        }

        method2(): void {
            console.log('method2 of ConcreteClass1')
        }

        method3(): void {
            console.log('method3 of ConcreteClass1')
        }
    }

    export class ConcreteClass2 extends AbstractClass {
        method1(): void {
            console.log('method1 of ConcreteClass2')
        }

        method2(): void {
            console.log('method2 of ConcreteClass2')
        }

        method3(): void {
            console.log('method3 of ConcreteClass2')
        }
    }
}
