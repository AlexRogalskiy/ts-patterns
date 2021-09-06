export namespace VisitorPattern {
    export interface Visitor {
        visitConcreteElement1(concreteElement1: ConcreteElement1): void

        visitConcreteElement2(concreteElement2: ConcreteElement2): void
    }

    export class ConcreteVisitor1 implements Visitor {
        // @ts-ignore
        visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log('`visitConcreteElement1` of ConcreteVisitor1 is being called!')
        }

        // @ts-ignore
        visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log('`visitConcreteElement2` of ConcreteVisitor1 is being called!')
        }
    }

    export class ConcreteVisitor2 implements Visitor {
        // @ts-ignore
        visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log('`visitConcreteElement1` of ConcreteVisitor2 is being called!')
        }

        // @ts-ignore
        visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log('`visitConcreteElement2` of ConcreteVisitor2 is being called!')
        }
    }

    export interface Element {
        operate(visitor: Visitor): void
    }

    export class ConcreteElement1 implements Element {
        operate(visitor: Visitor): void {
            console.log('`operate` of ConcreteElement1 is being called!')
            visitor.visitConcreteElement1(this)
        }
    }

    export class ConcreteElement2 implements Element {
        operate(visitor: Visitor): void {
            console.log('`operate` of ConcreteElement2 is being called!')
            visitor.visitConcreteElement2(this)
        }
    }

    export class Objs {
        private elements: Element[] = []

        attach(e: Element): void {
            this.elements.push(e)
        }

        detach(e: Element): void {
            const index = this.elements.indexOf(e)
            this.elements.splice(index, 1)
        }

        operate(visitor: Visitor): void {
            let i = 0
            const max = this.elements.length

            for (; i < max; i += 1) {
                this.elements[i].operate(visitor)
            }
        }
    }
}
