var locations = {
    wintersTX: new Location("Winters, TX", "wintersTX.png", "The Main Stage at the “Baby, It’s Cold Outside” Bar & Grille",
        new LocationDetails("mapWintersTX.png", "2,562", 
            [
                "High School Mascot: Blizzards",
                "Birthplace of Rogers Hornsby - April 27, 1896"
            ])),
    hollyMI: new Location("Holly, MI", "hollyMI.png", "Clarence Oddbody, AS2, Memorial Coliseum",
        new LocationDetails("locationHollyMI.jpg", "6,086", 
            [
                "Home to the Annual Holly Dickens Festival",
                "Also home to 'Crapo Park' named after Michigan governor Henry H. Crapo"
            ])),
    evergreenCO: new Location("Evergreen, CO", "evergreenCO.png", "Tiny Tim Tavern",
        new LocationDetails("locationEvergreenCO.jpg", "9,038",
            [
                "Famous current resident: Scott Hamilton",
                "Famous previous resident: John Hinckley Jr."
            ])),
    poinsettiaParkFL: new Location("Poinsettia Park, FL", "poinsettiaParkFL.png", "Scot Farkus Center",
        new LocationDetails("locationPoinsettiaParkFL.png", "???",
            [
                "Bus Service at Front Entrance",
                "Shuffleboard-Social, In-house, and Competitive"
            ])),
    northPoleID: new Location("North Pole, ID", "northPoleID.png", "Yukon Cornelius Arena",
        new LocationDetails("locationNorthPoleID.jpg", "I dunno, like 7?", 
            [
                "The area code is 208",
                "There pretty much isn't anything here"
            ])),
    blitzenOR: new Location("Blitzen, OR", "blitzenOR.png", "Cindy Lou from Whoville Theatre, featuring the Russian Teacakes Room",
        new LocationDetails("locationBlitzenOR.jpg", "several ghosts", 
            [
                "Currently a ghost town",
                "Last living habitants were back in 1923"
            ])),
    bethlehemPA: new Location("Bethlehem, PA", "bethlehemPA.png", "Cousin Eddie’s Palace Auditorium", 
        new LocationDetails("locationbethlehemPA.jpg", "74,982",
            [
                "An accreditted instiution in this town gave Josh Heebner a college degree",
                "Home to the Philadelphia Eagles preseason training camp"
            ])),
    eggnogUT: new Location("Eggnog, UT", "eggnogUT.png", "The Kris Kringle Music Hall",
        new LocationDetails("locationEggnogUT.jpg", "Probably 0",
            [
                "Likely named for the egg nog served to stockmen at this place",
                "Elevation is 4,445 ft"
            ])),
    santaClausIN: new Location("Santa Claus, IN", "santaClausIN.png", "The Harry & Marv Playhouse",
        new LocationDetails("locationSantaClausIN.jpg", "2,411", 
            [
                "Named in 1849. Wanted to be called Santa Fe, no one really knows how they got to be called Santa Claus",
                "Birthplace of Jay Cutler"
            ])),
    antlersOK: new Location("Antlers, OK", "antlersOK.png", "The Harry & Marv Playhouse",
        new LocationDetails("locationAntlersOK.jpg", "2,453", 
            [
                "Named for a kind of tree that becomes festooned with antlers shed by deer",
                "The city has two motels and one hotel: Sportsman Inn & Suites, Budget Inn, and Hiway Inn & Suites"
            ])),
    christmasCoveME: new Location("Christmas Cove, ME", "christmasCoveME.png", "George Bailey Amphitheater", 
        new LocationDetails("locationChristmasCoveME.jpg", "892",
            [
                "It's pretty boring here"
            ])),
};

