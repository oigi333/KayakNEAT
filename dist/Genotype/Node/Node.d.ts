export declare enum NodeType {
    Input = 0,
    Hidden = 1,
    Output = 2
}
export default class Node {
    id: number;
    nodeType: NodeType;
    constructor(id: number, nodeType: NodeType);
}
