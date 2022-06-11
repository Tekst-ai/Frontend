import type { NextPage } from 'next';

import useStore, { useAccent } from '../../store';
import themes, { Accent, accentColors, Theme } from '../../ThemeConfig';

const Busy: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent: keyof Accent = useAccent((s: any) => s.accent);
    const accentcolor = accentColors[accent][theme];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g id="freepik--background-simple--inject-16"><path d="M92.85 116.05C120.77 56.6 219.91 65 258.16 106.79s50.7 68.6 85.21 53 78.52-11.44 81.05 38.16S386.5 306.2 322.33 323.56s-64.17 78.76-149.1 66.36c-46.31-6.75-47.37-56.86-40.83-98.3S60.47 185 92.85 116.05Z" fill={accentcolor}/><path d="M92.85 116.05C120.77 56.6 219.91 65 258.16 106.79s50.7 68.6 85.21 53 78.52-11.44 81.05 38.16S386.5 306.2 322.33 323.56s-64.17 78.76-149.1 66.36c-46.31-6.75-47.37-56.86-40.83-98.3S60.47 185 92.85 116.05Z" fill={themes[theme].backgroundSec} opacity=".9"/></g><g id="freepik--Hourglass--inject-16"><path d="M140.88 193.43C108.54 199 83.28 209 84.44 215.79l.55 3.14c1.16 6.75 28.33 7.7 60.66 2.1s57.61-15.6 56.44-22.35l-.54-3.14c-1.17-6.76-28.33-7.7-60.67-2.11Z" fill={accentcolor}/><ellipse cx="143.54" cy="208.8" rx="59.42" ry="12.41" transform="translate(-33.48 27.51) rotate(-9.81)" fill="#fff" opacity=".2"/><path d="M142.58 203.25c-29 5-51.58 14-50.53 20l.9 5.23c1 6.05 25.37 6.89 54.32 1.88s51.58-14 50.53-20l-.9-5.22c-1.05-6.05-25.37-6.9-54.32-1.89Z" fill={accentcolor}/><ellipse cx="145.38" cy="219.43" rx="53.2" ry="11.11" transform="translate(-35.27 27.98) rotate(-9.81)" fill="#fff" opacity=".2"/><path d="M172.81 282.64a9.26 9.26 0 0 1-2.51-14.48c11.73-12.77 25.93-33.1 22.33-54-.78-4.47-22.34-4.48-48.16 0s-46.13 11.72-45.36 16.19c3.61 20.87 23.81 35.25 39.15 43.34a9.26 9.26 0 0 1 2.51 14.48c-11.74 12.76-25.94 33.09-22.33 54 .78 4.48 22.34 4.49 48.16 0S212.73 330.45 212 326c-3.65-20.9-23.86-35.28-39.19-43.36Z" fill={accentcolor}/><path d="M172.81 282.64a9.26 9.26 0 0 1-2.51-14.48c11.73-12.77 25.93-33.1 22.33-54-.78-4.47-22.34-4.48-48.16 0s-46.13 11.72-45.36 16.19c3.61 20.87 23.81 35.25 39.15 43.34a9.26 9.26 0 0 1 2.51 14.48c-11.74 12.76-25.94 33.09-22.33 54 .78 4.48 22.34 4.49 48.16 0S212.73 330.45 212 326c-3.65-20.9-23.86-35.28-39.19-43.36Z" fill="#fff" opacity=".8"/><path d="M209.66 327.17c.46 4.69-82.72 20.88-88.25 13.69a5.84 5.84 0 0 1-.62-5.55 15.88 15.88 0 0 1 2.48-4.61c2.57-3.48 8.24-5 12.08-6.4 2.59-.95 5.2-1.82 7.81-2.72 2.8-1 5.68-.3 8.11-2.43 1.46-1.27 2.55-3.16 4.42-3.62 1.39-.34 2.88.21 4.25-.16 1.78-.48 3.05-2.4 4.89-2.43a11.56 11.56 0 0 1 2.67.65c1.6.34 3.24-.19 4.88-.34a20.53 20.53 0 0 1 4.82.35 146.72 146.72 0 0 0 15 2.07c3.71.2 7.82.11 11.44 1.13a6.9 6.9 0 0 1 3.68 3.24 17.38 17.38 0 0 1 2.34 7.13Z" fill="#263238"/><path d="M182.08 317h-.17ZM207.35 320c-2.3-2.08-6.55-1.94-7.77-1.85s-1.65-.95-2.57-1.29-6.36.36-6.36.36 2 .39 2.42 1.05 2.7-.1 3-.19c-.31.18-3.09 1.64-4.4.76s-1.85.76-2.89 1.18-4.32 0-4.85-.17a41.42 41.42 0 0 0-4.7 0 6.69 6.69 0 0 1 2.68-1c.88.1 4.39-1.75 3.67-1.62s-2.36-.83-3.64-1.23a17.09 17.09 0 0 0-4.64.3 15.13 15.13 0 0 1 4.59.64 21.71 21.71 0 0 0-3 .95 9.8 9.8 0 0 1-2.76.47 3.86 3.86 0 0 0-1.86 1.44 28.59 28.59 0 0 1-3.47.6 8.42 8.42 0 0 1-3.41-.4l3.16-1-1.08-.31a12.58 12.58 0 0 0-2.28-.53c-1.27-.21-1.81 1-2.12 1.29s-3.09 0-3.87-.19-6.55 2.15-6.55 2.15l3.61-.62a8.83 8.83 0 0 0 2.95.69c2.41.32 2.76-.48 3.77-.41s4.36 1 4.36 1l-1.3.35a12.53 12.53 0 0 1-3.46 0c-2-.27-3.08.78-3.68.89a30.82 30.82 0 0 1-4.69.68c-.65-.14-2.36.66-3.3 1.62a4.11 4.11 0 0 1-4.16 1c-1.82-.47-4.89 1.75-4.89 1.75s1.61-2.13 2.45-2.28a22.9 22.9 0 0 0 3.75-1.88 7.14 7.14 0 0 0-1.34.11 3.39 3.39 0 0 1-2.49-.81c-1-.69-2-.15-3.47.6s-3.05 1.64-4.6.55-6.3 2.94-6.3 2.94a17.89 17.89 0 0 0 3.15-1.08c.44-.36.75 0 2.15.29s1.86-.69 2.55-1.06 2.76.25 2.76.25a3.11 3.11 0 0 1-1.57.29c-.76-.12-2 2.07-2.4 1.83s-3.31.14-4.56.79-3.09 2.82-4.94 2.15c-1.57-.57-5.11 4.24-8.22 4.3a15.88 15.88 0 0 1 2.48-4.61c2.57-3.48 8.24-5 12.08-6.4 2.59-.95 5.2-1.82 7.81-2.72 2.8-1 5.68-.3 8.11-2.43 1.46-1.27 2.55-3.16 4.42-3.62 1.39-.34 2.88.21 4.25-.16 1.78-.48 3.05-2.4 4.89-2.43a11.56 11.56 0 0 1 2.67.65c1.6.34 3.24-.19 4.88-.34a20.53 20.53 0 0 1 4.82.35 146.72 146.72 0 0 0 15 2.07c3.71.2 7.82.11 11.44 1.13a6.9 6.9 0 0 1 3.72 3.16Z" fill="#fff" opacity=".2"/><path d="M163.8 326c-29 5-51.58 14-50.54 20l.91 5.23c1 6 25.36 6.89 54.32 1.88s51.58-14 50.53-20l-.9-5.22c-1.05-6.1-25.37-6.95-54.32-1.89Z" fill={accentcolor}/><path d="M165.41 335.3c-32.33 5.59-57.6 15.6-56.43 22.36l.54 3.13c1.17 6.76 28.33 7.7 60.67 2.11s57.6-15.6 56.43-22.36l-.54-3.13c-1.17-6.76-28.33-7.7-60.67-2.11Z" fill={accentcolor}/><path d="m128.16 366.48-2.34-.11ZM182.06 360.59h-.21ZM115.7 365c.32.09.66.17 1 .25-.34-.12-.7-.2-1-.25ZM165.41 335.3c-32.33 5.59-57.6 15.6-56.43 22.36l.54 3.13a4.06 4.06 0 0 0 2.21 2.64 4.06 4.06 0 0 1-2.21-2.64C108.35 354 133.62 344 166 338.44s59.49-4.65 60.66 2.1l-.54-3.13c-1.21-6.76-28.37-7.7-60.71-2.11Z" fill="#fff" opacity=".2"/><path d="M160.47 274.28c-.63 5-2.46 12.57-3.28 17.62s1.64 12.88 2.37 15.25 5.66 2 5.46 3.89 7.36 2.21 7.36 2.21-35.42 14-39 13.11 6.64-7.88 8.6-8.34 3-1.67 4.32-4.47 2.68-2.3 4.06-5.11a63.39 63.39 0 0 0 3.32-6.49c1.57-3.9 2.93-15.89 1.28-16.9s-.15 9.19-1.57 9.53 1.85-10.08-2.46-15.34 9.54-4.96 9.54-4.96Z" fill="#263238"/><path d="M172.37 313.25s-35.41 14-39 13.11c-3.27-.81 5.09-6.8 8-8.11.19 2.06 5.74-.05 7.94-1.27s2.37-.33 3.18-.69 6.95-4.94 6.31-4.75-5.21 3.56-6.31 2.46-2.92 1-4.28 1.64c-1.18.57-1.48-.12-2.46-1 .19-.35.37-.73.56-1.13 1.29-2.8 2.67-2.3 4-5.11a60.79 60.79 0 0 0 3.39-6.4c1.58-3.9 2.94-15.89 1.3-16.9s-.16 9.19-1.57 9.52 1.83-10.07-2.47-15.33 9.51-5 9.51-5c-.63 5-2.46 12.57-3.28 17.62-.54 3.31.33 7.81 1.2 11.19-.23.82-.55 1.57-.93 1.69-.91.27-1.55 3.38-2.74 3.47s-.19 2.28 1.46 1.37c1.09-.6 2.81-1 4-1.52 1.54 1.37 5 1.35 4.82 2.94-.17 1.89 7.37 2.2 7.37 2.2Z" fill="#fff" opacity=".2"/><path d="m179.68 251.42-.42.69a84.83 84.83 0 0 1-4.52 7.18 44.46 44.46 0 0 1-5.43 6.87c-1.92 1.85-3.88 2.72-5 4.93a7.72 7.72 0 0 0-.65 1.73c-.42 1.67-.55 3.68-2 4.62a7.55 7.55 0 0 0-1 .61c-.73.63-.69 1.73-.88 2.67s-1.1 2-2 1.54-.94-1.61-1.75-1.57a3.12 3.12 0 0 0-.59.19c-.82.21-1.58-.43-2.21-1s-1.53-1.09-2.25-.65a40.15 40.15 0 0 0-7.14-5.23c-2.08-1.26-4.24-2.39-6.51-3.61-5-2.72-10.8-5.4-14.3-8.16a10.06 10.06 0 0 1-2.79-3.1 4 4 0 0 1-.4-1.29c-.58-4.94 14.71-6.41 20-10.09s13.55-1.32 17-2.09 7.38.32 11.05.05 5.93-1.33 8.07.23 4.51 1.09 5 2.28c.24.78-.66 2.22-1.28 3.2Z" fill="#263238"/><path d="M175 249.86c-3.16-.61 3.29-.73 2.8-1.1s-2.07-1.57-5.59-1.45-6.46-.12-7.21 0 2.45 1.09 2.45 1.09h-8.25c-2.68 0 1.83-1.09 1.83-1.09h-13.89c.37 0 3.05 1.58 1.46 1.58s-3.29.85-5.48 1.7a37.31 37.31 0 0 1-5.35 1.71c-.36 0 5-4 5.33-4.26-.33.14-4.8 2-6.67 2.55s-7 2.32-7.44 2.44a21.6 21.6 0 0 0 2.81 0s-3.78 1.95-5.72 2.19c-1.46.18-5 1.38-5.86 3.92a10.06 10.06 0 0 0 2.79 3.1c3.5 2.76 9.28 5.44 14.3 8.16 2.27 1.22 4.43 2.35 6.51 3.61a40.15 40.15 0 0 1 7.14 5.23c.72-.44 1.63.1 2.25.65s1.39 1.2 2.21 1a3.12 3.12 0 0 1 .59-.19c.81 0 1 1.2 1.75 1.57s1.75-.6 2-1.54.15-2 .88-2.67a7.55 7.55 0 0 1 1-.61c1.46-.94 1.59-2.95 2-4.62a7.72 7.72 0 0 1 .65-1.73c1.15-2.21 3.11-3.08 5-4.93a44.46 44.46 0 0 0 5.43-6.87 84.83 84.83 0 0 0 4.52-7.18c-1.1-1.91-1.05-1.65-4.24-2.26Zm-45.23 12.91c-1.06-.12 2.37-1.19 2.37-1.19a2.57 2.57 0 0 1-2.35 1.19Zm.64-4.11s1.73-1.37 2.46-1.28a15.37 15.37 0 0 0 2.11 0s-2.72 1.83-4.55 1.28Zm13.79 10.69c-1.25-.24 1.32-1 1.94-.83s-.46 1.1-1.92.83Zm6.17-14s-5.3 1.56-4.23 1.56h2c-.37 0-5.85 1.19-6.12 1.14a25.77 25.77 0 0 1 3.26-1.84s-.39-.49-.37-.67 1.24-.55 1.24-.55c.43-.37 2.35-.91 3.08-.46a7 7 0 0 0 2.65.46Zm2.23 10.87c-1.48-1.35 2.91 0 2.91 0s-1.89.93-2.89.02Zm2.4-14.5c2-1.37 2.5 0 2.5 0s-3.15.44-2.5 0Zm6.93 5.3-1.54-.79a5.73 5.73 0 0 1 2.1-.76 4.9 4.9 0 0 1 2.83.76c.54.33-2.86 1.06-3.4.77Zm3.94 6.72s-2.46-.06-2.7 0a21 21 0 0 1 2.7-.95Zm3.82-9.89s1.75-.38 2.57.53c1.1 1.22-2.58-.53-2.58-.53Z" fill="#fff" opacity=".2"/></g><g id="freepik--sheets-2--inject-16"><path d="m319.54 394.88 8.06 2.43h44.07l1-17.66-8.55-3.65s1.59-13.65 4.14-28.28l5.85-.18 12.42-49-7.06-3.05 5.11-16.23h7.67l8.18-22.76s-29.43-11.71-46.91-13.26l-15.7 2.63-1.09 20.44-12.79 1.69-2.51 22 9.09 1.56-5.85 46.8-13.13 3.69-2.29 32.23 11.43 2.35Z" fill={accentcolor}/><path d="m384.59 279.27-5.12 16.23 7.06 3.05-12.43 49-5.84.18c-2.56 14.63-4.14 28.28-4.14 28.28l8.53 3.65-1 17.67h-44.06l-8.06-2.43 1.16-18.23-11.44-2.34 2.23-31.44.06-.79 13.14-3.69 5.84-46.8-9.09-1.61 2.57-22 12.78-1.69 1.1-20.44 15.69-2.64c17.52 1.56 46.91 13.27 46.91 13.27l-8.18 22.77Z" fill="#fff" opacity=".6"/><path fill="#fff" opacity=".4" d="m372.65 379.64-43.6 1.22-8.36-4.21 9.58 1.78 33.85-2.44 8.53 3.65zM368.26 347.71l-31.53.1-25.25-4.94.06-.79 13.14-3.69 13.88 8.32 29.7 1z"/><path opacity=".2" d="m379.47 295.5-38.9-3.81-10.05-.1-9.09-1.56 18.58-2.13 39.46 7.6zM392.25 279.27h-7.67l-30.69-14.02-17.16 1.06 18.1-2.34 37.42 15.3z"/><path fill="#fff" opacity=".2" d="m353.52 243.23 1.31 20.74-18.1 2.34 1.09-20.43 15.7-2.65zM340.01 287.9l5-21.59-21.06 1.69-2.52 22.03 18.58-2.13zM330.52 291.59l19.05.98-11.01 54.14-13.88-8.32 5.84-46.8zM311.48 342.87l25.25 4.94-5.1 30.52-22.38-4.02 2.23-31.44zM329.05 380.86l-1.46 16.45-8.06-2.43 1.16-18.22 8.36 4.2z"/><path fill={accentcolor} d="m313.4 349.69 22.17 5.05 26.12-1.15-24.96 5.6-23.33-9.5zM320.35 381.97l8.16 5.01h19.72l-23.94 1.92-8.02-5.48 4.08-1.45zM337.13 391.86h34.85l4.02 3.02-38.87-3.02zM329.97 362.78l-19.52-5.46-3.49 1.87 23.01 3.59zM335.81 370.45l29.34-2.51 3.11 1.25-32.45 1.26zM345.01 338.39l31.7-1.14 2.76 2.33-34.46-1.19zM368.26 331.73l-26.05-2.96-16.08-5.99h-5.44l19.18 8.04 28.39.91zM332.25 308.35l13.15 4.73 41.01 3.31-3.7-2.75-37.7-2.37-12.76-2.92zM336.73 280.96l-18.27.91 4.53 2.19 13.74-3.1zM329.05 273.47l13.89-1.85 35.8 12.44-35.99-9.31-13.7-1.28zM373.44 266.31l-21.37-11.54-21.19 6.64 6.25 1.68 17.7-2.55 18.61 5.77zM366.86 258.31l32.15 13.31H395l-28.14-13.31zM356.64 248.26l16.07 1.83 25 13.88s-32.31-14.06-41.07-15.71ZM329.6 297.58l7.94 2-11.22-1 3.28-1z"/><path fill="#fff" opacity=".7" d="m313.4 349.69 22.17 5.05 26.12-1.15-24.96 5.6-23.33-9.5zM320.35 381.97l8.16 5.01h19.72l-23.94 1.92-8.02-5.48 4.08-1.45zM337.13 391.86h34.85l4.02 3.02-38.87-3.02zM329.97 362.78l-19.52-5.46-3.49 1.87 23.01 3.59zM335.81 370.45l29.34-2.51 3.11 1.25-32.45 1.26zM345.01 338.39l31.7-1.14 2.76 2.33-34.46-1.19zM368.26 331.73l-26.05-2.96-16.08-5.99h-5.44l19.18 8.04 28.39.91zM332.25 308.35l13.15 4.73 41.01 3.31-3.7-2.75-37.7-2.37-12.76-2.92zM336.73 280.96l-18.27.91 4.53 2.19 13.74-3.1zM329.05 273.47l13.89-1.85 35.8 12.44-35.99-9.31-13.7-1.28zM373.44 266.31l-21.37-11.54-21.19 6.64 6.25 1.68 17.7-2.55 18.61 5.77zM366.86 258.31l32.15 13.31H395l-28.14-13.31zM356.64 248.26l16.07 1.83 25 13.88s-32.31-14.06-41.07-15.71ZM329.6 297.58l7.94 2-11.22-1 3.28-1z"/><path opacity=".1" d="m335.81 302.69 10.86 2.74 30.52 2.92-30.52-1.49-10.86-4.17zM332.25 294.65l17.32.85 32.45 5.55-33.46-3.47-16.31-2.93zM327.6 284.97l13.59-2.14 34.44 7.99-34.73-6.76-13.3.91zM330.88 278.17l11.46-.33 34.85 8.98-35.18-7.55-11.13-1.1zM323.53 271.62l17.4-1.99-17.4 3.29v-1.3zM322.99 276.37h6.06l-6.06 1.47v-1.47zM337.54 251.08l16.3-2.82 21.79 7.86-21.59-6.03-16.5 2.1v-1.11zM393.73 275.14l-24.86-7.76 24.16 9.72.7-1.96z"/><path opacity=".1" d="m350.45 253.01 3.64-.82 39.64 12.77-39.47-11.46-3.81-.49zM399.78 258.31l-14.22-5.06 13.45 6.34.77-1.28zM329.05 314.01l15.21 4.65 34.48 2.78-34.8-1.17-14.89-6.26zM325.77 328.38l15.31 5.91 34.55.79h-34.71l-15.15-6.7zM369.36 344.33l-29.49-3.28-12.27-5 11.74 6.82 30.02 1.46zM379.62 325.8c-.28-.1-23.78-.71-23.78-.71l23.41 2.17Z"/><path opacity=".1" d="m311.04 345.19 25.21 5.5h17.64l-17.83 1.08-24.58-5.06-.44-1.52zM366.6 357.86c0 .05-24.51 2.74-24.51 2.74l24.3-1.37ZM316.27 356.14c-.33-.16 15.22 3.09 15.22 3.09s-9.68-.32-15.22-3.09ZM310.07 362.78l21.42 5.16-21.42-3.51v-1.65zM314.08 370.45l18.17 4.14 27.08-.55-27.08 1.95-18.17-5.54zM338.68 365.36h18.99l-15.59.77-3.4-.77zM323 380.86l5.84 2.55s31.06-.25 30.5 0-30.62 1.35-30.62 1.35ZM368.26 388.9s-29 .73-28.39.73h24ZM372.65 382.81s-4.76-.48-4.39 0 4.15 1.11 4.15 1.11ZM322.99 391.86l5 1.04 26.85 1.98-26.97-.64-4.88-2.38z"/></g><g id="freepik--Character--inject-16"><path d="M271.51 183.52c6.44 2.86 18.56 2.47 23.21-7.72s4.32-18.93-6.2-23.83-23.78 1.35-24.91 10.62-2.26 16.41 7.9 20.93Z" fill="#263238"/><path d="M147.46 378.61a9.83 9.83 0 0 0 1.5-3.23s3.17-3.62 13.23-5.9l.89-4.53a3.82 3.82 0 0 0-1.84-4 2.16 2.16 0 0 0-.61-.24 24.78 24.78 0 0 0-3.33-.27 92.34 92.34 0 0 0-11.17.64l.05.8 7-.12c2.39 0-.29 2-2.82 2.65s-5.19 2-5 7.19c.31 6.14.7 8.65 2.1 7.01Z" fill="#2e353a"/><path d="M164.79 369.12s-12.92 3.43-15.83 6.26c0 0-1.78-4.87 4.88-8.33 8.62-4.47 6.79-6.3 6.79-6.3a21.28 21.28 0 0 1 3.69 1.43c2.26 1.34.47 6.94.47 6.94Z" fill="#e4897b"/><path d="M348.28 409.8a9.83 9.83 0 0 0-3.52.59s-4.77-.56-12.35-7.58l-4.23 1.84a3.78 3.78 0 0 0-2.18 3.75 2 2 0 0 0 .13.64 25.32 25.32 0 0 0 1.67 2.9 92.32 92.32 0 0 0 6.84 8.85l.64-.49-4.08-5.74c-1.37-1.95 1.79-.87 3.78.83s4.55 3.17 8.75.05c4.84-3.66 6.69-5.44 4.55-5.64Z" fill="#2e353a"/><path d="M330.65 400.88s10.13 8.72 14.11 9.51c0 0-3 4.22-9.62.68-8.56-4.58-9.05-2-9.05-2a21.26 21.26 0 0 1-.9-3.86c-.19-2.65 5.46-4.33 5.46-4.33Z" fill="#e4897b"/><path d="M286.07 199.11c3.3 2.25 8.73 23.11 10.37 24.45s13.77-5.17 13.77-5.17l2.65 5.9s-18.32 11.21-20.84 9.1-10.76-24.68-10.76-24.68Z" fill="#263238"/><path d="M286.07 199.11c3.3 2.25 8.73 23.11 10.37 24.45s13.77-5.17 13.77-5.17l2.65 5.9s-18.32 11.21-20.84 9.1-10.76-24.68-10.76-24.68Z" fill="#fff" opacity=".2"/><path d="m218.76 219.13 12.47 12.61s38.1 13 47.6-.81c0 0-4.14-20.74-14.82-24.29s-45.25 12.49-45.25 12.49Z" fill="#263238"/><path d="m218.76 219.13 12.47 12.61s38.1 13 47.6-.81c0 0-4.14-20.74-14.82-24.29s-45.25 12.49-45.25 12.49Z" fill="#fff" opacity=".1"/><path d="m309.54 223.85 7.55-4.11 3.56-8.46a40.86 40.86 0 0 1 4.35 1.77c.5.39-1.6 7.38-2.13 7.82s-3.53.79-3.53.79l-7.19 4.55Z" fill="#e4897b"/><path d="M243.27 188.22s24.73-.57 42.8 10.89A184.85 184.85 0 0 1 275 240.38l-36.26-6s3.88-10.33-.42-31Z" fill={accentcolor}/><path d="M243.27 188.22s24.73-.57 42.8 10.89A184.85 184.85 0 0 1 275 240.38l-36.26-6s3.88-10.33-.42-31Z" fill="#fff" opacity=".6"/><path d="M254 187.09c5 21.24-17 40.25-33.79 40.48l-4.34-9.21 17.91-7.47 9.53-22.67ZM278.49 194.47s-3.37 29.7.34 36.46c0 0 6.33-11.59 7.76-31.33a34 34 0 0 0-8.1-5.13Z" fill="#263238"/><path d="M254 187.09c5 21.24-17 40.25-33.79 40.48l-4.34-9.21 17.91-7.47 9.53-22.67ZM278.49 194.47s-3.37 29.7.34 36.46c0 0 6.33-11.59 7.76-31.33a34 34 0 0 0-8.1-5.13Z" fill="#fff" opacity=".3"/><path d="M259.5 187.38s-4.5-2.38-11.93 2.19l4.57 3.24-3.39 3.83a45.6 45.6 0 0 1-4.75 19.84s8.12-8.29 10.86-17.35 1.5-11.13 4.64-11.75ZM274.16 191.4s5.36 1.16 10 7.34l-2.86.53 2.78 4.83-7 15.6s-.74-12-.39-19.24a16.34 16.34 0 0 0-2.53-9.06Z" fill="#263238"/><path d="M259.5 187.38s-4.5-2.38-11.93 2.19l4.57 3.24-3.39 3.83a45.6 45.6 0 0 1-4.75 19.84s8.12-8.29 10.86-17.35 1.5-11.13 4.64-11.75ZM274.16 191.4s5.36 1.16 10 7.34l-2.86.53 2.78 4.83-7 15.6s-.74-12-.39-19.24a16.34 16.34 0 0 0-2.53-9.06Z" fill="#fff" opacity=".2"/><path d="M274.83 289.19c-6.05 24.94-23.51 58.14-26.92 64.57-2.66 5.06-13.21 6.76-26 8.24-24.67 2.86-57.9 7.39-57.9 7.39v-7.78s67.1-15.81 68.19-19.42c1.52-5.11 3.31-29.41 4.91-49.86.19-2.28.37-4.51.54-6.66.28-3.54.54-6.83.76-9.67.52-6.51.84-10.73.84-10.73l35.8-25.27s7.34 18-.22 49.19Z" fill="#263238"/><path d="M274.83 289.19c-6.05 24.94-23.51 58.14-26.92 64.57-2.66 5.06-13.21 6.76-26 8.24-24.67 2.86-57.9 7.39-57.9 7.39v-7.78s67.1-15.81 68.19-19.42c1.52-5.11 3.31-29.41 4.91-49.86.19-2.28.37-4.51.54-6.66.28-3.54.54-6.83.76-9.67.52-6.51.84-10.73.84-10.73l35.8-25.27s7.34 18-.22 49.19Z" opacity=".2"/><path d="M292 320.05c-3.38-7.4-32.5-53.53-32.5-53.53l-28.62 4.84c9.23 27.07 42.09 54.72 47.66 61.9s46.95 71.18 46.95 71.18l5.09-3.6s-31.42-65.13-38.58-80.79Z" fill="#263238"/><path d="m238.71 234.39 37.66 2.45-.69 4.32s-4 19.37-19.89 29.64l-24.91.56s-2.91-15.79 6.9-34.09Z" fill="#263238"/><path d="m251.87 235.64-12.42-.73-.94 2.89 13.08.98.28-3.14zM253.43 235.73l-.28 3.17 21.77 1.64.2-3.53-21.69-1.28z"/><path d="M269 241.16h-.07l-4-.23a1.2 1.2 0 0 1-.81-.39 1.16 1.16 0 0 1-.29-.85L264 237a1.17 1.17 0 0 1 1.24-1.1l4 .24a1.12 1.12 0 0 1 .81.39 1.14 1.14 0 0 1 .29.85l-.15 2.65a1.2 1.2 0 0 1-1.17 1.11Zm-3.82-4.24a.17.17 0 0 0-.17.16l-.16 2.66a.2.2 0 0 0 .17.18l4 .24a.19.19 0 0 0 .17-.17l.15-2.65a.16.16 0 0 0 0-.13.22.22 0 0 0-.12-.06l-4-.23Z" fill="#fff"/><path d="m269.64 239.19-1.51-.09a.5.5 0 0 1-.47-.53.5.5 0 0 1 .53-.47l1.5.09a.5.5 0 0 1 .47.53.49.49 0 0 1-.52.47Z" fill="#fff"/><path d="m271 214 10.29-5.28a10.42 10.42 0 0 1 2.66-2.71c1.1-.51 10.8 1 10.8 1l-3.63 7.67s-7.18-.41-7.94-1l-9.41 5Z" fill="#e4897b"/><path d="M243.27 188.22c-9.47 2.46 4.76 37.18 11 39.15s26.25-11.51 26.25-11.51l-3.44-5.78s-17.49 7-19.09 6.23-8.06-18.22-9.21-21.34-5.51-6.75-5.51-6.75Z" fill="#263238"/><path d="M243.27 188.22c-9.47 2.46 4.76 37.18 11 39.15s26.25-11.51 26.25-11.51l-3.44-5.78s-17.49 7-19.09 6.23-8.06-18.22-9.21-21.34-5.51-6.75-5.51-6.75Z" fill="#fff" opacity=".2"/><path d="M278.75 215.86a.35.35 0 0 1-.4.27.34.34 0 0 1-.27-.4.33.33 0 0 1 .4-.27.35.35 0 0 1 .27.4ZM276.35 217.34a.34.34 0 0 1-.4.27.35.35 0 0 1-.27-.4.34.34 0 0 1 .67.13Z" fill="#fff" opacity=".6"/><path d="m328.43 197.68-12.71 32.94a1.75 1.75 0 0 1-2 1l-23.27-5.79a1.31 1.31 0 0 1-.92-1.77l12.7-32.94a1.76 1.76 0 0 1 2-1l23.27 5.8a1.3 1.3 0 0 1 .93 1.76Z" fill="#263238"/><path d="m328.43 197.68-12.71 32.94a1.75 1.75 0 0 1-2 1l-22.21-5.53a1.29 1.29 0 0 1-.92-1.77l12.7-32.94a1.75 1.75 0 0 1 2-1l22.22 5.53a1.3 1.3 0 0 1 .92 1.77Z" fill="#fff" opacity=".3"/><path d="M310.58 208.78a2.51 2.51 0 0 0-2.87 1.49 1.86 1.86 0 0 0 1.29 2.53 2.5 2.5 0 0 0 2.87-1.49 1.85 1.85 0 0 1-1.29-2.53Z" fill="#fff" opacity=".3"/><path d="M252.36 195.78s1.47-6.62 4.08-8 15.07.81 19.4 4.88a17 17 0 0 1 4.8 10l-5.57-2.36-8.45 9.52L260 196.5Z" fill={accentcolor}/><path d="M252.36 195.78s1.47-6.62 4.08-8 15.07.81 19.4 4.88a17 17 0 0 1 4.8 10l-5.57-2.36-8.45 9.52L260 196.5Z" fill="#fff" opacity=".5"/><path d="M264.88 188.05c7.19.55 10.92 5.52 10 9.59l-4.47.62-3.6 9.8-1.42-10.89-4.51-2.87s-2.88-6.79 4-6.25Z" fill="#e4897b"/><path d="M267.53 198.77c-6.86-5.41-6.06-9.65-6.06-9.65 3.37-1.86 5.61-5.88 6.42-9a18 18 0 0 0 .54-3l7.95 7a30.76 30.76 0 0 0-2.61 3.56 13.27 13.27 0 0 0-1.41 2.92c-1 3 .51 4 .51 4-.2 3.95-5.34 4.17-5.34 4.17Z" fill="#e4897b"/><path d="M273.61 187.19a12.89 12.89 0 0 0-1 3.08c-3.58-2.17-5.13-6.46-5.78-9.89a18.17 18.17 0 0 0 .16-3l8.77 6a30.45 30.45 0 0 0-2.15 3.81Z" opacity=".2"/><path d="M286.35 160.5c8.18 3.95 8.7 9.6 5.23 18.31-4.34 10.9-10.29 17.25-19.43 10.06-12.41-9.76.62-34.93 14.2-28.37Z" fill="#e4897b"/><path d="M286.51 175.8a19.1 19.1 0 0 0 .74 4.54 2.49 2.49 0 0 1-2.6-.11Z" fill="#de5753"/><path d="M281.83 172.72c-.31.68-.93 1.06-1.38.85s-.57-.92-.26-1.6.92-1.06 1.38-.86.57.89.26 1.61Z" fill="#263238"/><path d="m281.36 171.06 1.74.09s-1.3.91-1.74-.09ZM290.34 176.41c-.31.68-.93 1.07-1.38.86s-.57-.92-.26-1.6.92-1.07 1.38-.86.57.92.26 1.6Z" fill="#263238"/><path d="m289.87 174.76 1.74.09s-1.3.91-1.74-.09ZM284.15 168.28a.35.35 0 0 1-.3-.18 4.4 4.4 0 0 0-3.21-2.09.34.34 0 0 1-.34-.36.35.35 0 0 1 .36-.35c2.36.06 3.74 2.35 3.8 2.44a.36.36 0 0 1-.13.49.37.37 0 0 1-.18.05ZM294 171.15h-.15a3.92 3.92 0 0 0-3.37-.21.35.35 0 0 1-.48-.14.34.34 0 0 1 .14-.48 4.59 4.59 0 0 1 4 .19.36.36 0 0 1 .17.47.35.35 0 0 1-.31.17Z" fill="#263238"/><path d="M270.76 170s7.07-4.87 9-10.34c0 0 19.41 1.21 12.26 18 0 0 8.64-13.84-5.26-21s-23.76 13.53-19.49 23.16c0 0-.91-6.82 3.49-9.82Z" fill="#263238"/><path d="M271.26 172.33a4 4 0 0 0-2.28-5.14c-2.67-.95-6.39 3.67-.69 8 .82.58 1.76-.05 2.97-2.86Z" fill="#e4897b"/><path d="M279.39 152.44s6.17-1.38 10.12.58 4.22 4.9 4.22 4.9a5.8 5.8 0 0 1 5.1 1.57c2.46 2.27 3.91 8.8 1.3 15.79s-8.7 6-8.7 6 7.94-10.37-.52-17.11c0 0-2.77-3.32-6-1.31s-5.53 10.4-12.64 4.94.99-13.75 7.12-15.36ZM282.74 183.87a.36.36 0 0 1-.35-.31c-.16-1.27-2.29-2.71-3.1-3.15a.37.37 0 0 1-.14-.49.35.35 0 0 1 .48-.13c.13.07 3.22 1.8 3.46 3.68a.36.36 0 0 1-.3.4Z" fill="#263238"/><path d="M280 153.75s-4.29-14.24-13.61-10.14S252.54 158 245 152s-11 1.78-14.66 4.15-10.14-1.19-8.41-4.15c0 0-4.75 3.63 3.67 7.45s12.55-4.16 15.23-1.14S253 167.34 258 163a10.36 10.36 0 0 1 10.46-1.94Z" fill="#263238"/><path d="M254.81 167a5.34 5.34 0 0 1-1.89-.35 53.08 53.08 0 0 1-5.27-2.43c-3.72-1.88-7.24-3.66-9.2-2.11a.25.25 0 0 1-.35 0 .24.24 0 0 1 0-.35c2.21-1.74 5.87.11 9.73 2.06a53.41 53.41 0 0 0 5.23 2.42c3.26 1.21 6.36-1.4 9.1-3.71 2-1.66 3.82-3.22 5.56-3.27a.25.25 0 0 1 .26.24.26.26 0 0 1-.25.26c-1.56.05-3.35 1.55-5.24 3.15-2.29 1.87-4.88 4.09-7.68 4.09ZM228.5 154.49a2.9 2.9 0 0 1-1.75-.59.24.24 0 0 1-.06-.35.25.25 0 0 1 .34-.06c2.16 1.53 4.46-.77 6.7-3 1.58-1.58 3.07-3.07 4.53-3.25s3.28.78 5.44 2a27.28 27.28 0 0 0 11 4.16.25.25 0 0 1-.05.5 27.91 27.91 0 0 1-11.23-4.23c-2.07-1.21-3.71-2.16-5.12-2s-2.72 1.59-4.24 3.11c-1.72 1.8-3.64 3.71-5.56 3.71ZM277.08 172.16a6.6 6.6 0 0 1-3.05-.89.25.25 0 0 1-.08-.35.24.24 0 0 1 .34-.07c.15.09 3.6 2.2 5.52-.7 4.94-7.51 6.71-9.35 9.72-8.05a.24.24 0 0 1 .13.33.26.26 0 0 1-.33.13c-2.54-1.1-4.07.22-9.11 7.87a3.59 3.59 0 0 1-3.14 1.73Z" fill="#263238"/></g><g id="freepik--sheets-1--inject-16"><path d="m319 222.63 20.43-8s23.16 13.55 37.88 15.79l-25.46 5S324.3 230 319 222.63ZM195.25 288.27l15.52-14s26.53 4 47.23 14l-21.62 13.27s-20.38-10.35-41.13-13.27ZM70.83 306.16l19.94-6.88s17.3 18.49 31.09 18.49L99 328.75s-24.37-9.33-28.17-22.59ZM147.33 236.88s26-3 44.47 11.32l-9.51 11.71s-22.85-9.66-42.85-4ZM382.05 346.24l25.08 4.28S385.36 365 367 367.62l-19.79-6.41s23.86-2.49 34.84-14.97ZM374.09 302.81s24.11-1.3 41.16 5.77l10.23-9.76s-26.77-11.73-44-5.87ZM209.29 395s12.05-12.69 42.14-16l18.24 8.22s-27.21 5.91-39.6 11.66Z" fill={accentcolor}/><path d="m319 222.63 20.43-8s23.16 13.55 37.88 15.79l-25.46 5S324.3 230 319 222.63ZM195.25 288.27l15.52-14s26.53 4 47.23 14l-21.62 13.27s-20.38-10.35-41.13-13.27ZM70.83 306.16l19.94-6.88s17.3 18.49 31.09 18.49L99 328.75s-24.37-9.33-28.17-22.59Z" fill="#fff" opacity=".6"/><path d="M147.33 236.88s26-3 44.47 11.32l-9.51 11.71s-22.85-9.66-42.85-4Z" fill="#fff" opacity=".4"/><path d="m382.05 346.24 25.08 4.28S385.36 365 367 367.62l-19.79-6.41s23.86-2.49 34.84-14.97Z" fill="#fff" opacity=".8"/><path d="M374.09 302.81s24.11-1.3 41.16 5.77l10.23-9.76s-26.77-11.73-44-5.87ZM209.29 395s12.05-12.69 42.14-16l18.24 8.22s-27.21 5.91-39.6 11.66Z" fill="#fff" opacity=".4"/></g></svg>
    )
}

export default Busy;