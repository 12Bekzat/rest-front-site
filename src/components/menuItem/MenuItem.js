import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Arrow, Dashboard } from '../../images';
import { NavLink, useLocation } from 'react-router-dom';

const MenuItem = ({ title, icon, img, imgActive, list, link }) => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const childrenSize = list ? (list.length * 17) + ((list.length) * 8) : 0;
    const location = useLocation();

    useEffect(() => {
        if (list) {
            if (list.filter((item) => item.link == location.pathname).length > 0) setVisible(true)
            else setVisible(false);
        } else if (link == location.pathname) setVisible(true)
        else setVisible(false)
    }, [location])



    return (
        link ?
            (<NavLink to={link} className={({ isActive }) => {
                return "menu__link" + (visible ? ' active' : '')
            }}>
                <div className="menu__head" onClick={() => setOpen(open => !open)}>
                    <div className="menu__icon">
                        {icon ? icon : <img src={visible ? imgActive : img} alt="" />}
                    </div>
                    <div className="menu__text">{title}</div>
                </div>
            </NavLink>) :
            (<div className={"menu__link" + (visible ? ' active' : '')}>
                <div className="menu__head" onClick={() => setOpen(open => !open)}>
                    <div className="menu__icon">
                        {icon ? icon : <img src={visible ? imgActive : img} alt="" />}
                    </div>
                    <div className="menu__text">{title}</div>
                    <div className="menu__arrow">
                        <img src={Arrow} alt="" />
                    </div>
                </div>
                <div className="menu__list" style={{
                    height: open ? childrenSize : 0,
                    paddingTop: open ? list ? 8 : 0 : 0,
                }}>
                    {list ? list.map((item, ind) => (
                        <NavLink key={ind} to={item.link} className={({ isActive }) => {
                            return 'menu__li';
                        }}>{item.name}</NavLink>
                    )) : null}
                </div>
            </div>)
    );
};

export default MenuItem;