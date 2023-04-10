import React, { useEffect, useState } from 'react';
import DataCard from './DataCard';
import { getCorrectForm, parseToDataModel } from "../util/Utils";
import '../styles/DashBoard.css';
import { ItemModel } from "../model/ItemModel";

const Dashboard = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://russianwarship.rip/api/v2/statistics/latest');

            if (!response.ok) {
                throw new Error('Data fetching error: ' + response.statusText);
            }
            const data = await response.json();
            const formattedData = {
                date: data.data.date,
                day: data.data.day,
                status: data.data.war_status.alias,
                stats: data.data.stats,
                increase: data.data.increase,
            };
            setData(parseToDataModel(formattedData));
        } catch (error) {
            console.error('Data fetching error: ', error);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchData();
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        data
            &&
        (
            <div className="card-grid dashboard">
                <DataCard item={new ItemModel(null, null, `За ${data.day} ${getCorrectForm(data.day)}`, null,null)} />
                <DataCard item={data.items[0]} />
                <DataCard item={data.items[1]} />
                <DataCard item={data.items[2]} />
                <DataCard item={data.items[3]} />
                <DataCard item={data.items[4]} />
                <DataCard item={data.items[5]} />
                <DataCard item={data.items[6]} />
                <DataCard item={data.items[7]} />
                <DataCard item={data.items[8]} />
                <DataCard item={data.items[9]} />
                <DataCard item={data.items[10]} />
                <DataCard item={data.items[11]} />
                <DataCard item={data.items[12]} />
                <DataCard item={data.items[13]} />
            </div>
        )
    );
};

export default Dashboard;