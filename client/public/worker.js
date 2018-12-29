onmessage = function(e) {
    var getInterval;
    try {
        console.log('Worker: Message received from main script');
        var params = 'Result: ' + (e.data[0]);
        console.log(params);
        function reqListener () {
            postMessage(this.responseText);
            console.log('Worker: Posting message back to main script');
        }
        
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        let url = e.data[0];
        getInterval = setInterval(() => {
            oReq.open("GET", url + "/project");
            oReq.send();
        }, 2 * 1000);
    } catch (error) {
        window.clearInterval(getInterval);
    }
}
