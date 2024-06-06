import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import useMainService from '../services/MainService';


const DashboardPage = () => {
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { getAllAnalytic } = useMainService();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [analytic, setAnalytic] = useState(null);

    useEffect(() => {
        getAllAnalytic()
            .then(data => setAnalytic(data))
            .catch(err => console.log(err));
    }, [])

    console.log("analytic", analytic);

    return (
        <div className='main'>
            <div className="main__row">
                <div className="title" style={{ marginTop: '30px' }}>Общий объем продаж </div>
                <div className="draw">
                    <div className="draw__filter">
                    </div>
                    <div className="draw__data">
                        <LineChart statistic={analytic ? analytic.earnedMoney : []} />
                    </div>
                </div>
                <div className="title" style={{ marginTop: '30px' }}>Общее количество заказов </div>
                <div className="draw">
                    <div className="draw__filter">
                    </div>
                    <div className="draw__data">
                        <LineChart statistic={analytic ? analytic.countOfOrder : []} />
                    </div>
                </div>
                <div className="title" style={{ marginTop: '30px' }}>Общее количество ресторанов </div>
                <div className="draw">
                    <div className="draw__filter">
                    </div>
                    <div className="draw__data">
                        <LineChart statistic={analytic ? analytic.countOfClients : []} />
                    </div>
                </div>
            </div>
        </div>
    );
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ statistic }) => {
    console.log('sta', statistic);

    const sortedMonthsArray = Object.entries(statistic)
        .sort((a, b) => {
            const monthNumberA = new Date(Date.parse('01 ' + a + ' 2022')).getMonth();
            const monthNumberB = new Date(Date.parse('01 ' + b + ' 2022')).getMonth();
            return monthNumberA - monthNumberB;
        })
        .map(([month, value]) => ({ [month]: value }));

    const sortedMonthsObject = Object.assign({}, ...sortedMonthsArray);

    console.log(sortedMonthsObject);

    const data = {
        labels: Object.keys(sortedMonthsObject),
        datasets: [
            {
                label: 'Общая статистика за период',
                data: Object.values(sortedMonthsObject),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
        },
    };

    return <Line data={data} options={options} />;
};

export default DashboardPage;