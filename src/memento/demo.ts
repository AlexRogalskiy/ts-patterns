/// <reference path="memento.ts" />
import { MementoPattern } from './memento'

export namespace MementoPatternDemo {
    export namespace Demo {
        export function show(): void {
            const state: MementoPattern.State = new MementoPattern.State('... State ')
            const originator: MementoPattern.Originator = new MementoPattern.Originator(state)
            const careTaker: MementoPattern.CareTaker = new MementoPattern.CareTaker()

            careTaker.Memento = originator.createMemento()
            originator.State = new MementoPattern.State('something else...')

            originator.setMemento(careTaker.Memento)
        }
    }
}
