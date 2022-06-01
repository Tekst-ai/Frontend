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
import moment from "moment";
import { last7Days } from "../../services/date";
import { Colors } from "../../variables";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

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
        labels: last7Days().reverse(),
        datasets: [
            {
                data: [1264, 1987, 1024, 511, 805, 1547, 1235],
                pointRadius: [0, 0, 0, 0, 0, 0, 5]
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false
            },
        },
        elements: {
            line: {
                tension: 0.4,
                borderWidth: 3,
                borderColor: color.color,
                fill: true,
                backgroundColor: color.color + "26",
            },
            point: {
                backgroundColor: Colors.whiteSec,
                borderWidth: 2,
                borderColor: color.color,
                hoverBorderWidth: 2,
                hoverRadius: 5,
                hoverBackgroundColor: Colors.whiteSec,
            }
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    color: themes[theme].textSec,
                    fontSize: 12,
                    padding: 12,
                    family: "Cake",
                },
                grid: {
                    color: themes[theme].background,
                    drawBorder: false,
                }
            },
            y: {
                display: true,
                beginAtZero: true,
                ticks: {
                    color: themes[theme].textSec,
                    fontSize: 12,
                    padding: 12,
                    family: "Cake",
                    maxTicksLimit: 5,
                    autoSkip: true,
                    // callback: function(value: any, index: number) {
                    //     return index % 2 === 1 ? value : null;
                    // },
                },
                grid: {
                    color: themes[theme].lineLight,
                    drawTicks: false,
                    drawBorder: false,
                    borderDash: [4, 4],
                },
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