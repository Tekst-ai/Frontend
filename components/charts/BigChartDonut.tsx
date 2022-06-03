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
import { Colors } from '../../variables';

interface ContainerProps {
    theme: any;
}

const Container = styled.div<ContainerProps>`
    width: calc(33.333% - 0.625rem);
    height: 100%;
    border-radius: 10px;
    background: ${({ theme }) => theme.background};
    padding: 1.25rem;
    box-shadow: 0 ${({ theme }) => theme.name === "dark" ? "3px 12px" : "2px 4px"} ${({ theme }) => theme.boxShadow};
    position: relative;

    canvas {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const BigChartDonut: NextPage = () => {
    const accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent as keyof typeof accentColors]
    const theme: keyof Theme = useStore((s: any) => s.theme)

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
                color.color,
                Colors.secondary,
                themes[theme].backgroundSec,
                color.color + 80,
                Colors.secondaryDark
            ],
            hoverOffset: 15
        }]
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
        <Container theme={themes[theme]}>
            <Pie options={options}  data={data}/>
        </Container>
    )
}

export default BigChartDonut