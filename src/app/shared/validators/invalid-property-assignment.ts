export class InvalidPropertyAssignment extends Error {
    constructor(private _message?: string) {
        super(); // 'Error' breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }

    get message(): string {
        return this._message;
    }
}