var songs = [
    new Artist("Frank Sinatra", "4fzMwQLxkY6qsimuyaDqed", "frankSinatra.jpg", 1),
    new Artist("Andy Williams", "5hslUAKq9I9CG2bAulFkHN", "andyWilliams.jpg", 2),
    new Artist("Bing Crosby", "6ajihXpsHpDnIdqtBXZYGN", "bingCrosby.jpg", 3),
    new Artist("Josh Groban", "1PPunVEmMEPbLxb3ejHgaB", "joshGroban.jpg", 4),
    new Artist("Perry Como", "5mKxNjNnRFpO9Muzw3Ug0u", "perryComo.jpg", 5),
    new Artist("Nat King Cole", "1l2CvcIAL1MtPbtZhh0Z77", "natKingCole.jpg", 6),
    new Artist("Jack Jones", "4K6gWgQgOgj291NOhM1yqw", "jackJones.png", 7),
    new Artist("Barry Manilow", "6StbRiW6YMTHdA8wj5opCG", "barryManilow.jpg", 8),
    new Artist("Michael Buble", "1FRqLI971CD1QedTiJeL3c", "michaelBuble.jpg", 9),
    new Artist("Michael W. Smith", "5YRvdslvtxh3aWJcne4Tm2", "michaelWSmith.jpg", 10),
    //new Artist("Justin Bieber", "0E4rAAAzRPE8I7tYzNq99p", "justinBieber.jpg", 10),
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

var matchups = [
    new Matchup(0, songs[0], songs[31], locations.wintersTX, 16, 1),
    new Matchup(1, songs[15], songs[16], locations.wintersTX, 16, 1),
    new Matchup(2, songs[7], songs[24], locations.hollyMI, 17, 1),
    new Matchup(3, songs[8], songs[23], locations.hollyMI, 17, 1),
    new Matchup(4, songs[3], songs[28], locations.evergreenCO, 18, 1),
    new Matchup(5, songs[12], songs[19], locations.evergreenCO, 18, 1),
    new Matchup(6, songs[4], songs[27], locations.poinsettiaParkFL, 19, 1),
    new Matchup(7, songs[11], songs[20], locations.poinsettiaParkFL, 19, 1),    
    new Matchup(8, songs[1], songs[30], locations.northPoleID, 20, 1),
    new Matchup(9, songs[14], songs[17], locations.northPoleID, 20, 1),
    new Matchup(10, songs[6], songs[25], locations.blitzenOR, 21, 1),
    new Matchup(11, songs[9], songs[22], locations.blitzenOR, 21, 1),
    new Matchup(12, songs[2], songs[29], locations.bethlehemPA, 22, 1),
    new Matchup(13, songs[13], songs[18], locations.bethlehemPA, 22, 1),
    new Matchup(14, songs[5], songs[26], locations.eggnogUT, 23, 1),
    new Matchup(15, songs[10], songs[21], locations.eggnogUT, 23, 1),    
    new Matchup(16, songs[32], songs[32], locations.wintersTX, 24, 2),              
    new Matchup(17, songs[32], songs[32], locations.hollyMI, 24, 2),              
    new Matchup(18, songs[32], songs[32], locations.evergreenCO, 25, 2),              
    new Matchup(19, songs[32], songs[32], locations.poinsettiaParkFL, 25, 2),              
    new Matchup(20, songs[32], songs[32], locations.northPoleID, 26, 2),              
    new Matchup(21, songs[32], songs[32], locations.blitzenOR, 26, 2),              
    new Matchup(22, songs[32], songs[32], locations.bethlehemPA, 27, 2),              
    new Matchup(23, songs[32], songs[32], locations.eggnogUT, 27, 2),              
    new Matchup(24, songs[32], songs[32], locations.santaClausIN, 28, 3),              
    new Matchup(25, songs[32], songs[32], locations.santaClausIN, 28, 3),              
    new Matchup(26, songs[32], songs[32], locations.antlersOK, 29, 3),              
    new Matchup(27, songs[32], songs[32], locations.antlersOK, 29, 3),              
    new Matchup(28, songs[32], songs[32], locations.santaClausIN, 30, 4),              
    new Matchup(29, songs[32], songs[32], locations.antlersOK, 30, 4),              
    new Matchup(30, songs[32], songs[32], locations.christmasCoveME, null, 5)
]

var bestMaleSinger = new Game(0,"Best Male Singer", songs, matchups, "bestMaleSinger.js", false);
