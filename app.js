$( document ).ready(function() {



    $('#miboton1, #miboton2').on('click', function () { 
         $('#miboton3').removeClass().addClass('btn btn-success');
         $('#miboton3').text('Activado');
         $('#miboton3').on('click', function () {
            $('img').hide();
        });

    });
    $('#miboton2').on('click', function () {
        $('#miboton3').off('click');

    });
    /*    
    $('img').on('mousedown',function () {
        $(this).height(200);
    });

    $('img').on('mouseout mousemove ',function () {
        $(this).height(300);
    });

*/
   /*
    $( "button" ).click(function() {
       // $('#mitexto').text ("Has pinchado en el boton");
       // $('#mitexto').css('color', 'red');
        //$('img').height('200px');
       // $('img').toggle();

      // $('img').fadeOut("slow"){;   
      
       // $('mitexto').removeClass('miestilo');
        $('#micapa').css(
        {
           'font-size' : '10px',
           'background-color' : 'green',
           'color' : 'white'
         
        }
       
     );
        $("button").removeClass('btn-primary').addClass('btn-important');
    });
    $("#miboton1" ).mouseover(function() {
        $('#micapa').append ('<p>Este es el nuevo texto</p>');

    });  

     $("#miboton2" ).mouseover(function() {
        $('#micapa >p:last-child').remove();

    });
     $("#miboton3").click(function() {
         console.log ($('#micapa >p:last-child').text() );
        if ($('#micapa > p:first-child').text() == "Hoy") {
            $('#micapa > p:first-child').text(" ");
        }    
    });
*/

});
