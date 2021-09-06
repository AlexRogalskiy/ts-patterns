/// <reference path="interpreter.ts" />

import {InterpreterPattern} from "./interpreter";

export namespace InterpreterPatternDemo {
    export namespace Demo {

        import AbstractExpression = InterpreterPattern.AbstractExpression;

        export function show(): void {
            let context: InterpreterPattern.Context = new InterpreterPattern.Context(),
                list: AbstractExpression[] = [],
                i = 0,
                max;

            list.push(new InterpreterPattern.NonterminalExpression());
            list.push(new InterpreterPattern.NonterminalExpression());
            list.push(new InterpreterPattern.NonterminalExpression());
            list.push(new InterpreterPattern.TerminalExpression());
            list.push(new InterpreterPattern.NonterminalExpression());
            list.push(new InterpreterPattern.NonterminalExpression());
            list.push(new InterpreterPattern.TerminalExpression());
            list.push(new InterpreterPattern.TerminalExpression());

            for (i = 0, max = list.length; i < max; i += 1) {
                list[i].interpret(context);
            }
        }
    }
}
