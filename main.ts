let left_sonar = 0
let right_sonar = 0
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
input.onButtonPressed(Button.A, function () {
    powerbrick.Servo(powerbrick.Servos.S3, 20)
})
input.onButtonPressed(Button.B, function () {
    powerbrick.Servo(powerbrick.Servos.S3, -20)
})
basic.forever(function () {
    autofollow()
})
