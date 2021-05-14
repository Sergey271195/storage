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
        case "FIRST_NAME": {
            return {
                ...state, firstName: action.firstName
            }
        }
        case "LAST_NAME": {
            return {
                ...state, lastName: action.lastName
            }
        }
        case "BIRTH_DATE": {
            return {
                ...state, birthDate: action.birthDate
            }
        }
        case "PASSWORD": {
            return {
                ...state, password: action.password
            }
        }
        case "CONFIRM_PASSWORD": {
            return {
                ...state, confPassword: action.confPassword
            }
        }
        case "PHOTO": {
            return {
                ...state, photo: action.photo
            }
        }
        case "DESCRIPTION": {
            return {
                ...state, description: action.description
            }
        }
        case "SKILLS": {
            return {
                ...state, skills: action.skills
            }
        }
        case "PAGE": {
            return {
                ...state, page: action.page
            }
        }
        default: {
            return state
        }
    }
}
