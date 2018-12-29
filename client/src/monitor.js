var apiClient = require('./api-client/src');

function Monitor () {
    let apiInstance = new apiClient.ProjectApi();
    apiInstance.getProject().then(data => {
        console.log('xxx ', data);
    });
    // let getProjectPromise = apiInstance.getProject();

    if (window.Worker) {
        let myWorker = new Worker("worker.js");
        myWorker.postMessage([apiClient.ApiClient.instance.basePath]);
        myWorker.onmessage = function(e) {
            console.log(e.data);
            console.log('Main (myWorker.onmessage): Message received from worker');
        }
    }
} 

export default Monitor;
