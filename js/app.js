class Artist {
    constructor (name, audio, imageUrl, seed, gagAudio){
        this.name = name;
        this.audio = "https://open.spotify.com/embed/track/" + audio;
        this.imageUrl = "images/" + imageUrl;
        this.seed = seed;
        this.gagAudio = "audio/" + gagAudio;
    }
}

class Matchup {
    constructor (gameNumber, artist1, artist2, location, winnerTo) {
        this.gameNumber = gameNumber;
        this.artist1 = artist1;
        this.artist2 = artist2;
        this.location = location;
        this.winnerTo = winnerTo;
    }
}

class Location {
    constructor (name, imageUrl){
        this.name = name;
        this.imageUrl = "images/" + imageUrl;
    }
}

var artists = [
    new Artist("Frank Sinatra", "4HEOgBHRCExyYVeTyrXsnL", "frankSinatra.jpg", 1),
    new Artist("Andy Williams", "5hslUAKq9I9CG2bAulFkHN", "andyWilliams.jpg", 2),
    new Artist("Bing Crosby", "6ajihXpsHpDnIdqtBXZYGN", "bingCrosby.jpg", 3),
    new Artist("Josh Groban", "1PPunVEmMEPbLxb3ejHgaB", "joshGroban.jpg", 4),
    new Artist("Perry Como", "2pXpURmn6zC5ZYDMms6fwa", "perryComo.jpg", 5),
    new Artist("Nat King Cole", "1l2CvcIAL1MtPbtZhh0Z77", "natKingCole.jpg", 6),
    new Artist("Jack Jones", "4K6gWgQgOgj291NOhM1yqw", "jackJones.png", 7, "loveboat.m4a"),
    new Artist("Barry Manilow", "6StbRiW6YMTHdA8wj5opCG", "barryManilow.jpg", 8),
    new Artist("Michael Buble", "1FRqLI971CD1QedTiJeL3c", "michaelBuble.jpg", 9),
    new Artist("Michael W. Smith", "5YRvdslvtxh3aWJcne4Tm2", "michaelWSmith.jpg", 10),
    new Artist("Johnny Mathis", "1JtYy7MFUIZM0MREJaZhTP", "johnnyMathis.jpg", 11),
    new Artist("Dean Martin", "3szI9hDVbyOYU0yd77G35n", "deanMartin.jpg", 12),
    new Artist("Harry Connick Jr", "0KWdeiXhPKY3VEY56jA238", "harryConnickJr.jpg", 13),
    new Artist("Tony Bennett", "1NbkW4qACyJ4MDpqP1kAC5", "tonyBennett.png", 14),
    new Artist("Elvis Presley", "3QiAAp20rPC3dcAtKtMaqQ", "elvisPresley.jpg", 15),
    new Artist("Bobby Helms", "7vQbuQcyTflfCIOu3Uzzya", "bobbyHelms.png", 16),
    new Artist("Jerry Vale", "6R69Gl7CaGihbBpNW5utcZ", "jerryVale.jpg", 17),
    new Artist("Toby Keith", "1xmhK20i5Spc261Kvd8XYM", "tobyKeith.jpeg", 18),
    new Artist("Alan Jackson", "70OrTBlb0RLKNfxWE6fZZM", "alanJackson.jpg", 19),
    new Artist("Kenny Rogers", "77lrZDgzDtMZ9nxhofaG2I", "kennyRogers.jpg", 20),
    new Artist("Bobby Vinton", "6mRig6msTgPe8YlTJkrCmy", "bobbyVinton.jpg", 21),
    new Artist("Chuck Berry", "2pnPe4pJtq7689i5ydzvJJ", "chuckBerry.jpg", 22),
    new Artist("Al Martino", "6zMnsAwmH87MTbzq7IIEYD", "alMartino.jpg", 23),
    new Artist("Neil Diamond", "551w3tOvIBhNU49tcak1GZ", "neilDiamond.jpg", 24),
    new Artist("Jim Nabors", "3u4uVvmJaEtwlqMjSMIVKo", "jimNabors.JPG", 25),
    new Artist("Tom Jones", "2BJXVZV3REr0oDvFSD0fnL", "tomJones.jpg", 26),
    new Artist("Gene Autry", "1dtIaSlyrLI04sqYa8nLyN", "geneAutry.jpg", 27),
    new Artist("Vaughn Monroe", "75Sx3XuVfvyOL9k02ylrA0", "vaughnMonroe.jpg", 28),
    new Artist("Englebert Humperdinck", "22qUDZhFd9wQM6f4xDPkQl", "englebertHumperdinck.jpg", 29),
    new Artist("Darius Rucker", "64kvEILhlkdebBdlrtcMJG", "dariusRucker.jpg", 30),
    new Artist("John Denver", "03XY86r29H3R5je3xcdb1X", "johnDenver.jpg", 31),
    new Artist("Burl Ives", "33BcB8XVwJU4qB7bDSkVya", "burlIves.jpg", 32),
    new Artist("---", "", "", "-")
];

