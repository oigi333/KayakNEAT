
export enum NodeType
{
    Input,
    Hidden,
    Output,
}

export default class Node
{
    public id: number;
    public bias: number;
    public nodeType: NodeType;

    public constructor(id: number, nodeType: NodeType, bias: number = 0)
    {
        this.id = id;
        this.nodeType = nodeType;
        this.bias = bias;
    }
}