import { Colors } from './variables'

export interface Theme {
    light: {
        name: string,
        background: string,
        backgroundSec: string,
        backgroundAlt: string,
        backgroundAltSec: string,
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
        backgroundAltSec: string,
        text: string,
        textSec: string,
        boxShadow: string,
        lineDark: string,
        lineLight: string,
    }
    // auto: {
    //     name: string,
    //     background: string,
    //     backgroundSec: string,
    //     backgroundAlt: string,
    //     text: string,
    //     textSec: string,
    //     boxShadow: string,
    //     lineDark: string,
    //     lineLight: string,
    // }
}

const themes: Theme = {
    light: {
        name: 'light',
        background: Colors.whitePri,
        backgroundSec: Colors.whiteSec,
        backgroundAlt: Colors.whiteSec,
        backgroundAltSec: Colors.whitePri,
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
        backgroundAltSec: Colors.blackSec,
        text: Colors.textWhite,
        textSec: Colors.textGrey,
        boxShadow: `${Colors.blackPri}66`,
        lineDark: Colors.blackPri,
        lineLight: Colors.blackSec,
    },
    // auto: {
    //     name: 'auto',
    //     background: Colors.blackPri,
    //     backgroundSec: Colors.blackSec,
    //     backgroundAlt: Colors.blackPri,
    //     text: Colors.textWhite,
    //     textSec: Colors.textGrey,
    //     boxShadow: `${Colors.blackPri}66`,
    //     lineDark: Colors.blackPri,
    //     lineLight: Colors.blackSec,
    // },
};

export const accentColors = {
    default: {
        color: Colors.accentDefault,
        text: Colors.textWhite,
        dark: Colors.accentDefault,
        light: Colors.accentDefaultDark,
    },
    yellow: {
        color: Colors.accentYellow,
        text: Colors.blackPri,
        dark: Colors.accentYellow,
        light: Colors.accentYellowDark,
    },
    orange: {
        color: Colors.accentOrange,
        text: Colors.textWhite,
        dark: Colors.accentOrange,
        light: Colors.accentOrangeDark,
    },
    red: {
        color: Colors.accentRed,
        text: Colors.textWhite,
        dark: Colors.accentRed,
        light: Colors.accentRedDark,
    },
    pink: {
        color: Colors.accentPink,
        text: Colors.textWhite,
        dark: Colors.accentPink,
        light: Colors.accentPinkDark,
    },
    purple: {
        color: Colors.accentPurple,
        text: Colors.textWhite,
        dark: Colors.accentPurple,
        light: Colors.accentPurpleDark,
    },
    darkBlue: {
        color: Colors.accentDarkBlue,
        text: Colors.textWhite,
        dark: Colors.accentDarkBlue,
        light: Colors.accentDarkBlueDark,
    },
    lightBlue: {
        color: Colors.accentLightBlue,
        text: Colors.blackPri,
        dark: Colors.accentLightBlue,
        light: Colors.accentLightBlueDark,
    },
    teal: {
        color: Colors.accentTeal,
        text: Colors.blackPri,
        dark: Colors.accentTeal,
        light: Colors.accentTealDark,
    },
    green: {
        color: Colors.accentGreen,
        text: Colors.blackPri,
        dark: Colors.accentGreen,
        light: Colors.accentGreenDark,
    },
    company: {
        color: "",
        text: "",
        dark: "",
        light: "",
    },
}

export default themes;