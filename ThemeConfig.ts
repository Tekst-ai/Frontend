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

export default themes