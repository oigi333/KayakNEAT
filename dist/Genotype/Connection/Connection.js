"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connection {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
        this.isEnabled = true;
    }
}
exports.default = Connection;
