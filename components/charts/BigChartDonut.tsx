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
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig';
import { Breakpoint, Colors } from '../../variables';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import _ from 'lodash';

interface BigChartDonutProps {
    data: any
}

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

const BigChartDonut: NextPage<BigChartDonutProps> = ({ data }) => {
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent];
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const { width } = useWindowDimensions();

    const sortedData = _.orderBy(data, ['totalEmails'], ['desc'])

    const chartData = {
        labels: _.map(sortedData, "name"),
        datasets: [{
            data: _.map(sortedData, "totalEmails"),
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
                display: width < 768 ? true : false,
                labels: {
                    color: themes[theme].textSec,
                    font: {
                        size: 12,
                        weight: "500",
                        family: "Cake",
                    },
                },
                position: width < 450 ? "bottom" as "bottom" : "left" as "left",
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
            <Pie options={options}  data={chartData}/>
        </Container>
    )
}

export default BigChartDonut