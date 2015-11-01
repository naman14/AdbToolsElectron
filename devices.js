function getAdbDevices() {

    var childProcess = require('child_process');

    var serials = [];
    var statuses = [];


    var devices = childProcess.execSync('adb devices');
    console.log(devices.toString());

    var wcl = childProcess.execSync('wc -l < devices').toString();

    for (var i = 1; i < wcl - 1; i++) {
        var line = i + 1;
        executeAwkForSerial(line);
        executeAwkForStatus(line);
    }

    console.log(getDeviceModel(serials[0]));
    console.log(getDeviceManufacturer(serials[0]));

    function executeAwkForSerial(line) {
        var serial = childProcess.execSync("awk 'FNR == " + line + " {print $1}' devices ").toString();
        console.log(serial);
        serials.push(serial);
    }

    function executeAwkForStatus(line) {
        var status = childProcess.execSync("awk 'FNR == " + line + " {print $2}' devices ").toString();
        console.log(status);
        statuses.push(status);
    }


}
