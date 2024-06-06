import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fruits } from '../../images';
import useMainService from '../../services/MainService';

const Slider = () => {
    const [count, setCount] = useState(0);
    const [categories, setCategories] = useState([]);
    const { getCategories } = useMainService();

    const handleCategories = () => {
        getCategories()
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        handleCategories();
    }, [])

    console.log(categories);

    const colors = [
        { color: '#59cbe8', secondary: '#ff8200' },
        { color: '#fa91af', secondary: '#6e2dc3' },
        { color: '#ff8200', secondary: '#e60053' },
        { color: '#f9423a', secondary: '#3a2fbc' },
        { color: '#6e2dc3', secondary: '#00c389' },
    ]

    const rndColor = (ind) => {
        return colors[ind % 5];
    }

    return (
        <div className='slider'>
            <div className="slider__row">
                {categories ? categories.map((item, ind) => (
                    <div key={ind} className="slider__item" style={{
                        background: rndColor(ind).color,
                        marginLeft: ind == 0 ? ((count * (300 + ((1100 - 900) / 2))) * -1) : 0
                    }}>
                        <div className="slider__title" style={{ background: rndColor(ind).secondary }}>{item.name}</div>
                        <div className="slider__text">Вкусно. Качественно. Удобно. Надежно.</div>
                        <Link to={'/catalog?category=' + item.name} className="slider__button">Перейти</Link>
                    </div>
                )) : null}
            </div>
            <div className="slider__arrow left" onClick={() => {
                if (count > 0) {
                    setCount(count => count - 1)
                }
            }}>
                <i className="fa-solid fa-caret-left"></i>
            </div>
            <div className="slider__arrow right" onClick={() => {
                if (count < categories.length % 3) {
                    setCount(count => count + 1)
                }
            }}>
                <i className="fa-solid fa-caret-right"></i>
            </div>
        </div>
    );
};

export default Slider;