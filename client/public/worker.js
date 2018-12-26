onmessage = function(e) {
    var getInterval;
    try {
        console.log('Worker: Message received from main script');
        var params = 'Result: ' + (e.data[0] * e.data[1]);
        console.log(params);
        function reqListener () {
            postMessage(this.responseText);
            console.log('Worker: Posting message back to main script');
        }
        
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        
        getInterval = setInterval(() => {
            oReq.open("GET", "http://localhost:5000/api/v1/project");
            oReq.send();
        }, 2 * 1000);
    } catch (error) {
        window.clearInterval(getInterval);
    }
}
