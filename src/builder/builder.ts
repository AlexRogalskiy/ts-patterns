export namespace BuilderPattern {
    export class UserBuilder {
        private readonly name: string
        private age: number
        private phone: string
        private address: string

        constructor(name: string) {
            this.name = name
        }

        get Name(): string {
            return this.name
        }

        setAge(value: number): UserBuilder {
            this.age = value
            return this
        }

        get Age(): number {
            return this.age
        }

        setPhone(value: string): UserBuilder {
            this.phone = value
            return this
        }

        get Phone(): string {
            return this.phone
        }

        setAddress(value: string): UserBuilder {
            this.address = value
            return this
        }

        get Address(): string {
            return this.address
        }

        build(): User {
            return new User(this)
        }
    }

    export class User {
        private readonly name: string
        private readonly age: number
        private readonly phone: string
        private readonly address: string

        constructor(builder: UserBuilder) {
            this.name = builder.Name
            this.age = builder.Age
            this.phone = builder.Phone
            this.address = builder.Address
        }

        get Name(): string {
            return this.name
        }

        get Age(): number {
            return this.age
        }

        get Phone(): string {
            return this.phone
        }

        get Address(): string {
            return this.address
        }
    }
}
