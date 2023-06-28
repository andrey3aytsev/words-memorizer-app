import { Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    fontWeight: "bold",
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export { useStyles };
