import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  CardActions,
  Button,
  TableCell,
  TableRow,
} from "@material-ui/core";
import get from "lodash/get";
import { tableConfig } from "./../config";
import { withRouter } from "react-router-dom";
function City(props) {
  const { data, setData, history } = props;

  const handleClick = () => {
    setData(null);
    history.push("/");
  };

  return data ? (
    <div>
      <Card>
        <CardHeader
          title={"Weather Report"}
          subheader={`Dated: ${new Date(data.dt)} `}
        />
        <CardContent>
          <Table>
            {tableConfig.map((config) => {
              return (
                <TableRow>
                  <TableCell>{config.label}</TableCell>
                  <TableCell>{get(data, config.path)}</TableCell>
                </TableRow>
              );
            })}
          </Table>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="contained" onClick={handleClick}>
            Go Back
          </Button>
        </CardActions>
      </Card>
    </div>
  ) : (
    "loading..."
  );
}

export default withRouter(City);
