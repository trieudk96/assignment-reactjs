import {AuthenticationActionTypes} from "../actions/authentication.action"

const initState = {}
const authenticationReducer = (state = initState, action) => {
	switch (action.type) {
		case AuthenticationActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				userId: action.data.userId,
            }
            case AuthenticationActionTypes.LOGIN_FAILE:
			return {
				...state,
				isAuthenticated: false,
			}
		default:
			return state
	}
}

export default authenticationReducer
