/// <reference path="templateMethod.ts" />
import { TemplateMethodPattern } from './templateMethod'

export namespace TemplateMethodPatternDemo {
    export namespace Demo {
        export function show(): void {
            const c1: TemplateMethodPattern.ConcreteClass1 = new TemplateMethodPattern.ConcreteClass1()
            const c2: TemplateMethodPattern.ConcreteClass2 = new TemplateMethodPattern.ConcreteClass2()

            c1.templateMethod()
            c2.templateMethod()
        }
    }
}
