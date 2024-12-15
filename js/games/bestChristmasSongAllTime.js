var songs = [
    new Artist("All I Want for Christmas Is You", 'album/all-i-want-for-christmas-is-you/585972750?i=585972803', 'mariahCarey.jpg', 1, 'apple'),
    new Artist("Last Christmas", 'album/last-christmas-single-version/202117886?i=202117984', 'wham.jpg', 2, 'apple'),
    new Artist("Santa Tell Me", 'album/santa-tell-me/1444319981?i=1444319982', 'arianaGrande.jpg', 3, 'apple'),
    new Artist("It's Beginning to Look a Lot Like Christmas", 'album/its-beginning-to-look-a-lot-like-christmas/1782947583?i=1782947584', 'michaelBuble.jpg', 4, 'apple'),
    new Artist("Mistletoe", 'album/mistletoe/1440640693?i=1440640717', 'justinBieber.jpg', 5, 'apple'),
    new Artist("It's the Most Wonderful Time of the Year", 'album/its-the-most-wonderful-time-of-the-year/171434474?i=171434594', 'andyWilliams.jpg', 6, 'apple'),
    new Artist("Rockin' Around the Christmas Tree", 'album/rockin-around-the-christmas-tree/1442732091?i=1442732095', 'brendaLee.jpg', 7, 'apple'),
    new Artist("Jingle Bell Rock", 'album/jingle-bell-rock/1358462130?i=1358462132', 'bobbyHelms.png', 8, 'apple'),
    new Artist("Do They Know It's Christmas?", 'album/do-they-know-its-christmas-original-1984-version/1445001415?i=1445001424', 'bandAid.jpeg', 9, 'apple'),
    new Artist("Let it Snow! Let it Snow! Let it Snow!", 'album/let-it-snow-let-it-snow-let-it-snow/724322340?i=724322860', 'deanMartin.jpg', 10, 'apple'),
    new Artist("Happy Xmas ", 'album/happy-xmas-war-is-over-the-ultimate-mix/1527740882?i=1527742022', 'johnLennon.jpeg', 11, 'apple'),
    new Artist("White Christmas", 'album/white-christmas/1425234668?i=1425235073', 'bingCrosby.jpg', 12, 'apple'),
    new Artist("Feliz Navidad", 'album/feliz-navidad/255615877?i=255615879', 'joseFeliciano.jpg', 13, 'apple'),
    new Artist("Holly Jolly Christmas", 'album/a-holly-jolly-christmas-single-version/1444213347?i=1444213351', 'burlIves.jpg', 14, 'apple'),
    new Artist("Driving Home for Christmas", 'album/driving-home-for-christmas/64807098?i=64807078', 'chrisRea.jpeg', 15, 'apple'),
    new Artist("The Christmas Song", 'album/the-christmas-song-merry-christmas-to-you/1435551048?i=1435551062', 'natKingCole.jpg', 16, 'apple'),
    new Artist("---", "", "", "-")
]

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
