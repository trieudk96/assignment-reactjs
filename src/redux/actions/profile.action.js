import httpClient from '../../utilities/httpClient';

export const ProfileActionTypes={
    FETCH_PROFILE_COMPLETE:'FETCH_PROFILE_COMPLETE',
    FETCH_PROFILE_ERROR:'FETCH_PROFILE_ERROR',
    UPDATE_PROFILE_COMPLETE:'UPDATE_PROFILE_COMPLETE',
}

export const FetchProfile = () => {
	return (dispatch, getState) => {
    debugger;
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

export const UpdateUser = () => {
	return (dispatch, getState) => {
    debugger;
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