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
    constructor(filename, title, leftCol, rightCol) {
        this.mp3 = `mp3/${filename}.mp3`;
        this.ogg = `ogg/${filename}.ogg`;
        this.title = title;
        this.leftCol = leftCol;
        this.rightCol = rightCol;
    }
}

const volumes = [
    new Volume('vol1', 'Ingrid Hansen Smythe and Los Haward', 16, [
        new Piece("Who's Who", "Who's Who (Vol. 1)", "<p>You are not the flower.<br>Neither red nor blue nor green.<br>Not the sugar.<br>Not the arrow.</p><p>You are not the notes,<br>and you are not the top of the mountain.<br>You are not the notes,<br>and you are not the top of the mountain.</p>", "<p>You are not the flower, you are the perfume.<br>Neither red nor blue nor green, you are the colour scheme.<br>Not the sugar, but its sweetness.<br>Not the arrow, but its flight. </p><p>You are not the notes, you are the music.<br>And you are not the top of the mountain:<br>You are the act of arriving at the summit.</p><p>Not the sugar, but its sweetness.<br>Not the arrow, but its flight.</p>"),
        new Piece("NotMuchToAsk", "Not Much to Ask (Vol. 1)", "<p>There’s a message for me<br>in the sound of the rain<br>falling through the leaves of the trees.</p><p>It says to me that on the other side<br>of death’s dark doorway,<br>There is a garden made of light.</p>", "<p>And I can enter if I take off my shoes<br>Take off my self and my history.<br>I can enter if I take off my shoes<br>Take off my self and my history.</p><p>Well it’s not much to ask<br>not much to ask<br>not much to ask<br>it seems to me…</p>"),
        new Piece("Ophelia", "Ophelia (Vol. 1)", "<p>Think of Ophelia<br>drowned in the brook,<br>through the brown clouded water<br>her pale form descending.</p><p>It’s a high price to pay<br>That she had to die,<br>To make such a beautiful<br>Mandala for the eye.</p><p>Imagine the moment<br>caught in a snapshot,<br>A speck of dust captured<br>in a column of sunlight;<br>the water turned<br>to a transparent gel<br>in which she is held<br>like a feather<br>in a crystal ball.</p><p>That great mane of hair,<br>like a silent explosion<br>is laid on the surface,<br>and the shape of her cape<br>is splayed like a dancer’s fan,</p>", "<p>The folds and pleats chiseled<br>with infinite patience and care.</p><p>Well, her lungs may be bursting,<br>but her clothes look fantastic!<br>Between her dress and her distress<br>there’s a gap that can’t be fathomed or filled in.</p><p>Sweet Ophelia, gentle nymph.<br>Her tragedy is on display<br>but she’ll never know how well it showed.<br>She never got to see the play.</p><p>Think of Ophelia<br>drowned in the brook,<br>through the brown clouded water<br>her pale form descending.</p><p>Sweet Ophelia, gentle nymph.<br>Her tragedy is on display<br>but she’ll never know how well it showed.<br>She never got to see the play.</p>"),
        new Piece("Falling Out", "Falling Out (Vol. 1)", "<p>Air is too ethereal.<br>I need the resistancy of water<br>to let me know I’m here<br>before I drown.</p><p>Air is too ethereal.<br>I need a cloud to rest in,<br>before I sink right through<br>to the other side.</p><p><b>Chorus</b><br>Every golden flame<br>has an aching blue heart.<br>Every golden flame<br>Wants to get back home.</p><p>Air is too ethereal.<br>I need something beneath me,<br>I need someone to catch me<br>when I fall.</p>", "Air is too ethereal.<br>I need somebody below me.<br>I’m falling through<br>To the other side.</p><p><b>Chorus</b></p><p>Earth is too material.<br>Oh Mother Earth, you broke my fall.<br>Receive this body broken<br>Receive this body broken<br>on your law.</p><p><b>Chorus</b></p>"),
        new Piece("Ariadne's Thread", "Ariadne's Thread (Vol. 1)", "<p>Dogs and cats walk ’round themselves<br>before they spiral down to sleep,<br>like a hand slowly stirring the obscure depths<br>of the deep green genetic whirlpool.<br>Hands linked up through the generations<br>weave daisy chains through evolution,<br>but who can read the story that they tell?<br>Oh hands linked up through the generations<br>weave daisy chains through evolution,<br>but who can read the story that they tell?</p><p><b>Chorus</b><br>And I remember the hands<br>that sowed the seeds<br>and nursed the child<br>but swung the scythe;<br>and felled the oak<br>that built the frames,<br>but held the spade <br>and dug the earth<br>and cast the dirt,<br> that rattled loud<br>on the coffin lid.</p>", "<p>I saw the wind in the fire<br>make the flames bend low,<br>but I could not read<br>their racing tongues,<br>and I saw the sea<br>shape semi-circles<br> in the sand,<br>but I could not notch<br>my arrow to that bow.</p><p>From a furled up flag<br>to a torn up rag,<br>the life of a leaf<br>keeps time to a rhythm<br>that follows a tune <br>well past my ear,<br>and far beyond my vision.</p><p><b>Chorus</b></p>"),
        new Piece("Ariel's Song", "Ariel's Song (Vol. 1)", "<p style=\"color:DarkGrey\">This azure vault,<br>these curlèd clouds,<br>the turquoise sea below;<br>the engrainèd sands, <br>the lace fringed surf;<br> of these enchanted things <br>I must let go.</p><p>If it were not for the fear of pain<br>the fierceness of the fire’s flame<br>might give me some release.</p><p>Or if it were not for the fear<br>of a breathless suffocation<br>the watery waves might wash it all away,</p><p>Both purify<br>Both simplify<br>Both take away the weight.<br>Both purify<br>Both simplify<br>Both take away the weight.</p>", "<p>If it were not for this mortal frame<br>then I might be all right.<br>Without a body,<br>who would have a problem?</p><p>And so I will not feel the fear<br>of falling from the height;<br>my soul will sing as I take wing<br>and fly into the light.</p><p>Both purify<br>Both simplify<br>Both take away the weight.<br>Both purify<br>Both simplify<br>Both take away the weight.</p>"),
        new Piece("Culture", "Culture (Vol. 1)", "<p>There’s a lot going on in London town.<br>Exhibitions, shows, concerts and stuff.<br>“The multicultural centre of the world,” some say, <br>And it’s only an hour away.</p><p>But I like to go for a walk with my dog in the rain.<br>I like to go for a walk with my dog in the rain.</p><p>Beyond the outskirts of this village<br>into what’s left of the old English woodland<br>and find some old log to sit down on,<br>where I can listen to the sound of the rain<br>falling through the branches of the trees<br>onto the sodden, leaf-strewn ground,<br>and the hood of my old coat.<br>And there I like to sit and see,<br>and sometimes I just sit<br>until I’ve lost<br>all sense of time and place.</p>", "<p>And I don’t care<br>what’s going on in London,<br>And I don’t want<br>to go downtown.<br>As far as I’m concerned<br>you can take your culture<br>and shove it up the back end<br>of your broken civilization.<br>The sound of the rain<br>falling on the leaves<br>is good enough for me.</p><p>But I like to go for a walk with my dog.</p>"),
        new Piece("Lost Lyric", "Lost Lyric (Vol. 1)", "<p>You were just a stepping-stone<br>on a river I had to cross<br>to get to a bigger poem<br>that lay on the other side.</p><p>So you got left behind.</p><p>No one else around here<br>knows anything about you,<br>and they never will.<br>For since I cannot write you,<br>so then they cannot read you.<br>But that’s all right.</p><p>And I cannot find my way back now<br>to wherever it was I left you.<br>And whatever it was you might have meant,<br>you have a different meaning now.</p><p>Image of pure possibility,<br>your potential inexhaustible,<br>your existence inexplicable,<br>your issues unresolvable,<br>your riddle now insoluble,<br>your magic inexhaustible.</p>", "<p>You think that I’ve forgotten you<br>But that just isn’t so.<br>Often times I’ve thought of you<br>reflecting the dappled light<br>under the shadow of the river bank,<br>my lost lyric.</p><p>In a far off, forgotten country<br>you gleam like a distant star.</p><p>Pale and forlorn<br>and perfectly formed.</p><p>The heart in your stone<br>inscrutable, <br>and your song<br>Unparaphraseable.</p><p>In the mute abandoned eloquence,<br>of the silence of your soul,<br>you have a deeper beauty<br>than any I might lend you anyhow.</p>"),
        new Piece("Education", "Education (Vol. 1)", "<p><b>Verse 1</b></p><p>I have heard<br>those big guitar chords in the sky,<br>and I have watched <br>the clouds make maps<br>across that field of light.<br>And I have stood upon the mountain top<br>and seen the land and sky<br>merge into one.<br>And I have seen the sunset<br>lay down its glittering path of light<br>from the horizon to the shore.</p><p>And from all of this have I learned.<br>And from all of this have I learned.<br>And from all of this have I learned.</p><p><b>Verse 2</b></p><p>And I have gazed<br>into the depths of rivers <br>for hours on end,<br>And I have watched the water <br>breaking over stones<br>on many a summer afternoon,</p>", "<p>And I have looked down <br>through tunnels of trees<br>into the pools of pale green light<br>that shine at their far end.</p><p>And from all of this have I learned.<br>And from all of this have I learned.<br>And from all of this have I learned…</p><p><b>Chorus</b><br>Absolutely nothing.<br>Absolutely nothing.<br>Absolutely nothing.</p><p><b>Verse 1</b><br> <br><b>Chorus</b></p><p>And sometimes<br>when it was really good,<br>I unlearned almost everything I knew.</p>"),
        new Piece("Inside Story", "Inside Story (Vol. 1)", "<p>\"Don’t open your eyes.<br>I’m not out there.<br>I’m in here.<br>And don’t wake up.<br>It’s easier for us to merge<br>if you stay asleep for a while.</p><p>You may feel a gentle rhythm<br>in the distance<br>like a tide rising<br>and falling.<br>That’s you, breathing.<br>And me<br>talking.<br>That’s the rhythm<br>of this verse.</p><p>It’s good in here.<br>Now you are free<br>from the clamour <br>of your body<br>and the world<br>which always wants<br>something out of you.<br>And all the things that do divide us<br>in the daytime.</p><p>They say that God is a circle;<br>the centre everywhere,<br>the circumference nowhere.<br>It’s a bit like that in here.<br>There is no separation anymore.<br>There are no walls in here<br>and all the bridges have been crossed.</p>", "<p>Although there is no time now<br>time will soon return.<br>The busy world will come knocking<br>at your door to wake you up. <br>You may not remember this.<br>Don’t fret for that.<br>It doesn’t matter.<br>It happened and nothing <br>that happens can ever <br>unhappen <br>and<br>it makes some kind of difference.</p><p>Can you hear them now<br>knocking on your door?<br>You go. I’ll stay.<br>For all I know<br>I may be dead out there.<br>For all I know<br>that may be why I’m here.</p><p>Either way,<br>you’ll find me here the next time.<br>Don’t be afraid,<br>You cannot lose me,<br>and you won’t need<br>a pathway or a key.\”</p><p>***</p><p>A young man wrote that poem<br>and an old man finished it.<br>And the girl <br>he wrote it for<br>was old when she put it down.<br>But while they read it both together<br>they had no age at all.</p>"),
        new Piece("Life Happened", "Life Happened (Vol. 1)", "<p><b>Life Happened</b></p><p>but I must have been looking in the wrong direction.<br>And it was obvious enough.<br>There was your face<br>for a start,<br>that’s the main thing;<br>but there were also<br>rivers and clouds<br>and mountains, moving in a big sky.<br>And all of it happening<br>right in front of me<br>presumably,<br>but it was like I didn’t see it,<br>because I was waiting for it to happen.<br>Leaning forward, gazing expectantly<br>into the future,<br>waiting for it to come up <br>over the hillside;<br>then, suddenly,<br>I saw it behind me!<br>Somehow, <br>for all my vigilance,<br>it had got past me,<br>and now it is the past;<br>a place I can’t get back to.</p>", "<p>It’s a picture of you<br>leaning out of a window<br>on a houseboat<br>on the river<br>waving at me,<br>and the children too<br>also waving,<br>giggling excitedly,<br>calling to me,<br>and the dog barking<br>and wagging its tail,<br>and me<br>standing there<br>on the other side of the river,<br>looking back,<br>watching you get smaller<br>and further and further away.<br>Going downriver, leaving me feeling<br>stupid and tricked,<br>outmanoeuvred and lost,<br>and guilty and sad.<br>Just too sad<br>for words.</p>"),
        new Piece("The Poet At Sixty", "The Poet At Sixty (Vol. 1)", "<p>Sometimes there’s still<br>a sense of possibility;<br>A flash of blue sky<br>through a crack in the doorway;<br>But most of the time<br>it’s grim and its grey<br>and I turn it away.</p>", "<p>Pull my hat down,<br>Pull my collar up<br>and push my way<br>into the future.<br>Like someone working their way<br>through a difficult day,<br>and really looking forward<br>to getting home.</p>"),
        new Piece("The Future", "The Future (Vol. 1)", "<p>I’m looking forward<br>to dementia,<br>I can’t wait<br>to lose my mind.<br>I’m looking forward<br>to dementia,<br>I can’t wait<br>to lose my mind.<br>I can’t wait to lose my mind.</p><p>I’m looking forward<br>to looking backwards,<br>and no longer being able,<br>no longer being able,<br>Looking forward to looking backwards<br>and no longer being able<br>to remember…</p>", "<p><b>Repeat</b></p><p>I’m looking forward<br>to looking backwards,<br>and no longer being able,<br>no longer being able,<br>Looking forward to looking backwards<br>and  no longer being able<br>to remember<br> all this shit.</p><p>I can’t wait to lose my mind.<br>I hope I don’t find it.<br>I’d quite like to go out of it.<br>It’s being stuck inside it all the time<br>that I could do without.</p>"),
        new Piece("If It Were Not So", "If It Were Not So (Vol. 1)", "<p>If I were not so subject to sensation<br>I might have found a way to free my mind.<br>And if I were not always dragged and driven<br>through sequences of stupid situations,<br>I might have found the time to work it out.<br>If my head was not so burdened <br>with useless information,<br>and my nervous system wired and rigged<br>with desire and fear and apprehension;<br>if my thinking was not clogged and blocked<br>by fixed ideas and premature conclusions,<br>I might have found a way to say what’s true.</p>", "<p>And if it were not for the fact<br>that I am just the way I am,<br>I might have found a way to get to you.</p>"),
        new Piece("Ephemera", "Ephemera (Vol. 1)", "<p>Nothing happening.<br>It’s a dull, grey day,<br>the clouds congealed<br>in a condensed, occluded sky.</p><p>Then the faintest flush of light<br>trembles through the room;<br>a passing glance,<br>a glancing pass,<br>the palest pulse,<br>scarcely there;<br>then a glare,<br>which strengthens<br>and hardens<br>and the shape of the window frame<br>like a crucifix<br>is thrown onto the wall;<br>and four big rectangles of light<br>achieve a momentary stability;<br>blazingly,<br>eye-blindingly bright.<br>You can almost hear the energy sing,<br> as tight as the string on a violin.</p><p>Then there’s a pause,<br>like an intake of breath;<br>a dip in the beam,<br>shadows flicker and quiver;<br>There’s a sense of energy<br>being gathered together<br>and then a further power surge.</p><p>Radiance <br>seethes at the edges;<br>the full blush <br>of the sudden sunlight<br>blossoms,<br>and the cupped hands<br>of the present moment<br>fill up, crest and overflow.</p>", "<p>A fountain of light<br>pours down the walls<br>with opulent abundance.<br>From fruit to flower<br>to total fulfillment<br>in one fantastic flash;<br>from poverty to plenitude<br>in about five seconds flat.</p><p>The reflected windows<br>hold it for a moment,<br>then suddenly waver;<br>they stagger<br>and buckle;<br>cling, briefly, <br>then give up the struggle;<br>they lapse and fade<br>and the shapes bleep out<br>and the light dies out<br>and the wall is just <br>like it was before,<br>like nothing happened,<br>which it nearly didn’t<br>in more ways than one<br>because I only just saw it in time.</p><p>The sun came out for a moment,<br>and then it went back in again.</p><p>So preoccupied with this and that<br>I hardly even registered the fact <br>and realized it only<br>when it was all but gone.</p><p>And I just told you<br>something important<br>which you won’t remember<br>for long.</p>"),
        new Piece("More Monsters", "More Monsters (Vol. 1)", "<p>I can feel them.<br>I can smell them coming.<br>I can hear them moving quietly through the bracken.<br>I can feel them.<br>I can hear them coming.<br>On the far side of the river,<br>Their breath clouds the frosted air.<br>Their breath comes out in steam.</p><p>Men from the Department of Employment.<br>Men from the Social Insecurity Services.<br>Men with great big clubs in their hands,<br>And foaming dogs on leads,<br>And at their head a monster on a chain.</p>", "<p>I can feel them.<br>I can smell them coming.<br>I can hear them moving quietly through the bracken.<br>They’re waiting.<br>They’re waiting so patiently.<br>They’re waiting with such certainty,<br>For my boat to drift across to them,<br>To take me prisoner once again.<br>On the far side of the river,<br>They wait for me<br> to fail.</p>"),
        new Piece("Summer Day In The Tuileries", "Summer Day In The Tuileries (Vol. 1)", "<p>The waves were leaving through the trees,<br>waving and weaving through the leafing trees,<br>in the dapple-dabbed park of the Tuileries.</p><p>Arrow forked light blades<br>hatching up the patches,<br>wind blown light <br>unshadowing the branches.</p><p>Leaves sliced and spliced<br>in the tessellated light,<br>speared, and striped,<br>with tiger bars of sunlight.</p>", "<p>Through kaleidoscopes of light spokes<br>round ripples run,<br>spun out from a deep green throat.</p><p>And she is happy just to be<br>one bright spinning spoke<br>on the wheel of the circle drawn sunlight.</p><p>Through kaleidoscopes of light spokes<br>round ripples run,<br>spun out from a deep green throat.</p><p>And she is happy just to be<br>one bright spinning spoke<br>on the wheel of the circle drawn sunlight.</p>"),
        new Piece("Exile", "Exile (Vol. 1)", "<p>Somewhere deep inside of me<br>a foundation stone is broken.<br>When I reach out like a child in the dark<br>she’s no longer there beside me.<br>Sometimes I think, this can’t be real,<br>and I must wake up.<br>And I feel myself slowly emerge<br>from the sticky glue of a deep sleep;<br>suddenly squinting against the glare<br>of the green sunshine<br>filtering through the leaves above me,<br>where I’m lying low on the forest floor<br>under a blanket beneath the big oak tree.<br>I can smell the smoke of the early morning camp-fires,<br>and I can hear the sound of the women talking<br>and the children laughing<br>merging with the sound of the shallow stream<br>telling its beads through England’s ancient woodland.</p>", "<p>Everything new and starting again<br>and there’s a flash in my heart<br>like a bird’s wings beating <br>against the surface of the lake<br>as the swan takes off,<br>and the air sparks <br>and glitters with liquid brilliance.</p><p>And so it is a bitter thing<br>to have to wake up once again<br>and find myself as I really am;<br>a refugee in a foreign land<br>walking alone down a broken road<br>with no direction home.</p>"),
        new Piece("Valediction", "Valediction (Vol. 1)", "<p>We’re down in the valley looking up at the mountains.<br>There’s a breeze up there with my name written on it.<br>And right now we’re talking face to face,<br>but I’m gonna turn away from you,<br>I’m gonna turn away from you,<br>and I’m gonna walk,<br>I’m gonna walk,<br>I’m gonna walk.</p><p>Through the big gates of the picture frame,<br>across the cornfield Van Gogh painted<br>once upon a Summertime,<br>to those blue hills in the distance.<br>And I’m gonna follow the music of the little stream,<br>up into the mountains, past the pine trees,<br>and the bushes with the red berries,<br>way above the timber line,<br>and all the way to the top of the ridges.</p>", "<p>And I’m gonna raise my arms above my head,<br>like wings, like wings, to the sky.<br>And I shall wait, I shall wait,<br>I shall wait, I shall wait.</p><p>And I shall wait for that wind to carry me home<br>like a bird, like a bird that at last can fly.<br>And I shall wait for that wind to carry me home<br>and I won’t turn around<br>to wave goodbye,<br>goodbye,<br>goodbye.</p><p>And I won’t look back,<br>not even once.</p><p>We’re down in the valley looking up at the mountains.<br>There’s a breeze up there with my name written on it.</p>"),
        new Piece("Saved - Healing", "Saved - Healing (Vol. 1)", "<p><b>Saved</b></p><p>You put my salvation<br>in the palm of my hand.<br>And just when all my rivers<br>had run dry.<br>So gently, so simply,<br>I thought it couldn’t be real.<br>I thought<br>I must have made it up.<br>But when I dared to look again<br>I saw that it was well beyond my art.</p><p>You were just too good to be untrue.<br>You were just too good to be untrue.<br>You were just too good to be untrue.</p><p>I love you.</p>", "<p><b>Healing</b></p><p>I dipped my face into a bowl of light<br>and lifting up, <br>my head was gloved<br>and wore the hood of radiance.<br>When I wound it off like bandages,<br>I had new skin, and my hair<br>sparkled with starlight.</p>")
    ]),
    new Volume('vol2', 'Los Haward', 1, [
        new Piece("Church Service", "Church Service (Vol. 2)", "<p>At the exhausted end <br>of a hot humid day<br>up in the hills in the Lake District,<br>arriving back in the little village,<br>even the dog was tired and overheated.</p><p>We found the tiny Gothic church<br>with its tiny little churchyard,<br>and its monumental tombstones.<br>Immaculately beautiful somehow.</p><p>I stepped through the low arched doorway<br>and was suddenly saturated<br>in silence and cold air.<br>Such a purifying shock,<br> a severe but welcome chill;<br>the marble floor<br> satisfyingly hard<br>after the bendy bumpy grass <br>and the stony tracks before.</p>", "<p>As I walked down the aisle<br>I could feel the sweat<br> evaporating off of my skin,<br>and I realized<br>that the silence and the cold<br>and the empty well of space<br>could not be told apart;<br>they were like three expressions<br>of the very same idea.</p><p>I went to a row near the front, <br>and sat down at a pew;<br>picked a kneeling mat up from the floor<br>and placed it on the wooden rail <br>of the pew in front of me;<br>put my elbows on my knees<br>and leaned my body forward;<br>laid my head upon the cushion<br>and fell instantly asleep.</p><p>Feeling my breathing far away<br>like the swell of a distant wave.</p>"),
        new Piece("Advice to Other Writers", "Advice to Other Writers (Vol. 2)", "<p>Everything<br>that has ever been said<br>is but a tiny fraction <br>of everything that might have been said;<br>and everything that might have been said<br>is but a tiny fraction<br>of everything that could have been said;<br>and everything that could have been said<br>is but a tiny fraction<br>of all that there is to say,<br> most of which will never be said<br>since most things are unsayable.</p>", "<p>And further to the same<br>everything that has ever been said<br>should not have been said<br>in the first place;<br>and, more than that<br>anything that has ever been said<br>can never be unsaid<br>once it’s been said.<br>Therefore<br>don’t say it.<br>just zip it, <br>just button it,<br>just shut the fuck up.</p>")
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
 * Given a piece and start time in seconds, load it into the player, update the page title, and load the lyrics.
 * @param {object} piece - containing mp3, ogg, title, leftCol, and rightCol elements.
 * @param {number} startAt - the second at which to start the player. Typcially 0.
 */
function loadPiece(piece, startAt) {
   // Load piece title - this element should have been added during init
   const title = document.getElementById("title");
   title.innerHTML = piece.title;

   // Load piece into player
   mp3 = document.getElementById("audioMP3");
   ogg = document.getElementById("audioOGG");
   mp3.src = piece.mp3;
   ogg.src = piece.ogg;
   player = document.getElementById("player");
   player.pause(); // Stop playing
   player.currentTime = startAt;
   player.load(); // Load new sources
   // Do not autoplay: player.play();

   // Load lyrics into columns
   const leftCol = document.getElementById("leftCol");
   leftCol.innerHTML = piece.leftCol;
   const rightCol = document.getElementById("rightCol");
   rightCol.innerHTML = piece.rightCol;
}

/**
 * Decrement the current selectedPiece and load the previous piece. Called from volume1.html or volume2.html.
 */
function prev(volIndex) {
    const volume = volumes[volIndex];
    volume.selectedPiece--;
    if (volume.selectedPiece < 0) {
        // Wrap around
        volume.selectedPiece = volume.pieces.length - 1;
    }
    // 'latr' is the hidden value in the form holding the selected piece
    document.getElementById('latr').value = volume.selectedPiece;
    document.getElementById("playerForm").submit();
}

/**
 * Increment the current selectedPiece and load the next piece.
 */
function next(volIndex) {
    const volume = volumes[volIndex];
    volume.selectedPiece++;
    if (volume.selectedPiece >= volume.pieces.length) {
        // Wrap around
        volume.selectedPiece = 0;
    }
    document.getElementById('latr').value = volume.selectedPiece;
    document.getElementById("playerForm").submit();
}

/**
 * Update the audio source from a query parameter, stop, replace audio source. Called from volume1.html or volume2.html
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
