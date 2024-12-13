var songs = [
    new Artist("White Christmas", '3XsaSIPWvM61RIFfeb0BBR', '', 1),
    new Artist("Rockin' Around The Christmas Tree", '2EjXfH91m7f8HiJN1yQg97', '', 1),
    new Artist("Christmas Time is Here", '3bMfUUpzUzqWp9II00yRhE', '', 2),
    new Artist("Have Yourself a Merry Little Christmas", '030mot3ZKR3oskfMsqDB2R', '', 2),
    new Artist("Christmas in Hollis", '41onDks2UPbyjer5fMeUWf', '', 3),
    new Artist("I'll Be Home for Christmas", '4lftz0V8DZhWSVtL4GrzMH', '', 3),
    new Artist("You're a Mean One, Mr. Grinch", '4qP2V09IpTct5A1ZSnr1zh', '', 4),
    new Artist("Silver and Gold", '5EmYSWE2LpTd4hXxPYdbSf', '', 4),
    new Artist("A Holly Jolly Christmas", '6Z9Srb3uyZ6ffQaYVSIgTO', '', 5),
    new Artist("Rudolph the Red-Nosed Reindeer", '4yY65EIhsp9Yijw8e4wFbm', '', 5),
    new Artist("Christmas Vacation Theme", '0X6P2uxxWYfiuq6PnyOEjL', '', 6),
    new Artist("Walking in the Air", '6WIPdAfs8ZIBMIE3XYIijs', '', 6),
    new Artist("Wonderful Christmas Time", '4UoPux0RniULIV6eFrNphL', '', 7),
    new Artist("Frosty the Snowman", '3q8tJKCvgzBAjQDo088EwQ', '', 7),
    new Artist("Silver Bells", '5Vo6qsNSZY7hwVZHHc4ouK', '', 8),
    new Artist("Santa Claus is Comin' to Town", '1nz5Wv0Jeg2KoxKyEB9S3R', '', 8),
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

var bestChristmasMovieSong = new Game(5, "[NEW] Best Christmas Movie Song", songs, matchups, "bestChristmasMovieSong.js", false);