var locations = {
    noelLA: new Location("Noel, LA", "noelLA.png"),
    hollyMI: new Location("Holly, MI", "hollyMI.png"),
    evergreenCO: new Location("Evergreen, CO", "evergreenCO.png"),
    poinsettiaParkFL: new Location("Poinsettia Park, FL", "poinsettiaParkFL.png"),
    northPoleID: new Location("North Pole, ID", "northPoleID.png"),
    blitzenOR: new Location("Blitzen, OR", "blitzenOR.png"),
    bethlehemPA: new Location("Bethlehem, PA", "bethlehemPA.png"),
    eggnogUT: new Location("Eggnog, UT", "eggnogUT.png"),
    reindeerMO: new Location("Reindeer, MO", "reindeerMO.png"),
    antlersOK: new Location("Antlers, OK", "antlersOK.png"),
    christmasCoveME: new Location("Christmas Cove, ME", "christmasCoveME.png")
};

var matchups = [
    new Matchup(0, artists[0], artists[31], locations.noelLA, 16),
    new Matchup(1, artists[15], artists[16], locations.noelLA, 16),
    new Matchup(2, artists[7], artists[24], locations.hollyMI, 17),
    new Matchup(3, artists[8], artists[23], locations.hollyMI, 17),
    new Matchup(4, artists[3], artists[28], locations.evergreenCO, 18),
    new Matchup(5, artists[12], artists[19], locations.evergreenCO, 18),
    new Matchup(6, artists[4], artists[27], locations.poinsettiaParkFL, 19),
    new Matchup(7, artists[11], artists[20], locations.poinsettiaParkFL, 19),
    
    new Matchup(8, artists[1], artists[30], locations.northPoleID, 20),
    new Matchup(9, artists[14], artists[17], locations.northPoleID, 20),
    new Matchup(10, artists[6], artists[25], locations.blitzenOR, 21),
    new Matchup(11, artists[9], artists[22], locations.blitzenOR, 21),
    new Matchup(12, artists[2], artists[29], locations.bethlehemPA, 22),
    new Matchup(13, artists[13], artists[18], locations.bethlehemPA, 22),
    new Matchup(14, artists[5], artists[26], locations.eggnogUT, 23),
    new Matchup(15, artists[10], artists[21], locations.eggnogUT, 23),
    
    new Matchup(16, artists[32], artists[32], locations.noelLA, 24),              
    new Matchup(17, artists[32], artists[32], locations.hollyMI, 24),              
    new Matchup(18, artists[32], artists[32], locations.evergreenCO, 25),              
    new Matchup(19, artists[32], artists[32], locations.poinsettiaParkFL, 25),              
    new Matchup(20, artists[32], artists[32], locations.northPoleID, 26),              
    new Matchup(21, artists[32], artists[32], locations.blitzenOR, 26),              
    new Matchup(22, artists[32], artists[32], locations.bethlehemPA, 27),              
    new Matchup(23, artists[32], artists[32], locations.eggnogUT, 27),              
    new Matchup(24, artists[32], artists[32], locations.reindeerMO, 28),              
    new Matchup(25, artists[32], artists[32], locations.reindeerMO, 28),              
    new Matchup(26, artists[32], artists[32], locations.antlersOK, 29),              
    new Matchup(27, artists[32], artists[32], locations.antlersOK, 29),              
    new Matchup(28, artists[32], artists[32], locations.reindeerMO, 30),              
    new Matchup(29, artists[32], artists[32], locations.antlersOK, 30),              
    new Matchup(30, artists[32], artists[32], locations.christmasCoveME, null)
];

$(document).ready(function(){
    refreshBracket();
    $(".btn-winner").click(pickWinner);
});

function pickWinner(){
    var gameNumber = $(this).attr("data-matchup");
    var winnerTo = $(this).attr("data-winner");
    var artistName = $(this).attr("data-artist");
    var artist = artists.find(function(artist){
        return artist.name == artistName;
    });
    if(winnerTo) {
        var matchup = matchups.find(function(matchup){
            return matchup.gameNumber === parseInt(winnerTo);
        });
        if(matchup.artist1 == artists[32])
            matchup.artist1 = artist;
        else   
            matchup.artist2 = artist;
        refreshMatchup(matchup);
        $("#matchupModal iframe").attr("src", "");
        $(`div [matchup='${gameNumber}']`).attr("picked", "true");
        $("#matchupModal").modal("hide");
    }
    else {
        declareWinner(artist);
    }

}

function declareWinner(artist){
    $("#winnerModal .header").text(artist.name);
    $("#winnerModal img").attr("src", artist.imageUrl);
    $("#winnerModal").modal("show");
}

