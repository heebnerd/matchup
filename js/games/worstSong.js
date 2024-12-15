var songs = [
    new Artist("Please, Daddy", 'album/please-daddy-dont-get-drunk-this-christmas/1453877734?i=1453877752', 'johnDenver.jpg', 1, 'apple'),
    new Artist("Dominick the Donkey", 'album/dominick-the-donkey-the-italian-christmas-donkey/1437633482?i=1437633484', 'dominicDonkey.jpg', 2, 'apple'),
    new Artist("I Want a Hippopotamus for Christmas", 'album/i-want-a-hippopotamus-for-christmas-hippo-the-hero/347348958?i=347348961', 'gayalPeevey.jpg', 3, 'apple'),
    new Artist("Grandma Got Run over by a Reindeer", 'album/grandma-got-run-over-by-a-reindeer/35879593?i=35879334', 'grandmaReindeer.jpeg', 4, 'apple'),
    new Artist("Wonderful Christmastime", 'album/wonderful-christmastime-full-length-version/1440953750?i=1440953990', 'paulMcCartney.jpg', 5, 'apple'),
    new Artist("All I want for Christmas", 'album/all-i-want-for-christmas-is-my-two-front-teeth/716675083?i=716675243', 'twoFrontTeeth.jpg', 6, 'apple'),
    new Artist("Must Be Santa", 'album/must-be-santa/345980434?i=331549348', 'bobDylan.jpg', 7, 'apple'),
    new Artist("Blue Christmas", 'album/blue-christmas/676288305?i=676288368', 'blueElvis.jpg', 8, 'apple'),
    new Artist("Do They Know It's Christmas?", 'album/do-they-know-its-christmas-original-1984-version/1445001415?i=1445001424', 'bandAid.jpeg', 9, 'apple'),
    new Artist("Twas the Night Before Christmas", 'album/twas-the-night-before-christmas/193010845?i=193011616', 'christmasRap.jpg', 10, 'apple'),
    new Artist("Santa Baby", 'album/santa-baby/1742830130?i=1742830149', 'santaBaby.jpg', 11, 'apple'),
    new Artist("Feliz Navidad", 'album/feliz-navidad/255615877?i=255615879', 'felizNavidad.jpg', 12, 'apple'),
    new Artist("I Saw Mommy Kissing Santa Claus", 'album/i-saw-mommy-kissing-santa-claus/1452949481?i=1452949759', 'kissingSanta.jpg', 13, 'apple'),
    new Artist("Happy Xmas", 'album/happy-xmas-war-is-over-the-ultimate-mix/1527740882?i=1527742022', 'johnLennon.jpeg', 14, 'apple'),
    new Artist("Santa Claus is Comin' to Town", 'album/santa-claus-is-comin-to-town-live-at-c-w-post-college/299701857?i=299701862', 'bruceSpringsteen.jpg', 15, 'apple'),
    new Artist("Last Christmas", 'album/last-christmas-single-version/202117886?i=202117984', 'wham.jpg', 16, 'apple'),
    new Artist("---", "", "", "-")
];


var matchups = [
    new Matchup(0, songs[0], songs[15], locations.deadHorseAK, 8, 1),
    new Matchup(1, songs[7], songs[8], locations.deadHorseAK, 8, 1),
    new Matchup(2, songs[3], songs[12], locations.deadHorseAK, 9, 1),
    new Matchup(3, songs[4], songs[11], locations.deadHorseAK, 9, 1),
    new Matchup(4, songs[1], songs[14], locations.fleatownOH, 10, 1),
    new Matchup(5, songs[6], songs[9], locations.fleatownOH, 10, 1),
    new Matchup(6, songs[2], songs[13], locations.fleatownOH, 11, 1),
    new Matchup(7, songs[5], songs[10], locations.fleatownOH, 11, 1),  
    new Matchup(8, songs[16], songs[16], locations.hellMI, 12, 2),              
    new Matchup(9, songs[16], songs[16], locations.hellMI, 12, 2),              
    new Matchup(10, songs[16], songs[16], locations.looneyvilleTX, 13, 2),              
    new Matchup(11, songs[16], songs[16], locations.looneyvilleTX, 13, 2),              
    new Matchup(12, songs[16], songs[16], locations.boogertownNC, 14, 3),              
    new Matchup(13, songs[16], songs[16], locations.boogertownNC, 14, 3),                
    new Matchup(14, songs[16], songs[16], locations.spreadEagleWI, null, 4)
]

var worstSongGame = new Game(1, "Worst Christmas Song", songs, matchups, "worstSong.js", false);
