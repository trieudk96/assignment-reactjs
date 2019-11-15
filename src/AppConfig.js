import cookie from "./utilities/cookie"
const TokenCookieName = "token";
 const AppConfig ={
    baseUrl:"http://localhost:5000/api",
    timeout:10000,
    AuthenHeader:(token) => `Bearer ${token || cookie.get(TokenCookieName)}`,
    TokenCookieName
}


 
export default AppConfig;
