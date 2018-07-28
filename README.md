# Beanworks Coding Exercise

- Written using Node.js
- Works

## Getting Started

**Configure**

1. Follow the instructions [here](https://developer.xero.com/documentation/api-guides/create-publicprivate-key) to create a public/private key pair and store`privatekey.pem` in `/keys`.
2. Create a new private app from the Xero Developer portal, select Node.js under SDK configuration, then copy and create `config.json` in the root folder.
3. Change `"privateKeyPath"` in `config.json` to `"keys/privatekey.pem"`.
4. Install dependencies using the `npm install` command.

**Run**

1. Run the program using the `npm start` command.
2. The ouput would be stored on disk in json format as `Account.json` and `Vendor.json`.
