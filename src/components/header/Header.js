import React, { useContext, useEffect, useRef, useState } from 'react';
import { Avatar, Dashboard, DashboardActive, Order, OrderActive, Purchase, PurchaseActive, Settings, SettingsActive, Stock, StockActive, Userslist, UserslistActive } from '../../images';
import { Link, useLocation } from 'react-router-dom';
import MenuItem from '../menuItem/MenuItem';
import { AuthContext } from '../../providers/AuthProvider';
import useMainService from '../../services/MainService';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [header, setHeader] = useState(true);
    const [user, setUser] = useState(null);
    const menuRef = useRef(null);
    const location = useLocation();
    const { isAuth, setRole, role } = useContext(AuthContext);
    const { getRoles, getMyUser } = useMainService();

    useEffect(() => {
        if (isAuth) {
            getRoles()
                .then(data => {
                    setRole(data);
                })
                .catch(err => console.log(err));

            getMyUser()
                .then(data => setUser(data))
                .catch(err => console.log(err));
        }
    }, [isAuth])

    useEffect(() => {
        if (location.pathname == '/login' || location.pathname == '/register')
            setHeader(false);
        else {
            setHeader(true);
        }
    }, [location])

    useEffect(() => {
        const handleClose = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        if (header) document.addEventListener('mousedown', handleClose);

        return () => {
            if (header) document.removeEventListener('mousedown', handleClose);
        }
    })

    return (
        header ? <div className={'header' + (open ? ' open' : '')}>
            <div className="header__menu menu" ref={menuRef}>
                <div className="menu__logo">
                    {/* <div className="menu__img">
                        <img src="" alt="" />
                    </div> */}
                    <div className="menu__my">
                        {user ? user.name[0] : 'T'}
                    </div>
                    <div className="menu__title">{user ? user.name : 'Tomato'}</div>
                </div>
                <div className="menu__links">
                    {role.filter(item => item.name === "ROLE_POST").length > 0 ? <MenuItem title={'Dashboard'} img={Dashboard} imgActive={DashboardActive} list={
                        [{ name: 'Общая статистика', link: '/dashboard' },
                        { name: 'Продукты', link: '/dashboard/products' },
                        ]
                    } >
                    </MenuItem> : null}
                    {role.filter(item => item.name === "ROLE_ADMIN").length > 0 ? <MenuItem title={'Пользователи'} img={Userslist} imgActive={UserslistActive} list={[
                        { name: 'Список', link: '/users' },
                        { name: 'Подтвердить', link: '/user/allow' },
                        { name: 'Создать', link: '/user/create' },
                    ]}>
                    </MenuItem> : null}
                    {role.filter(item => item.name === "ROLE_POST").length > 0 ?
                        <MenuItem title={'Продукты'} img={Stock} imgActive={StockActive} list={[
                            { name: 'Список', link: '/products' },
                            { name: 'Создать', link: '/product/create' },
                        ]}>
                        </MenuItem> : null}
                    {role.filter(item => item.name === "ROLE_ADMIN").length > 0 ? null :
                        <MenuItem title={'Заказы'} img={Order} imgActive={OrderActive} link={
                            role.filter(item => item.name === "ROLE_POST").length > 0 ? '/orders/post' : '/orders'
                        }>
                        </MenuItem>}
                    <MenuItem title={'Настройки'} img={Settings} imgActive={SettingsActive} list={[
                        { name: 'Профиль', link: '/profile' },
                        { name: 'Изменить', link: '/my/edit' },
                        { name: 'Выйти', link: '/logout' },
                    ]}>
                    </MenuItem>
                </div>
            </div>
            <div className="header__row">
                <div className="header__burger" onClick={() => setOpen(open => !open)}>
                    <span></span>
                </div>
                <div className="header__links">
                    <Link to={'/'} className="header__link">Главная</Link>
                    <Link to={'/catalog'} className="header__link">Каталог</Link>
                    <Link to={'/about'} className="header__link">О нас</Link>
                    <Link to={'/profile'} className="header__acc">
                        <div className="header__img">
                            <img src={user ? user.logotype : Avatar} alt="" />
                        </div>
                        <div className="header__name">{user ? user.username : 'no acc'}</div>
                    </Link>
                </div>
            </div>
        </div> : null
    );
};

export default Header;