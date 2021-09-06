export namespace InterpreterPattern {
    export class Context {}

    export interface AbstractExpression {
        interpret(context: Context): void
    }

    export class TerminalExpression implements AbstractExpression {
        // @ts-ignore
        interpret(context: Context): void {
            console.log('`interpret` method of TerminalExpression is being called!')
        }
    }

    export class NonterminalExpression implements AbstractExpression {
        // @ts-ignore
        interpret(context: Context): void {
            console.log('`interpret` method of NonterminalExpression is being called!')
        }
    }
}
