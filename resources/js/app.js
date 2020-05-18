import React from 'react';
import ReactDOM from "react-dom";

require('./bootstrap');

import ReactReferralTableApp from './ReactReferralTableApp';
import ReactReferrerTableApp from './ReactReferrerTableApp';

if (document.getElementById('referral_table')) {
  ReactDOM.render(<ReactReferralTableApp />, document.getElementById('referral_table'));
}
if (document.getElementById('referrer_table')) {
  ReactDOM.render(<ReactReferrerTableApp />, document.getElementById('referrer_table'));
}