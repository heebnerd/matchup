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

    get artist1FromMatchup(){
        return this._artist1FromMatchup;
    }
    set artist1FromMatchup(value){
        this._artist1FromMatchup = value;
    }

    get artist2FromMatchup(){
        return this._artist2FromMatchup;
    }
    set artist2FromMatchup(value){
        this._artist2FromMatchup = value;
    }
}

class Location {
    constructor (name, imageUrl, venue, details){
        this.name = name;
        this.imageUrl = "images/" + imageUrl;
        this.venue = venue;
        this.details = details;
    }
}

class LocationDetails{
    constructor (mapImage, population, facts){
        this.mapImage = "images/" + mapImage;
        this.population = population;
        this.facts = facts;
    }
}

var artists = [
    new Artist("Frank Sinatra", "4fzMwQLxkY6qsimuyaDqed", "frankSinatra.jpg", 1),
    new Artist("Andy Williams", "5hslUAKq9I9CG2bAulFkHN", "andyWilliams.jpg", 2),
    new Artist("Bing Crosby", "6ajihXpsHpDnIdqtBXZYGN", "bingCrosby.jpg", 3),
    new Artist("Josh Groban", "1PPunVEmMEPbLxb3ejHgaB", "joshGroban.jpg", 4),
    new Artist("Perry Como", "5mKxNjNnRFpO9Muzw3Ug0u", "perryComo.jpg", 5),
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
    new Artist("Jim Nabors", "3u4uVvmJaEtwlqMjSMIVKo", "jimNabors.JPG", 25, "gawlee.m4a"),
    new Artist("Tom Jones", "2BJXVZV3REr0oDvFSD0fnL", "tomJones.jpg", 26),
    new Artist("Gene Autry", "1dtIaSlyrLI04sqYa8nLyN", "geneAutry.jpg", 27),
    new Artist("Vaughn Monroe", "75Sx3XuVfvyOL9k02ylrA0", "vaughnMonroe.jpg", 28),
    new Artist("Englebert Humperdinck", "22qUDZhFd9wQM6f4xDPkQl", "englebertHumperdinck.jpg", 29),
    new Artist("Darius Rucker", "64kvEILhlkdebBdlrtcMJG", "dariusRucker.jpg", 30),
    new Artist("John Denver", "03XY86r29H3R5je3xcdb1X", "johnDenver.jpg", 31),
    new Artist("Burl Ives", "33BcB8XVwJU4qB7bDSkVya", "burlIves.jpg", 32),
    new Artist("---", "", "", "-")
];

var locationDetails = {
    wintersTX: new LocationDetails("mapWintersTX.png", "2,562", 
        [
            "High School Mascot: Blizzards",
            "Birthplace of Rogers Hornsby - April 27, 1896"
        ]),
    hollyMI: new LocationDetails("locationHollyMI.jpg", "6,086", 
        [
            "Home to the Annual Holly Dickens Festival",
            "Also home to 'Crapo Park' named after Michigan governor Henry H. Crapo"
        ]),
    evergreenCO: new LocationDetails("locationEvergreenCO.jpg", "9,038",
        [
            "Famous current resident: Scott Hamilton",
            "Famous previous resident: John Hinckley Jr."
        ]),
    poinsettiaParkFL: new LocationDetails("locationPoinsettiaParkFL.png", "???",
        [
            "Bus Service at Front Entrance",
            "Shuffleboard-Social, In-house, and Competitive"
        ]),
    northPoleID: new LocationDetails("locationNorthPoleID.jpg", "I dunno, like 7?",
        [
            "The area code is 208",
            "There pretty much isn't anything here"
        ]),
    blitzenOR: new LocationDetails("locationBlitzenOR.jpg", "several ghosts", [
            "Currently a ghost town",
            "Last living habitants were back in 1923"
        ]),
    bethlehemPA: new LocationDetails("locationbethlehemPA.jpg", "74,982",
        [
            "An accreditted instiution in this town gave Josh Heebner a college degree",
            "Home to the Philadelphia Eagles preseason training camp"
        ]),
    eggnogUT: new LocationDetails("locationEggnogUT.jpg", "Probably 0",
        [
            "Likely named for the egg nog served to stockmen at this place",
            "Elevation is 4,445 ft"
        ]),
    santaClausIN: new LocationDetails("locationSantaClausIN.jpg", "2,411", 
        [
            "Named in 1849. Wanted to be called Santa Fe, no one really knows how they got to be called Santa Claus",
            "Birthplace of Jay Cutler"
        ]),
    antlersOK: new LocationDetails("locationAntlersOK.jpg", "2,453", 
        [
            "Named for a kind of tree that becomes festooned with antlers shed by deer",
            "The city has two motels and one hotel: Sportsman Inn & Suites, Budget Inn, and Hiway Inn & Suites"
        ]),
    christmasCoveME: new LocationDetails("locationChristmasCoveME.jpg", "892",
        [
            "It's pretty boring here"
        ])
}

