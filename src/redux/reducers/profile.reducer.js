import {ProfileActionTypes} from "../actions/profile.action"

const initState = {}
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
			}
		default:
			return state
	}
}

export default profileReducer
