/// <reference path="mediator.ts" />
import { MediatorPattern } from './mediator'

export namespace MediatorPatternDemo {
    export namespace Demo {
        export function show(): void {
            const cm: MediatorPattern.ConcreteMediator = new MediatorPattern.ConcreteMediator()
            const c1: MediatorPattern.ConcreteColleagueA = new MediatorPattern.ConcreteColleagueA(cm)
            const c2: MediatorPattern.ConcreteColleagueB = new MediatorPattern.ConcreteColleagueB(cm)

            cm.concreteColleagueA = c1
            cm.concreteColleagueB = c2

            c1.send('`send` of ConcreteColleagueA is being called!')
            c2.send('`send` of ConcreteColleagueB is being called!')
        }
    }
}
