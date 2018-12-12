class Artist {
    constructor (name, audio, imageUrl, seed){
        this.name = name;
        this.audio = audio;
        this.imageUrl = imageUrl;
        this.seed = seed;
    }
}

class Matchup {
    constructor (artist1, artist2, location) {
        this.artist1 = artist1;
        this.artist2 = artist2;
        this.location = location;
    }
}

class Location {
    constructor (location){
        this.location = location;
    }
}

var artists = {
    frankSinatra: new Artist("Frank Sinatra", "4KV9bM7a1KDc7b7OakFZic", "frankSinatra.jpg", 1),
    andyWilliams: new Artist("Andy Williams", "5hslUAKq9I9CG2bAulFkHN", "andyWilliams.jpg", 2),
    bingCrosby: new Artist("Bing Crosby", "6ajihXpsHpDnIdqtBXZYGN", "bingCrosby.jpg", 3),
    joshGroban: new Artist("Josh Groban", "1PPunVEmMEPbLxb3ejHgaB", "joshGroban.jpg", 4),
    perryComo: new Artist("Perry Como", "2pXpURmn6zC5ZYDMms6fwa", "perryComo.jpg", 5),
    natKingCole: new Artist("Nat King Cole", "1l2CvcIAL1MtPbtZhh0Z77", "natKingCole.jpg", 6),
    jackJones: new Artist("Jack Jones", "4K6gWgQgOgj291NOhM1yqw", "jackJones.png", 7),
    barryManilow: new Artist("Barry Manilow", "6StbRiW6YMTHdA8wj5opCG", "barryManilow.jpg", 8),
    michaelBuble: new Artist("Michael Buble", "1FRqLI971CD1QedTiJeL3c", "michaelBuble.jpg", 9),
    michaelWSmith: new Artist("Michael W. Smith", "5YRvdslvtxh3aWJcne4Tm2", "michaelWSmith.jpg", 10),
    johnnyMathis: new Artist("Johnny Mathis", "1JtYy7MFUIZM0MREJaZhTP", "johnnyMathis.jpg", 11),
    deanMartin: new Artist("Dean Martin", "3szI9hDVbyOYU0yd77G35n", "deanMartin.jpg", 12),
    harryConnickJr: new Artist("Harry Connick Jr", "0KWdeiXhPKY3VEY56jA238", "harryConnickJr.jpg", 13),
    tonyBennett: new Artist("Tony Bennett", "1NbkW4qACyJ4MDpqP1kAC5", "tonyBennett.png", 14),
    elvisPresley: new Artist("Elvis Presley", "3QiAAp20rPC3dcAtKtMaqQ", "elvisPresley.jpg", 15),
    bobbyHelms: new Artist("Bobby Helms", "7vQbuQcyTflfCIOu3Uzzya", "bobbyHelms.png", 16),
    jerryVale: new Artist("Jerry Vale", "6R69Gl7CaGihbBpNW5utcZ", "jerryVale.jpg", 17),
    tobyKeith: new Artist("Toby Keith", "1xmhK20i5Spc261Kvd8XYM", "tobyKeith.jpeg", 18),
    alanJackson: new Artist("Alan Jackson", "70OrTBlb0RLKNfxWE6fZZM", "alanJackson.jpg", 19),
    kennyRogers: new Artist("Kenny Rogers", "77lrZDgzDtMZ9nxhofaG2I", "kennyRogers.jpg", 20),
    bobbyVinton: new Artist("Bobby Vinton", "6mRig6msTgPe8YlTJkrCmy", "bobbyVinton.jpg", 21),
    garthBrooks: new Artist("Garth Brooks", "", "", 22),
    alMartino: new Artist("Al Martino", "6zMnsAwmH87MTbzq7IIEYD", "alMartino.jpg", 23),
    steveLawrence: new Artist("Steve Lawrence", "", "", 24),
    vicDamone: new Artist("Vic Damone", "6QtoYmkA5Utn3vpZ3QhYEq", "vicDamone.jpg", 25),
    tomJones: new Artist("Tom Jones", "2BJXVZV3REr0oDvFSD0fnL", "tomJones.jpg", 26),
    geneAutry: new Artist("Gene Autry", "1dtIaSlyrLI04sqYa8nLyN", "6StbRiW6YMTHdA8wj5opCG", 27),
    vaughnMonroe: new Artist("Vaughn Monroe", "0GEQ0otjCdvAelfJqGifX1", "vaughnMonroe.jpg", 28),
    englebertHumperdinck: new Artist("Englebert Humperdinck", "22qUDZhFd9wQM6f4xDPkQl", "englebertHumperdinck.jpg", 29),
    dariusRucker: new Artist("Darius Rucker", "64kvEILhlkdebBdlrtcMJG", "dariusRucker.jpg", 30),
    johnDenver: new Artist("John Denver", "03XY86r29H3R5je3xcdb1X", "johnDenver.jpg", 31),
    burlIves: new Artist("Burl Ives", "33BcB8XVwJU4qB7bDSkVya", "burlIves.jpg", 32)
};

