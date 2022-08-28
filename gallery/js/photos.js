let currentPhoto = 0;

class Photo {
    constructor(filename, description) {
        this.index = currentPhoto;
        this.filename = filename;
        this.description = description;
        currentPhoto++;
    }
    getThumbnail() {
        const photoImg = document.createElement('img');
        photoImg.src = `thumbs/${this.filename}`;
        photoImg.className = 'thumb';
        const photoLink = document.createElement('a');
        photoLink.setAttribute('href', `photo.html?ph=${this.index}`);
        photoLink.appendChild(photoImg);
        return photoLink;
    }
    getSrc() {
        return `photos/${this.filename}`;
    }
}

const photos = [
    new Photo("Muriel%20and%20Helge%20wedding.jpg", "<I>My</I> journey begins with my <I>parents&rsquo;</I> journey. Here is their wedding photo. I am also in the photo but am only an egg so hard to spot. My mother kept me hidden behind a bouquet of flowers for many years."),
    new Photo("Steven%20reading%20paper.jpg", "My parents experimented on another child before they had me. This is my brother, who at the age of 26 months was already reading the newspaper &ndash; in Farsi."),
    new Photo("Steven%20and%20karate%20bear.jpg", "Imagine my brother&rsquo;s surprise when this bear karate-chopped the cake, tied up our parents, and stole our valuables."),
    new Photo("Steven%20-%20rough%20night.jpg", "My brother, after a rough night. By six months the booze had finally caught up with him, but after a stint in Anklebiters Anonymous he sobered up, and by eight months he was a new baby."),
    new Photo("Steven%20puzzling%20over%20new%20baby.jpg", "Here I am no longer an egg but a shapeless lump swathed in a pink knitted pantsuit. My brother looks on thinking, &ldquo;What is it?&rdquo; &ndash; a question he asks to this day."),
    new Photo("I%20can%20fly!.jpg", "My brother told me I could fly and, like a bloody fool, I believed him. &ldquo;I&rsquo;m flying! No, wait. Dammit! I know I can do this!&rdquo;"),
    new Photo("Ingrid's%20Ethel%20Merman%20impression.jpg", "I was a precocious baby. Here I am holding a pretend mic and doing my Ethel Merman impression."),
    new Photo("I'm%20peeing%20on%20you.jpg", "&ldquo;I&rsquo;m peeing right now you know. Yes, it&rsquo;s deliberate. Just another part of my plan.&rdquo;"),
    new Photo("Clairvoyant%20Baby%20Ingrid.jpg", "It was frustrating being a clairvoyant baby. &ldquo;I see all, but cannot speak.&rdquo;"),
    new Photo("Ingrid%20first%20birthday.jpg", "My first birthday. Later that night I woke up and found that the clown on the chair had disappeared. I checked under my little bed – one side, then the other side – and then, suddenly, it was strangling me with its long stretchy arm and I had to beat the living daylights out of it, to the accompaniment of a scary orchestra, in order to survive. Honestly, it felt like I was in a horror movie!"),
    new Photo("Ingrid%20has%20a%20vision.jpg", "I was an intensely spiritual child. Here I am having my first vision of Mr. Christie.  "),
    new Photo("Ingrid%20plays%20Moon%20River.jpg", "Here I am at 22 months playing Moon River. I was exactly like Mozart that way, in the sense that we were both 22 months."),
    new Photo("Little%20Klondike%20Queen.jpg", "My reign as the Little Klondike Queen was turbulent, especially when my cousin Mary plotted to usurp me and I had her beheaded."),
    new Photo("Steven%20and%20Ingrid%20bubble%20bath.jpg", "I&rsquo;m getting a message in my earpiece. It&rsquo;s from the Bubble People. They&rsquo;re coming to reclaim their own."),
    new Photo("Mom%20on%20ice.jpg", "Admittedly, I was a nervous child. I don&rsquo;t know why. I mean, look at this scene. What could possibly go wrong?"),
    new Photo("Ingrid%20with%20hockey%20stick.jpg", "&ldquo;My stick handling is atrocious! And I&rsquo;m a girl! Alas, my dreams of subduing my opponents in the NHL are turning to dust. Dust I tell you!&rdquo;"),
    new Photo("Edmonton%20moonscape.jpg", "After trees were outlawed in the 60s, stray dogs had nowhere to pee except on innocent children planted by the side of the road.  "),
    new Photo("Understanding%20Poincare.jpg", "This was one of those &ldquo;Aha!&rdquo; moments when, as our father lectured us, we finally understood the proof of the Poincaré conjecture."),
    new Photo("Paper%20mache%20fireplace.jpg", "We didn&rsquo;t have a fireplace when I grew up so my dad made us one out of paper m&acirc;ch&eacute; blocks. It was really fun for the five minutes before it went up in flames."),
    new Photo("Steven%20and%20Ingrid%20Xmas%20morning.jpg", "Christmas, 1965. My dad built this table and chairs for us and they are still in use to this day. (He had learned from the infamous paper m&acirc;ch&eacute; fireplace incident.) As you can see, I got a huge amount of stuff whereas my brother appears to have gotten a small can of corn, a can of spinach perhaps, a yellow purse, a game, and something to punch. "),
    new Photo("Dancing%20around%20the%20maypole.jpg", "Edmonton, circa 1965. Another primitive fertility ritual. The children dance around the maypole, after which a kitten is badly frightened and a virgin is thrown into Blackmud creek."),
    new Photo("Ingrid%20pulling%20a%20face.jpg", "My mom told me if I kept doing that my face would stay that way. Oh God, oh God – how I wish I&rsquo;d listened."),
    new Photo("Xmas%20Doll%20and%20Assault%20Rifle.jpg", "Christmas, 1966. I got a doll that cried real tears. My brother got a Johnny Seven assault rifle that fired real bullets. We don&rsquo;t speak of it often but, when we do, we simply refer to the carnage that followed as The Christmas Morning Massacre, and say no more."),
    new Photo("Ingrid%20and%20Poohsee.jpg", "This is me and our cat Poohsee. Poohsee used to like to be put in a cloth bag with a string cinched very tightly around her neck and go for carriage rides with my other hostages."),
    new Photo("Dolly%20Darling.jpg", "&ldquo;Someday all the Dolly Darlings will be mine and I will rule the empire! AHAHAHA!&rdquo;"),
    new Photo("Clown%20and%20Pirate.jpg", "Back in the 1960s we had to wear uniforms to school. Sadly I was also forced to wear a dunce cap. As you can see my brother rebelled and became a biker-pirate, as was the custom."),
    new Photo("Christmas%201967.jpg", "Christmas 1967. Note the huge amount of tinsel on the tree. Our cat Poohsee used to spend days dining on tinsel, and then days trying to outrun it as it oozed festively out her back end, like streamers on the handlebars of a bike."),
    new Photo("Boat%20people.jpg", "Our family was among the original &ldquo;boat people&rdquo; who left their homelands in search of a better life. This is a picture of us on board, emigrating from Edmonton to Calgary."),
    new Photo("Cowboys.jpg", "Our family decided to become cowboys. This was a short-lived phase however, and soon we were back to being just plain old astronauts."),
    new Photo("Ingrid%20and%20Mom%201st%20day%20grade%20one.jpg", "This is me and my mom on my first day of grade one. My mother is dressed gloriously in the stylish floral pantsuit she sewed herself. I am wearing a tie, signifying the serious business of my budding academic life and also gender confusion."),
    new Photo("Ingrid%20and%20Steven.jpg", "I feel that, only moments later, something was killed."),
    new Photo("Ingrid%20and%20Fleecy.jpg", "Both Fleecy and I had to chew on trees to grind down our buckteeth, or risk chewing our own heads off."),
    new Photo("Ingrid%20staring%20into%20sun.jpg", "&ldquo;Look right into the sun! Yes, directly into it. Are your eyes burning? Good! Okay, now smile!&rdquo;"),
    new Photo("Snowman.jpg", "It was wrong of us to imprison our halfwit brother in this goggley-eyed snowman. We see that now."),
    new Photo("Sand%20castle.jpg", "As a child I was amazingly artistically gifted. This sandcastle – a miniature version of Schloss Neuschwanstein – is merely a shaving from the master&rsquo;s bench."),
    new Photo("Ingrid%20at%20stampede%20parade.jpg", "In the 70s, there were huge numbers of communists infiltrating Canada, and we school children worked undercover as spies for the government. Here I am pretending not to see the commy Russian lady two seats away, but I bagged her later that day in the private, unauthorized zone. Damned pinkos."),
    new Photo("Black%20Barbie.jpg", "I fought long and hard but, finally, my black Barbies were granted full civil rights equal to my white Barbies. No longer would Christie and Brad be forced to enter the fashion show through a different door or ride in the back of the camper van. (Sadly, my gay Barbies would have to wait a long time for their emancipation, and poor Ken and Todd were forced to keep their forbidden love a secret, even after Todd died of AIDS in &rsquo;86.)   "),
    new Photo("Ingrid%20white%20coat.jpg", "Even in the 1970s our family were rabid environmentalists who believed in never wasting any part of the polar bear."),
    new Photo("Pippi%20Longstocking.jpg", "Like Brooke Shields, even as a young teen I exuded a certain sexuality and just knew instinctively how to work a runway, so I wasn&rsquo;t surprised when Ford Models of New York begged me to work for them. Here I&rsquo;m wearing the Versace Pippi line with cheeky make-up and accessories."),
    new Photo("Steven%20and%20Ingrid%20Nofeet.jpg", "This was the last word in fashion in 1976. Note how my kangaroo jacket hangs demurely off one shoulder, giving only a hint of the Mickey Mouse t-shirt hidden beneath. My thumbs are hooked jauntily in the pockets of my Big Blue jeans, which effectively conceal the North Star runners, or possibly, wheels, beneath. (As you can see, my brother looks irritated to be standing next to me, undoubtedly because he was jealous of my look, and who can blame him. He looks ridiculous.)"),
    new Photo("Ingrid%20at%20Ocean%20Shores.jpg", "This photo was taken the day Elvis died (true story!). Here I am contemplating the Hegelian concept of pure Being as opposed to Heidegger&rsquo;s &ldquo;Being-in-the-world&rdquo; and Sartre&rsquo;s being &ldquo;In-itself&rdquo; – all in relation to Presley&rsquo;s powerful Hound Dog hypothesis."),
    new Photo("Dave%20and%20Matyl.jpg", "After I moved out to go to university I got two cats, named Dave and Matyl. This is the best shot I ever took of them &ndash; or have ever taken of anyone. "),
    new Photo("Ingrid%20graduation%20photo.jpg", "Here is my graduation photo from the University of Calgary music department. Unfortunately I was never once asked to play Moon River, which I had been practising since I was a baby. Instead they made me play Bach and this rather brought my mark down."),
    new Photo("Ingrid%20posing%20in%20window.jpg", "This is me on holiday, posing in the window of a Swiss hotel just before tumbling backward three stories and landing in a pile of francophones."),
    new Photo("Ingrid%20not%20yodelling%20in%20Alps.jpg", "This is me not yodelling in the alps."),
    new Photo("Monkey%20fishing.jpg", "Steve Smythe began earnestly courting me in 1988. When he discovered that I was a primate, he and a friend hatched a plan to lure me into marriage with a banana. It worked."),
    new Photo("Wedding%20photo.jpg", "I married a great composer, naval lieutenant, computer programmer, and my best friend. It was only too bad I was arrested for marrying four men until the confusion was cleared up. (I was carted off in the back of a police van and note that, even several hours later when this picture was taken, my sleeves are still puffed up with rage.)"),
    new Photo("Steve%20at%20Byron%20Bay.jpg", "After getting married, Steve and I backpacked around the world, living on $40/day. Here is Steve at Byron Bay in Australia looking like a shirtless Jesus on a beach holiday in happier, pre-crucifixion days."),
    new Photo("Me%20on%20Coronation%20Street.jpg", "Many of you may remember my short-lived role on Coronation Street as Felicity Fleck and the love triangle that ensued between Ken, Mike, and myself. I still have the letters of condolence sent to me by hundreds of viewers after I was shot dead by Deirdre Barlow just outside the Duckworth&rsquo;s."),
    new Photo("Steve%20with%20baby%20Sappho.jpg", "A few years after we got married I found that my biological clock was not just ticking, but about to explode like a bomb. I told Steve, &ldquo;We&rsquo;ll just have a little baby. You&rsquo;ll hardly notice it.&rdquo; This was a mistake and when our daughter was born everybody noticed her, a situation that continues to this day. Here is a photo of Steve left holding the baby. I had already scarpered off and was probably in a hot tub with a tall drink."),
    new Photo("Sappho%20in%20doll%20carriage.jpg", "Here is my baby daughter in the very doll carriage I used to cart Poohsee around in, in her beloved cloth bag."),
    new Photo("Putting%20stickers%20on%20the%20baby.jpg", "A couple of years later I had to decide whether to work toward getting a PhD or work toward getting another baby and, admittedly, I chose the quicker option. Nine months later our son was born in a manger. Here our daughter solemnly performs the sacred ritual of The Stickers."),
    new Photo("Sappho%20moves%20into%20her%20own%20place.jpg", "Our daughter is very independent and moved into her own place at the age of four. She also made the important decision to become a dinosaur."),
    new Photo("Rigel%20and%20Steve%20in%20uniform.jpg", "Steve was an officer in the naval reserve for several years. Here he is with his commanding officer."),
    new Photo("Ingrid%20at%20Maple%20Ridge%20Elementary.jpg", "Here I am standing outside my elementary school after my old principal finally awarded me with my honorary doctorate. "),
    new Photo("Abanazer.jpg", "We were all surprised when my husband gave up his IT job and became the Defence Against the Dark Arts instructor at Hogwarts."),
    new Photo("IHSmythe.jpg", "Glamour shot. I look like this all the time. No, really. Seriously."),
    new Photo("Ingrid%20leaning%20on%20car.jpg", "Not my car. We sold the family car years ago as a social experiment. We walk and bike everywhere. Please, someone, help."),
    new Photo("SnowyBike.jpg", "In Canada we consider this ideal biking weather."),
    new Photo("First%20signing.jpg", "The author turned merchant, trying to prise a little cash out of the streetwise public. As it turns out, this is like taking candy from a candy junkie in the middle of a candy injection."),
    new Photo("BlueSappho.jpg", "My illustrator fresh off the Avatar film set."),
    new Photo("Sappho%20habitat.jpg", "My illustrator in her natural habitat."),
    new Photo("Cheers.jpg", "My illustrator and I strike a deal and decide to accept that million dollar advance."),
    new Photo("LookingUp.jpg", "Things are looking up."),
    new Photo("LookingLeft.jpg", "Is it spring yet?")
];

