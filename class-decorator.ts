function ClassDecoratorDemo(version: number, type: string) {
    return function (
        target: Function
    ) {
        console.log("ClassDecoratorDemo(" + version + ", '" + type + "') called on: ", target);
    }
}

@ClassDecoratorDemo(1.1, "Generic")
export class ClassDecoratorExample {

}