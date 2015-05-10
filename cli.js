/* CryptoAddressUrl / cli.js
 * command line interface for CryptoAddressUrl
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var CryptoAddressUrl = require('./crypto-address-url.min.js');

console.log(CryptoAddressUrl(process.argv[2], process.argv[3]));