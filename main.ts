input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("GAME STARTED")
    score = 0
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 20; index++) {
        serial.writeValue("", time)
        time += -1
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let sprite: game.LedSprite = null
let score = 0
let time = 0
time = 20
score = 0
let Sprite2 = game.createSprite(randint(0, 5), randint(0, 5))
sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (score == 5) {
        sprite.delete()
        Sprite2.delete()
        for (let index = 0; index < 8; index++) {
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Happy)
            basic.pause(200)
            basic.showIcon(IconNames.Yes)
            basic.pause(200)
        }
        pins.digitalWritePin(DigitalPin.P0, 1)
        time = 1e+25
        score += 1
    } else if (time <= 0) {
        sprite.delete()
        Sprite2.delete()
        basic.pause(1000)
        serial.writeLine("                                  ")
        serial.writeLine("Game over")
        serial.writeValue("Your score is ", score)
        for (let index = 0; index < 8; index++) {
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        basic.showString("GAME OVER")
        time += 1
    } else {
    	
    }
})
basic.forever(function () {
    if (sprite.isTouching(Sprite2)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 1)
        score += 1
        Sprite2.delete()
        basic.pause(200)
        Sprite2 = game.createSprite(randint(0, 5), randint(0, 5))
    } else {
    	
    }
})
