import { addons } from '@storybook/addons';
import theme from './util/theme';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: theme,
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});
