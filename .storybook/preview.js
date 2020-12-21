import { sortStories } from './util/story-helpers';

const customViewports = {
    smallMobile: {
        name: 'Small mobile (P)',
        type: 'mobile',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    largeMobile: {
        name: 'Large mobile (P)',
        type: 'mobile',
        styles: {
            width: '414px',
            height: '896px',
        },
    },
    tablet: {
        name: 'Tablet (P)',
        type: 'tablet',
        styles: {
            width: '834px',
            height: '1112px',
        },
    },
    mediaQueryXS: {
        name: 'breakpoint "XS" 320px',
        type: 'mobile',
        styles: {
            width: '320px',
            height: '100%',
        },
    },
    mediaQueryS: {
        name: 'breakpoint "S" 530px',
        type: 'mobile',
        styles: {
            width: '530px',
            height: '100%',
        },
    },
    mediaQueryM: {
        name: 'breakpoint "M" 800px',
        type: 'tablet',
        styles: {
            width: '800px',
            height: '100%',
        },
    },
    mediaQueryL: {
        name: 'breakpoint "L" 1180px',
        type: 'desktop',
        styles: {
            width: '1180px',
            height: '100%',
        },
    },
    mediaQueryXL: {
        name: 'breakpoint "XL" 1480px',
        type: 'desktop',
        styles: {
            width: '1480px',
            height: '100%',
        },
    },
};

// Add group and story names to the sort order to explicitly order them.
// Items that are not included in the list are shown below the sorted items.
const SORT_ORDER = {
    Introduction: [
        'Welcome',
        'Getting Started',
        'Design Principles',
        'Contributing',
        'Code of Conduct',
    ],
    Advanced: [
        'Theme',
        'Icons',
        'Base Components',
        'Event Tracking',
        'Static CSS',
    ],
    Typography: ['Heading', 'SubHeading', 'Text'],
    Layout: [],
    Forms: [],
    Components: [],
    Icons: [],
};

export const parameters = {
    viewport: {
        viewports: customViewports, // newViewports would be an ViewportMap. (see below for examples)
        defaultViewport: 'someDefault',
    },
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    options: {
        storySort: sortStories(SORT_ORDER),
    }
}
