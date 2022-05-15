import { Colors } from './variables'

interface Theme {
    light: {
        name: string,
        background: string,
        backgroundSec: string
        text: string,
    },
    dark: {
        name: string,
        background: string,
        backgroundSec: string
        text: string,
    }
}

const themes: Theme = {
    light: {
        name: 'light',
        background: Colors.whitePri,
        backgroundSec: Colors.whiteSec,
        text: Colors.textBlack,
    },
    dark: {
        name: 'dark',
        background: Colors.blackPri,
        backgroundSec: Colors.blackSec,
        text: Colors.textWhite,
    },
};

// export const accentColors = {
//     default: Colors.accentDefault,
//     yellow: Colors.accentYellow,
//     orange: Colors.accentOrange,
//     red: Colors.accentRed,
//     pink: Colors.accentPink,
//     purple: Colors.accentPurple,
//     darkBlue: Colors.accentDarkBlue,
//     lightBlue: Colors.accentLightBlue,
//     teal: Colors.accentTeal,
//     green: Colors.accentGreen,
// }

export const accentColors = [
    {
        name: 'default',
        color: Colors.accentDefault,
    },
    {
        name: 'yellow',
        color: Colors.accentYellow,
    },
    {
        name: 'orange',
        color: Colors.accentOrange,
    },
    {
        name: 'red',
        color: Colors.accentRed,
    },
    {
        name: 'pink',
        color: Colors.accentPink,
    },
    {
        name: 'purple',
        color: Colors.accentPurple,
    },
    {
        name: 'darkBlue',
        color: Colors.accentDarkBlue,
    },
    {
        name: 'lightBlue',
        color: Colors.accentLightBlue,
    },
    {
        name: 'teal',
        color: Colors.accentTeal,
    },
    {
        name: 'green',
        color: Colors.accentGreen,
    }
]

export default themes;