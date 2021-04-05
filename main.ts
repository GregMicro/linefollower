let LeftDetector = 0
let RightDetector = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
kitronik_servo_lite.setDegreesPerSecond(360)
basic.forever(function () {
    RightDetector = pins.digitalReadPin(DigitalPin.P15)
    LeftDetector = pins.digitalReadPin(DigitalPin.P16)
    if (LeftDetector == 0 && RightDetector == 0) {
        kitronik_servo_lite.stop()
    } else if (LeftDetector == 1 && RightDetector == 0) {
        kitronik_servo_lite.turnRight(10)
        basic.pause(100)
    } else if (LeftDetector == 0 && RightDetector == 1) {
        kitronik_servo_lite.turnLeft(10)
        basic.pause(100)
    } else if (LeftDetector == 1 && RightDetector == 1) {
        kitronik_servo_lite.forward()
    }
})
