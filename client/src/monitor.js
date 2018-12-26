function Monitor () {
    if (window.Worker) {
        let myWorker = new Worker("worker.js");
        myWorker.postMessage([111, 222]);
        myWorker.onmessage = function(e) {
            console.log(e.data)
            console.log('Main (myWorker.onmessage): Message received from worker');
        }
    }
} 

export default Monitor;
