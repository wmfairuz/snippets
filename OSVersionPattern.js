var agent = navigator.userAgent
// or hard coded version
var agents = [];
agents.push("Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; GT-I9000 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1")
agents.push("Mozilla/5.0 (Linux; U; Android 3.0.0; en-fr; mockup mockup")
agents.push("Mozilla/5.0 (Linux; U; Android 4.1.1; en-fr; HTC One X Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30")

agents.push("Mozilla/5.0 (iPad; U; CPU OS 3_2_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B500 Safari/53")
agents.push("Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5")
agents.push("Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko ) Version/5.1 Mobile/9B176 Safari/7534.48.3")
agents.push("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25")

// list of userAgent http://www.useragentstring.com/pages/useragentstring.php

// example detect android
agent.match(/Android/i)

// list
Android             // Android in string
OS 6(_\d)+          // IOS 6_x
Android 2           // Android 2
Android 2(\.\d)+    // Android 2.x.x   


// Example detecting Android 3/4 and IOS 4/5/6
for(var i=0; i<agents.length; i++){
    console.log(agents[i].match(/(Android (3|4)(\.\d)+)|(OS (4|5|6)(_\d)+)/i))
}