function refreshBracket(){
    matchups.forEach(function(matchup, index){
        if(matchup.artist1 && matchup.artist2){  
            console.log(matchup);
            if(index < 16){
                $(".first-round").append(`
                <div matchup="${index}" class="game">
                    <div class="artists">
                        <div class="artist1">
                            <span class="seed">${matchup.artist1.seed}</span>
                            <span class="name">${matchup.artist1.name}</span>
                        </div>
                        <div class="artist2">
                            <span class="seed">${matchup.artist2.seed}</span>
                            <span class="name">${matchup.artist2.name}</span>
                        </div>
                    </div>
                </div>`);
            }
            else if(index < 24){
                $(".second-round").append(`     
                <div matchup="${index}" class="game">    
                    <div>  
                        <div class="bracket"></div>
                    </div>
                    <div class="artists">
                        <div class="artist1">
                            <span class="seed">${matchup.artist1.seed}</span>
                            <span class="name">${matchup.artist1.name}</span>
                        </div>
                        <div class="artist2">
                            <span class="seed">${matchup.artist2.seed}</span>
                            <span class="name">${matchup.artist2.name}</span>
                        </div> 
                    </div>
                </div>`);
            }
            else if(index < 28){
                $(".third-round").append(`
                <div matchup="${index}" class="game">
                    <div>  
                        <div class="bracket"></div>
                    </div>
                    <div class="artists">
                        <div class="artist1">
                            <span class="seed">${matchup.artist1.seed}</span>
                            <span class="name">${matchup.artist1.name}</span>
                        </div>
                        <div class="artist2">
                            <span class="seed">${matchup.artist2.seed}</span>
                            <span class="name">${matchup.artist2.name}</span>
                        </div>
                    </div>
                </div>`);
            }
            else if(index < 30){
                $(".fourth-round").append(`
                <div matchup="${index}" class="game">
                    <div>  
                        <div class="bracket"></div>
                    </div>
                    <div class="artists">
                        <div class="artist1">
                            <span class="seed">${matchup.artist1.seed}</span>
                            <span class="name">${matchup.artist1.name}</span>
                        </div>
                        <div class="artist2">
                            <span class="seed">${matchup.artist2.seed}</span>
                            <span class="name">${matchup.artist2.name}</span>
                        </div>
                    </div>
                </div>`);
            }
            else{
                $(".final-round").append(`
                <div matchup="${index}" class="game">
                    <div>  
                        <div class="bracket"></div>
                    </div>
                    <div class="artists">
                        <div class="artist1">
                            <span class="seed">${matchup.artist1.seed}</span>
                            <span class="name">${matchup.artist1.name}</span>
                        </div>
                        <div class="artist2">
                            <span class="seed">${matchup.artist2.seed}</span>
                            <span class="name">${matchup.artist2.name}</span>
                        </div>
                    </div>
                </div>`);

            }
        }
    });

    $(".game").click(function(){
        var matchup = matchups[$(this).attr("matchup")];
        var picked = $(this).attr("picked");
        if(!picked
            && matchup.artist1 != artists[32] 
            && matchup.artist2 != artists[32])
        {
            displayMatchup(matchup);
            $("#matchupModal button").attr("data-matchup", matchup.gameNumber);
            $("#matchupModal button").attr("data-winner", matchup.winnerTo);
            $("#matchupModal").modal("show");
        }
    });
}

function refreshMatchup(matchup){
    $(`div[matchup="${matchup.gameNumber}"] .artist1 .seed`).text(matchup.artist1.seed);
    $(`div[matchup="${matchup.gameNumber}"] .artist1 .name`).text(matchup.artist1.name);
    $(`div[matchup="${matchup.gameNumber}"] .artist2 .seed`).text(matchup.artist2.seed);
    $(`div[matchup="${matchup.gameNumber}"] .artist2 .name`).text(matchup.artist2.name);
}

function displayMatchup(matchup){
    displayArtist("left", matchup.artist1);
    displayArtist("right", matchup.artist2);
    $("#location h3").text(matchup.location.name);
    $("#location img").attr("src", matchup.location.imageUrl);
}

function displayArtist(selector, artist){
    selector = "#" + selector + "Artist";
    $(selector + " .header").text(artist.name);
    $(selector + " .image img").attr("src", artist.imageUrl);
    $(selector + " .image img").attr("artist-name", artist.name);
    $(selector + " .image img").on("click", function(){
        var artistName = $(this).attr("artist-name");
        var artist = artists.find(function(artist){
            return artist.name == artistName;
        });
        var audio = new Audio(artist.gagAudio); 
        audio.play();
    });
    $(selector + " iframe").attr("src", artist.audio);
    $(selector + " button").attr("data-artist", artist.name);
}