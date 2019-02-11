import GraphNode from "./GraphNode/GraphNode";
export default class NeuralNetwork {
    private graph;
    private inputs;
    private outputs;
    constructor(graph: Array<GraphNode>, inputs: Array<number>, outputs: Array<number>);
    predict(...input: Array<number>): Array<number>;
}
