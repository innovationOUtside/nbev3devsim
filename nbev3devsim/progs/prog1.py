# Demo of a simple proportional line follower using two sensors
# It's deliberately flawed and will exit with errors in some circumstances;
# try fixing it!

from ev3dev2.motor import MoveSteering, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor

steering_drive = MoveSteering(OUTPUT_B, OUTPUT_C)

colorLeft = ColorSensor(INPUT_2)
colorRight = ColorSensor(INPUT_3)
gyro = GyroSensor(INPUT_4)
ultrasonic = UltrasonicSensor(INPUT_1)

GAIN = 0.5

while True:
    print('Gyro: ' + str(gyro.angle_and_rate))
    print('Ultrasonic: ' + str(ultrasonic.distance_centimeters))
    print('Color: ' + str(colorRight.color))
    error = colorLeft.reflected_light_intensity - colorRight.reflected_light_intensity
    correction = error * GAIN
    steering_drive.on(correction, 20)
