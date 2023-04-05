const form =document.getElementById('formulario');

function comparar(a,b){
    return b>a
}
form.addEventListener('submit',function(e){
    var comparacao=false
    var a= document.getElementById('A').value;
    var b= document.getElementById('B').value;
    comparacao=comparar(a,b)
    if(comparacao){
        alert("O ELEMENTO B E MAIOR QUE O A")
    }else{
        alert("O ELEMENTO A E MAIOR QUE O B")
    }
   e.preventDefault()
    
})