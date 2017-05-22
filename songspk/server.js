const request = require('request'),
    fs = require('fs');
//    express = require('express');

//var app = new express();

const settings = {
    "url": "http://link.songspk.cloud/indian_movie/H_List/download.php?id=1330"
}



const unirest = require('unirest');

const Request = unirest.get(settings.url);


Request.end(function (response) {
    const uri = response.request.uri;
    fileName = uri.path.split('/').pop();
    console.log(fileName);
    fileName = fileName.replace(/[|&;$%@"<>()+,]/g, "");
    response.pipe();
});



function requestCall() {
    var ws = fs.createWriteStream('sample.mp3');
    var resp = fs.createWriteStream('response.json');
    var req = request(settings.url, function (err, response, body) {
        console.log("STATUS CODE " + response.statusCode);
        const statusCode = response.statusCode;
        if (statusCode == 200) {
            console.log("REQUEST SUCCEEDED");
        }
    }).pipe(ws)

    req.on('complete', function () {
        req.pipe(ws);
    });
}