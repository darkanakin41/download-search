export default class Session{

    public static get(key:string){
        if(sessionStorage.getItem(key)){
            return sessionStorage.getItem(key);
        }
        return null;
    }

    public static set(key:string, value:any) {
        sessionStorage.setItem(key, value);
        return value;
    }

    public static getObject(key:string){
        if(sessionStorage.getItem(key) !== null){
            return JSON.parse(<string> sessionStorage.getItem(key));
        }
        return null;
    }

    public static setObject(key:string, value:any) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return value;
    }

    public static destroy(){
        sessionStorage.clear();
    }

}
