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
        boxShadow: `${Colors.blackPri}33`,
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
        light: Colors.accentDefault,
        dark: Colors.accentDefaultDark,
    },
    yellow: {
        color: Colors.accentYellow,
        text: Colors.blackPri,
        light: Colors.accentYellow,
        dark: Colors.accentYellowDark,
    },
    orange: {
        color: Colors.accentOrange,
        text: Colors.textWhite,
        light: Colors.accentOrange,
        dark: Colors.accentOrangeDark,
    },
    red: {
        color: Colors.accentRed,
        text: Colors.textWhite,
        light: Colors.accentRed,
        dark: Colors.accentRedDark,
    },
    pink: {
        color: Colors.accentPink,
        text: Colors.textWhite,
        light: Colors.accentPink,
        dark: Colors.accentPinkDark,
    },
    purple: {
        color: Colors.accentPurple,
        text: Colors.textWhite,
        light: Colors.accentPurple,
        dark: Colors.accentPurpleDark,
    },
    darkBlue: {
        color: Colors.accentDarkBlue,
        text: Colors.textWhite,
        light: Colors.accentDarkBlue,
        dark: Colors.accentDarkBlueDark,
    },
    lightBlue: {
        color: Colors.accentLightBlue,
        text: Colors.blackPri,
        light: Colors.accentLightBlue,
        dark: Colors.accentLightBlueDark,
    },
    teal: {
        color: Colors.accentTeal,
        text: Colors.blackPri,
        light: Colors.accentTeal,
        dark: Colors.accentTealDark,
    },
    green: {
        color: Colors.accentGreen,
        text: Colors.blackPri,
        light: Colors.accentGreen,
        dark: Colors.accentGreenDark,
    },
}

export default themes;