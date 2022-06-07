import type { NextPage } from 'next';

import useStore, { useAccent } from '../../store';
import { accentColors, Theme } from '../../ThemeConfig';

const Analysis: NextPage = () => {
    const theme: keyof Theme = useStore((s: any) => s.theme);
    const accent = useAccent((s: any) => s.accent);
    const accentcolor = accentColors[accent as keyof typeof accentColors][theme];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g id="freepik--background-simple--inject-49"><path d="M71.1 309.47c-9-29.22-14.34-60.56-11-91.35s16.22-61 38-78.68c27.9-22.57 65.9-21.27 97.59-7.14s58.69 39.36 85.74 63.3S337 243 369.94 252.67c15.68 4.59 32.26 6 46.8 14.26s26.94 26.3 23.62 44.82c-2 11.28-9.51 20.38-18.17 25.86s-18.47 7.84-28.14 10c-69.26 15.31-140.59 11.73-210.18 24.84-69.19 13.02-108.1-47.77-112.77-62.98Z" fill={accentcolor}/><path d="M71.1 309.47c-9-29.22-14.34-60.56-11-91.35s16.22-61 38-78.68c27.9-22.57 65.9-21.27 97.59-7.14s58.69 39.36 85.74 63.3S337 243 369.94 252.67c15.68 4.59 32.26 6 46.8 14.26s26.94 26.3 23.62 44.82c-2 11.28-9.51 20.38-18.17 25.86s-18.47 7.84-28.14 10c-69.26 15.31-140.59 11.73-210.18 24.84-69.19 13.02-108.1-47.77-112.77-62.98Z" fill="#fff" opacity=".9"/></g><g id="freepik--News--inject-49"><g id="freepik--monitor-screen--inject-49"><path fill={accentcolor} d="m423.89 183.31-104.85-.6 6.76-72.39 104.84.61-6.75 72.38z" id="freepik--PC--inject-49"/></g><path fill="#fff" opacity=".5" d="m325.8 110.32-6.76 72.39 104.85.6 6.75-72.38-104.84-.61z"/><path d="M350 148.93a19.68 19.68 0 0 0-2.56-.88 13.62 13.62 0 0 0-1.54-.33 2.28 2.28 0 0 1-.59-1.86 7.82 7.82 0 0 1 .51-1.37l-.1-.07a7 7 0 0 0 4.7-4.42 25.3 25.3 0 0 0 1.1-5.22c0-.26-.24-1.16-.2-1.42s.31-.87.34-1.09a7.26 7.26 0 0 0-.52-4.08c-.92-1.49-2.33-2.18-5.42-2.31-3.86-.18-6.91 1-7.35 3.27-2.19 11.2 1.15 12.84 2 13.79a7.63 7.63 0 0 1-1.76 4.87 13.3 13.3 0 0 0-3.93 1.36c-.86.46-4.34 2.24-4.86 3.06-1.85 3-3.32 9.82-3.32 9.82l29.49.15v-7.12a8.61 8.61 0 0 0-.65-1.64 10.36 10.36 0 0 0-5.34-4.51Z" opacity=".2"/><path fill="#fff" d="M340.1 179.64h-15.88l1.3-14.89h15.77l-1.19 14.89z"/><path opacity=".1" d="M342.24 164.75h42.62l-1.3 14.89h-42.27l.95-14.89z"/><path fill="#fff" opacity=".3" d="M421.25 161.68h-57.68l3.46-39.52h57.68l-3.46 39.52z"/><path d="M418.32 153.52a1.49 1.49 0 0 1-.54-.11 3.1 3.1 0 0 1-1.54-3.12 13.11 13.11 0 0 1 .17-1.42 8.32 8.32 0 0 0 .16-2c-.08-1.05-.79-2.19-1.8-2.21a2.11 2.11 0 0 0-1.86 1.63 7.31 7.31 0 0 0-.28 1.89c0 .33 0 .65-.08 1a3.57 3.57 0 0 1-1.41 2.67 2 2 0 0 1-1.82.08 1.46 1.46 0 0 1-.75-.76l-1.49.89a.2.2 0 0 1-.17 0 .19.19 0 0 1-.14-.11 16 16 0 0 1-.74-1.76 1 1 0 0 0-1-.68 1 1 0 0 0-1 .72l-.87 2.68a.21.21 0 0 1-.2.15.23.23 0 0 1-.21-.15l-.42-1.2a1.53 1.53 0 0 1-.26.31 1.42 1.42 0 0 1-1 .37 1.4 1.4 0 0 1-1-.5 1.46 1.46 0 0 1-.22-.35 1.73 1.73 0 0 1-.29.23 1.26 1.26 0 0 1-1 .14 1.28 1.28 0 0 1-.75-.73.35.35 0 0 0-.6-.35 1.75 1.75 0 0 1-1.38-.75 2.77 2.77 0 0 1-.38-1.2 2.36 2.36 0 0 1-.42.33 2.7 2.7 0 0 1-2.72 0c-1.28-.82-1.79-2.39-2.2-3.92l-2.54-9.57a7.67 7.67 0 0 0-1.05-2.62 2.5 2.5 0 0 0-2.29-1.1 4.08 4.08 0 0 0-.84.31 3.42 3.42 0 0 1-1.15.35A1.33 1.33 0 0 1 381 132v-.1l-2.34 2.21a.22.22 0 0 1-.29 0 .23.23 0 0 1 0-.29.23.23 0 0 0 0-.31.69.69 0 0 0-.71-.24 2.09 2.09 0 0 0-.88.78c-.1.12-.19.24-.29.35a1.41 1.41 0 0 1-1.83.44 1.62 1.62 0 0 1-.36-.44 1.53 1.53 0 0 0-.14-.21 1.55 1.55 0 0 0-2-.19 5 5 0 0 0-1.56 1.8.19.19 0 0 1-.17.1.23.23 0 0 1-.19-.09l-.94-1.33a.22.22 0 1 1 .35-.25l.76 1.06a4.79 4.79 0 0 1 1.53-1.67 1.83 1.83 0 0 1 2.72.55 1.24 1.24 0 0 0 .25.33c.37.28.95-.05 1.25-.39q.13-.15.27-.33a2.54 2.54 0 0 1 1.08-.92 1.12 1.12 0 0 1 1.19.39.82.82 0 0 1 .11.17l2.44-2.31a.21.21 0 0 1 .3 0 .22.22 0 0 1 0 .3.32.32 0 0 0-.06.39 1 1 0 0 0 .84.52 3 3 0 0 0 1-.32 4.37 4.37 0 0 1 .94-.33 2.87 2.87 0 0 1 2.72 1.27 8 8 0 0 1 1.12 2.76l2.54 9.57c.4 1.51.86 2.93 2 3.66a2.25 2.25 0 0 0 2.27 0 1.39 1.39 0 0 0 .64-.79v-.44a.22.22 0 0 1 .21-.2.23.23 0 0 1 .22.2 1.67 1.67 0 0 1 0 .5 2.85 2.85 0 0 0 .32 1.74 1.29 1.29 0 0 0 1 .55.7.7 0 0 0 .61-.29.22.22 0 0 1 .29-.06.21.21 0 0 1 .08.29.84.84 0 0 0 0 .68.82.82 0 0 0 1.56-.18.22.22 0 0 1 .24-.18.21.21 0 0 1 .18.24 1 1 0 0 0 .24.71 1 1 0 0 0 .66.35 1 1 0 0 0 .7-.26 1 1 0 0 0 .33-.67.21.21 0 0 1 .18-.21.22.22 0 0 1 .24.14l.42 1.21.67-2.07a1.48 1.48 0 0 1 1.4-1 1.43 1.43 0 0 1 1.37 1c.19.51.4 1 .63 1.51l1.53-.92a.2.2 0 0 1 .2 0 .2.2 0 0 1 .12.17 1 1 0 0 0 .59.72 1.49 1.49 0 0 0 1.41-.05 3.16 3.16 0 0 0 1.21-2.36c0-.31.06-.62.08-.93a8.15 8.15 0 0 1 .3-2 2.56 2.56 0 0 1 2.29-1.93 2.64 2.64 0 0 1 2.21 2.62 8.31 8.31 0 0 1-.16 2.06 11.06 11.06 0 0 0-.17 1.38 2.69 2.69 0 0 0 1.27 2.7 1.36 1.36 0 0 0 1.48-.49.8.8 0 0 0 .11-1 .22.22 0 1 1 .35-.25 1.19 1.19 0 0 1-.12 1.49 1.9 1.9 0 0 1-1.49.61Z" opacity=".2"/><g opacity=".1"><path d="m395.17 169-1.37 6.84h-1.59l-2.21-3.73-.75 3.75h-1.89l1.36-6.84h1.6l2.26 3.74.74-3.74ZM398.15 170.52l-.23 1.15h3l-.28 1.44h-3.05l-.24 1.25H401l-.31 1.5h-5.48l1.37-6.84h5.35l-.31 1.5ZM413.73 169l-3.58 6.84h-2.07l-.5-4.12-2.18 4.12h-2.08l-.84-6.84h1.91l.52 4.37 2.31-4.37H409l.48 4.43 2.33-4.43ZM412.75 175.26l.77-1.44a4.26 4.26 0 0 0 2.27.67c.74 0 1.17-.23 1.17-.6 0-.92-3.32-.42-3.32-2.56 0-1.48 1.26-2.45 3.28-2.45a4.83 4.83 0 0 1 2.47.59l-.71 1.44a3.42 3.42 0 0 0-1.87-.52c-.8 0-1.23.29-1.23.66 0 .94 3.32.4 3.32 2.51 0 1.47-1.29 2.43-3.29 2.43a5.36 5.36 0 0 1-2.86-.73Z"/></g></g><g id="freepik--Info--inject-49"><g opacity=".7"><path d="M128.35 178.38H83.93a14.87 14.87 0 0 1-15.05-16.49l6.06-69.33a18.37 18.37 0 0 1 17.94-16.5h44.42a14.87 14.87 0 0 1 15 16.5l-6.07 69.33a18.35 18.35 0 0 1-17.88 16.49Z" fill={accentcolor}/><path d="M128.35 178.38H83.93a14.87 14.87 0 0 1-15.05-16.49l6.06-69.33a18.37 18.37 0 0 1 17.94-16.5h44.42a14.87 14.87 0 0 1 15 16.5l-6.07 69.33a18.35 18.35 0 0 1-17.88 16.49Z" fill="#fff" opacity=".5"/></g><path d="M128.21 169h-35.9a2.67 2.67 0 0 1-2.7-3 3.3 3.3 0 0 1 3.22-3h35.9a2.67 2.67 0 0 1 2.7 3 3.3 3.3 0 0 1-3.22 3ZM132.11 124.4h-24.74a2.66 2.66 0 0 1-2.7-3 3.29 3.29 0 0 1 3.22-3h24.74a2.67 2.67 0 0 1 2.7 3 3.3 3.3 0 0 1-3.22 3ZM131.09 136h-33a2.66 2.66 0 0 1-2.7-3 3.29 3.29 0 0 1 3.21-3h33a2.67 2.67 0 0 1 2.7 3 3.29 3.29 0 0 1-3.21 3ZM130.07 147.68h-24.74a2.67 2.67 0 0 1-2.7-3 3.29 3.29 0 0 1 3.22-3h24.74a2.67 2.67 0 0 1 2.7 3 3.29 3.29 0 0 1-3.22 3ZM129.05 159.32h-24.74a2.67 2.67 0 0 1-2.7-3 3.3 3.3 0 0 1 3.22-3h24.74a2.66 2.66 0 0 1 2.7 3 3.29 3.29 0 0 1-3.22 3Z" fill="#fff"/><path opacity=".3" d="M134.8 112.88H87.72l2.42-27.62h47.08l-2.42 27.62z"/></g><g id="freepik--character-2--inject-49"><path transform="translate(-31.35 85.64) rotate(-15.16)" fill={accentcolor} d="M299.77 158.82h12.67v3.57h-12.67z"/><path transform="translate(-31.35 85.64) rotate(-15.16)" fill="#fff" opacity=".3" d="M299.77 158.82h12.67v3.57h-12.67z"/><path fill="#263238" d="m302.03 159.86-2.94-.26 1.47 5.45 2.38-1.74-.91-3.45z"/><path transform="translate(-30.28 88.33) rotate(-15.16)" fill={accentcolor} d="M307.26 155.08h18.97v5.68h-18.97z"/><path transform="translate(-30.28 88.33) rotate(-15.16)" fill="#fff" opacity=".5" d="M307.26 155.08h18.97v5.68h-18.97z"/><path d="m339.52 160.12-20.75 1-1.94-7.12 18.43-9.58 1.29 2.92a34 34 0 0 1 2.56 9.39ZM275 207.81c0-6.62 3.31-10 5.9-14.24l9.36-15.23c.45-.73-2.41 3.92-.82 1.14.89-1.55 3.92-1.57 5.14 1-3.27 6-3.86 11-5.8 17.56a92.79 92.79 0 0 1-3.4 9c-6.02 11.17-10.38 3.65-10.38.77Z" fill="#263238"/><path d="M289 180.5c.84-1.72 2.72-5.22 3.55-6.95a1.91 1.91 0 0 1 .55-.76 2 2 0 0 1 .69-.23 12.34 12.34 0 0 1 5.63-.18.58.58 0 0 1 .36.19.62.62 0 0 1 .11.34c.14 1 .28 2.08.43 3.12a1.42 1.42 0 0 1 0 .68 1.52 1.52 0 0 1-.44.54l-2.67 2.35a3.45 3.45 0 0 1-1.52.93 4.58 4.58 0 0 1-2.64-.71c-1.05-.41-4.05.68-4.05.68Z" fill="#cb7a63"/><path d="M289 180.5c.84-1.72 2.72-5.22 3.55-6.95a1.91 1.91 0 0 1 .55-.76 2 2 0 0 1 .69-.23 12.34 12.34 0 0 1 5.63-.18.58.58 0 0 1 .36.19.62.62 0 0 1 .11.34c.14 1 .28 2.08.43 3.12a1.42 1.42 0 0 1 0 .68 1.52 1.52 0 0 1-.44.54l-2.67 2.35a3.45 3.45 0 0 1-1.52.93 4.58 4.58 0 0 1-2.64-.71c-1.05-.41-4.05.68-4.05.68Z" opacity=".1"/><g id="freepik--group--inject-49"><path d="M297.54 161.81c.34-.06.7.3.8.81s-.09 1-.43 1-.69-.3-.79-.81.09-.94.42-1Z" fill="#263238"/><path d="M298.46 168.61a3 3 0 0 0 2.37-.93 18.82 18.82 0 0 1-3.3-3.93Z" fill="#b74d3c"/><path d="M294.9 160.3a2.43 2.43 0 0 1 2.07-.84h.1a.31.31 0 1 0 0-.62 3 3 0 0 0-2.62 1 .3.3 0 0 0-.08.2.31.31 0 0 0 .3.32.29.29 0 0 0 .23-.06Z" fill="#263238"/><path d="M290.85 191.5c-8.83-.09-10.08-4.92-10.08-4.92 2.68-2.51 2.91-7.22 2.43-11.43a9.82 9.82 0 0 0 2.58 2.56 8.05 8.05 0 0 0 6.44 1.29.23.23 0 0 0 .11 0 1.11 1.11 0 0 0-.05.25c-.6 3.36-.21 7 3.3 8.1 0-.03 5 4.25-4.73 4.15Z" fill="#cb7a63"/><path d="M292.6 177.73a11.81 11.81 0 0 0-.27 1.24.23.23 0 0 1-.11 0 8.05 8.05 0 0 1-6.44-1.29 9.82 9.82 0 0 1-2.58-2.56c-.11-1.07-.28-2.12-.46-3.07l9.5 5.45Z" fill="#cb7a63"/><path d="M278.07 187.34s1.48-4.28 3.61-5.6 11.35.29 12.79.89 2.83 4 2.83 4Z" fill={accentcolor}/><path d="M278.07 187.34s1.48-4.28 3.61-5.6 11.35.29 12.79.89 2.83 4 2.83 4Z" fill="#fff" opacity=".8"/><path d="M300.2 186c-1.43-.27-3-.52-4.65-.68a125.65 125.65 0 0 0-14.78-.15l-3.25.24c-5.16.27-10.43 4.63-9.5 9.71 5.13 27.95 3.18 43.46 2.56 48l34.76.34c4.19-28.53 3.5-43 2.24-50a9.22 9.22 0 0 0-7.38-7.46Z" fill="#263238"/><path d="m306.69 233.34-1.31 10.07c2.69-20.62 3.76-29.22 2.95-43.6l-9-2.86c5.58 18.82 3.57 23.46 7.36 36.39Z" opacity=".2"/><path d="M299.07 170.66a8.94 8.94 0 0 1-4.5 7.42h-.05a7.56 7.56 0 0 1-2.19.88.23.23 0 0 1-.11 0 8.05 8.05 0 0 1-6.44-1.29 9.82 9.82 0 0 1-2.58-2.56c-1.68-2.41-2.33-5.6-3.48-10.07A8.81 8.81 0 0 1 290 154.15c6.66 1.33 9.33 10.55 9.07 16.51Z" fill="#cb7a63"/><path d="M294.52 178.09a7.56 7.56 0 0 1-2.19.88s.32-3.92.32-3.92 1.41 3.04 1.87 3.04Z" opacity=".2"/><path d="M295.2 166.7c-2.31 1.06-1.34 6.17-3.43 7.69a2.51 2.51 0 0 1-.86.44c-1 .23-5.32-5.68-5.68-7.12-.93-3.76-.92-6.15 1.92-7.75a27.79 27.79 0 0 1 6.3-2.41c1 0 2 1.69 2.22 3.34.08.75-1 1.72-.59 2.09a6.43 6.43 0 0 1 1.61 2.63 9 9 0 0 1-1.49 1.09Z" fill="#263238"/><path d="m290.31 174.82-4.13.82-3-.49s-7.2-6.27-7.5-10.28 1.34-9 5.74-10.63a65 65 0 0 1 9.94-2.65s2.84.75 3.13 2.27a3 3 0 0 1-.46 2.41l-7.46 2.6a3.71 3.71 0 0 0-2.57 3.53c.1 1.9 6.31 12.42 6.31 12.42Z" fill="#263238"/><path d="M292.72 162.45c1.85.59 2.76 3.34 2.8 5.08.05 1.92-1.25 3.11-2.9 1.79a7.32 7.32 0 0 1-2.48-4c-.42-1.86.74-3.45 2.58-2.87Z" fill="#cb7a63"/><path d="M285.39 408.22a.16.16 0 0 1-.13-.14.14.14 0 0 1 .07-.17c.13-.05 2.54-1.42 3.69-1.11a.82.82 0 0 1 .53.38.62.62 0 0 1 0 .71c-.28.41-1.1.52-2 .52a12.68 12.68 0 0 1-2.16-.19Zm3.22-1.16a7.26 7.26 0 0 0-2.71.88c1.29.18 3 .17 3.36-.27.07-.07.11-.16 0-.36a.43.43 0 0 0-.32-.23.86.86 0 0 0-.32 0Z" fill={accentcolor}/><path d="M285.32 408.18a.21.21 0 0 1-.07-.15 4.37 4.37 0 0 1 1.06-2.66 1.18 1.18 0 0 1 .92-.27c.45 0 .61.27.61.46.14.8-1.5 2.26-2.34 2.64h-.07a.22.22 0 0 1-.11-.02Zm1.8-2.77a.84.84 0 0 0-.58.24 3.86 3.86 0 0 0-.91 2.12c.86-.51 2-1.68 1.89-2.15 0 0 0-.18-.32-.18h-.1Z" fill={accentcolor}/><path fill="#cb7a63" d="m278.44 392.13 6.88.01-.58 15.89-6.92-.01.62-15.89z"/><path d="M286.36 407.77c4.71 2.89 6.15 3 11.59 4.21 1.19.27.43 3.14-2.41 3.14-4.71 0-5.2-.23-9.22-.24-3.44 0-7.38.15-10.12.19a1.07 1.07 0 0 1-.25 0 1 1 0 0 1-.74-1.2l1.33-6.14a.61.61 0 0 1 .59-.47h7.57a3.17 3.17 0 0 1 1.66.51Z" fill="#263238"/><path opacity=".2" d="m278.44 392.14-.32 8.16 6.91.01.29-8.16-6.88-.01z"/><path d="M227.68 408.05a.19.19 0 0 1-.13.13.15.15 0 0 1-.17-.09c-.06-.12-1.38-2.54-1-3.68a.84.84 0 0 1 .38-.52.63.63 0 0 1 .72 0c.39.3.49 1.12.48 2a12.63 12.63 0 0 1-.28 2.16Zm-1.08-3.23a7.32 7.32 0 0 0 .8 2.71c.21-1.28.24-3-.2-3.34-.06-.08-.16-.11-.36 0a.44.44 0 0 0-.24.32 1.07 1.07 0 0 0 0 .31Z" fill={accentcolor}/><path d="M227.67 408.11a.17.17 0 0 1-.15.07c-.07 0-1.94-.17-2.64-1.1a1.17 1.17 0 0 1-.26-.92c0-.44.29-.6.47-.6.79-.11 2.24 1.55 2.6 2.38v.06a.14.14 0 0 1-.02.11Zm-2.76-1.81a.93.93 0 0 0 .23.57 3.83 3.83 0 0 0 2.11.93c-.5-.86-1.65-2-2.12-1.91 0 0-.18 0-.19.31v.1Z" fill={accentcolor}/><path fill="#cb7a63" d="m231.58 392.03 6.71.49-3.96 16.02-6.75-.49 4-16.02z"/><path d="M226 407.16c-1.85 2.15-2.83 3.25-8.15 4.91-1.18.36-.18 3.16 2.66 2.91 4.7-.41 2.11-.4 6.11-.75 3.43-.3 7.37-.48 10.1-.67a.86.86 0 0 0 .27-.05 1 1 0 0 0 .67-1.26l-1.84-6a.58.58 0 0 0-.62-.41l-7.53.65a2.39 2.39 0 0 0-1.67.67Z" fill="#263238"/><path opacity=".2" d="m231.57 392.04-2.05 8.23 6.73.49 2.04-8.24-6.72-.48z"/><path d="M270.58 243.06a71.48 71.48 0 0 0-6.36 12.8c-3.69 10-2.38 15.18-3.61 21.93-2.17 11.87-5.41 21-7.69 30-7.1 28.19-24.72 87.72-24.72 87.72l12.12 2.67s25.1-69.16 31.48-89.33c5.75-18.15 20.51-65.85 20.51-65.85Z" fill={accentcolor}/><path d="M270.58 243.06a71.48 71.48 0 0 0-6.36 12.8c-3.69 10-2.38 15.18-3.61 21.93-2.17 11.87-5.41 21-7.69 30-7.1 28.19-24.72 87.72-24.72 87.72l12.12 2.67s25.1-69.16 31.48-89.33c5.75-18.15 20.51-65.85 20.51-65.85Z" opacity=".4"/><path d="m226.77 393.27-.12 4.31 14.6 1.58s1.3-4.71 1.24-4.71Z" fill={accentcolor}/><path d="m226.77 393.27-.12 4.31 14.6 1.58s1.3-4.71 1.24-4.71Z" fill="#fff" opacity=".8"/><path d="M285.49 265c-4.65 15-10.54 33.91-13.68 43.85-.15.48-.32 1-.48 1.51 1.24-16.6 4.5-44.43 12.84-45.45a3 3 0 0 1 1.32.09Z" opacity=".3"/><path d="M281.76 243s-3.54 45.74-3.94 67.37c-.38 20.15-1.51 88.35-1.51 88.35H288s8.2-69.41 10.27-89.88c2-19.38 7.08-65.45 7.08-65.45Z" fill={accentcolor}/><path d="M281.76 243s-3.54 45.74-3.94 67.37c-.38 20.15-1.51 88.35-1.51 88.35H288s8.2-69.41 10.27-89.88c2-19.38 7.08-65.45 7.08-65.45Z" opacity=".4"/><path d="m271.42 232.4-12.31 25.2 3.26-.94a32.25 32.25 0 0 1 16.09-.48l3.83-8.73-1.18 9.19h1.68a32.23 32.23 0 0 1 14 2.85 33.79 33.79 0 0 0 4.41 1.83c0-.28 4.12-17.88 4.12-17.88s-5.46-28.99-33.9-11.04Z" fill="#263238"/><path d="m274.57 394.62.4 4.29h14.21s.67-4.81.62-4.81Z" fill={accentcolor}/><path d="m274.57 394.62.4 4.29h14.21s.67-4.81.62-4.81Z" fill="#fff" opacity=".8"/><path d="M308.55 165.41s-4.14-2.16-4.85-3.95l-1-2.51a1 1 0 0 1 .56-1.24 16.81 16.81 0 0 1 7.51-1.29 1.78 1.78 0 0 1 1.43 1.07s1.06 5 .23 5.55Z" fill="#cb7a63"/><path d="m314.11 164.23 8.89 12.22c.29.39.57.79.83 1.18 6.44 9.37 7.17 17.49 4.45 18.6S316 199 316 199l1.23-9.71 2.4-.4-10.43-21.65-.9-2.21s2.8-4.77 5.81-.8Z" fill="#263238"/><path d="M301.87 185.76a65.93 65.93 0 0 1 19.95 2.37l1.13 9.08s-17.77 6-23.61-.26c-4.48-4.79-5.92-11.8 2.53-11.19Z" fill="#263238"/></g></g><g id="freepik--character-1--inject-49"><path d="M205.11 190c0 .55.07.87.09 1.28v1.14c0 .74 0 1.49-.05 2.22-.08 1.48-.24 3-.46 4.43a36.74 36.74 0 0 1-2.51 8.66 26.91 26.91 0 0 1-12.49 13.59 10 10 0 0 1-3.09 1.13 8.86 8.86 0 0 1-3.66-.13 12.46 12.46 0 0 1-5.06-2.75 30.12 30.12 0 0 1-5.68-7 71.35 71.35 0 0 1-6.71-15l4.35-1.81c1.24 2.18 2.55 4.44 4 6.57s2.8 4.24 4.33 6.16a25.16 25.16 0 0 0 4.76 4.8 4.22 4.22 0 0 0 1.88.87c.17 0 .18 0 .25-.05s-.1 0 .53-.39a19.35 19.35 0 0 0 8-9.65 30.12 30.12 0 0 0 1.71-6.52 8.25 8.25 0 0 1 6.76-7Z" fill="#eec8c0"/><path d="M166.15 199.37c-3-2.4-3-7-3-7l9.65-1.86-3.1 7.48Z" fill="#eec8c0"/><path fill="#eec8c0" d="m172.86 190.53-9.65 1.85 1.08-7.04 6.92-2.69 1.65 7.88z"/><path d="M165.68 178a14 14 0 0 0 3.25 1c.28 0 .55.09.83.11 10.06 1.21 20.06-8.82 22.62-22.88 2.6-14.41-3.64-27.65-14-29.51s-20.83 8.32-23.45 22.74c-2.3 12.9 2.4 24.8 10.75 28.54Zm-5.37-27.56c2.16-11.88 8.47-20.87 14.6-21.31a6.1 6.1 0 0 1 1.35 0 21.82 21.82 0 0 1 2.68.38c5.43 1.1 10.54 12.36 8.2 25.28C185 167 177.41 176.2 170 176.23a7.58 7.58 0 0 1-1.5-.11H168.05l-.22-.05a6.17 6.17 0 0 1-1.44-.51c-5.52-2.73-8.21-13.29-6.08-25.09Z" fill={accentcolor}/><path d="M165.51 175.42a.4.4 0 0 1 0-.12l3.9.91c8.05 0 15.5-9.26 17.74-21.35 2.38-12.92-2.62-24.12-8.54-25.28a25.38 25.38 0 0 0-2.91-.41 20.53 20.53 0 0 0-2.46-.19c-6.66.37-13.78 9.4-15.69 21.33-1.8 11.08.93 23.31 7.96 25.11Z" fill="#fafafa" opacity=".4"/><path d="M161.14 211.74c3.86 3.88 6 .11 6 .11l.31-3.91 1.4-17.61.43-5.44.09-1 .37-4.7.23-2.93.06-.7-3.64-.16a.4.4 0 0 0 0 .12c-.09.3-.34 1.21-.7 2.54-.09.38-.21.79-.32 1.25-.67 2.54-1.56 6.1-2.42 9.95-2.08 9.31-3.95 20.33-1.81 22.48Z" fill="#263238"/><path d="M198.31 298.9s.8 28.09 1 35.45c.6 23.75 6.95 72.43 6.95 72.43l8.2-.23s2.42-48.94-1.27-68.62a6.47 6.47 0 0 1 0-2.28l5.71-35.15Z" fill="#eec8c0"/><path d="M219.38 297.77s5.33 22 10.8 35.05c6.62 15.76 35 66.87 35 66.87l5.46-5.13s-14.23-43.26-26.71-65.21a11.28 11.28 0 0 1-1.73-4.08c-.88-6.85-.92-26.9-4-33.86Z" fill="#fbd3cd"/><path d="M235 195.58v.33c0 .12 0 0 0 0-.09 1-.22 2.31-.36 3.74a.19.19 0 0 1 0 .08c-1 9.77-3 27.11-2.81 35.53a1.45 1.45 0 0 1 0 .36 2.71 2.71 0 0 1-.13.7 3.49 3.49 0 0 1-2.78 2.41 84.11 84.11 0 0 1-9.75 1.05h-.77a4.08 4.08 0 0 0 .06-.79 3.67 3.67 0 0 0-.39-1.56h-7.7c-4.53-.08-8.3-.26-9.94-.35a2.71 2.71 0 0 1 0 .29 2.45 2.45 0 0 1-.08-.29 1.54 1.54 0 0 1-.05-.31 104.26 104.26 0 0 0-3.85-20.41c-1-3.92-1.73-7-1.25-10.45.79-5.65 2.85-9.55 2.91-11.44a3.48 3.48 0 0 1 1.92-3 18.64 18.64 0 0 1 2.74-1.17 28.77 28.77 0 0 1 5.45-1v.05l.41 1.57.07.09 2 2.62.59.13 2.54.54 2.75-.51.46-.08 3.82-2.46 1.41-1.14.17-.18.09-.07a95.09 95.09 0 0 1 9.8 2 3.48 3.48 0 0 1 2.67 3.72Z" fill={accentcolor}/><path d="M220.88 189.7c-2.61-2.59-1.94-14.57-1.94-14.57l-7.26 5.25s-.23 7.4-2 8.88c-.4.35-1 .08-1.52.13l.5 1.87 1.45 2.29 1.94 1.3 2.8-.08 2.5-.79 2.82-2.09 2.29-2c-.46-.04-1.2.18-1.58-.19Z" fill="#eec8c0"/><path d="M211.22 182.44c4.86-.69 7-3.29 8-5.32l-.27-2-7.26 5.25Z" opacity=".1"/><path d="m205.51 405.87 9.34-.54a.75.75 0 0 1 .77.54l2.12 7.5a1.24 1.24 0 0 1-.85 1.55 1.09 1.09 0 0 1-.26.05c-3.37.14-6.37.12-10.56.37-4.95.29-3.66.81-9.47 1.23-3.5.25-4.37-3.7-2.89-4 6.74-1.25 7.33-3.34 9.81-5.93a3 3 0 0 1 1.99-.77ZM264.64 396.31l5.2-4.08a.75.75 0 0 1 .94 0l5.62 5.22a1.25 1.25 0 0 1 .25 1.75 1.12 1.12 0 0 1-.18.2c-2.6 2.14-3.47 2.54-6.66 5.26-3.77 3.21-2.43 2.85-6.81 6.69-2.64 2.31-5.72-.31-4.71-1.42 4.63-5.07 4.82-8.2 5.24-11.76a3 3 0 0 1 1.11-1.86Z" fill="#263238"/><path d="M233.25 238c-.36-.62-.73-1.21-1.13-1.79a5 5 0 0 0-.4-.58c-.14-.21-.28-.42-.43-.61L200 233.35s.15 1.45.28 3.79c1.64.09 5.41.27 9.94.35h7.7a3.67 3.67 0 0 1 .39 1.56 4.08 4.08 0 0 1-.06.79 3.83 3.83 0 0 1-.79 1.72c-1.92.1-3.87.17-5.75.23h-1a88.37 88.37 0 0 1-10.32-.16 83.82 83.82 0 0 1-.75 13.06c-2.45 16.73-3.44 37.93-1.19 52.17v.14c0 .17.06.33.1.5a96.94 96.94 0 0 0 19 1.24 43.76 43.76 0 0 0 5.54-.47c5.45-.78 11.09-.33 17.48-3.94.12-.03 5.73-44.13-7.32-66.33Z" fill={accentcolor}/><path d="M218.35 239.05a4.08 4.08 0 0 1-.06.79 3.83 3.83 0 0 1-.79 1.72c-1.92.1-3.87.17-5.75.23h-1a88.37 88.37 0 0 1-10.32-.16c0-1.58-.07-3-.14-4.22a2.71 2.71 0 0 0 0-.29c1.64.09 5.41.27 9.94.35h7.7a3.67 3.67 0 0 1 .42 1.58Z" fill="#263238"/><path d="M234.58 240.46s-7.94.66-16.13 1l-.95.05a3.83 3.83 0 0 0 .79-1.72 4.08 4.08 0 0 0 .06-.79 3.67 3.67 0 0 0-.39-1.56h.82a77.53 77.53 0 0 0 12.81-1.13c.18 0 .36-.08.53-.12l.47-.11a23.26 23.26 0 0 0 1.61 3.65Z" fill="#263238"/><path d="M208.13 189.2s2.65 9.51 14.41.73c0 0-12.13 14.6-14.41-.73Z" fill={accentcolor}/><path d="M208.13 189.2s2.65 9.51 14.41.73c0 0-12.13 14.6-14.41-.73Z" opacity=".5"/><path d="M212.09 194.85a1.51 1.51 0 1 1 .09 3Z" fill="#fff"/><path d="M221.77 167.38c-1.39 6.2-1.85 8.84-5.52 11.54-5.53 4.07-12.84 1-13.34-5.48-.43-5.84 1.91-15 8.44-16.49a8.67 8.67 0 0 1 10.42 10.43Z" fill="#eec8c0"/><path d="M211.53 167.41c-.09.51-.43.88-.75.83s-.54-.51-.46-1 .42-.88.75-.83.51.51.46 1ZM205.77 166.5c-.09.52-.42.88-.75.83s-.54-.51-.46-1 .42-.88.75-.82.54.49.46.99Z" fill="#263238"/><path d="m205.45 165.54-1.16-.55s.47 1.06 1.16.55Z" fill="#263238"/><path d="M207.4 167.71a13.67 13.67 0 0 1-2.35 3 2.24 2.24 0 0 0 1.77.63Z" fill="#ed893e"/><path d="M214 166.63a.31.31 0 0 1-.29-.21 3.58 3.58 0 0 0-2.16-1.89.31.31 0 0 1-.2-.39.3.3 0 0 1 .37-.2 4.1 4.1 0 0 1 2.56 2.29.29.29 0 0 1-.2.37.15.15 0 0 1-.08.03ZM204.47 163.57a.32.32 0 0 1-.27-.16.31.31 0 0 1 .11-.41 3 3 0 0 1 2.79-.21.29.29 0 0 1 .14.39.29.29 0 0 1-.4.13 2.4 2.4 0 0 0-2.18.19.31.31 0 0 1-.19.07ZM211.21 166.49l-1.16-.54s.47 1.05 1.16.54ZM225.55 171.24c-3.25 2.22-3.56 6.86-6.65 9.29-.76-2.13.45-5.56 1-8.08a1.18 1.18 0 0 0 0-.83c-.25-.41-.94-.31-1.25.07a2.37 2.37 0 0 0-.33 1.4c-.1-.24-.19-.48-.28-.71-.22 1-.42 1.91-.64 2.86a10.7 10.7 0 0 1-.14-2.23 4.33 4.33 0 0 1 .4-1.57c-8.71-21.79-7.66-20.08 1.74-19 3.9.45 7.17 3.67 8.28 7.45s2.32 8.34-2.13 11.35Z" fill="#263238"/><path d="M222.7 172.46a4.58 4.58 0 0 1-2.7 2.2c-1.53.44-2.32-.93-1.91-2.4.39-1.32 1.64-3.13 3.19-3a2.06 2.06 0 0 1 1.42 3.16Z" fill="#eec8c0"/><path d="M206.35 173.6a17.45 17.45 0 0 1 .3 2.5l.45.05c2 .21 3-.36 3.5-1.05a2.62 2.62 0 0 0 .4-1.1 2.47 2.47 0 0 0 0-.7 9.7 9.7 0 0 1-4 .41Z" fill="#2e353a"/><path d="m207 173.66.1.73c1.89.19 3.25.08 3.9-.44a2.47 2.47 0 0 0 0-.7 9.7 9.7 0 0 1-4 .41Z" fill="#fff"/><path d="M207.1 176.15c2 .21 3-.36 3.5-1.05a6.62 6.62 0 0 0-2.27.21 2.41 2.41 0 0 0-1.23.84Z" fill="#de5753"/><path fill={accentcolor} d="m219.9 174.09-.68 3.35.42.87.73-.91-.47-3.31z"/><path d="M235 197.29a43.06 43.06 0 0 1-.86 4.36c-7.76 23.54-18.53 23.12-21.38 18.35-1.83-.68-.83-27.43-2-32.8l4.49-1.41c1 2.28 3.05 28.08 4.91 24.22 1-2 4.16-8.54 4.68-10.73a8.24 8.24 0 0 1 7.36-6.35 4 4 0 0 1 2.8 4.36Z" fill="#fbd3cd"/><path d="M214.1 190.05c-3.75.83-7.3-2.1-7.3-2.1l4.61-8.68 3.88 7.11Z" fill="#fbd3cd"/><path fill="#fbd3cd" d="m211.43 179.27-4.61 8.68-4.81-5.27 2.26-7.07 7.16 3.66z"/><path d="M213.11 152.22a14.07 14.07 0 0 0-10.38 11.34c1.32-.25 1.91.68 3.21 1a11.65 11.65 0 0 1 5.17-5.17q.91 2.41 1.81 4.85c.33.88.79 2.88.79 2.88a29.8 29.8 0 0 1 3.83.39s1.67-6.47.09-10.79c-.67-1.84-1.49-3.79-3.17-4.79Z" fill="#263238"/><path transform="translate(-4.89 4.66) rotate(-1.18)" fill={accentcolor} d="M222.38 236.44h1.81v6.08h-1.81z"/><path transform="translate(-4.92 4.29) rotate(-1.18)" fill={accentcolor} d="M204.12 236.82h1.81v6.08h-1.81z"/><path d="M217.34 237.41a4.83 4.83 0 0 0-9 0l-.13.34h1.35l.07-.14a3.55 3.55 0 0 1 3.12-2 3.59 3.59 0 0 1 3.3 2 3.45 3.45 0 0 1 .35 1.46 3.82 3.82 0 0 1-.06.74 3.75 3.75 0 0 1-.75 1.6 3.57 3.57 0 0 1-5.38.17l-.07-.09h-1.55l.27.38a4.83 4.83 0 0 0 8.09-.25 4.53 4.53 0 0 0 .65-1.8 3.56 3.56 0 0 0 .06-.82 4.57 4.57 0 0 0-.32-1.59Z" fill="#fff"/></g><g id="freepik--chart-2--inject-49"><g opacity=".7"><path d="M374.42 264a41.07 41.07 0 0 1-34.69 27.1 35.94 35.94 0 0 1-12.39-1.11 32.5 32.5 0 0 1-17.19-11.3l29.69-24.09-34.57-9.4c6.24-17.65 24-28.85 41.44-27a36.05 36.05 0 0 1 5.6 1c19.13 5.14 29.01 25.2 22.11 44.8Z" fill={accentcolor}/><path d="M374.42 264a41.07 41.07 0 0 1-34.69 27.1 35.94 35.94 0 0 1-12.39-1.11 32.5 32.5 0 0 1-17.19-11.3l29.69-24.09-34.57-9.4c6.24-17.65 24-28.85 41.44-27a36.05 36.05 0 0 1 5.6 1c19.13 5.14 29.01 25.2 22.11 44.8Z" fill="#fff" opacity=".5"/><path d="M381.12 264c-6.22 17.62-24 28.81-41.39 27a41.07 41.07 0 0 0 34.69-27c6.9-19.55-3-39.61-22.07-44.8a36.05 36.05 0 0 0-5.6-1 35.43 35.43 0 0 1 12.3 1.11c19.09 5.1 28.95 25.14 22.07 44.69Z" fill={accentcolor}/><path d="M381.12 264c-6.22 17.62-24 28.81-41.39 27a41.07 41.07 0 0 0 34.69-27c6.9-19.55-3-39.61-22.07-44.8a36.05 36.05 0 0 0-5.6-1 35.43 35.43 0 0 1 12.3 1.11c19.09 5.1 28.95 25.14 22.07 44.69Z" fill="#fff" opacity=".3"/></g><g opacity=".7"><path fill={accentcolor} d="m331.75 255.99-29.7 24.09-6.7-.06 29.69-24.09-34.57-9.4 6.7.05 34.58 9.41z"/><path fill="#fff" opacity=".3" d="m331.75 255.99-29.7 24.09-6.7-.06 29.69-24.09-34.57-9.4 6.7.05 34.58 9.41z"/><path d="M325 255.93 295.35 280c-7-8.85-9.19-21.27-4.88-33.49Z" fill={accentcolor}/><path d="M325 255.93 295.35 280c-7-8.85-9.19-21.27-4.88-33.49Z" fill="#fff" opacity=".5"/></g></g><g id="freepik--chart-1--inject-49"><g opacity=".8"><path d="M192.5 282.93H93.09a8.26 8.26 0 0 1-8.36-9.15L88 236.21a10.18 10.18 0 0 1 10-9.15h99.42a8.25 8.25 0 0 1 8.35 9.15l-3.29 37.57a10.19 10.19 0 0 1-9.98 9.15Z" fill={accentcolor}/><path d="M192.5 282.93H93.09a8.26 8.26 0 0 1-8.36-9.15L88 236.21a10.18 10.18 0 0 1 10-9.15h99.42a8.25 8.25 0 0 1 8.35 9.15l-3.29 37.57a10.19 10.19 0 0 1-9.98 9.15Z" fill="#fff" opacity=".5"/></g><path d="M115.09 276.1h-8.28a.79.79 0 0 1-.8-.89l3.47-39.66a1 1 0 0 1 1-.89h8.27a.8.8 0 0 1 .81.89l-3.47 39.66a1 1 0 0 1-1 .89ZM182.88 276.1h-8.27a.8.8 0 0 1-.81-.89l3.47-39.66a1 1 0 0 1 1-.89h8.28a.8.8 0 0 1 .8.89l-3.47 39.66a1 1 0 0 1-1 .89ZM150.16 276.1h-8.27a.8.8 0 0 1-.81-.89l2.28-26a1 1 0 0 1 1-.89h8.27a.8.8 0 0 1 .81.89l-2.28 26a1 1 0 0 1-1 .89ZM132.77 276.1h-8.27a.8.8 0 0 1-.81-.89l1.7-19.33a1 1 0 0 1 1-.89h8.27a.8.8 0 0 1 .81.89l-1.69 19.33a1 1 0 0 1-1.01.89ZM166.52 276.1h-8.27a.8.8 0 0 1-.81-.89l.27-3.11a1 1 0 0 1 1-.89H167a.8.8 0 0 1 .81.89l-.28 3.11a1 1 0 0 1-1.01.89Z" fill="#fff"/><path d="M182.76 232a1 1 0 0 0-1.26.46l-15.33 30.75a.89.89 0 0 1-1.59.12l-12-23.68a.84.84 0 0 0-1.23-.28l-16.28 10.31a.88.88 0 0 1-.92 0L111 236.33a.94.94 0 0 0-1.27.41l-.06.1A.85.85 0 0 0 110 238l24 13.91a.9.9 0 0 0 .92 0l15.63-9.9a.86.86 0 0 1 1.23.28l12.71 25a.9.9 0 0 0 1.59-.11l17-34.06a.83.83 0 0 0-.32-1.12Z" opacity=".3"/></g></svg>
    )
}

export default Analysis;