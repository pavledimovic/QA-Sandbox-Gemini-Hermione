var looksSame = require('looks-same');


gemini.suite('QALogin', (suite) => {
   	   
	 suite.setUrl('/')  	
		.setCaptureElements('.container')
        .capture('header');  
});	

gemini.suite('QAlogin2', (suite) => {
	
	suite.setUrl('/')
	    //.ignoreElements('.container')
       .setCaptureElements('.landing')
       .capture('loginDialogue');		
});	

gemini.suite('QAlogin3', (suite) => {
    
	suite.setUrl('/')       	
		.setCaptureElements('.footer-logo')
        .capture('footerLogo', function(actions, wait, click) {		
		//actions.click('footer')
		actions.wait(4000)});			
});

gemini.suite('QAlogin4', (suite) => {
    
	suite.setUrl('https://qa-sandbox.apps.htec.rs/login')       	
		.setCaptureElements('[class="App"')
		//.ignoreElements({every: '.content ng-scope'})		
        .capture('loginInput', function(actions, wait, click) {		
		actions.click('nav')
		actions.wait(6000)});			
});

gemini.suite('QAlogin5', (suite) => {
    
	suite.setUrl('https://qa-sandbox.apps.htec.rs/login')       	
		.setCaptureElements('[class="App"')
		//.ignoreElements({every: '.content ng-scope'})		
       .capture('main', function(actions, find, type) {		
		actions.sendKeys(find('.input-group',), 'pavledimovic@gmail.com');
		actions.click('[name="password"]')
        actions.sendKeys(find('[name="password"]'), 'beta8b')
		actions.click('[data-testid="submit_btn"]')
	    actions.wait(6000)});
		});	









