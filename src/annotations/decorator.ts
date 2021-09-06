import promisifyCall from 'promisify-call'

export default function promisify(...args: any[]): any[] {
    if (args.length === 1) {
        return promisifyClass(args[0]);
    }
    return promisifyMethod(args[0], args[1], args[2]);
}

function promisifyClass(target) {
    let keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object["getOwnPropertySymbols"] === 'function') {
        keys = keys.concat(Object["getOwnPropertySymbols"](target.prototype) as any[]);
    }

    keys.forEach(key => {
        if (key === 'constructor') {
            return;
        }

        const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (descriptor && typeof descriptor.value === 'function') {
            Object.defineProperty(target.prototype, key, promisifyMethod(target, key, descriptor));
        }
    });

    return target;
}

function promisifyMethod(target, key, descriptor) {
    const fn = descriptor.value;
    if (typeof fn !== 'function') {
        throw new SyntaxError(`@promisify can only be used on functions, not: ${fn}`);
    }

    return {
        ...descriptor,
        value() {
            return promisifyCall(this, fn, target, key, descriptor);
        }
    };
}
