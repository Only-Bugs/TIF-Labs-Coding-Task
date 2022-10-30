import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export const BarChart = () => {
    const [data, setData] = useState({ country: [], exchangeRate: [] });
    useEffect(() => {
        fetch("http://localhost:3001/api/exchangerate")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                const country = Object.keys(result.rates);
                const exchangeRate = country.map((c) => result.rates[c]);
                setData({ country, exchangeRate });
            });
    }, []);

    const basicData = {
        labels: data.country,
        datasets: [
            {
                label: "USD",
                backgroundColor: "#42A5F5",
                data: data.exchangeRate,
            },
        ],
    };
    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: "#495057",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#495057",
                },
                grid: {
                    color: "#ebedef",
                },
            },
            y: {
                ticks: {
                    color: "#495057",
                },
                grid: {
                    color: "#ebedef",
                },
            },
        },
    };
    return (
        <div>
            <div className="card">
                <h5>USD Exchange Rate with other Countries</h5>
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    );
};
