import { create } from '@storybook/theming/create';

// export default create({
//   base: 'dark',
//   brandTitle: 'My custom storybook',
//   brandUrl: 'https://example.com',
//   brandImage: 'https://placehold.it/350x150',
// });

export default create({
    base: 'dark',

    // colorPrimary: 'hotpink',
    // colorSecondary: 'deepskyblue',

    // // UI
    // appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#fbd200',
    textInverseColor: '#fbd200',

    // // Toolbar default and active colors
    // barTextColor: 'silver',
    barSelectedColor: '#fbd200',
    // barBg: 'hotpink',

    // // Form colors
    // inputBg: 'white',
    // inputBorder: 'silver',
    // inputTextColor: '#fbd200',
    // inputBorderRadius: 4,

    brandTitle: 'Macaw WOW',
    // brandUrl: 'https://macaw.net',
    brandImage: '/images/macaw-inverse.svg',
});