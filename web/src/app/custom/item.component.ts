export class Item {
    _name: string;
    _quantity: number;

    constructor(name?: any, quantity?: any) {
        this._name = name;
        this._quantity = quantity;
    }

    public set name(name: string) {
        this.name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public get quantity(): number {
        return this._quantity;
    }
}
