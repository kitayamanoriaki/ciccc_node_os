const os = require('os');



// @ generate menu links
// @ private function
const showStatus = () => {
console.log('+++++++++ cpus ++++++++++');
console.log(os.cpus());
console.log('+++++++++ arch ++++++++++');
console.log(os.arch());
console.log('+++++++++ constants  ++++++++++');
console.log(os.constants);
console.log('++++++++++ endiannes +++++++++');
console.log(os.endiannes);
console.log('+++++++++ freemem ++++++++++');
console.log(os.freemem());
console.log('++++++++ hostname +++++++++++');
console.log(os.hostname());
console.log('+++++++++ hostname ++++++++++');
console.log(os.hostname());
console.log('+++++++++ loadavg ++++++++++');
console.log(os.loadavg());
console.log('++++++++ networkInterfaces ++++++++++');
console.log(os.networkInterfaces());
console.log('+++++++++ platform ++++++++++');
console.log(os.platform());
console.log('+++++++++ release ++++++++++');
console.log(os.release());
console.log('+++++++++ tmpdir ++++++++++');
console.log(os.tmpdir());
console.log('+++++++++ totalmem ++++++++++');
console.log(os.totalmem());
console.log('+++++++++ type ++++++++++');
console.log(os.type());
console.log('+++++++++ totalmem ++++++++++');
console.log(os.totalmem());
console.log('+++++++++ type ++++++++++');
console.log(os.type());
console.log('+++++++++ uptime ++++++++++');
console.log(os.uptime());
console.log('+++++++++ userInfo ++++++++++');
console.log(os.userInfo());
console.log('+++++++++ showStatus ++++++++++');
console.log(os.userInfo());

}

showStatus();
