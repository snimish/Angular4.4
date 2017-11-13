export function MethodDecorator(
    target: Object, 
    propertyKey: string, 
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

export class MethodDecoratorExample {
    @MethodDecorator
    printHelloMessage(): void {
        console.log("Hello there!!");
    }
}