var locations = {
    noelLA: "Noel, LA",
    hollyMI: "Holly, MI",
    evergreenCO: "Evergreen, CO",
    poinsettiaParkFL: "Poinsettia Park, FL",
    northPoleID: "North Pole, ID",
    blitzenOR: "Blitzen, OR",
    bethlehemPA: "Bethlehem, PA",
    eggnogUT: "Eggnog, UT"
};

var matchups = [
        new Matchup(artists.frankSinatra, artists.burlIves, locations.noelLA),                      // 0
        new Matchup(artists.bobbyHelms, artists.jerryVale, locations.noelLA),                       // 1
        new Matchup(artists.andyWilliams, artists.johnDenver, locations.hollyMI),                   // 2
        new Matchup(artists.elvisPresley, artists.tobyKeith, locations.hollyMI),                    // 3
        new Matchup(artists.bingCrosby, artists.dariusRucker, locations.evergreenCO),               // 4
        new Matchup(artists.tonyBennett, artists.alanJackson, locations.evergreenCO),               // 5
        new Matchup(artists.joshGroban, artists.englebertHumperdinck, locations.poinsettiaParkFL),  // 6
        new Matchup(artists.harryConnickJr, artists.kennyRogers, locations.poinsettiaParkFL),       // 7
        new Matchup(artists.perryComo, artists.vaughnMonroe, locations.northPoleID),                // 8
        new Matchup(artists.deanMartin, artists.bobbyVinton, locations.northPoleID),                // 9
        new Matchup(artists.natKingCole, artists.geneAutry, locations.blitzenOR),                   // 10
        new Matchup(artists.johnnyMathis, artists.garthBrooks, locations.blitzenOR),                // 11
        new Matchup(artists.jackJones, artists.tomJones, locations.bethlehemPA),                    // 12
        new Matchup(artists.michaelWSmith, artists.alMartino, locations.bethlehemPA),               // 13
        new Matchup(artists.barryManilow, artists.vicDamone, locations.eggnogUT),                   // 14
        new Matchup(artists.michaelBuble, artists.steveLawrence, locations.eggnogUT)                // 15
];

$(document).ready(function(){
    matchups.forEach(function(matchup, index){
        $("#bracket").append(`<div class="matchup" matchup="${index}">${matchup.artist1.seed}. ${matchup.artist1.name}</div>`);
        $("#bracket").append(`<div class="matchup" matchup="${index}">${matchup.artist2.seed}. ${matchup.artist2.name}</div>`);
        $("#bracket").append("<hr>");
    });
    $(".matchup").click(function(){
        var matchup = matchups[$(this).attr("matchup")];
        displayMatchup(matchup);
        $("#matchupModal").modal("show");
    });
});



function displayMatchup(matchup){
    displayArtist("left", matchup.artist1);
    displayArtist("right", matchup.artist2);
}

function displayArtist(selector, artist){
    selector = "#" + selector + "Artist";
    $(selector + " .header").text(artist.name);
    $(selector + " .image img").attr("src", "images/" + artist.imageUrl);
    $(selector + " iframe").attr("src", "https://open.spotify.com/embed/track/" + artist.audio);
}