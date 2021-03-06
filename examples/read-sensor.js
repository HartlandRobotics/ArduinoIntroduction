var five = require("johnny-five");
var Particle = require("particle-io");

var board = new five.Board({
  io: new Particle({
    token: '7ae40abd0f7c272888ca95b6740667febd1a29c8',
    deviceName: 'YOUR_DEVICE_NAME'
  })
});

board.on("ready", function() {
  (new five.Led(11)).strobe();

  var input = new five.Sensor("A0");

  input.on("data", function() {
    console.log(this.value);
  });
});
