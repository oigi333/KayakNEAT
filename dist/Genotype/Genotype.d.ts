import Node from "./Node/Node";
import Connection from "./Connection/Connection";
export default class Genotype {
    nodes: Array<Node>;
    connections: Array<Connection>;
    constructor(inputSize: number, outputSize: number);
}
