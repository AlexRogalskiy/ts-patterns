export namespace IteratorPattern {
    export interface Iterator {
        next(): any

        hasNext(): boolean
    }

    export interface Aggregator {
        createIterator(): Iterator
    }

    export class ConcreteIterator implements Iterator {
        private readonly collection: any[] = []
        private position = 0

        constructor(collection: any[]) {
            this.collection = collection
        }

        next(): any {
            // Error handling is left out
            const result = this.collection[this.position]
            this.position += 1
            return result
        }

        hasNext(): boolean {
            return this.position < this.collection.length
        }
    }

    export class Numbers implements Aggregator {
        private readonly collection: number[] = []

        constructor(collection: number[]) {
            this.collection = collection
        }

        createIterator(): Iterator {
            return new ConcreteIterator(this.collection)
        }
    }
}