var locations = {
    wintersTX: new Location("Winters, TX", "wintersTX.png", "The Main Stage at the “Baby, It’s Cold Outside” Bar & Grille", locationDetails.wintersTX ),
    hollyMI: new Location("Holly, MI", "hollyMI.png", "Clarence Oddbody, AS2, Memorial Coliseum", locationDetails.hollyMI),
    evergreenCO: new Location("Evergreen, CO", "evergreenCO.png", "Tiny Tim Tavern", locationDetails.evergreenCO),
    poinsettiaParkFL: new Location("Poinsettia Park, FL", "poinsettiaParkFL.png", "Scot Farkus Center", locationDetails.poinsettiaParkFL),
    northPoleID: new Location("North Pole, ID", "northPoleID.png", "Yukon Cornelius Arena", locationDetails.northPoleID),
    blitzenOR: new Location("Blitzen, OR", "blitzenOR.png", "Cindy Lou from Whoville Theatre, featuring the Russian Teacakes Room", locationDetails.blitzenOR),
    bethlehemPA: new Location("Bethlehem, PA", "bethlehemPA.png", "Cousin Eddie’s Palace Auditorium", locationDetails.bethlehemPA),
    eggnogUT: new Location("Eggnog, UT", "eggnogUT.png", "The Kris Kringle Music Hall", locationDetails.eggnogUT),
    santaClausIN: new Location("Santa Claus, IN", "santaClausIN.png", "The Harry & Marv Playhouse", locationDetails.santaClausIN),
    antlersOK: new Location("Antlers, OK", "antlersOK.png", "The Harry & Marv Playhouse", locationDetails.antlersOK),
    christmasCoveME: new Location("Christmas Cove, ME", "christmasCoveME.png", "George Bailey Amphitheater", locationDetails.christmasCoveME)
};

var matchups = [
    new Matchup(0, artists[0], artists[31], locations.wintersTX, 16),
    new Matchup(1, artists[15], artists[16], locations.wintersTX, 16),
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
    new Matchup(16, artists[32], artists[32], locations.wintersTX, 24),              
    new Matchup(17, artists[32], artists[32], locations.hollyMI, 24),              
    new Matchup(18, artists[32], artists[32], locations.evergreenCO, 25),              
    new Matchup(19, artists[32], artists[32], locations.poinsettiaParkFL, 25),              
    new Matchup(20, artists[32], artists[32], locations.northPoleID, 26),              
    new Matchup(21, artists[32], artists[32], locations.blitzenOR, 26),              
    new Matchup(22, artists[32], artists[32], locations.bethlehemPA, 27),              
    new Matchup(23, artists[32], artists[32], locations.eggnogUT, 27),              
    new Matchup(24, artists[32], artists[32], locations.santaClausIN, 28),              
    new Matchup(25, artists[32], artists[32], locations.santaClausIN, 28),              
    new Matchup(26, artists[32], artists[32], locations.antlersOK, 29),              
    new Matchup(27, artists[32], artists[32], locations.antlersOK, 29),              
    new Matchup(28, artists[32], artists[32], locations.santaClausIN, 30),              
    new Matchup(29, artists[32], artists[32], locations.antlersOK, 30),              
    new Matchup(30, artists[32], artists[32], locations.christmasCoveME, null)
];

