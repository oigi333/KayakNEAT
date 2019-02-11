import Genotype from "./Genotype/Genotype";

const g = new Genotype(1, 2);

console.log(g.nodes);
console.log(g.connections);
console.log(g.getNeuralNetwork().predict(10));

