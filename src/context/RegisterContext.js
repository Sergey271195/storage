import React, {createContext, useReducer} from 'react';
import {RegisterReducer} from '../context/RegisterReducer';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    description: '',
    photo: '',
    skills: '',
    phone: ''
}

export const RegisterContext = createContext();

const RegisterContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(RegisterReducer, initialState)

    return (
        <RegisterContext.Provider>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterContextProvider
