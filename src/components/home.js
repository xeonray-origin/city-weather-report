import React, { useEffect } from "react";
import { tableConfig } from "./../config";
import { HomeStyle } from "./../style";
import get from "lodash/get";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  withStyles,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

function Home(props) {
  const { classes, list, setData, history } = props;
  console.log(list);

  const handleHyperLink = (data) => {
    setData(data);
    history.push("/city");
  };

  return list.length ? (
    <div>
      <Table>
        <TableHead>
          {tableConfig.map((config) => (
            <TableCell>{config.label}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {list.map((record) => {
            return (
              <TableRow>
                {tableConfig.map((config) => (
                  <TableCell>
                    {config.path === "dt_txt" ? (
                      <span
                        className={classes.link}
                        onClick={() => handleHyperLink(record)}
                      >
                        {get(record, config.path)}
                      </span>
                    ) : (
                      get(record, config.path)
                    )}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  ) : (
    "loading..."
  );
}

export default withStyles(HomeStyle)(withRouter(Home));
