var usuario_session='';
var id_supervisor=0;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        $('#b_ubicacion').click(function(){
            navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
        });
    
        function successGeo(position){
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
     
            $('#coordenadas').text(position.coords.longitude+' - '+position.coords.latitude);
        }
    
        function errorGeo(error){
            alert('message: ' + error.message); 
        }
    }
};

app.initialize();
