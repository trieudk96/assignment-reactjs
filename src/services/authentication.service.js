import cookie from "../utilities/cookie";
import CookieConfig  from "../AppConfig";
const AuthenticationService = {
    IsLogined:()=>{
        return !cookie.get(CookieConfig.token)
    } ,
    
}

export default AuthenticationService;