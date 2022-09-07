input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.move(1)
})
let Player: game.LedSprite = null
Player = game.createSprite(0, 0)
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        game.addScore(1)
        Enemy.delete()
        basic.pause(100)
        basic.showNumber(game.score())
        basic.pause(100)
        Enemy = game.createSprite(randint(0, 10), randint(0, 10))
    }
})
