export const AuthenticationActionTypes={
    LOGIN:'LOGIN',
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGIN_FAILE:'LOGIN_FAILE'
}

export function Login({username}){
    return {
        type:AuthenticationActionTypes.LOGIN,
        username
    }
}
export function Login({username,password}){
    return {
        type:AuthenticationActionTypes.LOGIN,
        username
    }
}
export function Login({username,password}){
    return {
        type:AuthenticationActionTypes.LOGIN,
        username
    }
}