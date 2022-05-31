import type { NextPage } from "next";
import styled from "styled-components";
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
import themes, { accentColors, Theme } from "../../ThemeConfig";
import useStore, { useAccent } from "../../store";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    /* background: yellow; */

    canvas {
        position: absolute;
    }
`

interface FadeProps {
    theme: any,
}

const Fade = styled.div<FadeProps>`
    position: absolute;
    background: linear-gradient(90deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.background} 25%, ${({ theme }) => theme.background}00 100%);
    width: 5%;
    height: 100%;
`

const BigLineChart: NextPage = () => {
    const accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent as keyof typeof accentColors]
    const theme: keyof Theme = useStore((s: any) => s.theme)

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [5000, 4000, 7000, 3000, 4000, 2000, 5000],
                pointRadius: [0, 0, 0, 0, 0, 0, 5]
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
        },
        elements: {
            line: {
                tension: 0.5,
                borderWidth: 3,
                borderColor: color.color,
                fill: true,
                backgroundColor: color.color + "26",
            },
            point: {
                backgroundColor: color.text,
                borderWidth: 2,
                borderColor: color.color,
                hoverBorderWidth: 2,
                hoverRadius: 5,
            }
        },
        scales: {
            xAxis: {
                display: true,
            },
            YAxis: {
                display: true,
                beginAtZero: true,
            }
        },
        // responsive: false,
        maintainAspectRatio: false,
    }


    return (
        <Container>
            <Line id="canvas" data={data} options={options}/>

            {/* <Fade theme={themes[theme]} /> */}
        </Container>
    )
}

export default BigLineChart