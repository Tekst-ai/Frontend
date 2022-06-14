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
import moment from "moment";
import 'moment/locale/nl-be';

import themes, { Accent, accentColors, Theme } from "../../ThemeConfig";
import useStore, { useAccent } from "../../store";
import { Breakpoint, Colors } from "../../variables";
import _ from "lodash";
import { DonutData } from "../../interfaces/Data";

interface BigLineChartProps {
    data: [DonutData]
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    canvas {
        @media (min-width: ${Breakpoint.mobile}) {
            position: absolute;
        }
    }
`

const BigLineChart: NextPage<BigLineChartProps> = ({ data }) => {
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme)
    const color = accentColors[accent][theme]

    const FormatDateLabels = (dateArray: any) => {
        let formattedDateArray: any = [];
        dateArray.map((date: string) => {
            moment().locale('nl-be');
            formattedDateArray.push(moment(date).format('D MMMM'));
        })
        return formattedDateArray.reverse()
    }

    const dataChart = {
        labels: FormatDateLabels(_.map(data, "date")),
        datasets: [
            {
                label: "Aantal e-mails",
                data: _.map(data, "totalEmails").reverse(),
                pointRadius: [5, 5, 5, 5, 5, 5, 5]
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                intersect: false,
                backgroundColor: themes[theme].backgroundSec,
                titleColor: themes[theme].text,
                titleFont: {
                    size: 16,
                    weight: '700',
                    family: "Cake",
                },
                bodyColor: color, 
                bodyFont: {
                    size: 14,
                    family: "Cake",
                },
                cornerRadius: 7,
                boxPadding: 8,
                caretPadding: 12,
                caretSize: 7,
                displayColors: false,
                usePointStyle: true,
                padding: 8
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
                },
                interaction: {
                    mode: 'nearest',
                },
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
                },
                grid: {
                    color: themes[theme].lineLight,
                    drawTicks: false,
                    drawBorder: false,
                    borderDash: [4, 4],
                },
            }
        },
        maintainAspectRatio: false,
    }

    return (
        <Container>
            <Line id="canvas" data={dataChart} options={options}/>
        </Container>
    )
}

export default BigLineChart