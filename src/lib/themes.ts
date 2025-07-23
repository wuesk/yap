export type ColorTheme = 'yellow' | 'blue' | 'red' | 'green';

export const themes = {
    yellow: {
        bg: 'bg-yellow-400',
        border: 'border-amber-500',
        text: 'text-amber-700',
        shadow: 'shadow-[4px_4px_0px_0px_rgb(180,83,9)]', // amber-700
        pageBg: 'bg-orange-100'
    },
    blue: {
        bg: 'bg-blue-400',
        border: 'border-blue-600',
        text: 'text-blue-800',
        shadow: 'shadow-[4px_4px_0px_0px_rgb(30,64,175)]', // blue-800
        pageBg: 'bg-blue-100'
    },
    red: {
        bg: 'bg-red-400',
        border: 'border-red-600',
        text: 'text-red-800',
        shadow: 'shadow-[4px_4px_0px_0px_rgb(153,27,27)]', // red-800
        pageBg: 'bg-red-100'
    },
    green: {
        bg: 'bg-green-400',
        border: 'border-green-600',
        text: 'text-green-800',
        shadow: 'shadow-[4px_4px_0px_0px_rgb(22,101,52)]', // green-800
        pageBg: 'bg-green-100'
    }
} as const;

export const defaultTheme: ColorTheme = 'yellow';