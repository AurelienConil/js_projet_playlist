listOfMovie = [];

//NE PAS TOUCHER
var port = new osc.WebSocketPort({
    url: "ws://localhost:8081"
});



// Cette fonction est appelée lorsqu'un message provenant du logiciel vidéo est arrivé
port.on("message", function (oscMessage) {
    
    switch (oscMessage.address) {
        case "/addMovie":
            // Ajouter 1 film à la playlist. Les films sont envoyés un par un
            // Normalement tout est écrit 
            console.log("Recu addMovie", oscMessage);
            var movie = createMovie(oscMessage.args);
            listOfMovie.push(movie);
            $("#list").append(htmlDivElement(movie));
            createPlayCallback(movie);

            break;
        case "/playIndex":
            console.log("Recu playIndex", oscMessage); 
            // A COMPLETER           
            break;

        case "/playPercentage":
            // A COMPLETER   
            break;
    
        default:
            break;
    }
});

//NE PAS TOUCHER
port.open();

var createMovie = function(args){
   
    var movie = {};
    // A COMPLETER

    return movie;
 
};

//NE PAS TOUCHER - permet d'envoyer un message au logiciel vidéo
var sendOscMessage = function (oscAddress, arg) {
    port.send({
        address: oscAddress,
        args: [arg]
    });

    console.log("message OSC envoyé");
};



$(document).ready(function(){

// A COMPLETER

});

function htmlDivElement(movie){

// A COMPLETER
  
}

function createPlayCallback( movie){
  
    // La fonction callback doit désormais envoyé un message au lecteur vidéo
    // La fonction suivante permet de réaliser l'envoi du message.  
    sendOscMessage("/player/playIndex", movie.index);

}

function refreshPlayslit(){
    console.log("Refresh playlist");  
    // A COMPLETER

    
    // Envoit un message au logiciel video pour demander un actualisation de la playlist
    sendOscMessage("/player/refreshPlaylist", 1);
}



