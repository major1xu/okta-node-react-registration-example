const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-879975-admin.okta.com',
  token: '00MN30daEJdzssOKVwdTWpoF_VSSPykGBwLpT7yKp8'
});

module.exports = client;