var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) { 
 
 request({
    url: 'https://api.github.com/user',method: 'GET',json: true,
 	headers: {
        'User-Agent': 'grant',
		'Authorization': 'token 4ad8383a6d93d00c338ec76aea3bd166c1436f55'
    	}
	}, function(error, response, body){
    		if(error) {
        	console.log(error);
    		} else {
        		res.json(body);
    		} 
    		
});
 
})

app.puts('/', function(req, res) { 
    
})

app.delete('/', function(req, res) { 
    
})

app.post('/', function(req, res) { 
    
})


app.listen(3000, function(){
    console.log('working')
})