import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Bar } from 'react-chartjs-2';
import useMainService from '../services/MainService';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const DashboardProds = () => {
    const nav = useNavigate();
    const { isAuth, role } = useContext(AuthContext);
    const { getAnalyticProducts } = useMainService();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [analytic, setAnalytic] = useState(null);

    useEffect(() => {
        getAnalyticProducts()
            .then(data => setAnalytic(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='main'>
            <div className="main__row">
                <div className="title" style={{ marginTop: '30px' }}>Статистика по товарам</div>
                <div className="draw">
                    <div className="draw__filter">
                    </div>
                    <div className="draw__data">
                        <BarChart chartData={analytic ?
                            { labels: Object.keys(analytic), datasets: { data: Object.values(analytic) } } :
                            { labels: [], datasets: { data: [] } }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const BarChart = ({ chartData }) => {
    const data = {
        labels: chartData.labels,
        datasets: [{
            label: 'Products sales',
            data: chartData.datasets.data,
            fill: true,
            backgroundColor: ['crimson'],
            borderColor: 'rgb(0,0,0)',
            tension: 0.1
        }]
    }
    return <Bar data={data} />;
};

export default DashboardProds;