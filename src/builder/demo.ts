/// <reference path="builder.ts" />
import { BuilderPattern } from './builder'

export namespace BuilderPatternDemo {
    export namespace Demo {
        export function show(): void {
            const u: BuilderPattern.User = new BuilderPattern.UserBuilder('Jancsi')
                .setAge(12)
                .setPhone('0123456789')
                .setAddress('asdf')
                .build()

            console.log(`${u.Name} ${u.Age} ${u.Phone} ${u.Address}`)
        }
    }
}
