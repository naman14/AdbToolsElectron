function getAdbDevices() {

    var childProcess = require('child_process'),
        process;

    var serials = [];
    var statuses = [];


    process = childProcess.exec('adb devices > devices', function (error1, stdout1, stderr1) {
            if (error1) {
                console.log(error1.stack);
                console.log('Error code: ' + error1.code);
                console.log('Signal received: ' + error1.signal);
            }

            console.log(stdout1);

            childProcess.exec('wc -l < devices', function (error2, stdout2, stderr2) {
                console.log(stdout2);

                for (var i = 1; i < stdout2 - 1; i++) {
                    var line = i + 1;
                    childProcess.exec("awk 'FNR == " + line + " {print $1}' devices ", function (error3, stdout3, stderr3) {
                        console.log(stdout3);
                        serials.push(stdout3)
                    });
                    childProcess.exec("awk 'FNR == " + line + " {print $2}' devices ", function (error4, stdout4, stderr4) {
                        console.log(stdout4);
                        statuses.push(stdout4)
                    });
                }

            });

        }
    );

    for (i in serials) {
        console.log(serials[i]);
    }

    for (i in statuses) {
        console.log(statuses[i]);
    }

}
