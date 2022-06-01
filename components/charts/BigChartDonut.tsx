import type { NextPage } from 'next'
import styled from 'styled-components'
import lodash from 'lodash'
import { Doughnut } from "react-chartjs-2";
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
    box-shadow: 0 3px ${({ theme }) => theme.name === "dark" ? "12px" : "6px"} ${({ theme }) => theme.boxShadow};
    position: relative;

    canvas {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const Total = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: 500;
`

const BigChartDonut: NextPage = () => {
    const accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent as keyof typeof accentColors]
    const theme: keyof Theme = useStore((s: any) => s.theme)

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [7, 4, 2],
            backgroundColor: [
              color.color,
              Colors.secondary,
              themes[theme].backgroundSec
            ],
            hoverOffset: 4
          }]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false
            }
        },
        elements: {
            arc: {
                borderColor: themes[theme].background,
                borderWidth: 12,
                hoverBorderWidth: 0,
                hoverBorderColor: themes[theme].background,
            }
        },
        maintainAspectRatio: false,
    }

    console.log(data.datasets[0].data)

    return (
        <Container theme={themes[theme]}>
            <Doughnut options={options}  data={data}/>

            <Total>{ lodash.sum(data.datasets[0].data) }</Total>
        </Container>
    )
}

export default BigChartDonut