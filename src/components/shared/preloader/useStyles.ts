import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles<string>({
  loader: {
    display: 'inline-block',
    margin: 0,
    position: 'relative',
    border: '3px solid #ccc',
    borderLeftColor: '#000',
    animation: '$spinner 1s infinite linear',

    '&, &:after': {
      borderRadius: '50%',
      width: 20,
      height: 20
    }
  },

  '@keyframes spinner': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
});

export { useStyles };
