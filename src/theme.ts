import { createMuiTheme } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey['700']
    }
  }
});

export { theme };
