let chance = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showIcon(IconNames.StickFigure)
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    chance = 3
    basic.showNumber(chance)
    while (chance > 0) {
    	
    }
})
