import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles<string>({
  navlink: {
    display: 'inline-block',
    padding: [[10, 15]],
    color: '#444',
    textDecoration: 'none',
    backgroundColor: '#eee',

    '&.active': {
      backgroundColor: '#ccc'
    }
  }
});

export { useStyles };
