export const RegisterReducer = (state, action) => {
    switch(action.type) {
        case "EMAIL": {
            return {
                ...state, email: action.email
            }
        }
        case "PHONE": {
            return {
                ...state, phone: action.phone
            }
        }
        case "PHONE": {
            return {
                ...state, phone: action.phone
            }
        }
        case "PHONE": {
            return {
                ...state, phone: action.phone
            }
        }
        case "PHONE": {
            return {
                ...state, phone: action.phone
            }
        }
        case "PHONE": {
            return {
                ...state, phone: action.phone
            }
        }
        case "PHONE": {
            return {
                ...state, phone: action.phone
            }
        }
        default: {
            return state
        }
    }
}
