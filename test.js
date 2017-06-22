var MyoBluetooth  = require('MyoNodeBluetooth');
var MyoAgent = new MyoBluetooth();


MyoAgent.on('discovered', function(armband){
    armband.on('connect', function(connected){
    
    	// armband connected succesfully
        if(connected){
            // discover all services/characteristics and enable emg/imu/classifier chars
        	this.initStart();
    	} else {
    	  // armband disconnected
   		}

	});
    
    // Armband receives the ready event when all services/characteristics are discovered and emg/imu/classifier mode is enabled
    armband.on('ready', function(){
    
    	// register for events
        armband.on('batteryInfo',function(data){
        	console.log('BatteryInfo: ', data.batteryLevel);
        });
        
        // read or write data from/to the Myo
        armband.readBatteryInfo();
    });
    
   armband.connect();
});