/**
 * Called from index.html to load all thumbnails
 */
function loadThumbnails() {
    const thumbs = document.getElementById('thumbs');
    photos.forEach((photo) => {
        thumbs.appendChild(photo.getThumbnail());
    });
}

/**
 * Get the safe photo index number from the photo.html query parameter. If garbage input, set to end of photos array.
 * @returns {number} containing the photo index value if present, or a reasonable default value.
 */
function getPhIndex() {
    const phString = new URLSearchParams(window.location.search).get('ph');
    const phIndex = parseInt(phString, 10);
    if (isNaN(phIndex)) {
        return 0;
    } else if (phIndex < 0) {
        return 0;
    } else if (phIndex >= photos.length) {
        return photos.length - 1;
    }
    return phIndex;
}

/**
 * Called from photo.html to initialize 
 */
function initPhoto() {
    const buttons = document.getElementById("navButtons");
    // first
    buttons.elements[0].onclick = function () {
        currentPhoto = 0;
        populate();
    };
    // previous
    buttons.elements[1].onclick = function () {
        if (currentPhoto > 0) {
            currentPhoto--;
        }
        populate();
    };
    // next
    buttons.elements[2].onclick = function () {
        if (currentPhoto < photos.length - 1) {
            currentPhoto++;
        }
        populate();
    };
    // last
    buttons.elements[3].onclick = function () {
        currentPhoto = photos.length - 1;
        populate();
    };

    currentPhoto = getPhIndex();

    populate();
}

// Called upon initPhoto and subsequently by navigation button click to load a single photo with caption
function populate() {
    const buttons = document.getElementById("navButtons");
    buttons.elements[0].disabled = (1 >= currentPhoto);
    buttons.elements[1].disabled = (0 == currentPhoto);
    buttons.elements[2].disabled = (photos.length - 1 == currentPhoto);
    buttons.elements[3].disabled = (photos.length - 2 <= currentPhoto);

    const photo = photos[currentPhoto];
    const caption = document.getElementById('caption');
    caption.innerHTML = photo.description;
    const photoImg = document.getElementById('photoImg');
    photoImg.src = photo.getSrc();
    photoImg.alt = photo.filename;
}
