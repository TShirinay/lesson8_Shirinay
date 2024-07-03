import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from "./components/userSlice/UserSlice";
import './App.css'

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    const handleRegister = () => {
        if (!username || !password || !confirmPassword) {
            setMessage('Все поля должны быть заполнены');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Пароли не совпадают');
            return;
        }

        const userExists = users.some(user => user.username === username);
        if (userExists) {
            setMessage('Пользователь с таким именем уже существует');
            return;
        }

        dispatch(addUser({ username, password }));
        setMessage('Регистрация прошла успешно');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <div>
                <label>Имя - </label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Пароль - </label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Подтвердите пароль - </label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>
            <button onClick={handleRegister}>Зарегистрироваться</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default App;