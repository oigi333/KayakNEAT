export default class Connection {
    from: number;
    to: number;
    weight: number;
    isEnabled: boolean;
    innovationNumber?: number;
    constructor(from: number, to: number, weight: number);
}
