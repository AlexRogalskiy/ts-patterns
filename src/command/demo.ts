/// <reference path="command.ts" />
import { CommandPattern } from './command'

export namespace CommandPatternDemo {
    export namespace Demo {
        export function show(): void {
            const receiver: CommandPattern.Receiver = new CommandPattern.Receiver()
            const command1: CommandPattern.Command = new CommandPattern.ConcreteCommand1(receiver)
            const command2: CommandPattern.Command = new CommandPattern.ConcreteCommand2(receiver)
            const invoker: CommandPattern.Invoker = new CommandPattern.Invoker()

            invoker.storeAndExecute(command1)
            invoker.storeAndExecute(command2)
        }
    }
}
