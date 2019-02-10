"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Nongenetic neural network using graph representation
class NeuralNetwork {
    constructor(graph, inputs, outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
        this.graph = graph;
        if (this.inputs.reduce((b, i) => b || (this.graph.findIndex(graph => graph.from == i) == -1), false))
            throw new Error("Inputs should be in graph");
    }
    predict(input) {
        const output = this.outputs.reduce((object, out) => {
            object[out] = 0;
            return object;
        }, {});
        console.log(output);
        const nodeStack = this.graph.map(graph => {
            let inputIndex = this.inputs.findIndex(i => i == graph.from);
            if (inputIndex != -1)
                return { id: graph.from, sum: input[inputIndex] };
            else
                return { id: graph.from, sum: graph.bias };
        });
        while (nodeStack.length > 0) {
            const current = nodeStack.pop();
            if (output[current.id] || output[current.id] === 0) {
                output[current.id] += current.sum;
                continue;
            }
            const graphNode = this.graph.find(graph => graph.from == current.id);
            for (let connection of graphNode.connections) {
                nodeStack.push({
                    id: connection.to,
                    sum: connection.weight * current.sum
                });
            }
        }
        return Object.values(output);
    }
}
exports.default = NeuralNetwork;
