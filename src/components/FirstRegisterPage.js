import React, { useState } from 'react'

const FirstRegisterPage = () => {

    const [email, setEmail] = useState('');

    return (
        <div style = {{display: 'flex'}}>
            <label>Укажите ваш электронный адрес</label>
            <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value = {email}/>
        </div>
    )

}

export default FirstRegisterPage
