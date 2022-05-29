import type { NextPage } from "next";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
    )
    
import { Colors } from "../../variables";
import styled from "styled-components";
import { useAccent } from "../../store";
import { accentColors } from "../../ThemeConfig";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    canvas {
        position: absolute;
    }
`

const MediumLineChart: NextPage = () => {
    const accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent as keyof typeof accentColors]

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [1000, 4000, 5000, 2000, 7000, 4000, 2000],
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        elements: {
            line: {
                tension: 0.5,
                borderWidth: 3,
                borderColor: color.color,
                fill: "start",
                // backgroundColor: ,
            }
        },
        scales: {
            xAxis: {
                display: false,
            },
            YAxis: {
                display: false,
            }
        },
        // responsive: false,
        maintainAspectRatio: false,
    }


    return (
        <Container>
            <Line data={data} options={options}/>
        </Container>
    )
}

export default MediumLineChart;