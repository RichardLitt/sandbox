var ftp = require("ftp")


function HelloWorld () {

	var hello = {}

	while (true) {
		if (hello) {
			try {
				hello.test = 3
			} catch (uncaught) {
				hello.test = 1

				continue
			}

			if (hello.test)
				console.log('hello', hello.test)
		}
	}


}

HelloWorld();
