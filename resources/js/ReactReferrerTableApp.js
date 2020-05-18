import React, { Component } from "react";
import ReferrerTable from "./components/ReferrerTable";

export default class ReactReferrerTableApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = ['id', 'name', 'email'];
    return (
      <ReferrerTable url="/api/users" columns={columns} />
    );
  }
}
