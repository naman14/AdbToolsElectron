var childProcess = require('child_process'),
    ls;

function getNumberOfDevices() {
    var devices;
    ls = childProcess.exec('adb devices | wc -l', function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('Child Process STDOUT: ' + stdout);
        console.log('Child Process STDERR: ' + stderr);
        document.getElementById('devices').innerHTML = "No of devices = " + (stdout - 2);

    });

    ls.on('exit', function (code) {
        console.log('Child process exited with exit code ' + code);
    });
}
