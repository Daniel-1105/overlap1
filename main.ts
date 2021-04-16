namespace SpriteKind {
    export const notfood = SpriteKind.create()
    export const House = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.House, function (sprite, otherSprite) {
    Human.say("Welp i'm tired.", 200)
    pause(500)
    House.say("*Cozy House Noises*", 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.notfood, function (sprite, otherSprite) {
    sprite.say("Out of my way dumb stump!", 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.say("Oo a cherry!", 500)
    pause(500)
    otherSprite.say("*Cherry Noises*", 200)
    pause(200)
    otherSprite.destroy()
})
let House: Sprite = null
let Human: Sprite = null
let food = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Enemy)
Human = sprites.create(img`
    . . . f f f c c c . . . . . 
    . f f 5 5 5 5 5 5 f f . . . 
    . f 5 5 5 5 5 5 5 5 5 f . . 
    f 5 5 5 5 5 5 5 5 5 5 5 c . 
    f 5 5 b d 5 5 5 5 5 5 5 c . 
    f 5 d 4 4 b 5 5 5 5 5 5 5 f 
    f 5 b 4 4 4 c c 5 5 5 5 5 f 
    f f f 4 4 c b c b 5 5 5 b f 
    . f f d d c 1 e b b b b b c 
    . . f d d d d 4 f b b b b c 
    . . f 4 4 4 e e e 4 b b c . 
    . . f 9 9 9 e d d 4 f f . . 
    . . f 9 9 9 e d d e f . . . 
    . f 3 3 b 3 b e e b f . . . 
    . f f 3 b 3 b 3 b f f . . . 
    . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
let notfood = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b d d d d d d b b . . . 
    . . b b d d b b b b d d b b . . 
    . e d b d b d d d d b d b d e . 
    . f d b d d b b b b d d b d e . 
    . f b d b b d d d d b b d b e . 
    . f e d d d b b b b d d d e e . 
    . f f e b d d d d d d b e e f . 
    . f f e e e e e e e e e e e f . 
    . f f e e e f e e e e e e e f . 
    . f f e f e e e f f e e f e e f 
    . f e e f e f e f e f e f e e e 
    f f e e e e f e e f f e f f e e 
    f e e e e f f e e e e e f f f e 
    e e e e f f f e f e e e e f f f 
    e e e e f f f e f e e e e f f f 
    `, SpriteKind.notfood)
House = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.House)
Human.setFlag(SpriteFlag.Ghost, false)
House.setPosition(26, 30)
food.setPosition(94, 59)
Human.setPosition(147, 60)
notfood.setPosition(70, 59)
game.onUpdate(function () {
    controller.moveSprite(Human)
})
