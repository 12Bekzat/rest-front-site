import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Dashboard, DashboardActive, Order, OrderActive, Purchase, PurchaseActive, Settings, SettingsActive, Stock, StockActive, Userslist, UserslistActive } from '../../images';
import { Link, useLocation } from 'react-router-dom';
import MenuItem from '../menuItem/MenuItem';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [header, setHeader] = useState(true);
    const menuRef = useRef(null);
    const location = useLocation();

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
                        T
                    </div>
                    <div className="menu__title">Tomato</div>
                </div>
                <div className="menu__links">
                    <MenuItem title={'Dashboard'} img={Dashboard} imgActive={DashboardActive} link={'/dashboard'} >
                    </MenuItem>
                    <MenuItem title={'Пользователи'} img={Userslist} imgActive={UserslistActive} list={[
                        { name: 'Список', link: '/users' },
                        { name: 'Подтвердить', link: '/user/allow' },
                        { name: 'Создать', link: '/user/create' },
                        { name: 'Изменить', link: '/user/edit' },
                    ]}>
                    </MenuItem>
                    <MenuItem title={'Продукты'} img={Stock} imgActive={StockActive} list={[
                        { name: 'Список', link: '/products' },
                        { name: 'Создать', link: '/product/create' },
                    ]}>
                    </MenuItem>
                    <MenuItem title={'Заказы'} img={Order} imgActive={OrderActive} link={'/orders'}>
                    </MenuItem>
                    <MenuItem title={'Корзина'} img={Purchase} imgActive={PurchaseActive} link={'/cart'}>
                    </MenuItem>
                    <MenuItem title={'Настройки'} img={Settings} imgActive={SettingsActive} list={[
                        { name: 'Профиль', link: '/profile' },
                        { name: 'Изменить', link: '/my/edit' },
                        { name: 'Выйти', link: '/login' },
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
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="header__name">IITU</div>
                    </Link>
                </div>
            </div>
        </div> : null
    );
};

export default Header;