/// <reference path="factoryMethod.ts" />
import {FactoryMethodPattern} from "./factoryMethod";

export namespace FactoryMethodPatternDemo {
    export namespace Demo {
        export function show(): void {
            const a: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("A");
            const b: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("B");

            a.method();
            b.method();
        }
    }
}

