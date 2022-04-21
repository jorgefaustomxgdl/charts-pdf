import {Chart} from 'react-google-charts'

const data = [
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540],
]

const opcions = {
    title: 'Ventas por año',
    legend: {position: 'bottom'},
}

export default function ChartLine() {

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={opcions}
            graph_id="LineChart"
            width="80%"
            height="400px"
        />
    )
} 