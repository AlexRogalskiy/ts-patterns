export namespace FactoryMethodPattern {
    export interface AbstractProduct {
        method(param?: any): void
    }

    export class ConcreteProductA implements AbstractProduct {
        // @ts-ignore
        method = (param?: any): string => {
            return 'Method of ConcreteProductA'
        }
    }

    export class ConcreteProductB implements AbstractProduct {
        // @ts-ignore
        method = (param?: any): string => {
            return 'Method of ConcreteProductB'
        }
    }

    export namespace ProductFactory {
        export function createProduct(type: string): AbstractProduct {
            if (type === 'A') {
                return new ConcreteProductA()
            } else if (type === 'B') {
                return new ConcreteProductB()
            }

            throw new Error(`Invalid product type = ${type}`)
        }
    }
}
