/// <reference path="singleton/demo.ts" />
/// <reference path="abstract_factory/demo.ts" />
/// <reference path="factory_method/demo.ts" />
/// <reference path="builder/demo.ts" />
/// <reference path="prototype/demo.ts" />
/// <reference path="adapter/demo.ts" />
/// <reference path="bridge/demo.ts" />
/// <reference path="composite/demo.ts" />
/// <reference path="decorator/demo.ts" />
/// <reference path="facade/demo.ts" />
/// <reference path="flyweight/demo.ts" />
/// <reference path="proxy/demo.ts" />
/// <reference path="chain_of_responsibility/demo.ts" />
/// <reference path="command/demo.ts" />
/// <reference path="interpreter/demo.ts" />
/// <reference path="iterator/demo.ts" />
/// <reference path="mediator/demo.ts" />
/// <reference path="memento/demo.ts" />
/// <reference path="observer/demo.ts" />
/// <reference path="state/demo.ts" />
/// <reference path="strategy/demo.ts" />
/// <reference path="template_method/demo.ts" />
/// <reference path="visitor/demo.ts" />
//

import { AbstractFactoryPatternDemo } from './abstract_factory'
import { AdapterPatternDemo } from './adapter'
import { BridgePatternDemo } from './bridge'
import { BuilderPatternDemo } from './builder'
import { ChainOfResponsibilityPatternDemo } from './chain_of_responsibility'
import { CommandPatternDemo } from './command'
import { CompositePatternDemo } from './composite'
import { DecoratorPatternDemo } from './decorator'
import { FacadePatternDemo } from './facade'
import { FactoryMethodPatternDemo } from './factory_method'
import { FlyweightPatternDemo } from './flyweight'
import { InterpreterPatternDemo } from './interpreter'
import { IteratorPatternDemo } from './iterator'
import { MediatorPatternDemo } from './mediator'
import { MementoPatternDemo } from './memento'
import { ObserverPatternDemo } from './observer'
import { PrototypePatternDemo } from './prototype'
import { ProxyPatternDemo } from './proxy'
import { SingletonPatternDemo } from './singleton'
import { StatePatternDemo } from './state'
import { StrategyPatternDemo } from './strategy'
import { TemplateMethodPatternDemo } from './template_method'
import { VisitorPatternDemo } from './visitor'

import readline from 'readline'

declare let require: (moduleId: string) => any
declare let process: any

export namespace Patterns {
    export function show(Pattern: any): void {
        Pattern.Demo.show()
    }

    export function printMenu(): void {
        const menu =
            '= Creational Patterns == \n' +
            '  1: Singleton \n' +
            '  2: Abstract factory \n' +
            '  3: Factory method \n' +
            '  4: Builder \n' +
            '  5: Prototype \n\n' +
            '= Structural Patterns == \n' +
            '  6: Adapter \n' +
            '  7: Bridge \n' +
            '  8: Composite \n' +
            '  9: Decorator \n' +
            ' 10: Facade \n' +
            ' 11: Flyweight \n' +
            ' 12: Proxy \n\n' +
            '= Behavioral Patterns == \n' +
            ' 13: Chain of responsibility \n' +
            ' 14: Command \n' +
            ' 15: Interpreter \n' +
            ' 16: Iterator \n' +
            ' 17: Mediator \n' +
            ' 18: Memento \n' +
            ' 19: Observer \n' +
            ' 20: State \n' +
            ' 21: Strategy \n' +
            ' 22: Template method \n' +
            ' 23: Visitor \n'

        console.log('\n\n')
        console.log('==== Choose one pattern to demonstrate ====')
        console.log('\n')
        console.log(menu)
    }

    export function menu(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        printMenu()
        rl.question('Which pattern would you like to check?   ', function (answer) {
            if (+answer === 1) {
                show(SingletonPatternDemo)
            } else if (+answer === 2) {
                show(AbstractFactoryPatternDemo)
            } else if (+answer === 3) {
                show(FactoryMethodPatternDemo)
            } else if (+answer === 4) {
                show(BuilderPatternDemo)
            } else if (+answer === 5) {
                show(PrototypePatternDemo)
            } else if (+answer === 6) {
                show(AdapterPatternDemo)
            } else if (+answer === 7) {
                show(BridgePatternDemo)
            } else if (+answer === 8) {
                show(CompositePatternDemo)
            } else if (+answer === 9) {
                show(DecoratorPatternDemo)
            } else if (+answer === 10) {
                show(FacadePatternDemo)
            } else if (+answer === 11) {
                show(FlyweightPatternDemo)
            } else if (+answer === 12) {
                show(ProxyPatternDemo)
            } else if (+answer === 13) {
                show(ChainOfResponsibilityPatternDemo)
            } else if (+answer === 14) {
                show(CommandPatternDemo)
            } else if (+answer === 15) {
                show(InterpreterPatternDemo)
            } else if (+answer === 16) {
                show(IteratorPatternDemo)
            } else if (+answer === 17) {
                show(MediatorPatternDemo)
            } else if (+answer === 18) {
                show(MementoPatternDemo)
            } else if (+answer === 19) {
                show(ObserverPatternDemo)
            } else if (+answer === 20) {
                show(StatePatternDemo)
            } else if (+answer === 21) {
                show(StrategyPatternDemo)
            } else if (+answer === 22) {
                show(TemplateMethodPatternDemo)
            } else if (+answer === 23) {
                show(VisitorPatternDemo)
            }
            rl.close()
        })
    }
}

Patterns.menu()
