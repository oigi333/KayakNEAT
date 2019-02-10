export default class GraphNode {
    from: number;
    bias: number;
    connections: Array<{
        to: number;
        weight: number;
    }>;
    constructor(from: number, bias: number, connections: Array<{
        to: number;
        weight: number;
    }>);
}
