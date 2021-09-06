/// <reference path="interpreter.ts" />

import { InterpreterPattern } from './interpreter'

export namespace InterpreterPatternDemo {
    export namespace Demo {
        import AbstractExpression = InterpreterPattern.AbstractExpression

        export function show(): void {
            const context: InterpreterPattern.Context = new InterpreterPattern.Context()
            const list: AbstractExpression[] = []
            let i = 0
            let max

            list.push(
                new InterpreterPattern.NonterminalExpression(),
                new InterpreterPattern.NonterminalExpression(),
                new InterpreterPattern.NonterminalExpression(),
                new InterpreterPattern.TerminalExpression(),
                new InterpreterPattern.NonterminalExpression(),
                new InterpreterPattern.NonterminalExpression(),
                new InterpreterPattern.TerminalExpression(),
                new InterpreterPattern.TerminalExpression()
            )

            for (i = 0, max = list.length; i < max; i += 1) {
                list[i].interpret(context)
            }
        }
    }
}
