/**
 * Idea: if junction pick random direction and try again
 */
function IsTouchingBoth () {
    return LeftDetector == 0 && RightDetector == 0
}
function IsTouchingLeft () {
    return LeftDetector == 0 && RightDetector == 1
}
/**
 * Detector = 0 -> it sees the black line
 */
function IsTouchingRight () {
    return LeftDetector == 1 && RightDetector == 0
}
function IsNotTouching () {
    return LeftDetector == 1 && RightDetector == 1
}
let RightDetector = 0
let LeftDetector = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
kitronik_servo_lite.setDegreesPerSecond(360)
basic.forever(function () {
    RightDetector = pins.digitalReadPin(DigitalPin.P15)
    LeftDetector = pins.digitalReadPin(DigitalPin.P16)
    if (IsTouchingBoth()) {
        kitronik_servo_lite.stop()
    } else if (IsTouchingRight()) {
        kitronik_servo_lite.turnRight(10)
        basic.pause(100)
    } else if (IsTouchingLeft()) {
        kitronik_servo_lite.turnLeft(10)
        basic.pause(100)
    } else if (IsNotTouching()) {
        kitronik_servo_lite.forward()
    }
})
