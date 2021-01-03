import useMediaQuery from '@material-ui/core/useMediaQuery';

export const propsClasses = {
  isSmallDevice: useMediaQuery('(max-width:600px)'),
  isMediumDevice: useMediaQuery('(max-width:960px)'),
};
