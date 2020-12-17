var locations = {
    northPoleNY: new Location("North Pole, NY", "hollyMI.png", "The Workshop",
        new LocationDetails("locationNorthPoleNY.webp", "8,098", 
            [
                "Home to Santa's Workshop",
                "Since 1948 there is a 96% chance of snow on Christmas"
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
    new Artist("Mariah Carey", "0bYg9bo50gSsH3LtXe2SQn", "mariahCarey.jpeg", 1),
    new Artist("Karen Carpenter", "0z5HSQGWgnjdNvwbOmhB2w", "karenCarpenter.jpg", 2),
    new Artist("Anne Murry", "61vUCJZgaV68TfWd5nWGwR", "anneMurray.jpg", 3),
    new Artist("Ella Fitzgerald", "3SKKn2RJgtKoxX4t6S35VI", "ellaFitzgerald.jpg", 4),
    new Artist("Rosemary Clooney", "1QLBIonJRsTO6IikoHNoq1", "rosemaryClooney.jpg", 5),
    new Artist("Sarah McLachlan", "7AtTnzg4X7b4Y31HwZQvZU", "sarahMcLachlan.jpg", 6),
    new Artist("Barbara Streisand", "6aj1ORK1GGWahINWrxBTNE", "barbraStreisand.jpeg", 7),
    new Artist("Kelly Clarkson", "4ud5nPW0fN8Li4FyIq0rh5", "kellyClarkson.jpg", 8),
    new Artist("Britney Spears", "1UQbxSOVbauPxaUh337GTx", "britneySpears.jpg", 9),
    new Artist("Amy Grant", "6wO6GMLT33JHs2Tgv0tjiR", "amyGrant.jpg", 10),
    new Artist("Whitney Houston", "5oTGfOV9OkYufPZalNRgvP", "whitneyHouston.png", 11),
    new Artist("Lady Gaga", "55H487szLjUo5X1acjOjLo", "ladyGaga.jpg", 12),
    new Artist("Julie Andrews", "1FgyumV8x8BGl1NpTzSBBv", "julieAndrews.webp", 13),
    new Artist("Sandi Patty", "1Lvs6hPZCYpcJJEZkZ3YaF", "sandiPatty.jpeg", 14),
    new Artist("Christina Aguilera", "32h59T8q2SonUPJ006lyXt", "christinaAguilera.jpg", 15),
    new Artist("Susan Boyle", "7HU0ru6MNbt5GB9CYL42Kv", "susanBoyle.jpg", 16),
    new Artist("Lauren Daigle", "4B5uPI5cFrx2mxT7n4PiXX", "laurenDaigle.jpg", 17),
    new Artist("Linda Ronstadt", "3ePuNFBdaKPBGsjpOm1vYb", "lindaRonstadt.jpg", 18),
    new Artist("Patti Page", "1BKZL9NKot3Hl2LZYg3cSj", "pattiPage.jpg", 19),
    new Artist("Carrie Underwood", "2BdZLgiRQcxyArUjlxFAx5", "carrieUnderwood.jpeg", 20),
    new Artist("Celine Dion", "0dN1PHRLWitV72nqak0DuJ", "celineDion.jpg", 21),
    new Artist("Kacey Musgraves", "7us9KL6g1bLBAoUSVu7Qzb", "kaceyMusgraves.jpg", 22),
    new Artist("Eartha Kitt", "7voBZmOUTopsi6oNaMIvDC", "earthaKitt.jpg", 23),
    new Artist("Miss Piggy", "016NunpM8jiU0bjSvxi9yF", "missPIggy.jpg", 24),
    new Artist("Annie Lennox", "1LpcM6kI1JEp3pzTH1DlkR", "annieLennox.jpg", 25),
    new Artist("Madonna", "5ja1Ek1FgEsTK8pW33fsRa", "madonna.jpg", 26),
    new Artist("Judy Garland", "1Gfdx16f0aOZ70Tm2Z0Lne", "judyGarland.jpg", 27),
    new Artist("Diana Ross", "0Cg6bwUaEtH1vSWPjeORTr", "dianaRoss.jpg", 28),
    new Artist("Dolly Parton", "72avsxSbeLvFhoeqgEqnDb", "dollyParton.jpg", 29),
    new Artist("Taylor Swift", "5ZHWH1haGB9SnLgcXdR2K7", "taylorSwift.jpg", 30),
    new Artist("Faith Hill", "4XWxLiqYW3Q78OuK5nvJRo", "faithHill.jpeg", 31),
    new Artist("Sarah Brightman", "649Sk1Seqvy82nx2GZFw6E", "sarahBrightman.jpg", 32),
/*
    new Artist("Natalie Cole", "6hSK005C3XSR4rHUfWHbbE", "johnnyMathis.jpg", 11),
    new Artist("Gwen Stefani", "0mRNlT4xsqxVcogqmCslVd", "jerryVale.jpg", 17),
    new Artist("Jssica Simpson", "2qX1n3Nv780k94OkPGnEkG", "tobyKeith.jpeg", 18),
    new Artist("Connie Francis", "5TyGKiYwp1AF6Axb3Yj3a5", "chuckBerry.jpg", 22),
    new Artist("Vanessa Williams", "5YJJOrfnHXFx8omHwY9BvD", "alMartino.jpg", 23),
    new Artist("Brenda Lee", "2EjXfH91m7f8HiJN1yQg97", "geneAutry.jpg", 27),
    new Artist("Lena Horne", "1EhrIMBQjYIseP0a2GKKSj", "dariusRucker.jpg", 30),
    new Artist("Trisha Yearwood", "1QvFsu0LyVr9MKDhtvWtwU", "burlIves.jpg", 32),
    new Artist("Angela Lansbury", "7ltdj5XzKOV6bRldI9nt5e", "burlIves.jpg", 32),
    new Artist("Reba McEntire", "35ipdVPf8htMRiPf59klvy", "burlIves.jpg", 32),
    new Artist("Eurthmics", "3SNR5ONyvn2BkjHpeRg7TM", "burlIves.jpg", 32),
    new Artist("Jennifer Nettles", "34UJgjvJI0hA9P8Aca2sYe", "burlIves.jpg", 32),
    new Artist("Aretha Franklin", "4XciiYzKQMv20fAim26VCw", "burlIves.jpg", 32),
*/
    new Artist("---", "", "", "-")
];


var matchups = [
    new Matchup(0, songs[0], songs[31], null, 16, 1),
    new Matchup(1, songs[15], songs[16], null, 16, 1),
    new Matchup(2, songs[7], songs[24], null, 17, 1),
    new Matchup(3, songs[8], songs[23], null, 17, 1),
    new Matchup(4, songs[3], songs[28], null, 18, 1),
    new Matchup(5, songs[12], songs[19], null, 18, 1),
    new Matchup(6, songs[4], songs[27], null, 19, 1),
    new Matchup(7, songs[11], songs[20], null, 19, 1),    
    new Matchup(8, songs[1], songs[30], null, 20, 1),
    new Matchup(9, songs[14], songs[17], null, 20, 1),
    new Matchup(10, songs[6], songs[25], null, 21, 1),
    new Matchup(11, songs[9], songs[22], null, 21, 1),
    new Matchup(12, songs[2], songs[29], null, 22, 1),
    new Matchup(13, songs[13], songs[18], null, 22, 1),
    new Matchup(14, songs[5], songs[26], null, 23, 1),
    new Matchup(15, songs[10], songs[21], null, 23, 1),    
    new Matchup(16, songs[32], songs[32], null, 24, 2),              
    new Matchup(17, songs[32], songs[32], null, 24, 2),              
    new Matchup(18, songs[32], songs[32], null, 25, 2),              
    new Matchup(19, songs[32], songs[32], null, 25, 2),              
    new Matchup(20, songs[32], songs[32], null, 26, 2),              
    new Matchup(21, songs[32], songs[32], null, 26, 2),              
    new Matchup(22, songs[32], songs[32], null, 27, 2),              
    new Matchup(23, songs[32], songs[32], null, 27, 2),              
    new Matchup(24, songs[32], songs[32], null, 28, 3),              
    new Matchup(25, songs[32], songs[32], null, 28, 3),              
    new Matchup(26, songs[32], songs[32], null, 29, 3),              
    new Matchup(27, songs[32], songs[32], null, 29, 3),              
    new Matchup(28, songs[32], songs[32], null, 30, 4),              
    new Matchup(29, songs[32], songs[32], null, 30, 4),              
    new Matchup(30, songs[32], songs[32], null, null, 5)
]

var bestFemaleSinger = new Game(2, "Best Female Singer", songs, matchups, "bestFemaleSinger.js", false);
