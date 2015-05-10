/* CryptoAddressUrl / test / basic.js
 * basic test
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    CryptoAddressUrl = require('../crypto-address-url.min.js');

vows.describe('basic').addBatch({
    'typeof CryptoAddressUrl': {
        topic: function() {
        	return typeof CryptoAddressUrl;
        },
        'is a function': function(topic) {
            assert.equal(topic, 'function');
        }
    },
    'CryptoAddressUrl will not': {
    	topic: function() {
    		return CryptoAddressUrl;
    	},
    	'parse an address containing invalid characters': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62;'), false);
    	},
    	'parse an address with an invalid length': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62'), false);
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62ix'), false);
    	},
    	'parse an address with an invalid checksum': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62x'), false);
    		assert.equal(topic('1AGNa15ZQXAZUgxiqJ2i7Z2DPU2J6hW62i'), false);
    	},
    	'parse an amount that is not a number or a string': function(topic) {
    		assert.notEqual(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i', function() {
    			return 1;
    		}), 'bitcoin:1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i?amount=1');
    	}
    },
    'CryptoAddressUrl will': {
    	topic: function() {
    		return CryptoAddressUrl;
    	},
    	'create a valid bitcoin address url': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i'), 'bitcoin:1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i');
    	},
    	'create a valid bitcoin address url with amount': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i', 1), 'bitcoin:1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i?amount=1');
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i', '1'), 'bitcoin:1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i?amount=1');
    	},
    	'create a valid multisig address url': function(topic) {
    		assert.equal(topic('38ccq12hPFoiSksxUdr6SQ5VosyjY7s9AU'), 'bitcoin:38ccq12hPFoiSksxUdr6SQ5VosyjY7s9AU'); //Sean's Outpost
    	},
    	'create a valid multisig address url with amount': function(topic) {
    		assert.equal(topic('38ccq12hPFoiSksxUdr6SQ5VosyjY7s9AU', 1), 'bitcoin:38ccq12hPFoiSksxUdr6SQ5VosyjY7s9AU?amount=1');
    		assert.equal(topic('38ccq12hPFoiSksxUdr6SQ5VosyjY7s9AU', '1'), 'bitcoin:38ccq12hPFoiSksxUdr6SQ5VosyjY7s9AU?amount=1');
    	},
    	'create a valid dogecoin address url': function(topic) {
    		assert.equal(topic('DJ7ABojBPoYWS1SWH5XCBDqoz1q4YBL5e4'), 'dogecoin:DJ7ABojBPoYWS1SWH5XCBDqoz1q4YBL5e4'); //daXXog's dogecoin address
    	},
    	'create a valid dogecoin address url with amount': function(topic) {
    		assert.equal(topic('DJ7ABojBPoYWS1SWH5XCBDqoz1q4YBL5e4', 1), 'dogecoin:DJ7ABojBPoYWS1SWH5XCBDqoz1q4YBL5e4?amount=1');
    		assert.equal(topic('DJ7ABojBPoYWS1SWH5XCBDqoz1q4YBL5e4', '1'), 'dogecoin:DJ7ABojBPoYWS1SWH5XCBDqoz1q4YBL5e4?amount=1');
    	},
    	'create a valid litecoin address url': function(topic) {
    		assert.equal(topic('LUy1Uyab68Gay7LVHW4jzbb7EDNNQP3WGD'), 'litecoin:LUy1Uyab68Gay7LVHW4jzbb7EDNNQP3WGD'); //daXXog's litecoin address
    	},
    	'create a valid litecoin address url with amount': function(topic) {
    		assert.equal(topic('LUy1Uyab68Gay7LVHW4jzbb7EDNNQP3WGD', 1), 'litecoin:LUy1Uyab68Gay7LVHW4jzbb7EDNNQP3WGD?amount=1');
    		assert.equal(topic('LUy1Uyab68Gay7LVHW4jzbb7EDNNQP3WGD', '1'), 'litecoin:LUy1Uyab68Gay7LVHW4jzbb7EDNNQP3WGD?amount=1');
    	},
    	'create a valid peercoin address url': function(topic) {
    		assert.equal(topic('PXDEm3MnNF3FxQf7yRtwRb3NUA9nm3Zu11'), 'peercoin:PXDEm3MnNF3FxQf7yRtwRb3NUA9nm3Zu11'); //daXXog's peercoin address
    	},
    	'create a valid peercoin address url with amount': function(topic) {
    		assert.equal(topic('PXDEm3MnNF3FxQf7yRtwRb3NUA9nm3Zu11', 1), 'peercoin:PXDEm3MnNF3FxQf7yRtwRb3NUA9nm3Zu11?amount=1');
    		assert.equal(topic('PXDEm3MnNF3FxQf7yRtwRb3NUA9nm3Zu11', '1'), 'peercoin:PXDEm3MnNF3FxQf7yRtwRb3NUA9nm3Zu11?amount=1');
    	},
    	'create a valid clam address url': function(topic) {
    		assert.equal(topic('xGfpKAm23iH13jmGgy35um44jt8ceXb6MV'), 'clam:xGfpKAm23iH13jmGgy35um44jt8ceXb6MV'); //daXXog's CLAM address
    	},
    	'create a valid clam address url with amount': function(topic) {
    		assert.equal(topic('xGfpKAm23iH13jmGgy35um44jt8ceXb6MV', 1), 'clam:xGfpKAm23iH13jmGgy35um44jt8ceXb6MV?amount=1');
    		assert.equal(topic('xGfpKAm23iH13jmGgy35um44jt8ceXb6MV', '1'), 'clam:xGfpKAm23iH13jmGgy35um44jt8ceXb6MV?amount=1');
    	},
    }
}).export(module);