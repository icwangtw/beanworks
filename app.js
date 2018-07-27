const XeroClient = require('xero-node').AccountingAPIClient;
const config = require('./keys/config.json');
const fs = require('fs');
const xero = new XeroClient(config);

(async () => {
  try {
    const accountInfo = await xero.accounts.get();
    fs.writeFile('results/Account.json', JSON.stringify(accountInfo.Accounts), function (err) {
      if (err) {
        return console.log('File writing error: ', err);
      }
    console.log('Finish writing account info');
  });
  } catch(err) {
    console.log('Xero access error:', err);
  }

  try {
    const vendorInfo = await xero.contacts.get();
    fs.writeFile('results/Vendor.json', JSON.stringify(vendorInfo.Contacts), function (err) {
      if (err) {
        return console.log('File writing error: ', err);
      }
    console.log('Finish writing vendor info');
  });
  } catch(err) {
    console.log('Xero access error:', err);
  }

})();