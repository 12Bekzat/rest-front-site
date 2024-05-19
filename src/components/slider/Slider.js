import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fruits } from '../../images';

const Slider = () => {
    const [count, setCount] = useState(0);

    const categories = [
        { name: 'Фрукты', color: '#59cbe8', secondary: '#ff8200' },
        { name: 'Мясо', color: '#fa91af', secondary: '#6e2dc3' },
        { name: 'Морепродукты', color: '#ff8200', secondary: '#e60053' },
        { name: 'Напитки', color: '#f9423a', secondary: '#3a2fbc' },
        { name: 'Полуфабрикаты', color: '#6e2dc3', secondary: '#00c389' },
    ]

    return (
        <div className='slider'>
            <div className="slider__row">
                {categories.map((item, ind) => (
                    <div key={ind} className="slider__item" style={{
                        background: item.color,
                        marginLeft: ind == 0 ? ((count * (300 + ((1100 - 900) / 2))) * -1) : 0
                    }}>
                        <div className="slider__title" style={{ background: item.secondary }}>{item.name}</div>
                        <div className="slider__text">Вкусно. Качественно. Удобно. Надежно.</div>
                        <Link to={'/products?category='} className="slider__button">Перейти</Link>
                        <div className="slider__img">
                            <img src={Fruits} alt="" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider__arrow left" onClick={() => {
                if (count > 0) {
                    setCount(count => count - 1)
                }
            }}>
                <i class="fa-solid fa-caret-left"></i>
            </div>
            <div className="slider__arrow right" onClick={() => {
                if (count < categories.length % 3) {
                    setCount(count => count + 1)
                }
            }}>
                <i class="fa-solid fa-caret-right"></i>
            </div>
        </div>
    );
};

export default Slider;