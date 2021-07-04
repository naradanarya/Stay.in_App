import "./feed.css";
import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Business } from "@material-ui/icons";

const Styles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      margin: theme.spacing(1),
      "& fieldset": {
        borderColor: "white",
        borderWidth: 2,
      },
      "& .MuiFormLabel-root": {
        color: "red" 
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderWidth: 2,
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderWidth: 2,
      },
    },
  },
  input: {
    color: "white",
    borderRadius: 16,
    
  },
}));

export default function feed() {
  const classes = Styles();
  return (
    <div className="cardContainer">
      <Card className="cardContent">
        <CardHeader
          avatar={<Business />}
          title="Find your best place to stay"
        />
        <CardContent>
          <TextField
            className={classes.root}
            label="Location"
            placeholder="Enter a destination here"
            variant="outlined"
            fullWidth={true}
            InputProps={{
                className: classes.input
            }}
          />
        </CardContent>
        <CardContent>
          <TextField
            className={classes.root}
            id="date"
            type="date"
            defaultValue="2021-07-03"
            variant="outlined"
            label="Ceck-In"
            InputProps={{
                className: classes.input
            }}
          />
          <TextField
            className={classes.root}
            id="date"
            type="date"
            defaultValue="2021-07-04"
            variant="outlined"
            label="Ceck-Out"
            InputProps={{
                className: classes.input
            }}
          />
          <TextField
            className={classes.root}
            variant="outlined"
            label="Room & Guest"
            InputProps={{
                className: classes.input
            }}
          />
        </CardContent>
        <CardActions className="CardActions">
          <Button
            className="Button"
            variant="contained"
            size="big"
            color="primary"
          >
            Find Now !
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
