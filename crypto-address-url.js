/* CryptoAddressUrl
 * Convert a crypto currency address to a url.
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.CryptoAddressUrl = factory();
  }
}(this, function() {
    var CryptoAddressUrl,
        ValidCryptoAddress = require('valid-crypto-address');

    CryptoAddressUrl = function(address, amount) {
        var head, tail = '';

        if(ValidCryptoAddress(address)) {
            switch(address.split('').shift()) {
                case '1':
                    head = 'bitcoin'
                  break;
                case '3':
                    head = 'bitcoin'
                  break;
                case 'D':
                    head = 'dogecoin'
                  break;
                case 'L':
                    head = 'litecoin'
                  break;
                case 'P':
                    head = 'peercoin'
                  break;
                case 'x':
                    head = 'clam'
                  break;
                default:
                  return false;
            }

            if((typeof amount === 'number') || (typeof amount === 'string')) {
                tail = '?amount=' + amount;
            }

            return head + ':' + address + tail;
        } else {
            return false;
        }
    };
    
    return CryptoAddressUrl;
}));
