var songs = [
    new Artist("Please, Daddy", "2ebhHwHys4vr3GCwDhOj3e", "johnDenver.jpg", 1),
    new Artist("Dominick the Donkey", "4EjOn21ToBHzjVnd6rqSyr", "dominicDonkey.jpg", 2),
    new Artist("I Want a Hippopotamus for Christmas", "5P8Xvy5tzhmfyfA6GplQ8h", "gayalPeevey.jpg", 3),
    new Artist("Grandma Got Run over by a Reindeer", "49iHYFjT5yO6WEw6KerX9o", "grandmaReindeer.jpeg", 4),
    new Artist("Wonderful Christmastime", "1SV1fxF65n9NhRHp3KlBuu", "paulMcCartney.jpg", 5),
    new Artist("All I want for Christmas", "5s9dTyXKaq1JTFeplcKXvU", "twoFrontTeeth.jpg", 6),
    new Artist("Must Be Santa", "26H5lCAcFqSSZHGi5iFm71", "bobDylan.jpg", 7),
    new Artist("Blue Christmas", "3QiAAp20rPC3dcAtKtMaqQ", "blueElvis.jpg", 8),
    new Artist("Do They Know It's Christmas?", "0247StOpd3AkeBQzANX4Zf", "bandAid.jpeg", 9),
    new Artist("'Twas the Night Before Christmas", "1jZjKHEZ2g0qwFxASbabyr", "christmasRap.jpg", 10),
    new Artist("Santa Baby", "5ja1Ek1FgEsTK8pW33fsRa", "santaBaby.jpg", 11),
    new Artist("Feliz Navidad", "7xQmVmSfCt4LD9H2uFoWOO", "felizNavidad.jpg", 12),
    new Artist("I Saw Mommy Kissing Santa Claus", "15sxLiiChE5dCW3Y756oas", "kissingSanta.jpg", 13),
    new Artist("Happy Xmas", "3zJw3rugfpVrmBeDDnUYzy", "johnLennon.jpeg", 14),
    new Artist("Santa Claus is Comin' to Town", "4UEPinRjSnbWKqDVhc0QHJ", "bruceSpringsteen.jpg", 15),
    new Artist("Last Christmas", "2FRnf9qhLbvw8fu4IBXx78", "wham.jpg", 16),
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
