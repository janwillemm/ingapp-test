module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://metsys-evil-pukcab.nl/' + data[(process.pid % 80)-1])
      .waitForElementVisible('img[src="http://i.imgur.com/hTfuJCx.png"]', 5000*30)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'http://i.imgur.com/gHZuFjc.png')
      .click('input.btn')
      .waitForElementVisible('img[src="http://i.imgur.com/gHZuFjc.png"]', 5000)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'http://i.imgur.com/ByGW67M.png')
      .click('input.btn')
      .waitForElementVisible('img[src="http://i.imgur.com/ByGW67M.png"]', 5000)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'http://i.imgur.com/iqBRuNS.png')
      .click('input.btn')
      .waitForElementVisible('img[src="http://i.imgur.com/iqBRuNS.png"]', 5000)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'http://i.imgur.com/b3QlD9h.png')
      .click('input.btn')
      .waitForElementVisible('img[src="http://i.imgur.com/b3QlD9h.png"]', 5000)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'http://i.imgur.com/2KA202T.png')
      .click('input.btn')
      .waitForElementVisible('img[src="http://i.imgur.com/2KA202T.png"]', 5000)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'http://i.imgur.com/final.png')
      .click('input.btn')
      .waitForElementVisible('div.finished', 5000)
      // .setValue('input[type=text]', 'http://i.imgur.com/ByGW67M.png')
      // .click('input.btn')
      // .pause(1000*random(5,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/iqBRuNS.png')
      // .click('input.btn')
      // .pause(1000*random(5,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/b3QlD9h.png')
      // .click('input.btn')
      // .pause(1000*random(5,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/2KA202T.png')
      // .click('input.btn')
      // .pause(1000*random(5,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/final.jpg')
      .end();
      // .pause(1000*60)
      // .pause(1000*6*random(1,60))
      
      // 
      // .click('input.btn')
      // .pause(1000*6*random(1,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/ByGW67M.png')
      // .click('input.btn')
      // .pause(1000*6*random(1,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/iqBRuNS.png')
      // .click('input.btn')
      // .pause(1000*6*random(1,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/b3QlD9h.png')
      // .click('input.btn')
      // .pause(1000*6*random(1,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/2KA202T.png')
      // .click('input.btn')
      // .pause(1000*6*random(1,60))
      // .setValue('input[type=text]', 'http://i.imgur.com/final.jpg')
      // .click('input.btn')
      // .pause(1000*6*random(1,60))
      // .end();
  }
};

var random = function(from, to){
  console.log("random function called");
  var a = 5/0;
  Math.floor(Math.random() * to - from) + from
}

var data = ["QFLZcmQtZuLS",
"DKsuq2SaH9d3",
"skrpMU7K5NF3",
"ZgrKL98SfFM4",
"3RjcgfqYybUv",
"r2BLhMNXSYEV",
"f3aGyQ3TTHYF",
"ALQmtJp7jr6R",
"U2zhsTk2FLhb",
"s7wvfZv6pkx2",
"quEhngt9wvFK",
"xagUHmQxdvSD",
"RsCCqyrTgjb5",
"R8QKEfPdkY7x",
"V9pT8xkUR67p",
"SgygMA8XBmBC",
"mjjN5FNPwpLK",
"UFb64KfUdDqa",
"f3fsudhqX2Kt",
"uxkvFhCXwyzR",
"eAy8F99Q88qh",
"5qzeqEs4Mhra",
"QJAAPrYgfEZH",
"Mpes5BMB2d3e",
"nLGajtpnjyyc",
"8bqyvRp5xWkQ",
"qGGRhCnwTczW",
"RvEX2MJNdp4s",
"GvMdw68KUXuN",
"HtHqeMs3NemB",
"Gp4Acmz2FbyV",
"YP8mLdHFDgsq",
"7jcjJULqAmr5",
"JMSSf8XjURRt",
"zYAFLVUa9k5u",
"stvGkHp993La",
"55SNDkUnApm7",
"kWsLthLfnJJq",
"ULZmzwRSLAbA",
"dpa7kqU3CHfs",
"eTURzzKp7hGJ",
"xpxabLCZ8ccs",
"b9xBNfJzDHfF",
"wbAS6pWVWSbU",
"c7d9aM2ZJZeD",
"wVgTs2cTubW6",
"QBVRUzJ9DGa8",
"G8W7WKNgVwgh",
"9ABPGY9t7sEm",
"tZaSkX7Tsj3t",
"DVwtUS2v9uyz",
"vNGTBaregn9k",
"ngA4EQnHJhG6",
"7MWNDcewQQ5Z",
"d4PdwWvZQnQJ",
"EBZbpzfg5wJN",
"rELz3RTJD8uA",
"Aq792rEBV25r",
"E3NcGHkeSyTP",
"8PtK4t8vDzXf",
"UFfTxtURsmSA",
"fvhnfNQ6YgTJ",
"vMEVqT3V7DF9",
"zQEaLC9fShcw",
"nRYXWYyzRTZV",
"E3SqLwyg7KSc",
"WxDv5XT6Xdfz",
"3McyKQJRuMTv",
"ZG7snJgjuPzB",
"vVjKCPx3mJCt",
"4QTf6XUjK4u8",
"YxR3ycM9dEuf",
"FUcLR4AGEVqN",
"bWnagzwxcdrJ",
"rfq6GZYBKzhJ",
"ahJbfSE6mcvN",
"rqcpKVvz7TgA",
"sZxWQV8m3ESr",
"XQX7R4gBk9aU",
"BD9g9M5cPN6g",
"pEMPnQs6zbBp",
"Vfq3MS4R5vH8",
"KsCrNFZCwaxz",
"6mJ7fFqhXUAD",]