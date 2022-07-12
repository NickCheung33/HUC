MakerCloud_KOI.registerTopicMessageHandler("BMTOR6T1", function (receivedMessage) {
    if (receivedMessage == "trace") {
        koi.koi_cloud_tts("start tracing")
        while (false) {
            koi.koi_track_rect(6000)
        }
    } else {
        if (receivedMessage == "stop") {
            koi.koi_stop_kpu()
        }
    }
})
MakerCloud_KOI.registerTopicMessageHandler("BVKZV6T5", function (receivedMessage) {
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
function autofollow () {
    while (true) {
        basic.pause(50)
        left_sonar = powerbrick.Ultrasonic(powerbrick.Ports.PORT1)
        right_sonar = powerbrick.Ultrasonic(powerbrick.Ports.PORT1)
        if (right_sonar > 3 && right_sonar < 10) {
            powerbrick.Servo360(powerbrick.Servos.S1, 255)
            powerbrick.Servo360(powerbrick.Servos.S2, 255)
        } else {
            powerbrick.Servo360(powerbrick.Servos.S1, 0)
            powerbrick.Servo360(powerbrick.Servos.S2, 0)
        }
        if (left_sonar > 3 && left_sonar < 10) {
            powerbrick.Servo360(powerbrick.Servos.S7, 255)
            powerbrick.Servo360(powerbrick.Servos.S8, 255)
        } else {
            powerbrick.Servo360(powerbrick.Servos.S7, 0)
            powerbrick.Servo360(powerbrick.Servos.S8, 0)
        }
    }
}
let right_sonar = 0
let left_sonar = 0
autofollow()
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_join_ap("ssid", "password")
basic.pause(1000)
MakerCloud_KOI.connectMakerCloudMQTT()
basic.pause(1000)
MakerCloud_KOI.subscribeTopic("BMTOR6T1")
MakerCloud_KOI.subscribeTopic("NBGLJS62")
MakerCloud_KOI.subscribeTopic("BVKZV6T5")
basic.pause(1000)
