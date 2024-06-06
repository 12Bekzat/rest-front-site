import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useMainService from '../services/MainService';

const Users = () => {
    const [users, setUsers] = useState([])
    const [searchRest, setSearchRest] = useState('')
    const [searchPost, setSearchPost] = useState('')
    const { getAllowUsers, deleteUser, accessUser } = useMainService();

    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);


    const hanleUsers = () => {
        getAllowUsers()
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(err => console.log(err));
    }

    const deleteUserEvent = (id) => {
        deleteUser(id)
            .then(() => {
                hanleUsers();
            })
            .catch(err => console.log(err));
    }

    const accessUserEvent = (id) => {
        accessUser(id)
            .then(() => {
                hanleUsers();
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        hanleUsers()
    }, [])

    return (
        <div className='main'>
            <div className="main__row">
                <div className="title" style={{ marginTop: 40 }}>Рестораны</div>
                <div className="table">
                    <div className="table__filter">
                        <div className="table__row"></div>
                        <div className="table__row">
                            <div className="table__search">
                                <input autoComplete='off' type="text" id='search' placeholder='Поиск по имени' 
                                value={searchRest} onChange={e => setSearchRest(e.target.value)}/>
                                <label htmlFor="search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="table__body">
                        <div className="table__top" style={
                            { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                            <div className="table__item">Id</div>
                            <div className="table__item">Название</div>
                            <div className="table__item">Контактное лицо</div>
                            <div className="table__item">Телефон</div>
                            <div className="table__item">Email</div>
                            <div className="table__item">Часы работы</div>
                            <div className="table__item">Адрес</div>
                            <div className="table__item">Действие</div>
                        </div>
                        <div className="table__data">
                            {users.filter(item => item.role.includes("ROLE_REST"))
                            .filter(item => item.name.toLowerCase().includes(searchRest.toLowerCase()))
                            .map((item, index) => (<div key={item.id} className="table__info" style={
                                { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                                <div className="table__item">
                                    <div className="table__item-type id">{item.id}</div>
                                </div>
                                <div className="table__item">
                                    {item.name}
                                </div>
                                <div className="table__item">
                                    {item.contactPerson}
                                </div>
                                <div className="table__item">
                                    {item.phone}
                                </div>
                                <div className="table__item">
                                    {item.email}
                                </div>
                                <div className="table__item">
                                    {`${item.workTime}`}
                                </div>
                                <div className="table__item">
                                    {item.address}
                                </div>
                                <div className="table__item">
                                    <Link to={"/user/edit/" + item.id} className="table__icon">
                                        <i className="fa-solid fa-pen"></i>
                                    </Link>
                                    <div className="table__icon del"
                                        onClick={() => deleteUserEvent(item.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>

                <div className="title" style={{ marginTop: 40 }}>Поставщики</div>
                <div className="table">
                    <div className="table__filter">
                        <div className="table__row"></div>
                        <div className="table__row">
                            <div className="table__search">
                                <input autoComplete='off' type="text" id='search' placeholder='Поиск по имени' 
                                value={searchPost} onChange={e => setSearchPost(e.target.value)}/>
                                <label htmlFor="search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </label>
                            </div>
                        </div>  
                    </div>
                    <div className="table__body">
                        <div className="table__top" style={
                            { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                            <div className="table__item">Id</div>
                            <div className="table__item">Название</div>
                            <div className="table__item">Контактное лицо</div>
                            <div className="table__item">Телефон</div>
                            <div className="table__item">Email</div>
                            <div className="table__item">Часы работы</div>
                            <div className="table__item">Адрес</div>
                            <div className="table__item">Действие</div>
                        </div>
                        <div className="table__data">
                            {users.filter(item => item.role.includes("ROLE_POST"))
                            .filter(item => item.name.toLowerCase().includes(searchPost.toLowerCase()))
                            .map((item, index) => (<div key={item.id} className="table__info" style={
                                { gridTemplateColumns: '1fr repeat(6, 2fr) 1fr' }}>
                                <div className="table__item">
                                    <div className="table__item-type id">{item.id}</div>
                                </div>
                                <div className="table__item">
                                    {item.name}
                                </div>
                                <div className="table__item">
                                    {item.contactPerson}
                                </div>
                                <div className="table__item">
                                    {item.phone}
                                </div>
                                <div className="table__item">
                                    {item.email}
                                </div>
                                <div className="table__item">
                                    {`${item.workTime}`}
                                </div>
                                <div className="table__item">
                                    {item.address}
                                </div>
                                <div className="table__item">
                                    <Link to={"/user/edit/" + item.id} className="table__icon">
                                        <i className="fa-solid fa-pen"></i>
                                    </Link>
                                    <div className="table__icon del"
                                        onClick={() => deleteUserEvent(item.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;