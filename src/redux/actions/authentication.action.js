import httpClient from '../../utilities/httpClient';
import cookie from '../../utilities/cookie'

export const AuthenticationActionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILE: 'LOGIN_FAILE'
}

export const Login = authendata => {
  return (dispatch, getState) => {
    httpClient.post(`/login`, authendata)
      .then(res => {
        if (res.susscess) {
          const data = res.payload.split(";");
          cookie.set('token', data[1]);
          dispatch({ type: AuthenticationActionTypes.LOGIN_SUCCESS, data: { userId: data[0], token: data[1] } });
          // props.props.history.push("/profile",{userId:data[0]});
        } else {
          dispatch({ type: AuthenticationActionTypes.LOGIN_FAILE, payload: 'FALSE' });
        }
      })
  }
}






// export const  Login = (data) => {
//     return {
//         type:AuthenticationActionTypes.LOGIN,
//         username
//     }
// }
// export const  LoginSuccess = ({username}) => {
//     return {
//         type:AuthenticationActionTypes.LOGIN_SUCCESS,
//         username
//     }
// }
// export  const LoginFaile = ({username}) =>{
//     return {
//         type:AuthenticationActionTypes.LOGIN_FAILE,
//         username
//     }
// }
