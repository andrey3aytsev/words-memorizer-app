import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    padding: 10,
    border: '1px solid #ccc',
    position: 'relative',

    '&:not(:last-child)': {
      marginBottom: 10
    }
  },

  closeButton: {
    position: 'absolute',
    margin: 0,
    padding: 0,
    top: 10,
    right: 10,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    color: '#777',

    '&:hover': {
      color: '#000'
    }
  }
});

export { useStyles };


