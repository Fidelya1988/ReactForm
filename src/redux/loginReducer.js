const SET_LOGIN_DATA = 'SET-LOGIN-DATA';
export const loginData = (login, bio) => ({ type: SET_LOGIN_DATA, login, bio })

const intialState = {

    login: 'Kate',
    bio: 'I love React'


}
const loginReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                login: action.login,
                bio: action.bio
            }
        default: return state
    }

}

export default loginReducer;