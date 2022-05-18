import { Colors } from './variables'

export interface Theme {
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
    auto: {
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
        text: Colors.blackPri,
    },
    dark: {
        name: 'dark',
        background: Colors.blackPri,
        backgroundSec: Colors.blackSec,
        text: Colors.textWhite,
    },
    auto: {
        name: 'auto',
        background: Colors.blackPri,
        backgroundSec: Colors.blackSec,
        text: Colors.textWhite,
    },
};

export const accentColors = {
    default: {
        color: Colors.accentDefault,
        text: Colors.textWhite,
    },
    yellow: {
        color: Colors.accentYellow,
        text: Colors.blackPri,
    },
    orange: {
        color: Colors.accentOrange,
        text: Colors.textWhite,
    },
    red: {
        color: Colors.accentRed,
        text: Colors.textWhite,
    },
    pink: {
        color: Colors.accentPink,
        text: Colors.textWhite,
    },
    purple: {
        color: Colors.accentPurple,
        text: Colors.textWhite,
    },
    darkBlue: {
        color: Colors.accentDarkBlue,
        text: Colors.textWhite,
    },
    lightBlue: {
        color: Colors.accentLightBlue,
        text: Colors.blackPri,
    },
    teal: {
        color: Colors.accentTeal,
        text: Colors.blackPri,
    },
    green: {
        color: Colors.accentGreen,
        text: Colors.blackPri,
    },
}

export default themes;