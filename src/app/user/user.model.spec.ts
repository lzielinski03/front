import { User } from "./user.model";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InvalidPropertyAssignment } from "../shared/validators/invalid-property-assignment";

describe('UserModel', () => {
    let user: User;
    // let component: User;
    // let fixture: ComponentFixture<User>;
    // beforeEach(async(() => {
    //   TestBed.configureTestingModule({
    //     declarations: [ UserComponent ]
    //   })
    //   .compileComponents();
    // }));
  
    beforeEach(() => {
        //   fixture = TestBed.createComponent(User);
        //   component = fixture.componentInstance;
        //   fixture.detectChanges();
    });

    it('should create', () => {
        user = new User().create('Lege03', 'zielinski', 'lzielinski03@gmail.com', '12Aa3456', new Date());
        expect(user).toBeTruthy();
        expect(user.username).toEqual('Lege03');
        expect(user.lastname).toEqual('zielinski');
        expect(user.email).toEqual('lzielinski03@gmail.com');
        expect(user.password).toEqual('12Aa3456');
        expect(user.registerDate).toBeTruthy();
    });
  
    it('should raise a exception settting username', () => {
        try {
            expect(user.username = 'lege').toThrowError(InvalidPropertyAssignment);
        } catch(error) {
            expect(error instanceof InvalidPropertyAssignment).toBeTruthy();
            if (error instanceof InvalidPropertyAssignment) {
                expect(error).toEqual(new InvalidPropertyAssignment('Invalid username'));
                expect(error.message).toEqual('Invalid username');
            }
        }
    });

    it('should raise a exception setting lastname', () => {
        try {
            expect(user.lastname = 'lege').toThrowError(InvalidPropertyAssignment);
        } catch(error) {
            expect(error instanceof InvalidPropertyAssignment).toBeTruthy();
            if (error instanceof InvalidPropertyAssignment) {
                expect(error).toEqual(new InvalidPropertyAssignment('Invalid lastname'));
                expect(error.message).toEqual('Invalid lastname');
            }
        }
    });

    it('should raise a exception setting email', () => {
        try {
            expect(user.email = 'lege').toThrowError(InvalidPropertyAssignment);
        } catch(error) {
            expect(error instanceof InvalidPropertyAssignment).toBeTruthy();
            if (error instanceof InvalidPropertyAssignment) {
                expect(error).toEqual(new InvalidPropertyAssignment('Invalid email'));
                expect(error.message).toEqual('Invalid email');
            }
        }
    });

    it('should raise a exception setting password', () => {
        try {
            expect(user.password = 'lege').toThrowError(InvalidPropertyAssignment);
        } catch(error) {
            expect(error instanceof InvalidPropertyAssignment).toBeTruthy();
            if (error instanceof InvalidPropertyAssignment) {
                expect(error).toEqual(new InvalidPropertyAssignment('Invalid password'));
                expect(error.message).toEqual('Invalid password');
            }
        }
    });

    it('should deserealize a object', () => {
        let obj = {username: 'Lege03', lastname: 'zielinski', email: 'lzielinski03@gmail.com', password: '12Aa3456', registerDate: 'new Date()'};
        let newUser: User;
        try {
            newUser = new User().deserialize(obj);
        } catch (error) {
            expect(error).toBeFalsy();
            console.log('error', error);
        }
        expect(newUser).toBeTruthy();
    });

    it('should parse a JSON', () => {
        const obj = {username: 'Lege03', lastname: 'zielinski', email: 'lzielinski03@gmail.com', password: '12Aa3456', registerDate: 'new Date()'};
        const stringJSON = JSON.stringify(obj);
        let newUser: User;
        
        try {
            newUser = new User().parseJson(stringJSON);
        } catch (error) {
            expect(error).toBeFalsy();
            console.log('error', error);
        }
        expect(newUser).toBeTruthy();
    });

    it('should stringify a User', () => {
        user = new User().create('Lege03', 'zielinski', 'lzielinski03@gmail.com', '12Aa3456', new Date());
        expect(user).toBeTruthy();
        
        let newUser: User;
        let stringJSON: string;
        
        try {
            let stringJSON = user.stringify();
            newUser = new User().parseJson(stringJSON);

            expect(stringJSON).toEqual(newUser.stringify());
            expect(user.username).toEqual(newUser.username);
            expect(user.lastname).toEqual(newUser.lastname);
            expect(user.email).toEqual(newUser.email);
            expect(user.password).toEqual(newUser.password);
            
        } catch (error) {
            expect(error).toBeFalsy();
            console.log('error', error);
        }
    });

});
  