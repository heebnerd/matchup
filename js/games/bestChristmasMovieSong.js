var songs = [
    new Artist("White Christmas", 'album/white-christmas/1425234668?i=1425235073', 'white_christmas.jpg', 1, 'apple'),
    new Artist("Rockin' Around The Christmas Tree", 'album/rockin-around-the-christmas-tree-single/1444032014?i=1444032015', 'home_along_rockin.png', 1, 'apple'),
    new Artist("Christmas Time is Here", 'album/christmas-time-is-here-vocal-version/1440948781?i=1440949308', 'charlie_brown_christmas.jpg', 2, 'apple'),
    new Artist("Have Yourself a Merry Little Christmas", 'album/have-yourself-a-merry-little-christmas/1434926110?i=1434927132', 'have_yourself_a_merry_little_christmas.jpg', 2, 'apple'),
    new Artist("Christmas in Hollis", 'album/christmas-in-hollis/1498287826?i=1498288002', 'christmas_in_hollis.webp', 3, 'apple'),
    new Artist("I'll Be Home for Christmas", 'album/ill-be-home-for-christmas/1425234668?i=1425235084', 'll_be_home_for_christmas.jpg', 3, 'apple'),
    new Artist("You're a Mean One, Mr. Grinch", 'album/youre-a-mean-one-mr-grinch/1440922667?i=1440922974', 'youre_a_mean_one_mr_grinch.jpg', 4, 'apple'),
    new Artist("Silver and Gold", 'album/silver-and-gold/1440814412?i=1440815057', 'silver_and_gold.png', 4, 'apple'),
    new Artist("A Holly Jolly Christmas", 'album/a-holly-jolly-christmas-single-version/1444213347?i=1444213351', 'holly_jolly_christmas.webp', 5, 'apple'),
    new Artist("Rudolph the Red-Nosed Reindeer", 'album/rudolph-the-red-nosed-reindeer-feat-videocraft-chorus/1440814412?i=1440815080', 'rudolph_the_red_nosed_reindeer.webp', 5, 'apple'),
    new Artist("Christmas Vacation Theme", 'album/christmas-vacation-from-national-lampoons-christmas/1045184251?i=1045184439', 'christmas_vacation.jpg', 6, 'apple'),
    new Artist("Walking in the Air", 'album/walking-in-the-air-the-story-of-the-snowman-edit/1652084750?i=1652084764', 'walking_in_the_air.avif', 6, 'apple'),
    new Artist("Wonderful Christmas Time", 'album/wonderful-christmastime-full-length-version/1440953750?i=1440953990', 'wonderful_christmastime.jpg', 7, 'apple'),
    new Artist("Frosty the Snowman", 'album/frosty-the-snowman/1472696616?i=1472696632', 'Frosty-the-snowman.webp', 7, 'apple'),
    new Artist("Silver Bells", 'album/silver-bells/485227380?i=485227388', 'lemon_drop_kid.avif', 8, 'apple'),
    new Artist("Santa Claus is Comin' to Town", 'album/santa-claus-is-comin-to-town-from-the-rankin-bass/1710256481?i=1710256812', 'santa_claus_comin_to_town.jpg', 8, 'apple'),    
    new Artist("---", "", "", "-", "")
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
