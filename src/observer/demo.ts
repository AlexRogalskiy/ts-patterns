/// <reference path="observer.ts" />
import { ObserverPattern } from './observer'

export namespace ObserverPatternDemo {
    export namespace Demo {
        export function show(): void {
            const sub: ObserverPattern.ConcreteSubject = new ObserverPattern.ConcreteSubject()

            sub.register(new ObserverPattern.ConcreteObserver(sub, 'Jancsi'))
            sub.register(new ObserverPattern.ConcreteObserver(sub, 'Julcsa'))
            sub.register(new ObserverPattern.ConcreteObserver(sub, 'Marcsa'))

            sub.SubjectState = 123
            sub.notify()
        }
    }
}
