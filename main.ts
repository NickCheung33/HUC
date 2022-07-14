MakerCloud_KOI.registerTopicMessageHandler("BMTOR6T1", function (receivedMessage) {
    if (receivedMessage == "follow") {
        flag = !(flag)
    } else if (receivedMessage == "stop") {
        flag = flag
    }
})
function autofollow () {
    left_sonar = powerbrick.Ultrasonic(powerbrick.Ports.PORT3)
    right_sonar = powerbrick.Ultrasonic(powerbrick.Ports.PORT4)
    if (right_sonar > 5 && right_sonar < 70 && (left_sonar > 5 && left_sonar < 70)) {
        powerbrick.MotorRun(powerbrick.Motors.M1, 255)
        powerbrick.MotorRun(powerbrick.Motors.M2, 255)
    } else if (right_sonar > 70 && (left_sonar > 5 && left_sonar < 70)) {
        powerbrick.MotorRun(powerbrick.Motors.M2, -255)
        powerbrick.MotorRun(powerbrick.Motors.M1, 255)
    } else if (left_sonar > 70 && (right_sonar > 5 && right_sonar < 70)) {
        powerbrick.MotorRun(powerbrick.Motors.M2, 255)
        powerbrick.MotorRun(powerbrick.Motors.M1, -255)
    } else {
        powerbrick.MotorRun(powerbrick.Motors.M1, 0)
        powerbrick.MotorRun(powerbrick.Motors.M2, 0)
    }
}
let right_sonar = 0
let left_sonar = 0
let flag = false
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_join_ap("ssid", "password")
flag = false
MakerCloud_KOI.connectMakerCloudMQTT()
MakerCloud_KOI.subscribeTopic("BMTOR6T1")
basic.forever(function () {
    if (flag) {
        autofollow()
    }
})
