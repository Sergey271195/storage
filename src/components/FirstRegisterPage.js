import React, { useState, useContext } from 'react'
import { RegisterContext } from '../context/RegisterContext';

const FirstRegisterPage = () => {

    const [formError, setFormError] = useState({ email: '', password: '' });

    const { state, dispatch } = useContext(RegisterContext);

    const handleServerResponse = (responseStatus) => {
        if (responseStatus === 200) {
            checkPassword();
        } else {
            setFormError({ ...formError, email: 'Пользователь с такой почтой уже существует' })
        }
    };

    const checkEmailIsValid = () => {
        if (state.email) {
            console.log("SENDING EMAIL")
            console.log(state)
            //fetch('/api/expert/check-email')
            //    .then(response => handleServerResponse(response.status))
            handleServerResponse(200);
        } else {
            setFormError({ ...formError, email: 'Укажите электронную почту' })
        }
    };

    const checkPassword = () => {
        if (state.password) {
            if (state.password === state.confPassword) {
                switchPage();
            } else {
                setFormError({ ...formError, password: 'Пароли не совпадают' });
            }
        } else {
            setFormError({ ...formError, password: 'Укажите пароль' });
        }
    };

    const switchPage = () => {
        dispatch({ type: "PAGE", page: 2 })
    };

    return (
        <div style = {{display: 'flex', justifyContent: 'center'}}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%',  }}>
                <label>Укажите ваш электронный адрес</label>
                <input type="text" placeholder="Электронная почта" onChange={(event) => dispatch({ type: "EMAIL", email: event.target.value })} value={state.email} />
                <div style = {{height: '10px'}}>{formError.email}</div>
                <label>Укажите пароль</label>
                <input type="text" placeholder="Пароль" onChange={(event) => dispatch({ type: "PASSWORD", password: event.target.value })} value={state.password} />
                <label>Повторите пароль</label>
                <input type="text" placeholder="Подтвердите парол" onChange={(event) => dispatch({ type: "CONFIRM_PASSWORD", confPassword: event.target.value })} value={state.confPassword} />
                <div style = {{height: '10px'}}>{formError.password}</div>       
                <button style = {{marginTop: '10px'}} onClick={checkEmailIsValid}>Далее</button>
            </div>
        </div>
    )

}

export default FirstRegisterPage;
