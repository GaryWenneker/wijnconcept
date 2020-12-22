import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// export const config: Config = {
//   namespace: 'wow',
//   outputTargets: [
//     {
//       type: 'dist',
//       esmLoaderPath: '../loader',
//     },
//     {
//       type: 'dist-custom-elements-bundle',
//     },
//     {
//       type: 'docs-readme',
//     },
//     {
//       type: 'www',
//       serviceWorker: null, // disable service workers
//     },
//   ],
//   plugins: [sass()],
// };

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/styles.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      // serviceWorker: null,
      baseUrl: 'https://wijnconcept.netlify.app',
    },
  ],
  plugins: [sass()],
};
