import type { NextPage } from 'next'
import styled from 'styled-components'
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement,
    RadialLinearScale,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement,
    RadialLinearScale,
)

import useStore, { useAccent } from '../../store'
import themes, { accentColors, Theme } from '../../ThemeConfig';
import { Breakpoint, Colors } from '../../variables';
import useWindowDimensions from '../../hooks/useWindowDimensions';


const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    canvas {
        @media (min-width: ${Breakpoint.mobile}) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`

const BigChartDonut: NextPage = () => {
    const accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent as keyof typeof accentColors];
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const { width } = useWindowDimensions();

    const data = {
        labels: [
            'Inbox',
            'Notificaties',
            'Klanten',
            'Projecten',
            'Offertes',
        ],
        datasets: [{
            data: [200,  150, 100, 60, 120],
            backgroundColor: [
                color[theme],
                Colors.secondary,
                themes[theme].backgroundSec,
                String(theme) === "light" ? color.dark : color.light,
                Colors.secondaryDark
            ],
            hoverOffset: 15
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: width < 450 ? "bottom" : "left",
                display: width < 768 ? true : false,
                labels: {
                    color: themes[theme].textSec,
                    font: {
                        size: 12,
                        weight: "500",
                        family: "Cake",
                    },
                },
            },
            tooltip: {
                enabled: true,
                intersect: false,
                backgroundColor: themes[theme].backgroundSec,
                bodyColor: themes[theme].text, 
                bodyFont: {
                    size: 14,
                    weight: "500",
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
            arc: {
                borderColor: themes[theme].background,
                borderWidth: 10,
                hoverBorderWidth: 10,
                hoverBorderColor: themes[theme].background,
            },
        },
        maintainAspectRatio: false,
    }

    return (
        <Container>
            <Pie options={options}  data={data}/>
        </Container>
    )
}

export default BigChartDonut