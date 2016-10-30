var chromedriver = require('chromedriver');
module.exports = {
  'default' : {
  	counter : 0,
  	test : function(){
  		return "test";
  	}
  },

  url: function() { 
    return 'http://metsys-evil-pukcab.nl/test' + this.counter++; 
  },
  
  before : function(done) {
    chromedriver.start();

    done();
  },

  after : function(done) {
    chromedriver.stop();

    done();
  },

  beforeEach: function(browser, done) {
    // getting the session info
    console.log(this.counter++);
    done();
  },
};