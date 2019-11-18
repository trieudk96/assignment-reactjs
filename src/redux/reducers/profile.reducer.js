import {ProfileActionTypes} from "../actions/profile.action"

const initState = {currentUser:{
	email:"",
          dob: "",
          emailOtpIn: "",
          gender: "0",
          id: 0,
          mobileNumber: "",
          name: "",
          password: ""
}}
const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case ProfileActionTypes.FETCH_PROFILE_COMPLETE:
			return {
				...state,
				currentUser: action.data,
            }
            case ProfileActionTypes.FETCH_PROFILE_ERROR:
			return {
                ...state,
                currentUser:{}
            }
            case ProfileActionTypes.UPDATE_PROFILE_COMPLETE:
			return {
				...state,
				updated:true
			}
			case ProfileActionTypes.BINDING_USER:
			return {
				...state,
				currentUser:{...state.currentUser,[action.data.name]:action.data.value}
			}
		default:
			return state
	}
}

export default profileReducer
