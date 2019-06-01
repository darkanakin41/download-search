export default class User {
    id: number;
    username: String;
    firstName: String;
    lastName: String;
    email: String;
    roles: Array<String>;

    constructor(data: any) {
        this.id = data.id;
        this.username = data.username;
        this.firstName = data.firstname;
        this.lastName = data.lastname;
        this.email = data.email;
        this.roles = data.roles;
    }

    isGranted(role:String){
        return this.roles.indexOf(role) !== -1;
    }
}
