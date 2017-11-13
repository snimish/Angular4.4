"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_decorator_1 = require("./class-decorator");
const method_decorator_1 = require("./method-decorator");
let cd = new class_decorator_1.ClassDecoratorExample();
let md = new method_decorator_1.MethodDecoratorExample();
md.printHelloMessage();
