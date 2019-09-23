

// mudar imagem

const serverImagem = "http://mogifotos.atwebpages.com";
const captureUid = localStorage.getItem('usuarioAtual');
const caminhoImgPro = serverImagem+'/uploads/'+captureUid+'.ttt';
console.log("app: "+caminhoImgPro);

function erroImagem(){
	alert('erro na imagem');
}

// carrega imagem do profile
window.document.getElementById('selectBox').innerHTML = '<img src="'+caminhoImgPro+'" id="imgPro" class="img-circular">';

// verifica se imagem de profile foi carregada

window.document.getElementById('imgPro').onerror = function() {
    window.document.getElementById('selectBox').innerHTML = '<img src="img/abertura.png" class="img-circular">';
}

function addEspecial($empresa){
			      var infoEmpresa = localStorage.getItem($empresa);
            console.log(infoEmpresa);
            var usuarioApp = localStorage.getItem('usuarioAtual')
            var documentoDeEnvio = infoEmpresa+localStorage.getItem('usuarioAtual');


              console.log(documentoDeEnvio);
              localStorage.setItem('filaFavoritos', documentoDeEnvio);
              localStorage.setItem('filaNome', infoEmpresa);

              setTimeout(() => {
                        window.location.href = "app.html?pagina=adcionarFavoritos"
                      }, 500);
            }