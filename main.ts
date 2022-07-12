MakerCloud.on_wifi_disconnected(function () {
    koi.koi_cloud_tts("wifi disconnected")
})
MakerCloud.on_wifi_connected(function () {
    koi.koi_cloud_tts("wifi connected")
})
MakerCloud_KOI.registerTopicMessageHandler("BMTOR6T1", function (receivedMessage) {
    if (receivedMessage == "trace") {
        koi.koi_cloud_tts("start tracing")
        while (false) {
            koi.koi_track_rect(6000)
        }
    } else {
        if (receivedMessage == "stop") {
        	
        }
    }
})
koi.koi_onrecttrack(function (x, y, w, h) {
    if (x < 120) {
        powerbrick.MotorRun(powerbrick.Motors.M1, 0)
    } else {
        if (x > 120) {
        	
        }
    }
})
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_join_ap("ssid", "password")
basic.pause(1000)
MakerCloud_KOI.connectMakerCloudMQTT()
basic.pause(1000)
MakerCloud_KOI.subscribeTopic("ZBOP3RO2")
MakerCloud_KOI.subscribeTopic("BMTOR6T1")
MakerCloud_KOI.subscribeTopic("NBGLJS62")
MakerCloud_KOI.subscribeTopic("BVKZV6T5")
basic.pause(1000)
basic.forever(function () {
	
})
