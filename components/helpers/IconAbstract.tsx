import type { NextPage } from 'next'
import styled from 'styled-components'

import { ThemeStylingProps } from '../../interfaces/Styling'
import useStore, { useAccent } from '../../store'
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig'
import { Breakpoint, Colors } from '../../variables'

const Icon = styled.svg<ThemeStylingProps>`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(calc(-50% + 3rem), -30rem);
    width: 35rem;
    transition: none;
    
    @media (min-width: ${Breakpoint.mobileSuperSmall}) {
        transform: translate(calc(-50% + 3rem), -26rem);
        width: 45rem;
    }

    @media (min-width: ${Breakpoint.mobileSmall}) {
        transform: translate(calc(-50% + 3rem), -20rem);
        width: 55rem;
    }

    @media (min-width: ${Breakpoint.mobile}) {
        transform: translate(calc(-50% + 3rem), -16rem);
        width: 65rem;
    }
    
    @media (min-width: ${Breakpoint.tablet}) {
        transform: translate(calc(-50% + 3rem), -12rem);
        width: 75rem;
    }
`

const IconAbstract: NextPage = () => {
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const theme: keyof Theme = useStore((s: any) => s.theme);

    return (
        <Icon theme={themes[theme]} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1087.326" height="1754.777" viewBox="-65 0 1250.326 1754.777">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" y1="0.092" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor={accentColors[accent][theme]}/>
                    <stop offset="0.2" stopColor={accentColors[accent][theme]}/>
                    <stop offset="0.5" stopColor={Colors.secondary}/>
                    <stop offset="1" stopColor={Colors.secondary}/>
                </linearGradient>
            </defs>
            <path id="Path_51" data-name="Path 51" d="M5639,4309.619l-807.911-68.687-239.072,260.145,473.637,1144.078,372.637,350.556,116.162-437.193-116.162-884.893,241.052-104.967Z" transform="translate(-4592.017 -4240.933)" fill="url(#linear-gradient)"/>
        </Icon>
    )
}

export default IconAbstract;