$(document).ready(function(){
    refreshBracket();
    $(".btn-winner").click(pickWinner);
    $("#venueModal").on("hide.bs.modal", function(){
        $("#venueModal #locationInfo").html("");
    });
    $("#matchupModal").on("hide.bs.modal", function(){
        $("#location img").unbind("click");
    });
});

function pickWinner(){
    var gameNumber = $(this).attr("data-matchup");
    var winnerTo = $(this).attr("data-winner");
    var artistName = $(this).attr("data-artist");
    var artist = artists.find(function(artist){
        return artist.name == artistName;
    });

    $("#matchupModal iframe").attr("src", "");
    if(winnerTo) {
        var matchup = matchups[winnerTo];
        if(matchup.artist1 == artists[32]){
            matchup.artist1 = artist;
            matchup._artist1FromMatchup = gameNumber;
        }
        else{
            matchup.artist2 = artist;
            matchup._artist2FromMatchup = gameNumber;
        }
        refreshMatchup(matchup);
        $("#matchupModal iframe").attr("src", "");
        $(`div [matchup='${gameNumber}']`).attr("picked", "true");
        $("#matchupModal").modal("hide");
    }
    else {
        $("#matchupModal").modal("hide");
        declareWinner(artist);
    }
}

function declareWinner(artist){
    $("#winnerModal .header").text(artist.name);
    $("#winnerModal img").attr("src", artist.imageUrl);
    $("#winnerModal iframe").attr("src", artist.audio);
    $("#winnerModal").modal("show");
}

function refreshBracket(){
    matchups.forEach(function(matchup, index){
        if(matchup.artist1 && matchup.artist2){  
            console.log(matchup);
            var round = "";
            if(index < 16){
                round = ".first-round";
            } else if(index < 24) {
                round = ".second-round";
            } else if(index < 28) {
                round = ".third-round";
            } else if (index < 30) {
                round = ".fourth-round";
            } else {
                round = ".final-round";
            }
            
            $(round).append(`
            <div matchup="${index}" class="game">
                <div>  
                    <div class="bracket"></div>
                </div>
                <div class="artists">
                    <div class="artist1">
                        <span class="seed">${matchup.artist1.seed}</span>
                        <span class="name">${matchup.artist1.name}</span>
                        <span class="btn btn-delete btn-sm"></span>
                    </div>
                    <div class="artist2">
                        <span class="seed">${matchup.artist2.seed}</span>
                        <span class="name">${matchup.artist2.name}</span>
                        <span class="btn btn-delete btn-sm"></span>
                    </div>
                </div>
            </div>`);
        }
    });

    $(".btn-delete").on({
        "mouseenter": function(){
            $(this).addClass("show");
        },
        "mouseleave": function(){
            $(this).removeClass("show");
        },
        "click": function(){
            var game = $(this).closest(".game");
            var matchup = matchups[game.attr("matchup")];
            if($(this).parent().hasClass("artist1")){
                matchup.artist1 = artists[32];
                $(`.game[matchup="${matchup.artist1FromMatchup}"]`).attr("picked", "");
            }
            if($(this).parent().hasClass("artist2")){
                matchup.artist2 = artists[32];
                $(`.game[matchup="${matchup.artist2FromMatchup}"]`).attr("picked", "");
            }
            refreshMatchup(matchup);
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
    $("#location img").click(function(){
        populateVenue(matchup.location);
        $("#venueModal").modal("show");
    });
}

function populateVenue(location){
    $("#venueModal .modal-title").text(location.name);
    $("#venueModal #locationMap").attr("src", location.details.mapImage);
    $("#venueModal #venueName").text(location.venue);
    $("#venueModal #population").text(location.details.population);
    location.details.facts.forEach(function(fact){
        $("#venueModal #locationInfo").append(`<li>${fact}</li>`)
    });
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
