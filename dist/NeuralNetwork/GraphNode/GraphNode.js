"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GraphNode {
    constructor(from, bias, connections) {
        this.from = from;
        this.bias = bias;
        this.connections = connections;
    }
}
exports.default = GraphNode;
