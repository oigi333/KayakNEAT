"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importStar(require("./Node/Node"));
const Connection_1 = __importDefault(require("./Connection/Connection"));
class Genotype {
    constructor(inputSize, outputSize) {
        this.nodes = Array(inputSize).fill(null).map((_, i) => new Node_1.default(i, Node_1.NodeType.Input));
        this.nodes.push(...Array(outputSize).fill(null).map((_, i) => new Node_1.default(inputSize + i, Node_1.NodeType.Output)));
        this.connections = [];
        for (let i = 0; i < inputSize; i++)
            for (let j = 0; j < outputSize; j++)
                this.connections.push(new Connection_1.default(i, inputSize + j, 2 * Math.random() - 1));
    }
}
exports.default = Genotype;
