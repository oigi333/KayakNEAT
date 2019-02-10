import GraphNode from "./GraphNode/GraphNode";

//Nongenetic neural network using graph representation
export default class NeuralNetwork
{
    public graph: Array<GraphNode>;
    // inputs' id of neural network
    public input: Array<number>;
    // outputs' id of neural network
    public output: Array<number>;
    
    public constructor(graph: Array<GraphNode>, input: Array<number>, output: Array<number>)
    {
        this.input = input;
        this.output = output;
        this.graph = graph;
    }
    
    public predict(input: Array<number>): Array<number>
    {
        var output = this.output.reduce((object: {[key: number]: number}, out: number) => object[out] = 0, {})
        return Object.values(output);
    }

}