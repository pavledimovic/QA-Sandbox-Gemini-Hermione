
module.exports = {
	
	system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'my/gemini-reports',
                defaultView: 'all',
                baseHost: 'test.com',
                errorPatterns: [
                    'Parameter .* must be a string',
                    {
                        name: 'Cannot read property of undefined',
                        pattern: 'Cannot read property .* of undefined'
                    }
                ]
            }
        }
    },
	
	rootUrl: 'https://qa-sandbox.apps.htec.rs/',
    calibrate: false,
	
	tolerance: 2.5, // 0 is for 0 tolerance, 2,5-5 is derfault
	antialiasingTolerance: 11,
	
	sessionsPerBrowser: 1,
	screenshotsDir: './screensQA',
	
	browsers: {
    chromeXL: {
      desiredCapabilities: {
        browserName: 'chrome',
		diffBounds: {left: 10, top: 10, right: 20, bottom: 20},
        chromeOptions: {
          //args: ['--headless'],
        },
      },
      windowSize: '1920x1080',
    },

//	firefox: {
 //    desiredCapabilities: {
//		browserName: 'firefox',
//		 },
 //     windowSize: '1920x1080',
//    },
      

  }
  
};

