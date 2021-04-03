hours = 0
adjust = 0
ampm = False
time = ""
minutes = 0
second = 0

def on_button_pressed_a():
    global hours
    if hours < 23:
        hours += 1
    else:
        hours = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global adjust, time
    adjust = hours
    if ampm:
        if hours > 12:
            adjust = hours - 12
        elif hours == 0:
            adjust = 12
    time = "" + str(adjust)
    time = "" + time + ":"
    if minutes < 10:
        time = "" + time + "0"
    time = "" + time + ("" + str(minutes))
    time = "" + time + ":"
    if second < 10:
        time = "" + time + "0"
    time = "" + time + ("" + str(second))
    if ampm:
        if hours > 11:
            time = "" + time + "PM"
        else:
            time = "" + time + "AM"
    basic.show_string(time)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global ampm
    ampm = not (ampm)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global minutes
    if minutes < 59:
        minutes += 1
    else:
        minutes = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global second, minutes, hours
    basic.pause(1000)
    if second < 59:
        second += 1
    else:
        second = 0
    if minutes < 59:
        minutes += 1
    else:
        minutes = 0
    if hours < 23:
        hours += 1
    else:
        hours = 0
basic.forever(on_forever)
