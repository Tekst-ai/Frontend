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
import themes, { accentColors, Theme } from "../../ThemeConfig";
import { Colors } from "../../variables";
import { useCallback, useRef, useState } from "react";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    /* height: calc(100% + 0.5rem);
    transform: translateY(-0.5rem); */

    canvas {
        position: absolute;
    }
`

interface FadeProps {
    theme: any,
}

const Fade = styled.div<FadeProps>`
    position: absolute;
    background: linear-gradient(90deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.background} 30%, ${({ theme }) => theme.background}00 100%);
    width: 10%;
    height: 100%;
`

const MediumLineChart: NextPage = () => {
    const accent = useAccent((s: any) => s.accent);
    const color = accentColors[accent as keyof typeof accentColors]
    const theme: keyof Theme = useStore((s: any) => s.theme)

    // const ctx: any = useRef(null)

    // let gradient;
    // if (ctx.current !== null) {
    //     let ctx2: CanvasRenderingContext2D = ctx.current.canvas.getContext('2d')
    //     gradient = ctx2.createLinearGradient(0, 0, 0, 0);
    //     gradient.addColorStop(0, color.color);
    //     gradient.addColorStop(1, color.text);
    //     // gradient = color.color
    // }
    // console.log(gradient)


    
    
    // const gradient = ctx.createLinearGradient(0, 0, 0, 300);

    // const ctx = useCallback((node: any) => {
    //     if (node !== null && node.firstChild !== undefined) {
    //         let ctx2: CanvasRenderingContext2D = node.firstChild.getContext('2d')
    //         const gradient = ctx2.createLinearGradient(0, 0, 300, 300);
    //         gradient.addColorStop(0, color.color);
    //         gradient.addColorStop(1, color.color);
    //         return gradient
    //     }
    // }, [color])

    // const gradient = useCallback((ctx: CanvasRenderingContext2D) => {
    //     const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    //     gradient.addColorStop(0, color.color);
    //     gradient.addColorStop(1, color.text);
    //     return gradient;
    // }, [color])

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [154, 124, 54, 120, 32, 10, 23],
                pointRadius: [0, 0, 0, 0, 0, 0, 5]
            }
        ]
    }

    // const canvas : any = document?.getElementById("canvas")

    // const ctx = canvas?.getContext("2d");
    // const gradient = ctx?.createLinearGradient(0, 0, 0, 500);
    // gradient?.addColorStop(0, color.color);
    // gradient?.addColorStop(1, color.text);


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
            xAxis: {
                display: false,
            },
            YAxis: {
                display: false,
                beginAtZero: true,
            }
        },
        // responsive: false,
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