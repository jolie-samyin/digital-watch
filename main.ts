let hours = 0
let adjust = 0
let ampm = false
let time = ""
let minutes = 0
let second = 0
let x = 0
let y = 0
let ms = 0
input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else if (hours == 0) {
            adjust = 12
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    if (minutes < 10) {
        time = "" + time + "0"
    }
    time = "" + time + ("" + minutes)
    time = "" + time + ":"
    if (second < 10) {
        time = "" + time + "0"
    }
    time = "" + time + ("" + second)
    if (ampm) {
        if (hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
        basic.showIcon(IconNames.Sad)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(100)
    if (ms < 9) {
        ms += 1
    } else {
        ms = 0
        if (second < 59) {
            second += 1
        } else {
            second = 0
            if (minutes < 59) {
                minutes += 1
            } else {
                minutes = 0
                if (hours < 23) {
                    hours += 1
                } else {
                    hours = 0
                }
            }
        }
    }
})
