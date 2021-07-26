import City from "./components/city";
import Home from "./components/home";
import { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { api, cityArr } from "./config";
import {
  Select,
  Grid,
  MenuItem,
  withStyles,
  FormControl,
} from "@material-ui/core";
import { AppStyle } from "./style";

const App = (props) => {
  const { classes, history } = props;
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    history.push("/");
    setCity(e.target.value);
  };

  useEffect(() => {
    fetch(api(city))
      .then((res) => res.json())
      .then((res) => {
        setList(res.list);
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }, [city]);

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12}>
        <FormControl className={classes.select}>
          <Select value={city} onChange={handleChange}>
            {cityArr.map((cityVal) => (
              <MenuItem value={cityVal}>{cityVal}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} city={city} list={list} setData={setData} />
              )}
            />
            <Route
              exact
              path="/city"
              render={(props) => (
                <City {...props} data={data} setData={setData} />
              )}
            />
          </Switch>
        </>
      </Grid>
    </Grid>
  );
};

export default withStyles(AppStyle)(withRouter(App));
