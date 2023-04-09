$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault()
        const formulario=$('input').val();
        var cont=`<li><a href="">${formulario}</a></li>`
        $(cont).appendTo('#principal')


        $('a').on('click',function(event){
            event.preventDefault()
            $(this).addClass( "oii" ); 
        })
    })

    
})