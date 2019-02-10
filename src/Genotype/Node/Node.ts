
export enum NodeType
{
    Input,
    Hidden,
    Output,
}

export default class Node
{
    public id: number;
    public nodeType: NodeType;

    public constructor(id: number, nodeType: NodeType)
    {
        this.id = id;
        this.nodeType = nodeType;
    }
}