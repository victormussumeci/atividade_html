$(document).ready(function () {
    $('#telefone').mask('(00)00000-0000',{
        placeholder:"(99)99999-9999"
    })
    $('#cep').mask('00000-000')
    $("#cpf").mask('000.000.000-00')


    $('.hamburguer').on('click',function(){
        if($('.secao2').hasClass('mostrar')){
            $('.secao2').removeClass('mostrar')
        }else{
             $('.secao2').addClass('mostrar')
        }
    })
    $('#slide').slick({
        arrows:false
    })
})