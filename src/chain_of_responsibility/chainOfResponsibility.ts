export namespace ChainOfResponsibilityPattern {
    export class Handler {
        private handler: Handler
        private req: number

        constructor(req: number) {
            this.req = req
        }

        setHandler(handler: Handler): void {
            this.handler = handler
        }

        operation(msg: string, req: number): void {
            if (req <= this.req) {
                this.handlerRequest(msg)
            } else if (this.handler !== null && this.handler !== undefined) {
                this.handler.operation(msg, req)
            }
        }

        handlerRequest(msg: string): void {
            throw new Error(`Abstract method!, message: ${msg}`)
        }
    }

    export class ConcreteHandler1 extends Handler {
        constructor(req: number) {
            super(req)
        }

        handlerRequest(msg: string): void {
            console.log('Message (ConcreteHandler1) ::', msg)
        }
    }

    export class ConcreteHandler2 extends Handler {
        constructor(req: number) {
            super(req)
        }

        handlerRequest(msg: string): void {
            console.log('Message :: (ConcreteHandler2)', msg)
        }
    }

    export class ConcreteHandler3 extends Handler {
        constructor(req: number) {
            super(req)
        }

        handlerRequest(msg: string): void {
            console.log('Message :: (ConcreteHandler3)', msg)
        }
    }
}
