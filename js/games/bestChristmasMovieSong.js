var songs = [
    new Artist("White Christmas", '3XsaSIPWvM61RIFfeb0BBR', "white_christmas.jpg", 1),
    new Artist("Rockin' Around The Christmas Tree", '2EjXfH91m7f8HiJN1yQg97', 'home_along_rockin.png', 1),
    new Artist("Christmas Time is Here", '3bMfUUpzUzqWp9II00yRhE', 'charlie_brown_christmas.jpg', 2),
    new Artist("Have Yourself a Merry Little Christmas", '030mot3ZKR3oskfMsqDB2R', 'have_yourself_a_merry_little_christmas.jpg', 2),
    new Artist("Christmas in Hollis", '41onDks2UPbyjer5fMeUWf', 'christmas_in_hollis.webp', 3),
    new Artist("I'll Be Home for Christmas", '4lftz0V8DZhWSVtL4GrzMH', 'ill_be_home_for_christmas.jpg', 3),
    new Artist("You're a Mean One, Mr. Grinch", '4qP2V09IpTct5A1ZSnr1zh', 'youre_a_mean_one_mr_grinch.jpg', 4),
    new Artist("Silver and Gold", '5EmYSWE2LpTd4hXxPYdbSf', 'silver_and_gold.png', 4),
    new Artist("A Holly Jolly Christmas", '6Z9Srb3uyZ6ffQaYVSIgTO', 'holly_jolly_christmas.webp', 5),
    new Artist("Rudolph the Red-Nosed Reindeer", '4yY65EIhsp9Yijw8e4wFbm', 'rudolph_the_red_nosed_reindeer.webp', 5),
    new Artist("Christmas Vacation Theme", '0X6P2uxxWYfiuq6PnyOEjL', 'christmas_vacation.jpg', 6),
    new Artist("Walking in the Air", '6WIPdAfs8ZIBMIE3XYIijs', 'walking_in_the_air.avif', 6),
    new Artist("Wonderful Christmas Time", '4UoPux0RniULIV6eFrNphL', 'wonderful_christmastime.jpg', 7),
    new Artist("Frosty the Snowman", '3q8tJKCvgzBAjQDo088EwQ', 'Frosty-the-snowman.webp', 7),
    new Artist("Silver Bells", '5Vo6qsNSZY7hwVZHHc4ouK', 'lemon_drop_kid.avif', 8),
    new Artist("Santa Claus is Comin' to Town", '1nz5Wv0Jeg2KoxKyEB9S3R', 'santa_claus_comin_to_town.jpg', 8),
    new Artist("---", "", "", "-")
];


var matchups = [
    new Matchup(0, songs[0], songs[15], "", 8, 1),
    new Matchup(1, songs[7], songs[8], "", 8, 1),
    new Matchup(2, songs[3], songs[12], "", 9, 1),
    new Matchup(3, songs[4], songs[11], "", 9, 1),
    new Matchup(4, songs[1], songs[14], "", 10, 1),
    new Matchup(5, songs[6], songs[9], "", 10, 1),
    new Matchup(6, songs[2], songs[13], "", 11, 1),
    new Matchup(7, songs[5], songs[10], "", 11, 1),  
    new Matchup(8, songs[16], songs[16], "", 12, 2),              
    new Matchup(9, songs[16], songs[16], "", 12, 2),              
    new Matchup(10, songs[16], songs[16], "", 13, 2),              
    new Matchup(11, songs[16], songs[16], "", 13, 2),              
    new Matchup(12, songs[16], songs[16], "", 14, 3),              
    new Matchup(13, songs[16], songs[16], "", 14, 3),                
    new Matchup(14, songs[16], songs[16], "", null, 4)
]

var bestChristmasMovieSong = new Game(5, "[NEW] Best Christmas Movie Song", songs, matchups, "bestChristmasMovieSong.js", false);
