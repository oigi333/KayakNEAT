"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Genotype_1 = __importDefault(require("./Genotype/Genotype"));
const g = new Genotype_1.default(1, 2);
console.log(g.nodes);
console.log(g.connections);
console.log(g.getNeuralNetwork().predict(10));
