
export default class Connection
{
    public from: number;
    public to: number;
    public weight: number;
    public isEnabled: boolean;
    public innovationNumber?: number;

    public constructor(from: number, to: number, weight: number)
    {
        this.from = from;
        this.to = to;
        this.weight = weight;
        this.isEnabled = true;
    }
}