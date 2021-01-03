import useMediaQuery from '@material-ui/core/useMediaQuery';

// not used, how to export an object???
export const propsClasses = {
  isSmallDevice: useMediaQuery('(max-width:600px)'),
  isMediumDevice: useMediaQuery('(max-width:960px)'),
};
