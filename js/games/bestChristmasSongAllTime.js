var songs = [
    new Artist("All I Want for Christmas Is You", "0bYg9bo50gSsH3LtXe2SQn", "mariahCarey.jpg", 1),
    new Artist("Last Christmas", "2FRnf9qhLbvw8fu4IBXx78", "wham.jpg", 2),
    new Artist("Santa Tell Me", "0lizgQ7Qw35od7CYaoMBZb", "arianaGrande.jpg", 3),
    new Artist("It's Beginning to Look a Lot Like Christmas", "5a1iz510sv2W9Dt1MvFd5R", "michaelBuble.jpg", 4),
    new Artist("Mistletoe", "32OWobmyAz8J2qA8iWekyS", "justinBieber.jpg", 5),
    new Artist("It's the Most Wonderful Time of the Year", "5hslUAKq9I9CG2bAulFkHN", "andyWilliams.jpg", 6),
    new Artist("Rockin' Around the Christmas Tree", "1XBc4r6ltXjkFJBrsttwIF", "brendaLee.jpg", 7),
    new Artist("Jingle Bell Rock", "7vQbuQcyTflfCIOu3Uzzya", "bobbyHelms.png", 8),
    new Artist("Do They Know It's Christmas?", "0247StOpd3AkeBQzANX4Zf", "bandAid.jpeg", 9),
    new Artist("Let it Snow! Let it Snow! Let it Snow!", "2uFaJJtFpPDc5Pa95XzTvg", "deanMartin.jpg", 10),
    new Artist("Happy Xmas (War Is Over)", "27RYrbL6S02LNVhDWVl38b", "johnLennon.jpeg", 11),
    new Artist("White Christmas", "4so0Wek9Ig1p6CRCHuINwW", "bingCrosby.jpg", 12),
    new Artist("Feliz Navidad", "0oPdaY4dXtc3ZsaG17V972", "joseFeliciano.jpg", 13),
    new Artist("Holly Jolly Christmas", "77khP2fIVhSW23NwxrRluh", "burlIves.jpg", 14),
    new Artist("Driving Home for Christmas", "3Z3QhZAZpqwZa1phsbQ3JZ", "chrisRea.jpeg", 15),
    new Artist("The Christmas Song", "4PS1e8f2LvuTFgUs1Cn3ON", "natKingCole.jpg", 16),
    new Artist("---", "", "", "-")
];


var matchups = [
    new Matchup(0, songs[0], songs[15], locations.wintersTX, 8, 1),
    new Matchup(1, songs[7], songs[8], locations.wintersTX, 8, 1),
    new Matchup(2, songs[3], songs[12], locations.wintersTX, 9, 1),
    new Matchup(3, songs[4], songs[11], locations.wintersTX, 9, 1),
    new Matchup(4, songs[1], songs[14], locations.hollyMI, 10, 1),
    new Matchup(5, songs[6], songs[9], locations.hollyMI, 10, 1),
    new Matchup(6, songs[2], songs[13], locations.hollyMI, 11, 1),
    new Matchup(7, songs[5], songs[10], locations.hollyMI, 11, 1),  
    new Matchup(8, songs[16], songs[16], locations.evergreenCO, 12, 2),              
    new Matchup(9, songs[16], songs[16], locations.evergreenCO, 12, 2),              
    new Matchup(10, songs[16], songs[16], locations.poinsettiaParkFL, 13, 2),              
    new Matchup(11, songs[16], songs[16], locations.poinsettiaParkFL, 13, 2),              
    new Matchup(12, songs[16], songs[16], locations.northPoleID, 14, 3),              
    new Matchup(13, songs[16], songs[16], locations.northPoleID, 14, 3),                
    new Matchup(14, songs[16], songs[16], locations.bethlehemPA, null, 4)
]

var bestChristmasSongAllTime = new Game(3, "Best Christmas Song of All Time", songs, matchups, "bestChristmasSongAllTime.js", false);
