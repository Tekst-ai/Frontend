import type { NextPage } from 'next'
import styled from 'styled-components'

import useStore, { useAccent } from '../../store'
import themes, { accentColors, Theme } from '../../ThemeConfig'
import { Colors } from '../../variables'

interface IconProps {
    theme: any
}

const Icon = styled.svg<IconProps>`
    position: absolute;
    top: 0;
    left: 50%;
    width: 75rem;
    transform: translate(calc(-50% + 3rem), -12rem);
    z-index: -1;
    
    /* path {
        filter: drop-shadow(0 7px 20px #07071D66);
    } */
`

const IconAbstract: NextPage = () => {
    const accent = useAccent((s: any) => s.accent)
    const theme: keyof Theme = useStore((s: any) => s.theme)

    return (
        <Icon theme={themes[theme]} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1087.326" height="1754.777" viewBox="-65 0 1250.326 1754.777">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" y1="0.092" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor={accentColors[accent as keyof typeof accentColors].color}/>
                    <stop offset="0.2" stopColor={accentColors[accent as keyof typeof accentColors].color}/>
                    <stop offset="0.5" stopColor={Colors.secondary}/>
                    <stop offset="1" stopColor={Colors.secondary}/>
                </linearGradient>
            </defs>
            <path id="Path_51" data-name="Path 51" d="M5639,4309.619l-807.911-68.687-239.072,260.145,473.637,1144.078,372.637,350.556,116.162-437.193-116.162-884.893,241.052-104.967Z" transform="translate(-4592.017 -4240.933)" fill="url(#linear-gradient)"/>
        </Icon>
    )
}

export default IconAbstract