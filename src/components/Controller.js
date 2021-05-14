import React, { useContext } from 'react';
import { RegisterContext } from '../context/RegisterContext';
import FirstRegisterPage from './FirstRegisterPage';
import SecondRegisterPage from './SecondRegisterPage';

const Controller = () => {

    const { state } = useContext(RegisterContext);

    switch (state.page) {
        case 1: {
            return <FirstRegisterPage />
        }
        case 2: {
            return <SecondRegisterPage />
        }
        default: {
            return <FirstRegisterPage />
        }
    }
}

export default Controller;
