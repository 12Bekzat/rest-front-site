import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const LogOut = () => {
    const nav = useNavigate();
    const { role, setAuth, setRole } = useContext(AuthContext);

    useEffect(() => {
        localStorage.removeItem('token');
        setRole([]);
        setAuth(false);
        nav("/login")
    }, [])

    return (
        <div>

        </div>
    );
};

export default LogOut;