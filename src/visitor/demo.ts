/// <reference path="visitor.ts" />
import { VisitorPattern } from './visitor'

export namespace VisitorPatternDemo {
    export namespace Demo {
        export function show(): void {
            const objs: VisitorPattern.Objs = new VisitorPattern.Objs()

            objs.attach(new VisitorPattern.ConcreteElement1())
            objs.attach(new VisitorPattern.ConcreteElement2())

            const v1: VisitorPattern.ConcreteVisitor1 = new VisitorPattern.ConcreteVisitor1()
            const v2: VisitorPattern.ConcreteVisitor2 = new VisitorPattern.ConcreteVisitor2()

            objs.operate(v1)
            objs.operate(v2)
        }
    }
}
