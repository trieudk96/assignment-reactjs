import httpClient from '../../utilities/httpClient';

export const ProfileActionTypes={
    FETCH_PROFILE_COMPLETE:'FETCH_PROFILE_COMPLETE',
    FETCH_PROFILE_ERROR:'FETCH_PROFILE_ERROR',

    UPDATE_PROFILE_COMPLETE:'UPDATE_PROFILE_COMPLETE',
    UPDATE_PROFILE_ERROR:'UPDATE_PROFILE_ERROR',

    BINDING_USER:'BINDING_USER',

    REGISTER_COMPLETE: 'REGISTER_COMPLETE',
    REGISTER_ERROR: 'REGISTER_ERROR'

}

export const FetchProfile = () => {
	return (dispatch, getState) => {
    httpClient.get(`/user/${getState().auth.userId}`)
      .then(res => {
        if(res){
          dispatch({ type: ProfileActionTypes.FETCH_PROFILE_COMPLETE, data:res});
        }else{
          dispatch({type:ProfileActionTypes.FETCH_PROFILE_ERROR});
        }
      }).catch(e=>{
        dispatch({type:'API_ERROR',data:e});
    });
	}
}

export const UpdateUser = userData => {
	return (dispatch, getState) => {
    httpClient.put(`/user/${getState().auth.userId}`,userData)
      .then(res => {
        if(res){
          dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_COMPLETE, data:res});
        }else{
          dispatch({type:ProfileActionTypes.UPDATE_PROFILE_ERROR});
        }
      }).catch(e=>{
        dispatch({type:'API_ERROR',data:e});
    });
	}
}

export const RegisterUser = userData => {
	return (dispatch, getState) => {
    httpClient.post(`/user`,userData)
      .then(res => {
        debugger
        if(res){
          dispatch({ type: ProfileActionTypes.REGISTER_COMPLETE, data:res});
        }else{
          dispatch({type:ProfileActionTypes.REGISTER_ERROR});
        }
      }).catch(e=>{
        dispatch({type:'API_ERROR',data:e});
    });
	}
}