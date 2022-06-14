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
import styled from "styled-components";

import useStore, { useAccent } from "../../store";
import themes, { Accent, accentColors, Theme } from "../../ThemeConfig";
import { Colors } from "../../variables";
import { ThemeStylingProps } from "../../interfaces/Styling";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    canvas {
        position: absolute;
    }
`

const Fade = styled.div<ThemeStylingProps>`
    position: absolute;
    background: linear-gradient(90deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.background} 30%, ${({ theme }) => theme.background}00 100%);
    width: 10%;
    height: 100%;
`

const MediumLineChart: NextPage = () => {
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const color = accentColors[accent][theme];

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [154, 124, 54, 120, 32, 10, 23],
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
                tension: 0.4,
                borderWidth: 3,
                borderColor: color,
                fill: true,
                backgroundColor: color + "26",
            },
            point: {
                backgroundColor: Colors.whiteSec,
                borderWidth: 2,
                borderColor: color,
                hoverBorderWidth: 2,
                hoverRadius: 5,
                hoverBackgroundColor: Colors.whiteSec,
            }
        },
        scales: {
            xAxis: {
                display: false,
            },
            YAxis: {
                display: false,
                beginAtZero: true,
            }
        },
        maintainAspectRatio: false,
    }

    return (
        <Container>
            <Line id="canvas" data={data} options={options}/>

            <Fade theme={themes[theme]} />
        </Container>
    )
}

export default MediumLineChart;