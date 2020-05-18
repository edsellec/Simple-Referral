import React, { Component } from "react";
import ReferralTable from "./components/ReferralTable";

export default class ReactReferralTableApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = ['id', 'name', 'email'];
    return (
      <ReferralTable url="/api/users" columns={columns} />
    );
  }
}
