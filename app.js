const XeroClient = require('xero-node').AccountingAPIClient;
const config = require('./config.json');

(async () => {

    // You can initialise Private apps directly from your configuration
    let xero = new XeroClient(config);

    const accountInfo = await xero.accounts.get();

    const vendorInfo = await xero.contacts.get();

    console.log('All account info:', accountInfo);

    console.log('All vendor info:', vendorInfo)

})();