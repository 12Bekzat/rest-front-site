import React from 'react';
import { AboutBanner1, ResmartBanner, Restaurant } from '../images';

const About = () => {
    return (
        <div className='main'>
            <div className="banner small">
                <div className="banner__img">
                    <img src={ResmartBanner} alt="" />
                </div>
            </div>
            <div className="main__row">
                <div className="mission">
                    <div className="mission__main">
                        Наша <span>миссия</span>
                    </div>
                    <div className="mission__list">
                        <div className="mission__item">
                            <div className="mission__top">
                                <p>Удобство</p>
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <div className="mission__text">
                                Мы делаем заказы для ресторанов и поставщиков легкими и удобными.
                            </div>
                        </div>
                        <div className="mission__item">
                            <div className="mission__top">
                                <p>Поддержка</p>
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div className="mission__text">
                                Наша миссия - помогать ресторанам расти и процветать.
                            </div>
                        </div>
                        <div className="mission__item">
                            <div className="mission__top">
                                <p>Партнерство</p>
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <div className="mission__text">
                                Мы стремимся к созданию долгосрочных и взаимовыгодных партнерств.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="block__img">
                        <img src={AboutBanner1} alt="" />
                    </div>
                    <div className="block__content">
                        <div className="block__title">Немного <span>O нас</span></div>
                        <div className="block__text">Мы команда профессионалов, стремящихся облегчить ваш бизнес. Наш сайт предоставляет удобный способ для ресторанов и поставщиков встречаться и сотрудничать, делая закупки проще и эффективнее.</div>
                        <div className="block__text">Наша команда состоит из опытных специалистов в области веб-разработки, дизайна и бизнес-анализа. Мы стремимся к тому, чтобы наш сайт отвечал всем потребностям наших пользователей и помогал им достигать своих целей в бизнесе.</div>
                    </div>
                </div>
                <div className="block">
                    <div className="block__content">
                        <div className="block__title">Наши <span>ценности</span></div>
                        <div className="block__text">В основе нашей работы лежат определенные ценности, которые мы придерживаемся во всем, что делаем. Мы стремимся к прозрачности, надежности и качеству, чтобы обеспечить нашим клиентам самый лучший опыт сотрудничества.</div>
                    </div>
                    <div className="block__img">
                        <img src={Restaurant} alt="" />
                    </div>
                </div>

                <div className="title">Контакты</div>
                <div className="contacts">
                    <div className="contacts__item">
                        <div className="contacts__title">Головной офис</div>
                        <div className="contacts__text">Мы находимся по адресу:
                            город Алматы, проспект Абая, 123,
                            Торговый центр "АлмаДом", 5 этаж.</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Служба доставки</div>
                        <div className="contacts__text active">+7 (777)777 77 77</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">Служба поддержки</div>
                        <div className="contacts__text active">+7 (777)777 66 66</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">По вопросам</div>
                        <div className="contacts__text active">info@resmart.kz</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">По сотрудничество</div>
                        <div className="contacts__text active">cooperation@resmart.kz</div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__title">По юр. вопросам</div>
                        <div className="contacts__text active">law@resmart.kz</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;