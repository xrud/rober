function frameUrl($frame, $target){
    //solução de https://pt.stackoverflow.com/questions/74597/pegar-par%C3%A2metros-da-url
//Array de parametros 'chave=valor'
var params = window.location.search.substring(1).split('&');

//Criar objeto que vai conter os parametros
var paramArray = {};

//Passar por todos os parametros
for(var i=0; i<params.length; i++) {
//Dividir os parametros chave e valor
var param = params[i].split('=');

//Adicionar ao objeto criado antes
paramArray[param[0]] = param[1];
}

//console.log(paramArray[$frame]+'.html');
let frame = paramArray[$frame]+'.html';

    if($frame == "" | $frame == 'undefined' | $frame == null){
        window.document.getElementById($target).innerHTML = '<iframe src="includes/home.html" frameborder="0" width="100%" height="100%">';
        console.log($frame);
        
    }
        else{
            window.document.getElementById($target).innerHTML = '<iframe src="includes/'+frame+'" frameborder="0" width="100%" height="1024">';
        }

}
// Doc comment
//frameUrl('pagina', 'alvoId');