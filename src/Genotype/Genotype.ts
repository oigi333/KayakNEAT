import Node, {NodeType} from "./Node/Node"
import Connection from "./Connection/Connection";
import NeuralNetwork from "../NeuralNetwork/NeuralNetwork";
import GraphNode from "../NeuralNetwork/GraphNode/GraphNode";


export default class Genotype
{
    public nodes: Array<Node>;
    public connections: Array<Connection>

    public constructor(inputSize: number, outputSize: number)
    {
        this.nodes = Array(inputSize).fill(null).map((_, i: number)=>new Node(i, NodeType.Input));
        this.nodes.push(...Array(outputSize).fill(null).map((_, i: number)=>new Node(inputSize+i, NodeType.Output, 2*Math.random()-1)));
        this.connections = [];

        for(let i = 0; i < inputSize; i++)
            for(let j = 0; j < outputSize; j++)
                this.connections.push(new Connection(i, inputSize+j, 2*Math.random()-1));
    }

    public getNeuralNetwork(): NeuralNetwork
    {
        const graph: Array<GraphNode> = [];
        for(let connection of this.connections.filter(connection => connection.isEnabled))
        {
           
            let graphNode = graph.find(g => g.from == connection.from);
            if(graphNode !== undefined)
                graphNode.connections.push({to: connection.to, weight: connection.weight})
            else
            {
                const node = this.nodes.find(n => n.id == connection.from);
                const bias = node? node.bias: 0;
                graph.push(new GraphNode(connection.from, bias, [{to: connection.to, weight: connection.weight}]))
            }
        }
        const inputs: Array<number> = this.nodes.filter(node=>node.nodeType == NodeType.Input).map(node=>node.id);
        const outputs: Array<number> = this.nodes.filter(node=>node.nodeType == NodeType.Output).map(node=>node.id);

        return new NeuralNetwork(graph, inputs, outputs);
    }
}