import Node from "./Node/Node";
import Connection from "./Connection/Connection";
import NeuralNetwork from "../NeuralNetwork/NeuralNetwork";
export default class Genotype {
    nodes: Array<Node>;
    connections: Array<Connection>;
    constructor(inputSize: number, outputSize: number);
    getNeuralNetwork(): NeuralNetwork;
}
