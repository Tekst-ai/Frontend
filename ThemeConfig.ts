import { Colors } from './variables'

export interface Theme {
    light: {
        name: string,
        background: string,
        backgroundSec: string,
        backgroundAlt: string,
        text: string,
        textSec: string,
        boxShadow: string,
        lineDark: string,
        lineLight: string,
    },
    dark: {
        name: string,
        background: string,
        backgroundSec: string,
        backgroundAlt: string,
        text: string,
        textSec: string,
        boxShadow: string,
        lineDark: string,
        lineLight: string,
    }
    auto: {
        name: string,
        background: string,
        backgroundSec: string,
        backgroundAlt: string,
        text: string,
        textSec: string,
        boxShadow: string,
        lineDark: string,
        lineLight: string,
    }
}

const themes: Theme = {
    light: {
        name: 'light',
        background: Colors.whitePri,
        backgroundSec: Colors.whiteSec,
        backgroundAlt: Colors.whiteSec,
        text: Colors.blackPri,
        textSec: Colors.textGreyBlack,
        boxShadow: `${Colors.blackPri}26`,
        lineDark: Colors.whitePri,
        lineLight: Colors.whitePriDarker,
    },
    dark: {
        name: 'dark',
        background: Colors.blackPri,
        backgroundSec: Colors.blackSec,
        backgroundAlt: Colors.blackPri,
        text: Colors.textWhite,
        textSec: Colors.textGrey,
        boxShadow: `${Colors.blackPri}66`,
        lineDark: Colors.blackPri,
        lineLight: Colors.blackSec,
    },
    auto: {
        name: 'auto',
        background: Colors.blackPri,
        backgroundSec: Colors.blackSec,
        backgroundAlt: Colors.blackPri,
        text: Colors.textWhite,
        textSec: Colors.textGrey,
        boxShadow: `${Colors.blackPri}66`,
        lineDark: Colors.blackPri,
        lineLight: Colors.blackSec,
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