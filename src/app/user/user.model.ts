import { patternUsername, patternLastname, patternEmail, patternPassword } from "./user.properties";
import { InvalidPropertyAssignment } from "../shared/validators/invalid-property-assignment";
import { Deserializable } from "../shared/models/deserializable.model";

export class User implements Deserializable {

    private _username: string;
    private _lastname: string;
    private _email: string;
    private _password: string;
    private _registerDate: Date;
    // avatar image

    constructor() {};
    /*
    constructor(
        username: string,
        lastname: string,
        email: string,
        password: string,
        registerDate: Date,
    );
    constructor(
        username?: string,
        lastname?: string,
        email?: string,
        password?: string,
        registerDate?: Date,
    ) {
        this.username = username;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.registerDate = registerDate;
    }
    */

   create(username: string, lastname: string, email: string, password: string, registerDate: Date): User {
    this.username = username;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.registerDate = registerDate;
    return this;
}

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    parseJson(input: string): this {
        return this.deserialize(JSON.parse(input));
    }

    stringify(): string {
        return JSON.stringify(this);
    }

    /**
     * username getter
     */
    get username(): string {
        return this._username;
    }

    /**
     * username setter, if the input is invalid throw a error
     */
    set username(v: string) {
        const value = v.trim();
        if (!this.validateUsername(value)) throw new InvalidPropertyAssignment('Invalid username');
        this._username = value;
    }

    /**
     * lastname getter
     */
    get lastname(): string {
        return this._lastname;
    }

    /**
     * lastname setter, if the input is invalid throw a error
     */
    set lastname(v: string) {
        const value = v.trim();
        if (!this.validateLastname(value)) throw new InvalidPropertyAssignment('Invalid lastname');
        this._lastname = value;
    }

    /**
     * email getter
     */
    get email(): string {
        return this._email;
    }

    /**
     * email setter, if the input is invalid throw a error
     */
    set email(v: string) {
        const value = v.trim();
        if (!this.validatEmail(value)) throw new InvalidPropertyAssignment('Invalid email');
        this._email = value;
    }

    /**
     * password getter
     */
    get password(): string {
        return this._password;
    }

    /**
     * password setter
     */
    set password(v: string) {
        const value = v.trim();
        if (!this.validatPassword(value)) throw new InvalidPropertyAssignment('Invalid password');
        this._password = value;
    }

    /**
     * registerDate getter
     */
    get registerDate(): Date {
        return this._registerDate;
    }

    /**
     * registerDate setter
     */
    set registerDate(date: Date) {
        this._registerDate = date;
    }

    /**
     * Apply regex patern stored in properties to validate username
     */
    private validateUsername(username: string): boolean {
        return patternUsername.test(username);
    }

    /**
     * Apply regex patern stored in properties to validate lastname
     */
    private validateLastname(lastname: string): boolean {
        return patternLastname.test(lastname);
    }

    /**
     * Apply regex patern stored in properties to validate email
     */
    private validatEmail(email: string): boolean {
        return patternEmail.test(email);
    }

    /**
     * Apply regex patern stored in properties to validate password
     */
    private validatPassword(password: string): boolean {
        return patternPassword.test(password);
    }



}
