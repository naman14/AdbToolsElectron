function getDeviceModel(serial) {

    var childProcess = require('child_process');

    return childProcess.execSync('adb -s ' + serial.trim() + ' shell getprop ro.product.model').toString();

}

function getDeviceManufacturer(serial) {

    var childProcess = require('child_process');

    return childProcess.execSync('adb -s ' + serial.trim() + ' shell getprop ro.product.manufacturer').toString();

}