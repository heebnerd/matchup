class Game {
    constructor (index, name, songs, matchups, jsUrl, needsPassword){
        this.index = index;
        this.name = name;
        this.songs = songs;
        this.matchups = matchups;
        this.jsUrl = jsUrl;
        this.needsPassword = needsPassword;
    }
}

class Artist {
    constructor (name, audio, imageUrl, seed){
        this.name = name;
        this.audio = "https://open.spotify.com/embed/track/" + audio;
        this.imageUrl = "images/" + imageUrl;
        this.seed = seed;
    }
}

class Matchup {
    constructor (gameNumber, artist1, artist2, location, winnerTo, round) {
        this.gameNumber = gameNumber;
        this.artist1 = artist1;
        this.artist2 = artist2;
        this.location = location;
        this.winnerTo = winnerTo;
        this.round = round;
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

var currentGame = null;

$(document).ready(function(){
    var games = [
        bestMaleSinger,
        worstSongGame,
        bestFemaleSinger,
        bestChristmasSongAllTime,
        bestContemporarySong,
        bestChristmasMovieSong
    ];

    $("#gameSelection").change(function(){
        var selected = $("#gameSelection option:selected").attr("data-index");
        var game = games[selected];
        if(game.needsPassword){
            $("#btn-startGame").html("Need password");
            $("#btn-startGame").addClass("btn-warning");
            $("#password-area").removeClass("d-none");
            $("#btn-startGame").prop("disabled", "disabled");
        }else{
            $("#btn-startGame").html("Let's Play");
            $("#btn-startGame").addClass("btn-success");
            $("#btn-startGame").removeClass("btn-warning");
            $("#password-area").addClass("d-none");
            $("#btn-startGame").prop("disabled", "");
        }
    })

    $("#password").on("keyup", function(){
        if($("#password").val() === "redrider"){
            $("#btn-startGame").removeClass("btn-warning");
            $("#btn-startGame").html("Let's Play");
            $("#btn-startGame").addClass("btn-success");
            $("#btn-startGame").prop("disabled", "");
        }
        else{
            $("#btn-startGame").html("Need password");
            $("#btn-startGame").addClass("btn-warning");
            $("#btn-startGame").prop("disabled", "disabled");
        }
    });

    games.forEach(function(game){
        $("#gameSelection").append(`<option data-index=${game.index}>${game.name}</option>`)
    })
    $("#gameSelectModal").modal("show");
    $("#btn-startGame").click(function(){
        var accessToken = "452f9a713fd84642a11e1450e716d1a6";
        $.ajax({
            url: 'https://api.spotify.com/v1/browse/new-releases',
            type: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + accessToken
            },
            success: function(data) {
                console.log(data);
            }
        });

        $("#gameSelectModal").modal("hide");
        var selectedIndex = $("#gameSelection option:selected").attr("data-index");
        var game = games[selectedIndex];
        currentGame = game;
        startGame();
    });
});

function startGame(){
    refreshBracket();
    $(".btn-winner").click(pickWinner);
    $("#venueModal").on("hide.bs.modal", function(){
        $("#venueModal #locationInfo").html("");
    });
    $("#matchupModal").on("hide.bs.modal", function(){
        $("#location img").unbind("click");
    });
}

function pickWinner(){
    var gameNumber = $(this).attr("data-matchup");
    var winnerTo = $(this).attr("data-winner");
    var artistName = $(this).attr("data-artist");
    var song = currentGame.songs.find(function(song){
        return song.name == artistName;
    });

    $("#matchupModal iframe").attr("src", "");
    if(winnerTo) {
        var matchup = currentGame.matchups[winnerTo];
        if(matchup.artist1 == currentGame.songs[currentGame.songs.length - 1]){
            matchup.artist1 = song;
            matchup._artist1FromMatchup = gameNumber;
        }
        else{
            matchup.artist2 = song;
            matchup._artist2FromMatchup = gameNumber;
        }
        refreshMatchup(matchup);
        $("#matchupModal iframe").attr("src", "");
        $(`div [matchup='${gameNumber}']`).attr("picked", "true");
        $("#matchupModal").modal("hide");
    }
    else {
        $("#matchupModal").modal("hide");
        declareWinner(song);
    }
}

function declareWinner(song){
    $("#winnerModal .header").text(song.name);
    $("#winnerModal img").attr("src", song.imageUrl);
    $("#winnerModal iframe").attr("src", song.audio);
    $("#winnerModal").modal("show");
}

function refreshBracket(){
    currentGame.matchups.forEach(function(matchup, index){
        if(matchup.artist1 && matchup.artist2){  
            console.log(matchup);
            var round = ".round-" + matchup.round;            
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
            var matchup = currentGame.matchups[game.attr("matchup")];
            if($(this).parent().hasClass("artist1")){
                matchup.artist1 = currentGame.songs[currentGame.songs.length -1];
                $(`.game[matchup="${matchup.artist1FromMatchup}"]`).attr("picked", "");
            }
            if($(this).parent().hasClass("artist2")){
                matchup.artist2 = currentGame.songs[currentGame.songs.length -1];
                $(`.game[matchup="${matchup.artist2FromMatchup}"]`).attr("picked", "");
            }
            refreshMatchup(matchup);
        }
    });

    $(".game").click(function(){
        var matchup = currentGame.matchups[$(this).attr("matchup")];
        var picked = $(this).attr("picked");
        if(!picked
            && matchup.artist1 != currentGame.songs[currentGame.songs.length -1] 
            && matchup.artist2 != currentGame.songs[currentGame.songs.length -1])
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

    if(matchup.location){
        $("#location h3").text(matchup.location.name);
        $("#location img").attr("src", matchup.location.imageUrl);
        $("#location img").click(function(){
            populateVenue(matchup.location);
            $("#venueModal").modal("show");
        });
    }
    else{
        $("#location").addClass("d-none");
    }
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
    //$(selector + " iframe").attr("src", artist.audio);
    $(selector + " button").attr("data-artist", artist.name);
}
