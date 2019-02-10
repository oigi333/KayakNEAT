import Node, {NodeType} from "./Node/Node"
import Connection from "./Connection/Connection";

export default class Genotype
{
    public nodes: Array<Node>;
    public connections: Array<Connection>

    public constructor(inputSize: number, outputSize: number)
    {
        this.nodes = Array(inputSize).fill(null).map((_, i: number)=>new Node(i, NodeType.Input));
        this.nodes.push(...Array(outputSize).fill(null).map((_, i: number)=>new Node(inputSize+i, NodeType.Output)));
        this.connections = [];

        for(let i = 0; i < inputSize; i++)
            for(let j = 0; j < outputSize; j++)
                this.connections.push(new Connection(i, inputSize+j, 2*Math.random()-1));
    }
}