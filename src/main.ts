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

import {AbstractFactoryPatternDemo} from "./abstract_factory";
import {FactoryMethodPatternDemo} from "./factory_method";
import {SingletonPatternDemo} from "./singleton";
import {BuilderPatternDemo} from "./builder";
import {PrototypePatternDemo} from "./prototype";
import {AdapterPatternDemo} from "./adapter";
import {CompositePatternDemo} from "./composite";
import {BridgePatternDemo} from "./bridge";
import {DecoratorPatternDemo} from "./decorator";
import {FacadePatternDemo} from "./facade";
import {FlyweightPatternDemo} from "./flyweight";
import {InterpreterPatternDemo} from "./interpreter";
import {CommandPatternDemo} from "./command";
import {ChainOfResponsibilityPatternDemo} from "./chain_of_responsibility";
import {IteratorPatternDemo} from "./iterator";
import {MediatorPatternDemo} from "./mediator";
import {MementoPatternDemo} from "./memento";
import {VisitorPatternDemo} from "./visitor";
import {TemplateMethodPatternDemo} from "./template_method";
import {StrategyPatternDemo} from "./strategy";
import {StatePatternDemo} from "./state";
import {ObserverPatternDemo} from "./observer";
import {ProxyPatternDemo} from "./proxy";

declare var require: (moduleId: string) => any;
declare var process: any;

const readline = require('readline');

export namespace Patterns {

    function printMenu(): void {
        const menu = "= Creational Patterns == \n" +
            "  1: Singleton \n" +
            "  2: Abstract factory \n" +
            "  3: Factory method \n" +
            "  4: Builder \n" +
            "  5: Prototype \n\n" +
            "= Structural Patterns == \n" +
            "  6: Adapter \n" +
            "  7: Bridge \n" +
            "  8: Composite \n" +
            "  9: Decorator \n" +
            " 10: Facade \n" +
            " 11: Flyweight \n" +
            " 12: Proxy \n\n" +
            "= Behavioral Patterns == \n" +
            " 13: Chain of responsibility \n" +
            " 14: Command \n" +
            " 15: Interpreter \n" +
            " 16: Iterator \n" +
            " 17: Mediator \n" +
            " 18: Memento \n" +
            " 19: Observer \n" +
            " 20: State \n" +
            " 21: Strategy \n" +
            " 22: Template method \n" +
            " 23: Visitor \n";


        console.log("\n\n");
        console.log("==== Choose one pattern to demonstrate ====");
        console.log("\n");
        console.log(menu);
    }

    export function menu(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        printMenu();
        rl.question("Which pattern would you like to check?   ", function (answer) {
            switch (+answer) {
                case 1 :
                    show(SingletonPatternDemo);
                    break;
                case 2 :
                    show(AbstractFactoryPatternDemo);
                    break;
                case 3 :
                    show(FactoryMethodPatternDemo);
                    break;
                case 4 :
                    show(BuilderPatternDemo);
                    break;
                case 5 :
                    show(PrototypePatternDemo);
                    break;
                case 6 :
                    show(AdapterPatternDemo);
                    break;
                case 7 :
                    show(BridgePatternDemo);
                    break;
                case 8 :
                    show(CompositePatternDemo);
                    break;
                case 9 :
                    show(DecoratorPatternDemo);
                    break;
                case 10 :
                    show(FacadePatternDemo);
                    break;
                case 11 :
                    show(FlyweightPatternDemo);
                    break;
                case 12 :
                    show(ProxyPatternDemo);
                    break;
                case 13 :
                    show(ChainOfResponsibilityPatternDemo);
                    break;
                case 14 :
                    show(CommandPatternDemo);
                    break;
                case 15 :
                    show(InterpreterPatternDemo);
                    break;
                case 16 :
                    show(IteratorPatternDemo);
                    break;
                case 17 :
                    show(MediatorPatternDemo);
                    break;
                case 18 :
                    show(MementoPatternDemo);
                    break;
                case 19 :
                    show(ObserverPatternDemo);
                    break;
                case 20 :
                    show(StatePatternDemo);
                    break;
                case 21 :
                    show(StrategyPatternDemo);
                    break;
                case 22 :
                    show(TemplateMethodPatternDemo);
                    break;
                case 23 :
                    show(VisitorPatternDemo);
                    break;
                default :
                    break;
            }
            rl.close();
        });
    }

    function show(Pattern: any): void {
        Pattern.Demo.show();
    }
}

Patterns.menu();
