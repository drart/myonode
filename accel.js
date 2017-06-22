var MyoBluetooth  = require('MyoNodeBluetooth');
var MyoAgent = new MyoBluetooth();


MyoAgent.on('discovered', function(armband){
    armband.on('connect', function(connected){
    
    	// armband connected succesfully
        if(connected){
		console.log(this);
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

	armband.on('accelerometer', function(data){
		console.log(data);
		if (data[0] > 0.5){
			//this.vibrate(1);
			console.log('shake it');
		}
			
	});
        
        // read or write data from/to the Myo
	armband.readVersion();
        armband.readBatteryInfo();
    });
    
   armband.connect();
});
