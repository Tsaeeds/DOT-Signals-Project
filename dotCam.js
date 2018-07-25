"use strict"
var webpage = require('webpage');



var page = webpage.create()






invoke(618) 				  // calling invoke


 // invoke function starts here

function invoke(id){       		  // id input refers to camera id






					

page.open('http://dotsignals.org/google_popup.php?cid=' + id ,function(status){       //opening webpage and going to specified URL


	var date = new Date(); // getiing current date and storing in a variable
	
	
	console.log('ID: ' + id );         // printing id to console 
	console.log('Status: ' + status);  // printing status to the console. If it access the URL successfully, then "success' will be printed to console
	
	if(status === "success"){    
		
	

	page.zoomFactor = 2;  		    // zoom in 200%

		
   					     // taking snapshot by using page.render() and saving it to specified folder(if folder does not exist then it will be created automatically) 
   					     //in current directory
					     // naming convention for image is: id + today's date + time (in seconds)

	page.render('img//ID_' + id + '_'+ date.toLocaleDateString() + '_' + date.getTime() + '.png', {format: 'png', quality: '100'});

	
	
	}



	
phantom.exit() // exit the program

});

}
 // invoke function ends here