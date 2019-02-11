"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Input"] = 0] = "Input";
    NodeType[NodeType["Hidden"] = 1] = "Hidden";
    NodeType[NodeType["Output"] = 2] = "Output";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
class Node {
    constructor(id, nodeType, bias = 0) {
        this.id = id;
        this.nodeType = nodeType;
        this.bias = bias;
    }
}
exports.default = Node;
