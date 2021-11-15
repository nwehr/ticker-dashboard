import { useFinnhub } from "./hooks/useFinnhub"

// @ts-ignore
import { XYPlot, LineSeries } from 'react-vis'

export interface WidgetProps {
    symbol: string
}

const Widget = (props: WidgetProps) => {
    const { name, current, change, chartData } = useFinnhub(props.symbol)

    return <div className="widget">
        <div className="grid-container">
            <div className="profile">
                <h3>{props.symbol}</h3>
                <p>{name}</p>
            </div>

            <div className="quote">
                <h3>{current}</h3>
                <p className={change < 0 ? "red" : "green"}>{Math.round(change * 100) / 100}</p>
            </div>
        </div>

        {
            chartData.length
                ? <div className="chart">
                    <XYPlot width={300} height={80} margin={0} style={{ fill: "none" }} >
                        <LineSeries strokeWidth={2} color={chartData[chartData.length - 1].y - chartData[0].y < 0 ? "#dc322f" : "#859900"} data={chartData} />
                    </XYPlot>
                </div>
                : null
        }
    </div>
}

export default Widget