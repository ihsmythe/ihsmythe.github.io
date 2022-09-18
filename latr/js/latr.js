// Pop out of frame if possible
if (top.frames.length != 0) {
    top.location = self.document.location;
}

class Volume {
    constructor(elementId, copyright, defaultPiece, pieces) {
        this.elementId = elementId;
        this.copyright = copyright;
        this.defaultPiece = defaultPiece;
        this.selectedPiece = defaultPiece;
        this.pieces = pieces;
    }
}

class Piece {
    constructor(filename, title, leftLyrics, rightLyrics, leftCredits, rightCredits, options) {
        this.mp3 = `mp3/${filename}.mp3`;
        this.ogg = `ogg/${filename}.ogg`;
        this.title = title;
        this.leftLyrics = leftLyrics;
        this.rightLyrics = rightLyrics;
        this.leftCredits = leftCredits;
        this.rightCredits = rightCredits;
        this.options = options;
    }
}

const volumes = [
    new Volume("vol1",
        "Ingrid Hansen Smythe and Los Haward", 16, [
            new Piece(
                "Who's Who",
                "Who's Who",
                [
                    "You are not the flower.<br>Neither red nor blue nor green.<br>Not the sugar.<br>Not the arrow.",
                    "You are not the notes,<br>and you are not the top of the mountain.<br>You are not the notes,<br>and you are not the top of the mountain."
                ], [
                    "You are not the flower, you are the perfume.<br>Neither red nor blue nor green, you are the colour scheme.<br>Not the sugar, but its sweetness.<br>Not the arrow, but its flight.",
                    "You are not the notes, you are the music.<br>And you are not the top of the mountain:<br>You are the act of arriving at the summit.",
                    "Not the sugar, but its sweetness.<br>Not the arrow, but its flight."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer"
                    ]
                }),
            new Piece(
                "Not Much To Ask",
                "Not Much to Ask",
                [
                    "There's a message for me<br>in the sound of the rain<br>falling through the leaves of the trees.",
                    "It says to me that on the other side<br>of death's dark doorway,<br>There is a garden made of light."
                ], [
                    "And I can enter if I take off my shoes<br>Take off my self and my history.<br>I can enter if I take off my shoes<br>Take off my self and my history.",
                    "Well it's not much to ask<br>not much to ask<br>not much to ask<br>it seems to me…"
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer"
                    ]
                }),
            new Piece(
                "Ophelia",
                "Ophelia",
                [
                    "Think of Ophelia<br>drowned in the brook,<br>through the brown clouded water<br>her pale form descending.",
                    "It's a high price to pay<br>That she had to die,<br>To make such a beautiful<br>Mandala for the eye.",
                    "Imagine the moment<br>caught in a snapshot,<br>A speck of dust captured<br>in a column of sunlight;<br>the water turned<br>to a transparent gel<br>in which she is held<br>like a feather<br>in a crystal ball.",
                    "That great mane of hair,<br>like a silent explosion<br>is laid on the surface,<br>and the shape of her cape<br>is splayed like a dancer's fan,"
                ], [
                    "The folds and pleats chiseled<br>with infinite patience and care.",
                    "Well, her lungs may be bursting,<br>but her clothes look fantastic!<br>Between her dress and her distress<br>there's a gap that can't be fathomed or filled in.",
                    "Sweet Ophelia, gentle nymph.<br>Her tragedy is on display<br>but she'll never know how well it showed.<br>She never got to see the play.",
                    "Think of Ophelia<br>drowned in the brook,<br>through the brown clouded water<br>her pale form descending.",
                    "Sweet Ophelia, gentle nymph.<br>Her tragedy is on display<br>but she'll never know how well it showed.<br>She never got to see the play."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer"
                    ]
                }, {
                    "<a href=\"https://sapphomusic.com/\">Sappho Hansen Smythe</a>": [
                        "backup vocals"
                    ],
                    "<a href=\"https://www.tristanzaba.com/\">Tristan Zaba</a>": [
                        "electric guitar",
                        "bass"
                    ]
                }),
            new Piece(
                "Falling Out",
                "Falling Out",
                [
                    "Air is too ethereal.<br>I need the resistancy of water<br>to let me know I'm here<br>before I drown.",
                    "Air is too ethereal.<br>I need a cloud to rest in,<br>before I sink right through<br>to the other side.",
                    "<b>Chorus</b><br>Every golden flame<br>has an aching blue heart.<br>Every golden flame<br>Wants to get back home.",
                    "Air is too ethereal.<br>I need something beneath me,<br>I need someone to catch me<br>when I fall."
                ], [
                    "Air is too ethereal.<br>I need somebody below me.<br>I'm falling through<br>To the other side.",
                    "<b>Chorus</b>",
                    "Earth is too material.<br>Oh Mother Earth, you broke my fall.<br>Receive this body broken<br>Receive this body broken<br>on your law.",
                    "<b>Chorus</b>"
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer"
                    ]
                }),
            new Piece(
                "Ariadne's Thread",
                "Ariadne's Thread",
                [
                    "Dogs and cats walk 'round themselves<br>before they spiral down to sleep,<br>like a hand slowly stirring the obscure depths<br>of the deep green genetic whirlpool.<br>Hands linked up through the generations<br>weave daisy chains through evolution,<br>but who can read the story that they tell?<br>Oh hands linked up through the generations<br>weave daisy chains through evolution,<br>but who can read the story that they tell?",
                    "<b>Chorus</b><br>And I remember the hands<br>that sowed the seeds<br>and nursed the child<br>but swung the scythe;<br>and felled the oak<br>that built the frames,<br>but held the spade<br>and dug the earth<br>and cast the dirt,<br> that rattled loud<br>on the coffin lid."
                ], [
                    "I saw the wind in the fire<br>make the flames bend low,<br>but I could not read<br>their racing tongues,<br>and I saw the sea<br>shape semi-circles<br> in the sand,<br>but I could not notch<br>my arrow to that bow.",
                    "From a furled up flag<br>to a torn up rag,<br>the life of a leaf<br>keeps time to a rhythm<br>that follows a tune<br>well past my ear,<br>and far beyond my vision.",
                    "<b>Chorus</b>"
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer"
                    ]
                }, {
                    "<a href=\"https://sapphomusic.com/\">Sappho Hansen Smythe</a>": [
                        "backup vocals"
                    ],
                    "Jarred Albright": [
                        "fiddle",
                        "mandolin"
                    ],
                    "St. Mary the Virgin, Whitney UK": [
                        "bells"
                    ]
                }),
            new Piece(
                "Ariel's Song",
                "Ariel's Song",
                [
                    "<span style=\"color:DarkGrey\">This azure vault,<br>these curlèd clouds,<br>the turquoise sea below;<br>the engrainèd sands,<br>the lace fringed surf;<br> of these enchanted things<br>I must let go.</span>",
                    "If it were not for the fear of pain<br>the fierceness of the fire's flame<br>might give me some release.",
                    "Or if it were not for the fear<br>of a breathless suffocation<br>the watery waves might wash it all away,",
                    "Both purify<br>Both simplify<br>Both take away the weight.<br>Both purify<br>Both simplify<br>Both take away the weight."
                ], [
                    "If it were not for this mortal frame<br>then I might be all right.<br>Without a body,<br>who would have a problem?",
                    "And so I will not feel the fear<br>of falling from the height;<br>my soul will sing as I take wing<br>and fly into the light.",
                    "Both purify<br>Both simplify<br>Both take away the weight.<br>Both purify<br>Both simplify<br>Both take away the weight."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer"
                    ]
                }),
            new Piece(
                "Culture",
                "Culture",
                [
                    "There's a lot going on in London town.<br>Exhibitions, shows, concerts and stuff.<br>“The multicultural centre of the world,” some say,<br>And it's only an hour away.",
                    "But I like to go for a walk with my dog in the rain.<br>I like to go for a walk with my dog in the rain.",
                    "Beyond the outskirts of this village<br>into what's left of the old English woodland<br>and find some old log to sit down on,<br>where I can listen to the sound of the rain<br>falling through the branches of the trees<br>onto the sodden, leaf-strewn ground,<br>and the hood of my old coat.<br>And there I like to sit and see,<br>and sometimes I just sit<br>until I've lost<br>all sense of time and place."
                ], [
                    "And I don't care<br>what's going on in London,<br>And I don't want<br>to go downtown.<br>As far as I'm concerned<br>you can take your culture<br>and shove it up the back end<br>of your broken civilization.<br>The sound of the rain<br>falling on the leaves<br>is good enough for me.",
                    "But I like to go for a walk with my dog."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "Oliver Higgins": [
                        "emcee"
                    ]
                }),
            new Piece(
                "Lost Lyric",
                "Lost Lyric",
                [
                    "You were just a stepping-stone<br>on a river I had to cross<br>to get to a bigger poem<br>that lay on the other side.",
                    "So you got left behind.",
                    "No one else around here<br>knows anything about you,<br>and they never will.<br>For since I cannot write you,<br>so then they cannot read you.<br>But that's all right.",
                    "And I cannot find my way back now<br>to wherever it was I left you.<br>And whatever it was you might have meant,<br>you have a different meaning now.",
                    "Image of pure possibility,<br>your potential inexhaustible,<br>your existence inexplicable,<br>your issues unresolvable,<br>your riddle now insoluble,<br>your magic inexhaustible."
                ], [
                    "You think that I've forgotten you<br>But that just isn't so.<br>Often times I've thought of you<br>reflecting the dappled light<br>under the shadow of the river bank,<br>my lost lyric.",
                    "In a far off, forgotten country<br>you gleam like a distant star.",
                    "Pale and forlorn<br>and perfectly formed.",
                    "The heart in your stone<br>inscrutable,<br>and your song<br>Unparaphraseable.",
                    "In the mute abandoned eloquence,<br>of the silence of your soul,<br>you have a deeper beauty<br>than any I might lend you anyhow."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Education",
                "Education",
                [
                    "<b>Verse 1</b>",
                    "I have heard<br>those big guitar chords in the sky,<br>and I have watched<br>the clouds make maps<br>across that field of light.<br>And I have stood upon the mountain top<br>and seen the land and sky<br>merge into one.<br>And I have seen the sunset<br>lay down its glittering path of light<br>from the horizon to the shore.",
                    "And from all of this have I learned.<br>And from all of this have I learned.<br>And from all of this have I learned.",
                    "<b>Verse 2</b>",
                    "And I have gazed<br>into the depths of rivers<br>for hours on end,<br>And I have watched the water<br>breaking over stones<br>on many a summer afternoon,"
                ], [
                    "And I have looked down<br>through tunnels of trees<br>into the pools of pale green light<br>that shine at their far end.",
                    "And from all of this have I learned.<br>And from all of this have I learned.<br>And from all of this have I learned…",
                    "<b>Chorus</b><br>Absolutely nothing.<br>Absolutely nothing.<br>Absolutely nothing.",
                    "<b>Verse 1</b><br><br><b>Chorus</b>",
                    "And sometimes<br>when it was really good,<br>I unlearned almost everything I knew."
                ], {
                    "<a href=\"https://sapphomusic.com/\">Sappho Hansen Smythe</a>": [
                        "lead and backup vocals"
                    ],
                    "Los Haward": [
                        "writer"
                    ]
                }, {
                    "<a href=\"https://www.tristanzaba.com/\">Tristan Zaba</a>": [
                        "electric guitar",
                        "bass"
                    ],
                    "<a href=\"https://hansensmythe.github.io\">Steve Hansen Smythe</a>": [
                        "piano solo"
                    ]
                }),
            new Piece("Inside Story",
                "Inside Story",
                [
                    "\"Don't open your eyes.<br>I'm not out there.<br>I'm in here.<br>And don't wake up.<br>It's easier for us to merge<br>if you stay asleep for a while.",
                    "You may feel a gentle rhythm<br>in the distance<br>like a tide rising<br>and falling.<br>That's you, breathing.<br>And me<br>talking.<br>That's the rhythm<br>of this verse.",
                    "It's good in here.<br>Now you are free<br>from the clamour<br>of your body<br>and the world<br>which always wants<br>something out of you.<br>And all the things that do divide us<br>in the daytime.",
                    "They say that God is a circle;<br>the centre everywhere,<br>the circumference nowhere.<br>It's a bit like that in here.<br>There is no separation anymore.<br>There are no walls in here<br>and all the bridges have been crossed."
                ], [
                    "Although there is no time now<br>time will soon return.<br>The busy world will come knocking<br>at your door to wake you up.<br>You may not remember this.<br>Don't fret for that.<br>It doesn't matter.<br>It happened and nothing<br>that happens can ever<br>unhappen<br>and<br>it makes some kind of difference.",
                    "Can you hear them now<br>knocking on your door?<br>You go. I'll stay.<br>For all I know<br>I may be dead out there.<br>For all I know<br>that may be why I'm here.",
                    "Either way,<br>you'll find me here the next time.<br>Don't be afraid,<br>You cannot lose me,<br>and you won't need<br>a pathway or a key.\”",
                    "***",
                    "A young man wrote that poem<br>and an old man finished it.<br>And the girl<br>he wrote it for<br>was old when she put it down.<br>But while they read it both together<br>they had no age at all."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Life Happened",
                "Life Happened",
                [
                    "<b>Life Happened</b>",
                    "but I must have been looking in the wrong direction.<br>And it was obvious enough.<br>There was your face<br>for a start,<br>that's the main thing;<br>but there were also<br>rivers and clouds<br>and mountains, moving in a big sky.<br>And all of it happening<br>right in front of me<br>presumably,<br>but it was like I didn't see it,<br>because I was waiting for it to happen.<br>Leaning forward, gazing expectantly<br>into the future,<br>waiting for it to come up<br>over the hillside;<br>then, suddenly,<br>I saw it behind me!<br>Somehow,<br>for all my vigilance,<br>it had got past me,<br>and now it is the past;<br>a place I can't get back to."
                ], [
                    "It's a picture of you<br>leaning out of a window<br>on a houseboat<br>on the river<br>waving at me,<br>and the children too<br>also waving,<br>giggling excitedly,<br>calling to me,<br>and the dog barking<br>and wagging its tail,<br>and me<br>standing there<br>on the other side of the river,<br>looking back,<br>watching you get smaller<br>and further and further away.<br>Going downriver, leaving me feeling<br>stupid and tricked,<br>outmanoeuvred and lost,<br>and guilty and sad.<br>Just too sad<br>for words."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "Jarred Albright": [
                        "fiddle",
                        "mandolin"
                    ],
                    "Eliza and Zoe Winmill": [
                        "children"
                    ],
                    "Alice Braithwaite": [
                        "recording engineer for children"
                    ]
                }),
            new Piece("The Poet At Sixty",
                "The Poet At Sixty",
                [
                    "Sometimes there's still<br>a sense of possibility;<br>A flash of blue sky<br>through a crack in the doorway;<br>But most of the time<br>it's grim and its grey<br>and I turn it away."
                ], [
                    "Pull my hat down,<br>Pull my collar up<br>and push my way<br>into the future.<br>Like someone working their way<br>through a difficult day,<br>and really looking forward<br>to getting home."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "Ruth Sanderson": [
                        "weather announcer"
                    ],
                    "Oliver Higgins": [
                        "radio interviewee"
                    ],
                    "Jordan McAndrew": [
                        "radio announcer",
                        "travel guy",
                        "host"
                    ],
                    "Chris Clarke": [
                        "recording engineer for Ruth, Oliver, and Jordan"
                    ]
                }),
            new Piece("The Future",
                "The Future",
                [
                    "I'm looking forward<br>to dementia,<br>I can't wait<br>to lose my mind.<br>I'm looking forward<br>to dementia,<br>I can't wait<br>to lose my mind.<br>I can't wait to lose my mind.",
                    "I'm looking forward<br>to looking backwards,<br>and no longer being able,<br>no longer being able,<br>Looking forward to looking backwards<br>and no longer being able<br>to remember…"
                ], [
                    "<b>Repeat</b>",
                    "I'm looking forward<br>to looking backwards,<br>and no longer being able,<br>no longer being able,<br>Looking forward to looking backwards<br>and  no longer being able<br>to remember<br> all this shit.",
                    "I can't wait to lose my mind.<br>I hope I don't find it.<br>I'd quite like to go out of it.<br>It's being stuck inside it all the time<br>that I could do without."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "<a href=\"https://hansensmythe.github.io\">Steve Hansen Smythe</a>": [
                        "trombone"
                    ]
                }),
            new Piece("If It Were Not So",
                "If It Were Not So",
                [
                    "If I were not so subject to sensation<br>I might have found a way to free my mind.<br>And if I were not always dragged and driven<br>through sequences of stupid situations,<br>I might have found the time to work it out.<br>If my head was not so burdened<br>with useless information,<br>and my nervous system wired and rigged<br>with desire and fear and apprehension;<br>if my thinking was not clogged and blocked<br>by fixed ideas and premature conclusions,<br>I might have found a way to say what's true."
                ], [
                    "And if it were not for the fact<br>that I am just the way I am,<br>I might have found a way to get to you."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition, instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece(
                "Ephemera",
                "Ephemera",
                [
                    "Nothing happening.<br>It's a dull, grey day,<br>the clouds congealed<br>in a condensed, occluded sky.",
                    "Then the faintest flush of light<br>trembles through the room;<br>a passing glance,<br>a glancing pass,<br>the palest pulse,<br>scarcely there;<br>then a glare,<br>which strengthens<br>and hardens<br>and the shape of the window frame<br>like a crucifix<br>is thrown onto the wall;<br>and four big rectangles of light<br>achieve a momentary stability;<br>blazingly,<br>eye-blindingly bright.<br>You can almost hear the energy sing,<br> as tight as the string on a violin.",
                    "Then there's a pause,<br>like an intake of breath;<br>a dip in the beam,<br>shadows flicker and quiver;<br>There's a sense of energy<br>being gathered together<br>and then a further power surge.",
                    "Radiance<br>seethes at the edges;<br>the full blush<br>of the sudden sunlight<br>blossoms,<br>and the cupped hands<br>of the present moment<br>fill up, crest and overflow."
                ], [
                    "A fountain of light<br>pours down the walls<br>with opulent abundance.<br>From fruit to flower<br>to total fulfillment<br>in one fantastic flash;<br>from poverty to plenitude<br>in about five seconds flat.",
                    "The reflected windows<br>hold it for a moment,<br>then suddenly waver;<br>they stagger<br>and buckle;<br>cling, briefly,<br>then give up the struggle;<br>they lapse and fade<br>and the shapes bleep out<br>and the light dies out<br>and the wall is just<br>like it was before,<br>like nothing happened,<br>which it nearly didn't<br>in more ways than one<br>because I only just saw it in time.",
                    "The sun came out for a moment,<br>and then it went back in again.",
                    "So preoccupied with this and that<br>I hardly even registered the fact<br>and realized it only<br>when it was all but gone.",
                    "And I just told you<br>something important<br>which you won't remember<br>for long."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("More Monsters",
                "More Monsters",
                [
                    "I can feel them.<br>I can smell them coming.<br>I can hear them moving quietly through the bracken.<br>I can feel them.<br>I can hear them coming.<br>On the far side of the river,<br>Their breath clouds the frosted air.<br>Their breath comes out in steam.",
                    "Men from the Department of Employment.<br>Men from the Social Insecurity Services.<br>Men with great big clubs in their hands,<br>And foaming dogs on leads,<br>And at their head a monster on a chain."
                ], [
                    "I can feel them.<br>I can smell them coming.<br>I can hear them moving quietly through the bracken.<br>They're waiting.<br>They're waiting so patiently.<br>They're waiting with such certainty,<br>For my boat to drift across to them,<br>To take me prisoner once again.<br>On the far side of the river,<br>They wait for me<br> to fail."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "<a href=\"https://www.tristanzaba.com/\">Tristan Zaba</a>": [
                        "electric guitar",
                        "bass"
                    ],
                    "<a href=\"https://hansensmythe.github.io\">Steve Hansen Smythe</a>": [
                        "backup vocals"
                    ]
                }),
            new Piece("SummerDay in the Tuileries",
                "Summer Day In The Tuileries",
                [
                    "The waves were leaving through the trees,<br>waving and weaving through the leafing trees,<br>in the dapple-dabbed park of the Tuileries.",
                    "Arrow forked light blades<br>hatching up the patches,<br>wind blown light<br>unshadowing the branches.",
                    "Leaves sliced and spliced<br>in the tessellated light,<br>speared, and striped,<br>with tiger bars of sunlight."
                ], [
                    "Through kaleidoscopes of light spokes<br>round ripples run,<br>spun out from a deep green throat.",
                    "And she is happy just to be<br>one bright spinning spoke<br>on the wheel of the circle drawn sunlight.",
                    "Through kaleidoscopes of light spokes<br>round ripples run,<br>spun out from a deep green throat.",
                    "And she is happy just to be<br>one bright spinning spoke<br>on the wheel of the circle drawn sunlight."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "<a href=\"https://arielfiess.wixsite.com/love\">Ariel Fiess</a>": [
                        "backup vocals"
                    ],
                    "Kristal Calvert": [
                        "composer of \"The Little Mermaid\" theme"
                    ]
                }),
            new Piece("Exile",
                "Exile",
                [
                    "Somewhere deep inside of me<br>a foundation stone is broken.<br>When I reach out like a child in the dark<br>she's no longer there beside me.<br>Sometimes I think, this can't be real,<br>and I must wake up.<br>And I feel myself slowly emerge<br>from the sticky glue of a deep sleep;<br>suddenly squinting against the glare<br>of the green sunshine<br>filtering through the leaves above me,<br>where I'm lying low on the forest floor<br>under a blanket beneath the big oak tree.<br>I can smell the smoke of the early morning camp-fires,<br>and I can hear the sound of the women talking<br>and the children laughing<br>merging with the sound of the shallow stream<br>telling its beads through England's ancient woodland."
                ], [
                    "Everything new and starting again<br>and there's a flash in my heart<br>like a bird's wings beating<br>against the surface of the lake<br>as the swan takes off,<br>and the air sparks<br>and glitters with liquid brilliance.",
                    "And so it is a bitter thing<br>to have to wake up once again<br>and find myself as I really am;<br>a refugee in a foreign land<br>walking alone down a broken road<br>with no direction home."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "Morgentau": [
                        "flapping wings"
                    ]
                }),
            new Piece("Valediction",
                "Valediction",
                [
                    "We're down in the valley looking up at the mountains.<br>There's a breeze up there with my name written on it.<br>And right now we're talking face to face,<br>but I'm gonna turn away from you,<br>I'm gonna turn away from you,<br>and I'm gonna walk,<br>I'm gonna walk,<br>I'm gonna walk.",
                    "Through the big gates of the picture frame,<br>across the cornfield Van Gogh painted<br>once upon a Summertime,<br>to those blue hills in the distance.<br>And I'm gonna follow the music of the little stream,<br>up into the mountains, past the pine trees,<br>and the bushes with the red berries,<br>way above the timber line,<br>and all the way to the top of the ridges."
                ], [
                    "And I'm gonna raise my arms above my head,<br>like wings, like wings, to the sky.<br>And I shall wait, I shall wait,<br>I shall wait, I shall wait.",
                    "And I shall wait for that wind to carry me home<br>like a bird, like a bird that at last can fly.<br>And I shall wait for that wind to carry me home<br>and I won't turn around<br>to wave goodbye,<br>goodbye,<br>goodbye.",
                    "And I won't look back,<br>not even once.",
                    "We're down in the valley looking up at the mountains.<br>There's a breeze up there with my name written on it."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "<a href=\"https://sapphomusic.com/\">Sappho Hansen Smythe</a>": [
                        "backup vocals"
                    ]
                }),
            new Piece("Saved - Healing",
                "Saved - Healing",
                [
                    "<b>Saved</b>",
                    "You put my salvation<br>in the palm of my hand.<br>And just when all my rivers<br>had run dry.<br>So gently, so simply,<br>I thought it couldn't be real.<br>I thought<br>I must have made it up.<br>But when I dared to look again<br>I saw that it was well beyond my art.",
                    "You were just too good to be untrue.<br>You were just too good to be untrue.<br>You were just too good to be untrue.",
                    "I love you."
                ], [
                    "<b>Healing</b>",
                    "I dipped my face into a bowl of light<br>and lifting up,<br>my head was gloved<br>and wore the hood of radiance.<br>When I wound it off like bandages,<br>I had new skin, and my hair<br>sparkled with starlight."
                ], {
                    "Ingrid Hansen Smythe": [
                        "composition",
                        "lead vocals",
                        "instruments"
                    ],
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "<a href=\"https://sapphomusic.com/\">Sappho Hansen Smythe</a>": [
                        "backup vocals"
                    ],
                    "<a href=\"https://arielfiess.wixsite.com/love\">Ariel Fiess</a>": [
                        "backup vocals"
                    ]
                })
        ]),
    new Volume("vol2",
        "Los Haward", 25, [
            new Piece("These Things Shall Be",
                "\"These Things Shall Be\"",
                [
                    "There won't be any objects in the future.<br>Everything will be made out of music then.<br>Instead of objects there will be<br> organisations of three dimensional light,<br>and geometric patterns of great intellectual beauty<br>unfolding through time like petals from a flower<br>into ever deepening levels of awareness.<br>There won't be any violence in the future,<br>because everyone will realize<br>that murder is just long distance suicide.<br>And there won't be any pain or suffering either.<br>People won't sink under the water in their cars any more<br>and only the baby getting rescued,<br>lifted through the window to the heroic passer by<br>who has to look at the person trapped inside<br>and find some way to meet their eye.<br>There won't have to be stuff like that any more.<br>There won't be any refugees or migrants in the future<br>because everyone will travel as far as they like<br>but without ever having to leave home."
                ], [
                    "There won't be any more pins and needles<br>of outrageous fortune neither,<br>no intestinal shocks, no savage butchery.<br>It will all be way beyond that in the future.<br>Inter-subjectivity will be the order of the day;<br>people will change sex and morph into one another<br>on a regular basis<br>just to know what it really feels like to be somebody else.<br>There won't be any else in the future.<br>And when it gets dark<br>the mountains will become transparent<br>and light up from within.<br>Warm glowing colours will sail through the night skies.<br>The outside and inside worlds will merge.<br>thoughts will be things<br>and things will be thoughts,<br>and, just to get really carried away<br>I might even possibly venture to say<br>that you might find me just slightly less irritating<br>than you do now, one fine day,<br>in the future."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("The Fall of Man",
                "The Fall of Man",
                [
                    "Light falls through space<br>but nothing shines<br>until it lands on something.",
                    "Then rainbows arch<br> and sunsets blaze,<br>but need an eye to see them.",
                    "The mind is empty<br>and undefiled<br>until it has a thought.",
                    "And Sleeping Beauty<br>dreams all day<br>lest woken with a kiss."
                ], [
                    "Once that happens<br>there's hell to pay<br>and poems like this get written."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Close Encounters",
                "Close Encounters",
                [
                    "A second dream woke up inside the first<br>but before the first had finished<br>and dreamt by a different dreamer.",
                    "The first dreamer was a woman<br> who suffered from depression.<br>But in her dream she was Ophelia,<br> floating on the lake<br>like in the famous painting,<br>hair spread out across the water<br> garments heavy with their drink,<br>chaunting snatches of auld lauds<br>and just about to sink.",
                    "The second dreamer was a man<br>emerging from the depths<br>of slow wave sleep, and reaching<br> blindly for the surface.<br>He swam into her from below<br>and almost lifted her above the water line;<br>and she then sank back into him<br>as his body merged with hers<br>the way that bodies can in dreams<br>or on the astral planes.",
                    "His fingers slid inside of hers;<br>his hand putting on her hand<br>the way a hand puts on a glove.<br>He felt their delicate slenderness,<br>the fineness of her features;<br>the tracery of veins,<br>the fragile scaffolding of bones.",
                    "He hesitated as he felt her weakness,<br>and knew her haunted beauty from within.<br>He felt that she was dying<br>and he fell in love with her.<br>In a kind of existential panic then<br> he poured his energy<br>through all the gates and alleyways<br>and every pathway running through her body<br>to save her from the fate of poor Ophelia.",
                    "He could not see her, but, looking through her eyes<br>he saw how pale and wan the world around her looked<br>and she then saw his energy confer<br>colour to the shapes around;<br>the clouds above came into focus<br>and everything began to pulse with life."
                ], [
                    "She felt this as a gift of power<br>like a visitation from a God<br>as her muscles flexed and hummed<br>and the lights along her nervous system<br>flickered into life.<br>They never saw each other, yet<br>two strangers shared, who never met,<br>a sense of mutability<br>beyond the comprehension of the Gods.",
                    "They hung together for a moment<br>in a connection that went deeper than sexual intimacy;<br>it was the dark complicity<br>of creatures caught and tangled<br>on the curves of the mortal coil.",
                    "Then the morning drew the dreamers<br>back to their dreaming bodies<br>and they were disengaged,<br>waking up in different rooms<br>in different parts of town.",
                    "Neither one of them remembered<br>anything about it.",
                    "She woke up feeling totally renewed<br>as though she'd had a blood transfusion,<br>her suicide's depression<br>mysteriously banished<br>and she leaped into the morning.<br>He woke up feeling utterly exhausted<br>but somehow vindicated<br>(but with no idea about what).",
                    "She catches the bus to work and so does he.<br>When she gets up from her seat<br>as her stop comes into view<br>she sees a man sitting near the doorway<br>and something stirs inside of her.<br>He looks up as she passes by<br>attracted by her energy,<br>her aura of vivacity<br>but then averts his eyes, thinking<br>“I'm too tired for this today,<br>she's way beyond my reach.”<br>And, judging by her sense of disappointment<br>when she sees his tired face<br>and the way she steps down lightly<br>and walks into her day<br>without a backward glance,<br>She probably agrees."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 1020 }),
            new Piece("Bad Karma",
                "Bad Karma",
                [
                    "On your way up and out you got snagged on a branch<br>and became inveigled in a confusion of cherry blossom;<br>tugging against the world like a kite<br>that seeks surrender to the wind;<br>like Ariel on the Island<br>with Prospero long gone,<br>trembling fitfully<br>from one dream to another,<br>tremulous as an eyelash,<br>you were ready to evaporate,<br>till you got lost in that pink froth<br>you thought you'd scoured your palette of,<br>but just sufficiently snared by the world<br>as to alter minutely the angle of that shadow<br>that falls across the door of the old barn,<br>and unlatches the gates,<br>starts and opens clocks and locks,<br>and kicks away the chocks<br>from under the front wheels<br>to let the big old truck slowly lumber out<br>across the dusty farmyard,<br>through the chicken wire<br>down the dirt track,<br>and out across the highway,<br>gaining speed."
                ], [
                    "The next thing you know you're locked in the fast lane<br>with a heavy commitment to keep it all going.<br>If you check the rear view mirror now<br>you may notice that you have somehow developed<br>a complicated history since the last hairpin bend.<br>Family trees and situations<br>are sprouting out all over you.<br>Don't panic at this stage;<br>keep your eyes on the road.<br>After a while you'll see it gets easy.<br>But by that time of course you'll need a lot more gear.<br>(I'd advise muscles for the hillsides<br>and money for the bank clerk).<br>Now if you keep all this up<br>You'll soon get enough weight<br>to bear down upon the world like an avalanche.<br>(You may even get an invitation<br>to step down and join up<br>in the Yewnited Nations).<br>That's all for later;<br>just now you're doing fine,<br>and anyway, pretty soon<br>you won't have the time<br>to remember how it was<br>that you got here."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Tea With Sunsets",
                "Tea With Sunsets",
                [
                    "In the good old days, when the children were little,<br>we used to go on these cheap holidays<br>to the Greek islands in the Aegean.<br>You could go on day excursions then<br>in these nice little wooden boats they had,<br>and in the late afternoons, coming back, near sunset,<br>they would sometimes serve tea on the boat.",
                    "It came in glass cups,<br>which were decorated<br>with a golden stripe<br>around the rim,<br>as I recall;<br>and,<br>because of the transparency of the cup<br>you could see the tea inside;<br>greenish brown,<br>chartreuse in colour,<br>and you could watch<br>the clouds of sugar dissolve,<br>and sometimes the liquid<br>would be suddenly suffused<br>by a ray of light from the setting sun,<br>and it would glow with glory.",
                    "The outlines dissolved<br>in a soft, effulgent dazzle,<br>and the golden stripe would gleam<br>like a headline over the moment."
                ], [
                    "There was the feeling of a sudden,<br>soft ignition;<br>a silent spark,<br>then a fattening flame<br>blooming inwardly;",
                    "a reflection in the mind<br>of the physical sun out there,<br>which ran its golden fingertip<br>around the golden rim;<br>and,<br>touched by this tuning fork of light<br>the cup became a sonic bowl;",
                    "the harmonic note lifted<br>the energy level an octave or two;<br>the pitch of life pushed upwards,<br>and quickened like a flame.",
                    "It deepened and intensified,<br>and I absolutely knew<br>that what the poets and the mystics<br>had always said was true.",
                    "It was a cheap holiday<br>but there was no expense spared<br>in the special effects department<br>when you had some sugar<br>and a sunset in your tea."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Just Like Alice",
                "Just Like Alice",
                [
                    "She stood tiptoe on the edge of the ledge<br>and she fell into slow motion<br>through the air thick with rainbows and ethereal honey.<br>Down through the folds of the sculptured drapery.<br>Down the tangled vines and doodles<br>in the margins of medieval manuscripts,<br>with their flowers and their fruits<br>and their haloed saints and apple trees.",
                    "Through layered maps and dappled lights<br>in the valleys of information.<br>Through the torrential rain of blossoms<br>on the tips of the thinnest branches<br>that sigh and susurrate in the strident winds<br>(the twigs like animated Arabic script<br>and the branches all shaped like the rooks<br>on Shakespeare's castled battlements).<br>Through flocks of ring doves frayed and cooed<br>(wings in salute at such brave flight).",
                    "Through the multiplication tabled snowflakes<br>and mathematical layers of  molecular dust<br>and ladders of light through shattered shades<br>and shadowed lattices and hatches.<br>And ribboned screeds of sheet music<br>in gay abandon on the breezes blown.<br>And scribbled sacred shopping lists<br>and sheep's wool from the shearing<br>flung about in rustic jubilee.",
                    "And serried ranks of clothes pegs<br>on the washing lines in a stiff dance<br>on a rainy windswept day.<br>Past choirs and congregations<br>with angels wings for hands in prayer<br>all shaped like Gothic doorways.<br>Down through the lonesome astral planes<br>past the phantom hitch-hiker drifting through the fault lines<br>and fractures in the slipstream.<br>And jangled in the wavebands of radio station tunings<br>with their random music and messages.<br>And past old clockwork musical boxes<br>with paintings of horses and carnivals on the woodwork.<br>And fractal equations and logical syllogisms<br>and long hair waving like weeds underwater.<br>And the plumes and tufts of bearded God<br>and his angels with their tongues like trumpets.<br>And hieroglyphics looked at through the magnifying glass<br>of the academic Egyptologist.<br>And tracks in the sand deciphered<br>by trusty Indian scouts.<br>And graphs that plot the secret journeys<br>of walking sticks down country lanes<br>in English village yoga manuals."
                ], [
                    "And down through the flocked un-numbered leaves,<br>through the blank pages of the unwritten books<br>she glided;<br>down and through the thorns of flames<br>and the briared tangled crowns<br>of bewildered light<br>in a storm of swirling sycamore seeds<br>in the roaring raging symphony<br>of all things in the free fall.",
                    "Till she herself was braided and tressed<br>by the vexed and fractious winds untied,<br>unfurled by the complicated idle breeze,<br>suspended in the spun coilings<br>of the swarming pathways of the air –<br>round the hooves and horns of this handwriting<br>and the convolutions of these sentences.",
                    "Like a boat before its glittering<br>electrical pathway of light<br>upon the rivers of the skyway –<br>aimed like an arrow through the eye of a needle<br>she twisted slowly to the centre<br>like a corkscrew in a vortex,<br>all the way down to the very navel of the world.",
                    "And she fell upwards baby;<br>and she crashed up through the surface of the lake<br>in a shower of smashed chandeliers<br>and exploding stained glass windows<br>with Excalibur in the both of her fists<br>and the sun and the moon in the heart of her eyes.",
                    "With features all resolved at last<br>and the purple bruise below the cheekbones<br>quite healed over now,<br>and with a flower in her fingers called gravity.",
                    "Rising up towards us as we bend down to receive;<br>with arms up-lifted,<br>palms held outward,<br>fingers open,<br>with everything offered,<br>always arriving,<br>arriving always,<br>She."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 1100 }),
            new Piece("I Made This For You, Even Though",
                "I Made This For You, Even Though",
                [
                    "<small>For Lara, on the occasion of her thirteenth birthday</small>",
                    "If poems were stones<br>I could build you a castle<br>to keep you safe inside;<br>and if wishes were horses<br>we'd ride up in the mountains<br>to the land where the dream never died.",
                    "But they're not<br>and they aren't<br>so we can't.",
                    "This poem can't save you either,<br>let's be clear about that<br>at the outset.<br>It won't actually help<br>when the monster's eye<br>fills up the windowpane.",
                    "But even so,<br>for what it's worth,<br>I know a trick<br>to soothe your mind<br>on a fretful, sleepless night<br>See this screwed up sheet of paper?<br>I pick it up, and hold it<br>between my thumb and my forefinger,<br>and carefully shake it loose;<br>pull it open at the edges,<br>then flatten and smooth it out across<br>the surface of the table;<br>I ex-plane it for you.",
                    "And on this sheet of paper<br>I draw you a map of your world,<br>to show you how the pieces<br>fit perfectly together.",
                    "And see, I also unravelled<br>this straggle of rhythms and rhymes<br>(they arrived in a heap, all talking at once,<br>and I had to disentangle them,<br>and tease out the words, in an equable order<br>to harmonise your mind).",
                    "Now I put the words<br>into the map;<br>each word in its box,<br>each box in its corner,<br>every corner in a design;<br>the design in a composition<br>to make sense of your journey through time.",
                    "And, speaking of time,<br>I'd like to imagine<br>that sometime in your future,<br>when I'm no longer here,<br>in the middle of a busy day<br>you might come across this poem<br>where it's been waiting for you<br>down the years,",
                    "and it will open out for you<br>like that screwed up sheet of paper,<br>and you might climb inside it,<br>like getting into bed,<br>and pull the sheets up, over your head,<br>to gain for yourself a moment's peace<br>from the pull and the push of the world."
                ], [
                    "Well, it isn't much, but no man's work<br>makes a deeper mark in time.<br>So let me summon sounds for you,<br>and let me paint you pictures.<br>Here, child, lift your head up, just a little,<br>so I can slide and tuck, under your pillow,<br>these memories of the farm<br>where you spent so much of your time<br>in your imaginary childhood.",
                    "Every night I told you stories.<br>The narratives are faded now,<br>the trails worn down and overgrown;<br>but the love I felt when I made them up<br>still shines as bright within them.<br>I could pick up those storylines<br>between my thumb and my forefinger,<br>loop them into a circle<br>and set it up to glow;<br>the soft light like a halo<br>above your sleeping head;",
                    "its influence will infiltrate<br>your dreams with happy endings,<br>and your memory of my spoken words<br>from evenings long ago<br>will make a nest for your mind.",
                    "And here is an Alpine valley<br>to cool your fevered brow;<br>covered with flowers, a bit like you,<br>pale, un-possessed, and open.",
                    "I will lay thee down<br>by waters clear<br>on soft white sand,<br>on sunshine beach;<br>and, in the seashell of your ear<br>I will allow<br>no clam'rous sound;<br>there may you only hear<br>the gentle susurration<br>of creamy, lace fringed surf.",
                    "(I've put you on an island,<br>and the beach itself in an enchanted lagoon<br>where the little boat bobs up and down,<br>in a protected bay, far, far away<br>from the sound of the storms that circle around,<br>and out of the swing of the sea).",
                    "And then, beyond the horizon<br>I'll sketch for you a view<br>across meadowlands of galaxies<br>of a star-studded sky<br>so stunningly beautiful<br>it could even make you cry.",
                    "Oh, if poems were stones<br>I would build you a castle<br>to keep you safe inside;<br>and if wishes were horses<br>we'd ride up in the mountains<br>to the land where the dream never died."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 1400 }),
            new Piece("Nothing but the Truth",
                "Nothing but the Truth",
                [
                    "Now let me tell you a story<br>that I never told to you before.<br>I was hanging out in a bar in Rome,<br>it must've been some years ago now,<br>and, looking out across the room<br>I saw Leonard Cohen<br>sitting all alone,<br>and I went over to him<br>and sat down opposite,<br>on the other side of his table,<br>and then I said to Leonard Cohen,<br>I'd like to read you a poem.",
                    "And, while he sat there<br>sideways on to me<br>drinking a glass of old red wine<br>and smoking a cigarette,<br>I read to him that poem<br>that I wrote about me and you;<br>the one that ends by a fountain in a park,<br>at the end of an avenue of trees<br>whose branches, thinning at the top<br>interlaced above our heads<br>like fingers linking hands.",
                    "And when I'd finished talking<br>he just sat there for a while<br>and smoked another cigarette,<br>and then he said to me<br>that's maybe the best poem<br>that I've heard in a long long while."
                ], [
                    "It's better than the one<br>that I just wrote, he said.<br>And I agreed.",
                    "But the thing I have to tell you now<br>is that none of that ever happened.<br>It should have done, but it didn't.<br>I've never even been to Rome<br>and now I'll never go there<br>just in case.",
                    "But the other thing about it<br>is, that now that I've told it to you<br>you'll always read that poem about you<br>through the story you just heard,<br>no matter what you do.",
                    "You won't be able not to.<br>You'll always see Leonard Cohen listening,<br>sitting there in profile<br>wearing his old blue raincoat,<br>and smoking a cigarette.<br>And the red ring from the wineglass<br>staining the table top<br>in that old bar in Rome.<br>And so, in a kind of a way,<br>and all because of you<br>that story will come true.<br>That's the way it works."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Falling In",
                "Falling In",
                [
                    "Because of you I know the pain the ice must feel<br>when Spring thaws the stiffness out of the rivers and the lakes,<br>melting on the moving surface of your body;<br>and I know the sudden fear of the breaking bud<br>when the leaves surrender and the flower spills<br>and plunges into unknown space<br>before it finds a cradle on the airwaves.",
                    "Every time I draw my outline<br>you break across the border-line again<br>and then once again I'm falling, helpless,<br>like a candle flame when a passing breeze<br>sucks against the vertical plume<br>and it elongates beyond itself,<br>driven by a desire so desperate,<br>it almost drags itself up by the roots<br>to the risk of its own destruction.",
                    "You're like gravity, you get bigger and brighter all the time<br>as I'm pulled into your orbit<br>like a meteorite into the face of a planet,<br>until I can't see anything outside you.<br>From the far flung frontiers of my nervous system,<br>that I haven't heard from in a thousand years,<br>lights start flashing on and off<br>with distant news of electrical fires<br>that staple themselves from my knees up to my neck<br>the moment that I see you, across a crowded room.",
                    "The thought “that's why they call it <i>falling</i> in love”<br>travels across the screens in front of me,<br>but never shapes up to a coherent phrase –<br>the words evaporate like vapour trails,<br>and as they start to slowly rotate<br>I feel like I'm going down in a tailspin.<br>But you guide me in when I catch your eye,<br>and when you move<br>your body that way,<br>that way that you move your body."
                ], [
                    "You lift your arms to absorb my impact,<br>but that's all right, there's no crash landing,<br>because the nearer I get<br>the slower I come.<br>The air gets thicker with information<br>the more I move<br>into your atmosphere.",
                    "As I arrive through an explosion of migrating birds<br>I can hear the blood<br> beating in my ears<br>and the distant sound of bells and thunder.<br>And I'm as blind as a bat, but it doesn't matter;<br>I'm guided in by the smell of your skin.",
                    "My limbs get heavy, I can't remember<br>how to walk, I can't remember<br>how to talk, and I'm dropping<br>down<br>into a trance<br>like a bird falling down a tunnel to the light.",
                    "By the time my mouth finds its way to your mouth<br>I'm fast asleep and I'm dreaming wild dreams<br>of fast moving clouds in a blue sky over the ridges.",
                    "Their fleeting shadows chasing up the hillsides<br>are your hands moving over me,<br>and the many fingered breeze that flutters<br>across my body in a long caress,<br>is just your breath that I'm breathing inside of,<br>feeling your heart beat inside mine,<br>until I'm home again at last."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Now Am I Commanded",
                "Now Am I Commanded",
                [
                    "Is it not obvious that the Creator yawns with scarcely concealed boredom during thunder and tempest, yet toils in rounding the delicate spirals of a seashell? W.B. Yeats asked that question once, and I ask it now again as I try in vain to trace the exact angle of the curves that meet and merge to make the magical performance of your face. Now am I commanded to calculate once again the beauty of your body, as you sleep deep within the shelter of its structures, and to delineate the drastic curves and the suntanned planes of the muscles of your tummy and your thighs, as though they were what indeed they are—the actualisation of the architecture of love and the articulation of all of my desire. But I am dumb beside such easy and unconscious grace. And my heart in shreds in the witness box.",
                    "Like an eagle my eye tracks across the landscape of your body as though I saw the world from the peak of a mountain, and my gaze comes finally to rest and hover just above your knee. There is a scar below your knee. I know the story of that scar. I know its history. In the name of the childhood accident that it commemorates I summon angels and ministers to witness the unrecorded outrage of your leg caught under the roundabout in the park. In the name of this never quite forgotten pain I think it reasonable to expect the wheels of the war machine to cease from their endless turning. I want the constructions of brutality dismantled now, and I also require that the armies who have been marching for a thousand years come to attention at the foot of this bed. I expect the soldiers to lay down their weapons and kneel. When I turn to look out of the window I want to see every field between here and Nottingham covered with their kneeling forms, under the monochrome moon, their steel helmets like a million buds waiting to hatch the miracle of compassion born out of fear and loneliness."
                ], [
                    "You throw an arm out away from your body across the bed, your hand half open like a flower. The bedside lamp likewise throws its delicate illumination into your half hidden palm, making a shadowed pool of light. The modulations there go past the art of Rembrandt. Let atheists gather and gaze into that pool of light until their eyes heal over.",
                    "The power that persuaded the galaxies into a spiral rounded also your heels and your hands. And your face was sculpted by the sea winds. Across the pillow your hair is spread in a careless blond explosion. How many times have I carved with an endless patience every flying tendril of that great mane of hair, and set it up behind your profile and placed it on the prow of my boat as I followed your face like destiny?",
                    "How many times, I wonder? Who knows how many times? Who cares how many times? I wasn't counting at the time. I was never counting anyway."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { class: 'leftPage' }),
            new Piece("Postcards to Oblivion",
                "Postcards to Oblivion",
                [
                    "They used to have a little address book. Maybe Lella brought it with her from before they moved into that little house in Jericho. It seemed always to have been around, and most of the addresses in it had been written over and changed many times with the passing of the years. We won't even go into that, the comings and goings of people and the sadness of a dead address. On this occasion, to commemorate the cover of the book in question is about as much as we can manage. It was a small black leather hardback book with a picture of a Scottish Highlander in a tartan kilt with full regalia standing on a hillside, playing the bagpipes, pasted on to the cover. She used it mainly for phone numbers then. Well in the course of time the bagpipe player's features became indecipherable under the impact of the doodles scribbled across his head and the blue sky behind him (and of course he had long borne, with the stoical fortitude for which his clan was famous, the obligatory, unimaginative moustache and glasses). Harding liked to think that those doodles, randomly scrawled in unconscious agitation during the tensions of many forgotten phone calls, were like mystic cryptograms that somehow recorded the emotional details of the phone calls themselves, and that in some future time some semiotic research system would decode and unscramble them back to the actual stimulus of which they were the unwitting representations, so that the original scenes could be replayed like old movies, forgotten conversations revived in living colour, so that he could see again the fleeting expressions crossing her face like clouds across a troubled sky, and see again the way that she used to lean forward when she laughed, or the way she bit her lip when she was concentrating."
                ], [
                    "A palimpsest of stains and scuffs eventually backgrounded the bagpipe player almost into oblivion, and eventually the whole book followed him.",
                    "Richard Dawkins tells us that molecular genetics, in the not too distant future, will put together the one true tree of life. They will “reconstruct the great migrations and invasions of the centuries, track the voyages of the Viking longships, follow the American tribes by their genes down from Alaska to Tierra del Fuego and the Saxons across Britain, document the diaspora of the Jews, and even identify the descendants of pillaging warlords like Genghis Khan.” Yeah, but no similar power will read, like psychic braille, the pattern of dotted holes hammered into the Scotsman's kilt with a biro during one call that she had found particularly distressing. One day I suppose the cover fell off of that little address book, and the pages loosened and were eventually thrown into the bin, like postcards to oblivion.",
                    "Sooner or later, everything goes that way."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }, {
                    "Ingrid Hansen Smythe": [
                        "piano"
                    ]
                },
                { class: 'leftPage' }),
            new Piece("Don't",
                "Don't",
                [
                    "Suddenly<br>a flash of light<br>and your face<br>before me.<br>Beautiful. Simple. Perfect.<br>And with that look.<br>That look!<br>Brilliant. Radiant.<br>Alive.",
                    "The passing breeze<br>held its breath,<br>and the moment<br>paused<br>as though it almost realized<br>something<br>but then you moved,<br>and the moment passed<br>and your face was lost<br>then found again<br>as the shadows and the shapes<br>round your outlines<br>rearranged;<br>found a frame<br>and there you were<br>inside again."
                ], [
                    "Your face again,<br>beautiful.<br>Like a soft flame<br>glowing, trembling<br> like a feather,<br>a wing<br>then two wings<br>folded over<br>one another<br>to shelter, and nest<br>beneath them<br>your heart<br>gently beating.",
                    "The pulse of life.<br>Beating<br>gently",
                    "Don't stop<br>beating",
                    "Don't stop<br>beating<br>Don't stop<br>beating<br>beating<br>beating",
                    "Don't stop<br>beating",
                    "Don't stop<br>beating",
                    "Don't stop",
                    "Don't",
                    "Stop",
                    "Don't"
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Unbroken",
                "Unbroken",
                [
                    "Let the Land heal over<br>and let grass again cover<br>the ground that was broken<br>and wounded<br>to nourish a Nation."
                ], [
                    "May the stone be unbroken;<br>and be again as before<br>Michelangelo made the marble<br>blossom."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Incarnation",
                "Incarnation",
                [
                    "Perhaps I should sing<br>with the syllables of sound of the stones in the stream,<br>with their chime and their clangour their suck and their stammer<br>their shine and their shimmer and muffled laughter<br>as, counted and clucked by the swirl of the water,<br>they inscribe their inscrutable commentary.",
                    "Do they complain that they but wind a chain around the world<br>(itself a stone in which the imprisoned spirit<br>looks out through the watery windows)<br>or do they simply celebrate this perishable tissue?",
                    "And shall I join the choir, or should I not condemn<br>the way you dragged us all down here into this gravity well?<br>I think it was the way you just jumped down and dug the dirt.<br>That was something to see.<br>That was what got to me.",
                    "It was an audacious declension,<br>possibly even a noble condescension,<br>or maybe I just like to see it that way.<br>At any rate, it was that graceful curve<br>on the downturned incline of your face,<br>and that little upturned curve<br>on the corner of your mouth,<br>as you acknowledged gravity.",
                    "So flash and shine put on their metal undercoat<br>and summer's green depends now on the leaf.<br>Yes you allow the thickening of the light,<br>the wavelengths slogging down like a broken stroboscope<br>which drugged us down into a stupor<br>breathing the air through bubbled mud.",
                    "Yet you don't even hesitate.<br>You step down lightly like a ballerina<br>then you come up on the other side<br>as brazen as a fleshpot sent from Babylon.<br>You sashay by like rock and roll,<br>wide-hipped, broad-beamed, mast up and rigging on;<br>all shuck and jive and sheer swank,<br>flags waving in the wind.<br>You thumb your nose at tragedy<br>and palm me off with a wink.",
                    "‘til I don't know just what to think.",
                    "The weight of your arrival here<br>destroyed interpretation (yeah, thanks for that,<br>it was nice to see the theories dissolve like Dracula's flesh<br>struck down by the morning sunbeam).<br>But a single graze on a schoolboy's knee indicts your Universe,<br>and millions are starving to death right now<br>because you dragged us all down here,<br>and you don't care<br>you just lie there<br>like a caterpillar on a broad green leaf,",
                    "Legs crossed, arms akimbo, sunglasses on,<br>sipping a strawberry milkshake, probably.<br>You return to the serried ranks<br>of my anxious question marks<br>just the smile of the Cheshire cat."
                ], [
                    "You're without permission,<br>you're without guarantees,<br>you've got nothing at the back of your beyond,<br>but if it weren't for the fact of this broken leg<br>I'd have to say I love the way<br>you dance us all to death.",
                    "I mean what could be bigger than you are baby?<br>I'm cleft right down through the core of my being<br>like a log that's been spliced by an axe.<br>What argument could I advance against you<br>as you design the architecture of the snowflake<br>and take care of each and every fingerprint?",
                    "What could anyone say against you<br>when even “fuck you” is a prayer?<br>So lie back Mother Nature<br>(lift it up a little higher there);<br>I've got my airplanes on right now<br>and I'm flying straight into you.",
                    "The carpets are corrugated all down the hallway<br>and the curtains are stretched out flat in the blast.",
                    "Oh, end this dark frivolity!<br>Yea, spread far wide thy plates of light,<br>I want it with sunsets and lipstick.<br>And confuse the world as much as you like,<br>I know how to read your tracks in every drop of rain.",
                    "Just like Leonardo used to contemplate the stains on an old stone wall,<br>in which he saw the forests grow, the flowers bloom and the blossoms fall,<br>I see it all so surely spelt in a phrase of the changing sky,<br>the gods behind the galaxies coming down to rest on the curve of your thigh;<br>finding their sight in the light of your eye.",
                    "I go riding out to life on every beat of your heart<br>like you were the last train to Paradise.<br>So don't drag me down through purgatory again.",
                    "Because you took my breath away,<br>because you blew my mind right out,<br>because you smashed my headlights in<br>but let the light come leaping out,<br>you ignited me with an inblent fire<br>and I don't think time or disease<br>can extinguish the ecstasy of sugar.",
                    "You made me read it out real clear<br>in the pattern of the grain of every ordinary tree.<br>You're telling me it's simply there<br>and you don't care<br>about my reservations.",
                    "So perhaps I should sing<br>with the syllables of sound of the stones in the stream,<br>with their chime and their clangour their suck and their stammer<br>their shine and their shimmer and muffled laughter<br>as, counted and clucked by the swirl of the water,<br>they inscribe their inscrutable commentary.",
                    "I should simply celebrate your perishable tissue.<br>For I have heard the heart of life<br>say yes to me."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 1400 }),
            new Piece("Transmission",
                "Transmission",
                [
                    "<b>1</b>",
                    "Unlike Lazarus and Jesus plucked out of the tomb<br>or Ariel from the knotted entrails of his tree<br>by a force far stronger and more urgent than he,<br>Michaelangelo's slaves and stupendous giants<br>look reluctant to be set free;<br>delivered, it seems, unwillingly<br>from out of their marble womb;<br>and some of those fetched up to the surface<br>look like they're longing to return<br>back into the self involvèd stone,<br>as though a flower would shut its eye<br>and be a bud again.",
                    "Their powerful muscles are sinking down to sleep,<br>their heavy eyelids closed;<br>and Adam can hardly even be bothered<br>to lift a languid finger<br>to receive his electrical shock<br>from the hand of his maker.<br>Such a strangely supreme relaxation<br>after the efforts of their author<br>to find them out and haul them up<br>out of the mute autistic block<br>inside which they'd lain brooding all the while,<br>curled up around their own potential<br>like a snail around the spirals of its shell.",
                    "<b>2</b>",
                    "But now I see the giants have done<br>more work than I'd supposed.<br>(the limpid beauty of Christ's hand<br>in the late Pieta,<br>or the pleated folds in Mary's robes<br>that a whisper might ripple and flutter).",
                    "That such subtleties were thus persuaded,<br>so lifted from the intractable stone!<br>They aren't regressing after all,<br>but resting after labour.<br>Theirs is the sensual rapture<br>that follows the act of creation."
                ], [
                    "This is the exhaustion<br>of something that's been spent.<br>What drew them up has drawn them out;<br>what we see is just a recoil;<br>a signal has been sent.",
                    "Listen.<br>Put your ear up close to the stone<br>and you can hear it sing.<br>And look,<br>the surface of the sculpture breathes,<br>it's blurred;<br>the energy that pulled it up<br>evaporates above it<br>like heat in waves<br>escaping from dry land.<br><br>So consummately chisel-kissed<br>the rock has bloomed,<br>the flower opened<br>and the perfume has escaped<br> into the liberated air.",
                    "The stone made flesh,<br>the flesh made breath,<br>the breath a breeze<br>that has become<br>at one with the wind and the sky.",
                    "That which was made visible<br>has now achieved<br>invisibility.",
                    "The final stroke has gone beyond<br>whatever can be seen;<br>the sullen earth has taken wing,<br>It's gone beyond, it's real real gone;",
                    "the cage is down,<br>the bird has flown<br>into the wild blue yonder."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 900 }),
            new Piece("The History of Fire",
                "The History of Fire",
                [
                    "Some say the flame once stood alone,<br>others say it never did.",
                    "Its need is equal to its power<br>And it needs fuel to live.",
                    "It's hungry and it must consume<br> the things that it creates."
                ], [
                    "The fire must slake its endless thirst<br> so everything must burn.",
                    "All creatures flee in fear from its desire,<br>but come to understand, as they expire,",
                    "flames do not burn themselves and so<br> they're turning into fire."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Flowers",
                "Flowers",
                [
                    "<b>Flowers</b>",
                    "I'd never have guessed that such emotion<br>could be provoked by the sight of a bunch of flowers.<br>They were lying along the back window of a car<br>stopped in front of me in the traffic<br>while I was driving somewhere or other;<br>long stemmed they were, with small,<br>fiercely bright red tips<br>(I don't even know what they are called).",
                    "They'd been cut from the root,<br>wrapped in a paper shroud<br>and taken hostage<br>to be ransomed off,<br>in a gesture of mollification<br>to close down some low grade<br>domestic entanglement<br>probably.",
                    "They should have looked stupid and absurd<br>trussed up like prisoners, and thrown on a shelf,<br> and being used in such a way,<br>so what I felt was really envy<br>for their immunity<br>to everything about us;<br>the way they couldn't be requisitioned<br>as witnesses in any human drama.",
                    "They had been roughly handled<br>but they could not be touched.",
                    "Their calm unblinking certainty<br>gazed over the head of all our circumstance;<br>looking directly into the face of something<br>that we can't even see.",
                    "<b>More Flowers</b>",
                    "There's a vase of flowers on the kitchen table.<br>They look so remote they make me think<br>of snow on distant hillsides.<br>They seem to carry the atmosphere<br>of deep and dreamless sleep.<br>Paradoxically though,<br> they also look alert and attentive,<br>but their attention is obviously elsewhere.",
                    "Perhaps they are tuned in<br>to a madly passionate music<br>coming in through the ether, that we can't hear,<br>composed entirely of silences.<br>Or are they really introverts<br>contemplating theorems<br>of complete equilibrium."
                ], [
                    "Something must be going on<br>behind those involved eyelids.<br>Is it sublime indifference<br>or do I detect a distant disdain,<br>an ironically raised eyebrow<br>in their devout demeanour?<br>But to ask that would be to undermine<br>their sense of absolute innocence.<br>Looking at them is like gazing<br>at the face of a sleeping newborn child.",
                    "But no way of describing them<br>comes anywhere near the mark,<br>and there is no sense in looking for likenesses<br>for something that isn't like anything.<br>They are simple, they are singular,<br>they are quite simply<br> their simple singular selves.<br>They are really utterly utter.<br>Sat there on my kitchen table<br>right in front of me.<br>Completely out of reach.",
                    "<b>Flowers Revisited</b>",
                    "T. S. Eliot wrote about flowers.<br>He said that some of them had the look<br>of flowers that are looked at.<br>But flowers don't look like that.",
                    "They don't see your look.<br>They are completely preoccupied<br>in looking at something else.",
                    "While you are looking at them,<br>they are looking over your shoulder<br>at something you can't see.",
                    "Judging by their look<br>of utterly rapt devotion<br>it must be something as beautiful<br>as you think flowers are.",
                    "I bet you wonder what it is.<br>Don't wonder too much though.<br>The reason you don't know<br>is because you've chosen to forget;",
                    "and if you were to remember<br>exactly what it was;<br>if you were to remember<br>the beauty you have lost<br>it might bring you to your knees."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 1100 }),
            new Piece("Heavy Metal",
                "Heavy Metal",
                [
                    "Imagine this,<br>an enormous piece of military<br>or industrial machinery,<br>something so unbelievably heavy<br>its massive wheels sink even into stony ground.<br>Something of such awesome density<br>that it might seem the very child<br>of gravity itself.",
                    "Imagine that this huge colossus<br>rests upon a gently sloping field,<br>tied by many ropes and chains<br>as thick as branches<br>to metal stakes<br>the width of trees<br>buried deep in the earth.",
                    "Settled down<br>into an immemorial slumber.<br>Moss and rust<br>conspire with its own stagnation.<br>Equally indifferent<br>to the wind and rains of winter<br>and to the glancing lights of summer,<br>the brute actuality of the thing<br>could put stress lines into your head<br>just from looking.",
                    "The seasons revolve in a flicker of light.<br>Butterflies stagger and tumble overhead,<br>oblivious to the insentient mass below.",
                    "Its weight is so tremendous<br>that gradually, inevitably,<br>it begins to loosen its fastenings,<br>and some of the ropes and chains<br>just snap from the pressure.<br>Feel the incredible tension in those chains<br>just before they break.<br>Feel the metal stakes<br>being pulled like teeth.",
                    "And then the thing begins to gently slide,<br>so slowly at first that you cannot see<br>but only sense the movement;<br>As though it clung to its own inertia,<br>then, regretfully, down the slope,<br>it gains in speed,<br>builds up to a slide,"
                ], [
                    "tips over the edge<br>and begins to fall,<br>effortlessly, end over end,<br>into a chasm<br>of inconceivable depth.",
                    "A tremendous feeling of relief<br>shudders across<br>the whole gigantic fabric<br>as it surrenders to free fall;<br>and as it falls,<br>as the cushion of air beneath its frame<br>begins to build<br>it starts to shed its outer shell,<br>which falls away like skin from fruit.<br>One after another the various bits and pieces<br>of the framework just burn away<br>and freewheel into space.<br>And as it falls it's stripped away<br>Surrendering its exoskeletons<br>like envelopes of matter,<br>until slowly a finer<br>and more delicate structure<br>begins to emerge.",
                    "Eventually it becomes as frail<br>as the frame of an ancient bicycle,<br>as a ladder,<br>a coat hanger,<br>a key ring,<br>a needle,<br>then just the ghost<br>of a gleam of reflected light<br>flashing on and off<br>from a silver coin<br>tossed into the sunlight.",
                    "All the surfaces of the world<br>seem to burn away<br>in scrolls of flame<br>in an incandescent conflagration<br>as the big blue lake rises up from below<br>to receive into its welcoming breast<br>the hurtling ‘V' shaped wings of fire,<br>extinguished in the heart of light.",
                    "Evaporation on impact.<br>It feels all right.<br>Inside the explosion, it's quiet."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 1000 }),
            new Piece("Prophecy",
                "Prophecy",
                [
                    "Inside my mind<br>there's a lake of light<br>of endless depth<br>lit from within,<br>and deep below<br>I can see the shape<br>of a beautiful giant<br>tangled in weed<br>and snared in shadow;<br>caught in the chains<br>of time and space<br>that failed to deliver<br>the first time around<br>so now He is finding<br>another way through."
                ], [
                    "People get ready.<br>Something is coming.<br>I can see it shining<br>in the dark.<br>I can sense Him<br>searching<br>for the surface."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Schopenhauer's Blues",
                "Schopenhauer's Blues",
                [
                    "Oh the engines of endless energy,<br>what is it that they <i>want?</i><br>However much they manage to deliver<br>it will never be enough.<br>When Blake said that time<br>was the mercy of eternity<br>I know what he meant.<br>Otherwise, to be famished when fed<br>at the very same time<br>and off of the very same plate<br>and from the very same source<br>would be about par for the course.",
                    "The which, of course, it damn near is.",
                    "I thought you'd figured that out,<br>worked it down to the bone<br>checked out the illusions,<br>seen all that was shown,<br>but look at you now<br>like the last fool for love<br>in your broken down shoes<br>and your almanac,<br>standing on the barricades<br>and waving a silly flag for some cause<br>you can't even remember the name of;<br>and going down with the ship<br>in the teeth of the evidence<br>and not because of God,<br>not because of the colours,"
                ], [
                    "and not because of the flowers,<br>but just because<br>of the way she made you feel that day<br>when she looked up<br>and smiled at you that way.",
                    "Don't consult your horoscopes,<br>episodes without a plot<br>don't do much for history,<br>And don't you know<br>that blind men can't use glasses?",
                    "Need will wear your face<br>to move from place to place<br>in one of its many disguises;<br>then it will dump you off<br>on the side of the road<br>in a tangle of busted wires<br>like a broken puppet<br>when it's used you up.",
                    "You think it's all about you<br>but it's not.",
                    "You just have to believe<br>that it's going somewhere<br>but it's not.<br>It's just all about need.<br>Need is all that you've got.<br>Oh baby, this is your <i>lot</i>."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Invasion",
                "Invasion",
                [
                    "Into the landscape of your face,<br>through the film screen of my eyes<br>I threw everything I had.<br>(I tried to pull my soul back in<br>when I realized it had gone out there<br>but, such was the force<br> of the originating gesture<br>I damn near lost my arm.)",
                    "Now I'm sitting here<br>in the ruins of my invasion<br>trying my best to calculate<br>what else got lost out there.",
                    "My cocky cavalry were the first to go.<br>Famous for their charm they were,<br>optimistic, brisk bearded men,<br>set to storm the frontal features,<br>the forehead and the eyes.<br>Meant to sweep you off your feet.<br>They went headfirst into the frozen moat,<br>and none of ‘em ever returned;"
                ], [
                    "(All except for a couple of independent scouts<br>on a special commission to find your heart.<br>No sign of that, they said).",
                    "The saboteurs and the spies came back<br>spliced and filleted,<br>the diplomats gutted,<br>and all my gentle infantry<br>patiently ascending<br>the long slopes of affection<br>set to woo you with persistent devotion;<br>I saw them twisting in the wind<br>hung up outside the castle walls,<br>blackened with frostbite and malnutrition.<br>There was really no need for that.",
                    "I'm sitting down river now<br>with my hook and line<br>waiting for my soul to drift by<br>once you've spat it out.<br>I know it must be dead but<br>I figured it deserved a decent burial.<br>I've got used to arranging those."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("No Big Deal",
                "No Big Deal",
                [
                    "Human history is so heavy.<br>I can feel the world sag with the weight.<br>Mother Nature can hardly swing her hips<br>around the axis anymore,<br>let alone push the planet<br>on its pathway round the sun."
                ], [
                    "Maybe I should just step off.<br>Lighten the load, just a little.<br>It's no big deal.<br>After all, I'm only here now,<br>like a schoolboy in detention,<br>waiting for somebody to tell me I can go.<br>I would have left a while back,<br>but I don't know my way home."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Politics",
                "Politics",
                [
                    "\"Because you're worth it\"<br>the advert said.<br>The model in the picture though<br>looked out as if to say,<br>\"You're not worth it,<br>but you might be<br>if you buy this stuff.<br>Then you can look at them<br>the way I look at you;<br>with absolute disdain.<br>And they will look at you<br>the way you look at me,<br>with all-consuming envy.<br>After all, if they envy you<br>you really must be worth it.\"",
                    "They will take away your self-esteem<br>then make you spend the rest of your life<br>buying it back again."
                ], [
                    "Meanwhile you're spoilt for choice,<br>as long as it's either<br>Capitalism<br>which is a man<br>standing on your head<br>to climb up way above you,<br>or Socialism<br>which is a man<br>pulling you down by the ankles<br>to make sure you don't get above him.",
                    "Yeah it's ambition or resentment.<br>Doesn't get much better than that.",
                    "So the Genie said to the farmer,<br>\"You can have anything you want<br>but you must understand the deal;<br>whatever it is that you receive<br>your neighbour will receive<br>twice as much as you do.\"<br>So the farmer thought about that<br>for a while<br>and then he turned and said,<br>\"Thanks. I think I'd like to lose<br>the sight of one of my eyes.\"",
                    "I guess we all know someone like that."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Complete Unsense",
                "Complete Unsense",
                [
                    "I want to sit on the back of the Quantum wave,<br>like a rider on the back of a rearing horse,<br>before it crests<br>before it breaks<br>before it makes<br>a violin,<br> a ball of string<br>or absolutely anything.",
                    "I can hear the silence around me seethe<br>with unspecified significance,<br>and I'd like it just to stay that way.<br>I don't want to hear whatever it is<br>that it might have me say."
                ], [
                    "Perhaps I owe you an apology<br>for speaking to you this way,<br>in a language that I don't understand,<br>but the thing is, that I need to stay<br>one step behind the object.<br>Once energy becomes something<br>then it's already dead.",
                    "And if the question is<br>does God exist,<br>and the answer is<br>not yet,<br>but we're working on it;",
                    "then that's one job<br> better never get done;<br>what happened to Him<br>the last time round<br>really wasn't much fun."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Abraham",
                "Abraham",
                [
                    "The ram did not show up,<br>so Abraham slew Isaac<br>(who he loved more than any other<br>except of course for God).",
                    "If the sky sang like steel.<br>If the blade shone in the sun.<br> If the fire from fear<br>fetched back its flashing forks;<br>we cannot say.<br>We could not look.<br>We had to turn away.",
                    "But Abraham saw the whole thing through.<br>Then had to return home, alone,<br>along the paths he'd ridden down<br>the day before with Isaac,<br>when the world was a different size and shape,<br>and life was a different colour.",
                    "We don't know what he thought.<br>It would seem wrong to speculate.<br>But for certain it must have seemed to him<br>that the worst thing that could ever happen<br>had happened to him that day."
                ], [
                    "He was wrong about that though<br>because along the way<br>he ran into a radical atheist<br>who proved to him<br>beyond a doubt<br>that God did not exist.",
                    "Seems like below the bottom line<br>there's another bottom line<br>with a bottom line below it.",
                    "All that happened a long time ago.<br>But up in Heaven just the other day<br>God looked down upon the Earth,<br>and then He turned to Abraham<br>and unto Abraham He did say,<br>\“Seems like it's not just you anymore.<br>These days everybody feels that way.\”"
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                }),
            new Piece("Church Service",
                "Church Service",
                [
                    "At the exhausted end<br>of a hot humid day<br>up in the hills in the Lake District,<br>arriving back in the little village,<br>even the dog was tired and overheated.",
                    "We found the tiny Gothic church<br>with its tiny little churchyard,<br>and its monumental tombstones.<br>Immaculately beautiful somehow.",
                    "I stepped through the low arched doorway<br>and was suddenly saturated<br>in silence and cold air.<br>Such a purifying shock,<br>a severe but welcome chill;<br>the marble floor<br>satisfyingly hard<br>after the bendy bumpy grass<br>and the stony tracks before.",
                    "As I walked down the aisle<br>I could feel the sweat<br>evaporating off of my skin,<br>and I realized<br>that the silence and the cold<br>and the empty well of space<br>could not be told apart;<br>they were like three expressions<br>of the very same idea.",
                    "I went to a row near the front,<br>and sat down at a pew;<br>picked a kneeling mat up from the floor<br>and placed it on the wooden rail<br>of the pew in front of me;<br>put my elbows on my knees<br>and leaned my body forward;<br>laid my head upon the cushion<br>and fell instantly asleep."
                ], [
                    "Feeling my breathing far away<br>like the swell of a distant wave.<br>And for the next few minutes<br>I absolutely knew<br>that I was fundamentally all right;<br>incontrovertibly connected<br>to the ghost in the machine;<br>the vast space inside the atom<br>and the intimate proximity<br>of the stepping stones of stars<br>across the endless shelves of sky;<br>to the inviolate validity<br>behind the face of matter;<br>the spark that lights up everything<br>that lives in the heart of nature;<br>at one with the wood and the marble<br>and the stones and the grass outside,<br>and the ground in which it grows;<br>and with everything that grows from it<br>runs through it or flies over it.<br>A gift that can't be falsified,<br>qualified or compromised,<br>and I relaxed completely.",
                    "An hour later<br>back at the house<br>I found that I was once again<br>my usual neurotic self.",
                    "I was not especially dismayed.<br>I've been through all this stuff before.<br>That's just the way it is<br>and it doesn't change a thing.",
                    "Don Juan always used to say<br>you can never get rid of the ego.<br>It will always be there<br>like some old dog<br>sleeping on the porch.<br>It's just that, once in a while<br>you get to step over it."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 900 }),
            new Piece("Keeping Up Appearances",
                "Keeping Up Appearances",
                [
                    "She is the crimson crest on the cockerel's crown,<br>and possibly the crown itself, <br>the coveted golden round<br>perched on the head of the King.<br>Good to hypnotize the hens<br>and impress the proletariat.",
                    "The King took an arrow in the cheekbone<br>at the battle of Shrewsbury<br>in fourteen hundred and three.<br>They laid him down and they dug a channel<br>carefully down the shaft of the arrow<br>in which they poured a tiny river<br>of honey and wine and other libations.<br>It took five days to wiggle it out<br>but that side of the face was shattered.<br>And so it was the other side<br>that appeared on the coins of the realm.<br>They were hard to the bite<br>and they gleamed like gold<br>and the troops at least were dazzled;<br>punch drunk on delusions of glory<br>which took them all down to the slaughter.<br>It was absolute bloody carnage down there<br>but from the top of this hill<br>the only thing you can see<br>is the shine of the sun on the swords and the steel.<br>Beauty tends to flare up like that,<br>in unexpected places.<br>She comes up everywhere.",
                    "I'm looking at a grainy black and white photo<br>taken in nineteen thirty three<br>in a red brick street in the north of England.<br>A man, an unemployed coal miner maybe,<br>is leaning against the wall in an elegant slouch.<br>He has his hands in his pockets<br>and he looks down towards the ground<br>He wears a flat cap at a rakish angle<br>so you can't really see his face,<br>and a waistcoat, buttoned all the way up,<br>and a pinstripe jacket, that's seen better days<br>and some kind of tucked up scarf.<br>He looks to me the absolute epitome of cool.<br>I've seen rock stars, I've seen film stars,<br>I've seen street kids try for that look<br>but none of them ever even came close<br>to this man's unconscious charisma."
                ], [
                    "But that nonchalant leaning on the wall<br>is probably exhaustion.<br>He hardly has the strength to stand<br>and he is almost certainly<br>suffering from malnutrition,<br>demoralization, alcoholism <br>and terminal depression.<br>He had no idea that Beauty<br>had cast her light across him.<br>But Beauty tends to flare like that,<br>in unexpected places.<br>She comes up everywhere.",
                    "The spider's web in the corner <br>is an efficient death trap machine<br>but its Euclidean geometry<br>could have been designed by an angel<br>or Leonardo da Vinci.",
                    "So Beauty has a bad reputation<br>everywhere you go.<br>No wonder the philosophers <br>hector and scold and imprecate<br>and wag their bony fingers.<br>She is so easy to requisition<br>as an ornament to power.<br>She is so plausibly positioned<br>as a tool for treachery.<br>Mother Nature's painted screen <br>to screen out suffering;<br>a motivational strategy <br>to keep the whole game going.<br>Bait to the bottom line<br>and promiscuous as hell.",
                    "But I declare her innocent.<br>If the silhouette of the gunslinger<br>looks good against the sunset;<br>or if the Nazis happened to wear<br>such sexy uniforms,<br>it's not her fault; it's not her fault<br>that she should find herself<br>in such bad company,<br>or if something should happen to shovel<br>her sugar all over the shit.",
                    "And I hear she has an older sister<br>who draws from a deeper well.<br>She says that beauty is the face of love<br>and I believe that's true,<br>but to understand how it all works out<br>is more than I can do."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 1100 }),
            new Piece("Lost Lyric volume 2",
                "Lost Lyric",
                [
                    "You were just a stepping-stone<br>on a river I had to cross<br>to get to a bigger poem<br>that lay on the other side.",
                    "(That other poem let me down,<br>but that's another story).",
                    "So you got left behind.",
                    "You think that I've forgotten you<br>But that just isn't so.<br>Often times I thought of you<br>reflecting the dappled light<br>under the shadow of the river bank,<br>my lost lyric;<br>pale and forlorn<br>and perfectly formed.",
                    "I'm sorry that I couldn't stay to listen<br>to whatever your message was<br>and that I never wrote it down.<br>You needed my voice<br>to undo and do you up again,<br>and I just wasn't there for you,<br>and now I'll never know<br>whatever it was you wanted me to say.<br>But I was in a hurry then<br>and your meaning was too subtle<br>for those crowded, urgent times.",
                    "I'm in another country now,<br>under another name,<br>in another city,<br>still playing the same old game.<br>Like one of those men you used to see<br>in the carnivals and fairgrounds<br>making animal shapes out of coloured balloons,<br>I churn out these cheap novelty toys,<br>these baubles, for the people."
                ], [
                    "But sometimes, <br>while I'm grinding out the bullshit,<br>under all the noise<br>in the back of my mind<br>in a far off, forgotten country<br>you gleam like a distant star,<br>a pebble shining in the stream.",
                    "No one else around here<br>knows anything about you,<br>and they never will.<br>For since I cannot write you,<br>so then they cannot read you.<br>But that's all right,<br>you were always much too good<br>for that lot anyway.",
                    "I cannot find my way back now<br>to wherever it was that I left you.<br>I think we both know that,<br>and perhaps it's for the best.",
                    "Whatever it was you might have meant,<br>you have a different meaning now.<br>Image of pure possibility,<br>your potential inexhaustible,<br>your existence inexplicable,<br>your issues unresolvable,<br>your riddle now insoluble,<br>your magic inexhaustible.",
                    "The heart in your stone<br>inscrutable, <br>and your song<br>Unparaphraseable.",
                    "In the mute abandoned eloquence,<br>of the silence of your soul,<br>you have a deeper beauty<br>than any I might lend you anyhow."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                },
                undefined,
                { height: 850 }),
            new Piece("Advice to Other Writers",
                "Advice to Other Writers",
                [
                    "Everything<br>that has ever been said<br>is but a tiny fraction<br>of everything that might have been said;<br>and everything that might have been said<br>is but a tiny fraction<br>of everything that could have been said;<br>and everything that could have been said<br>is but a tiny fraction<br>of all that there is to say,<br> most of which will never be said<br>since most things are unsayable."
                ], [
                    "And further to the same<br>everything that has ever been said<br>should not have been said<br>in the first place;<br>and, more than that<br>anything that has ever been said<br>can never be unsaid<br>once it's been said.<br>Therefore<br>don't say it.<br>just zip it,<br>just button it,<br>just shut the fuck up."
                ], {
                    "Los Haward": [
                        "writer and reader"
                    ]
                })
        ])
];

// Load dropdown list for each volume. Called from index.html
function loadPieceSelectors() {
    volumes.map((volume) => {
        const latrSelect = document.getElementById(volume.elementId);
        // Populate initial blank entry
        const blank = document.createElement('option');
        latrSelect.appendChild(blank);
        for (let i = 0; i < volume.pieces.length; i++) {
            // Can't do volume.pieces.map((piece) => because we need the index item as the value in the option element
            const opt = document.createElement('option');
            opt.appendChild(document.createTextNode(volume.pieces[i].title));
            opt.value = i;
            latrSelect.appendChild(opt);
        };
    });
}

/**
 * Replace the contents of the given column with lyrics formatted as a series of paragraphs.
 * @param {string} colId - Column element identifier: leftCol or rightCol
 * @param {string[]} lyricsArray - Array of paragraphs in lyrics
 */
function loadLyrics(colId, lyricsArray) {
    const col = document.getElementById(colId);
    // Remove previous elements
    while (col.firstChild) {
        col.removeChild(col.lastChild);
    }
    // Each paragraph is an element in the array
    lyricsArray.forEach((lyricPara) => {
        const para = document.createElement('p');
        para.innerHTML = lyricPara;
        col.appendChild(para);
    });
}

/**
 * Replace the contents of the given column with credits formatted as a definition list.
 * @param {string} colId - Column element identifier: leftCol or rightCol
 * @param {object} credits - Containing one or more people, each of which has an array of credits
 */
function loadCredits(colId, credits) {
    const col = document.getElementById(colId);
    // Remove previous elements
    while (col.firstChild) {
        col.removeChild(col.lastChild);
    }
    // Credits have keys for each person, and each key's value is an array of items.
    // Translate these into List, Term and Definition elements.
    if (credits) {
        const dl = document.createElement('dl');
        col.appendChild(dl);
        Object.keys(credits).forEach((credit) => {
            const dt = document.createElement('dt');
            dl.appendChild(dt);
            dt.innerHTML = credit;
            credits[credit].forEach((item) => {
                const dd = document.createElement('dd');
                dl.appendChild(dd);
                dd.innerHTML = item;
            });
        });
    }
}

/**
 * Long lyrics may require a longer book, and some lyrics need a specific css class such as leftPage.
 * @param {object} options - May contain alternative height in px of the contents div, or different class for columns
 * @param {boolean} isReset - if true, un-apply height and class, otherwise apply options if present
 */
function applyOptions(options, isReset) {
    if (options) {
        if (options.class) {
            const leftCol = document.getElementById('leftCol');
            const rightCol = document.getElementById('rightCol');
            if (isReset) {
                // Remove the small font - not needed for credits
                leftCol.classList.remove(options.class);
                rightCol.classList.remove(options.class);
            } else {
                leftCol.classList.add(options.class);
                rightCol.classList.add(options.class);
            }
        }

        // Only modify the height of the contents if we're in browser mode
        const mediaQuery = window.matchMedia('(min-width: 960px)');
        if (mediaQuery.matches) {
            const contents = document.getElementById('contents');
            if (options.height && !isReset) {
                contents.style.height = `${options.height}px`; 
            } else {
                // Default height should match what's in ihs.css
                contents.style.height = '800px'; 
            }
        }
    }
}

/**
 * Given a piece and start time in seconds, load it into the player, update the page title, and load the lyrics.
 * @param {object} piece - containing mp3, ogg, title, leftLyrics, and rightLyrics elements.
 * @param {number} startAt - the second at which to start the player. Typcially 0.
 */
function loadPiece(piece, startAt) {
    // Load piece title - this element should have been added during init
    const title = document.getElementById('title');
    title.innerHTML = piece.title;

    // Load piece into player
    mp3 = document.getElementById('audioMP3');
    ogg = document.getElementById('audioOGG');
    mp3.src = piece.mp3;
    ogg.src = piece.ogg;
    player = document.getElementById('player');
    player.pause(); // Stop playing
    player.currentTime = startAt;
    player.load(); // Load new sources
    // Do not autoplay: player.play();

    // Load lyrics into columns
    loadLyrics('leftCol', piece.leftLyrics);
    loadLyrics('rightCol', piece.rightLyrics);
    applyOptions(piece.options, false);
}

/**
 * Decrement the current selectedPiece and load the previous piece. Called from volume1.html or volume2.html.
 * @param {object} volume - The selected volume object
 */
function prev(volIndex) {
    const volume = volumes[volIndex];
    volume.selectedPiece--;
    if (volume.selectedPiece < 0) {
        // Wrap around
        volume.selectedPiece = volume.pieces.length - 1;
    }
    // 'latr' is the hidden value in the form holding the selected piece. It transmits an 'index' value
    document.getElementById('latr').value = volume.selectedPiece;
    document.getElementById('playerForm').submit();
}

/**
 * Increment the selected piece in the given volume. If we get to the end, go to the beginning.
 * @param {object} volume - The selected volume object
 */
function incrementSelectedPiece(volume) {
    volume.selectedPiece++;
    if (volume.selectedPiece >= volume.pieces.length) {
        // Wrap around
        volume.selectedPiece = 0;
    }
}

/**
 * Increment the current selectedPiece and load the next piece by submitting the form
 * @param {number} volIndex - Array index of selected volume
 */
function next(volIndex) {
    const volume = volumes[volIndex];
    incrementSelectedPiece(volume);
    // 'latr' is the hidden value in the form holding the selected piece. It transmits an 'index' value
    document.getElementById('latr').value = volume.selectedPiece;
    document.getElementById('playerForm').submit();
}

/**
 * Increment the current selectedPiece and load the next piece by replacing the current page contents, and start playing it
 * @param {number} volIndex - Array index of selected volume
 */
function loadNext(volIndex) {
    const volume = volumes[volIndex];
    incrementSelectedPiece(volume);
    loadPiece(volume.pieces[volume.selectedPiece], 0);
    const player = document.getElementById('player');
    player.play();
}

/**
 * Update the audio source from a query parameter, stop, replace audio source. Called from volume1.html or volume2.html
 * @param {number} volIndex - Array index of selected volume
 */
function selectAudioSource(volIndex) {
    const volume = volumes[volIndex];
    innerInit(volume.copyright);
    // Get selected start time from query parameter
    let startAt = parseInt(new URLSearchParams(window.location.search).get('s'));
    if (isNaN(startAt) || startAt < 0) {
        startAt = 0;
    }
    // Get selected index from query parameter
    volume.selectedPiece = parseInt(new URLSearchParams(window.location.search).get('index'));
    if (isNaN(volume.selectedPiece) || volume.selectedPiece < 0 || volume.selectedPiece >= volume.pieces.length) {
        volume.selectedPiece = volume.defaultPiece;
    }
    loadPiece(volume.pieces[volume.selectedPiece], startAt);
}

/**
 * Flip between showing lyrics and credits
 * @param {number} volIndex - Array index of selected volume
 */
function toggle(volIndex) {
    const volume = volumes[volIndex];
    const piece = volume.pieces[volume.selectedPiece];
    const leftCol = document.getElementById('leftCol');
    const rightCol = document.getElementById('rightCol');
    const toggle = document.getElementById('toggle');

    if (toggle.value === 'Credits') {
        // Replace lyrics with credits
        toggle.value = 'Lyrics';
        loadCredits('leftCol', piece.leftCredits);
        loadCredits('rightCol', piece.rightCredits);
        applyOptions(piece.options, true); // Set to default
    } else {
        // Replace credits with lyrics
        toggle.value = 'Credits';
        loadLyrics('leftCol', piece.leftLyrics);
        loadLyrics('rightCol', piece.rightLyrics);
        applyOptions(piece.options, false); // Set to optional height or default
    }

}