import GraphNode from "./GraphNode/GraphNode";

//Nongenetic neural network using graph representation
export default class NeuralNetwork
{
    private graph: Array<GraphNode>;
    // inputs' id of neural network
    private inputs: Array<number>;
    // outputs' id of neural network
    private outputs: Array<number>;
    
    public constructor(graph: Array<GraphNode>, inputs: Array<number>, outputs: Array<number>)
    {
        this.inputs = inputs;
        this.outputs = outputs;
        this.graph = graph;

        if(this.inputs.reduce((b, i) => b || (this.graph.findIndex(graph => graph.from==i) == -1), false))
            throw new Error("Inputs should be in graph");
    }
    
    public predict(input: Array<number>): Array<number>
    {
        const output: {[key: number]: number} = this.outputs.reduce((object: {[key: number]: number}, out: number) => {
            object[out] = 0;
            return object;
        }, {})
        console.log(output);
        const nodeStack: Array<{id: number, sum: number}> = this.graph.map(graph => {
            let inputIndex = this.inputs.findIndex(i => i == graph.from);
            if(inputIndex != -1)
                return {id: graph.from, sum: input[inputIndex]};
            else
                return {id: graph.from, sum: graph.bias}
        });

        while(nodeStack.length > 0)
        {
            const current = nodeStack.pop() as {id: number, sum: number};

            if(output[current.id] || output[current.id] === 0)
            {
                output[current.id] += current.sum;
                continue;
            }

            const graphNode = this.graph.find(graph => graph.from == current.id) as GraphNode;
            for(let connection of graphNode.connections)
            {
                nodeStack.push({
                    id: connection.to, 
                    sum: connection.weight*current.sum
                });
            }
        }

        return Object.values(output);
    }

}