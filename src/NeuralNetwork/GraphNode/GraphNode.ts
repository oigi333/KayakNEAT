export default class GraphNode
{
    public from: number;
    public bias: number
    public connections: Array<{to: number, weight: number}>;

    public constructor(from: number, bias: number, connections: Array<{to: number, weight: number}>)
    {
        this.from = from;
        this.bias = bias;
        this.connections = connections;
    }


}