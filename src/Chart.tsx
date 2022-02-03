import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import { Line } from "react-chartjs-2"

import { PulseSpinner } from "react-spinners-kit"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


interface ChartProps {
    chartData: any[]
}

const Chart = (props: ChartProps) => {
    const { chartData } = props

    if (!chartData || !chartData.length) {
        return <div className="spinner-container">
            <PulseSpinner color="#839496" />
        </div>
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        outerHeight: 80,
        backgroundColor: "red",
        scales: {
            y: {
                display: false,
            },
            x: {
                display: false,
            },
        },

        elements: {
            point: {
                radius: 0
            }
        },

        plugins: {
            legend: {
                position: 'top' as const,
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
            tooltip: {
                enabled: false,
            },
            decimation: {
                enabled: false,
            }

        },
    }

    const data: ChartData<"line"> = {
        labels: chartData.map((data: any) => data.x)
        , datasets: [
            {
                data: chartData.map((data: any) => data.y)
                , label: "oops"
                , borderColor: chartData[chartData.length - 1].y - chartData[0].y < 0 ? "#dc322f" : "#859900"
                , borderWidth: 1.5
            }
        ]
    }

    return <div style={{ height: "5em", width: "100%", marginTop: ".5em" }}>
        <Line options={options} data={data} />
    </div>
}

export default Chart