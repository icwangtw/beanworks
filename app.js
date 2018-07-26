const XeroClient = require('xero-node').AccountingAPIClient;
const config = require('./config.json');
const fs = require('fs');

(async () => {
  let xero = new XeroClient(config);
  const accountInfo = await xero.accounts.get();
  const vendorInfo = await xero.contacts.get();
  fs.writeFile('Account.txt', JSON.stringify(accountInfo.Accounts), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('finish writing account info');
  });
  fs.writeFile('Vendor.txt', JSON.stringify(vendorInfo.Contacts), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Finish writing vendor info');
  });
})();