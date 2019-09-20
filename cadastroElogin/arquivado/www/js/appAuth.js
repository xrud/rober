
		//Pega os elementos
			const txtEmail  = document.getElementById('txtEmail');
			const txtPassword  = document.getElementById('txtPassword');
			const btnLogin  = document.getElementById('btnLogin');
			const btnSignUp = document.getElementById('btnSignUp');
			const btnLogOut = document.getElementById('btnLogOut');
			//const txt  = document.getElementById('txt');

		// Eventos de login
			btnLogin.addEventListener('click', e => {

			// Pega email e senha
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();
			
			// Login
			const promise = auth.signInWithEmailAndPassword(email, pass);
			promise.catch(e => console.log(e.message));
		});


		// Eventos de cadastro
			btnSignUp.addEventListener('click', e => {

				// Pega email e senha
			const email = txtEmail.value;
			const pass = txtPassword.value;
			const auth = firebase.auth();
			
			// Login
			const promise = auth.createUserWithEmailAndPassword(email, pass);
			promise
			.then(user => console.log(user))
			.catch(e => console.log(e.message));

			});

		// Eventos de escuta em tempo real dos elementos

		// Sair

		btnLogOut.addEventListener('click', e => {
			firebase.auth().signOut();			
		});

		// O estado atual do código está apresentando bug no logout. por isso preciso forçar essa função até ter tempo de refatorar
		 function sairDoSistema(){
		 	localStorage.setItem('nomeDoAutor', null);
			firebase.auth().signOut();			
		 }

		 //Registrando nome na rede
		 function registraNome($document, $where, $by){
		        let dataRef = firebase.firestore();
		            dataRef.collection($document).where($where, "==", $by)
		        .get()
		        .then(function(querySnapshot) {
		        querySnapshot.forEach(function(doc) {
		            // doc.data() is never undefined for query doc snapshots
		           // console.log(doc.id, " => ", doc.data());
		            let result = JSON.stringify(doc.data());
		            result = JSON.parse(result);
		            let final = result.nome;
		            console.log("Retorno de busca: "+final);
		            localStorage.setItem('nomeDoAutor', final);

		            	if (final == null) {
		            		console.log("Novo usuário");
		            		//window.location.href = "app.html?pagina=meuPerfil";	
		            	}

		            
		        });
		        })
		        .catch(function(error) {
		        	//window.location.href = "app.html?pagina=meuPerfil";		        
		        //console.log("Error getting documents: ", error);
		        });
		    }

		    function registraBlock($user, $where, $by){
		        console.log("Busca de bloqueio por: "+$by);
		        console.log("Busca no campo : "+$where);
		        console.log("Na coleção : "+'block');

		        let dataRef = firebase.firestore();
		        dataRef.collection('block').where($where, "==", $by)
		        .get()
		        .then(function(querySnapshot) {
		        querySnapshot.forEach(function(doc) {
		            // doc.data() is never undefined for query doc snapshots
		           // console.log(doc.id, " => ", doc.data());
		            let contextoUser = $user;
		            let result = JSON.stringify(doc.data());
		            console.log("Block encontrado (resultado puro): "+result);
		            result = JSON.parse(result);
		            let nome = result.nome;
		            console.log("Block encontrado: "+nome+" Contexto: "+contextoUser);

		            	if (nome == contextoUser) { // Futuramente, pode-se usar o localStorage para deslogar o usuário bloqueado mais rapidamente
		            		 sairDoSistema();
		            	}
		            		else{
		            			console.log("Usuário liberado");
		            		}
		        });
		        })
		        .catch(function(error) {
		        console.log("Error getting documents: ", error);
		        });
		    }


		firebase.auth().onAuthStateChanged(fireBaseUser => {
			if(fireBaseUser){
				var uid = fireBaseUser.uid; // var VARIAVEL objeto.atributoFireBase
				var userId = fireBaseUser.uid;
				// leia https://firebase.google.com/docs/auth/web/start
				//console.log(uid);

				// Registrando nome no sistema
				registraNome('users', 'uid', userId );
				// Registra solicitações de bloqueio
				registraBlock(userId, 'nome', userId );
				console.log("teste...");


				localStorage.setItem('usuarioAtual', uid);
				var consoleUser = localStorage.getItem('usuarioAtual');
				console.log("currentkey: "+consoleUser);
				let botaoLogoutPage = window.document.getElementById('btnLogOut');

				if (botaoLogoutPage != null){
					//alert('null');
				}

				//document.getElementById('btnLogOut').style.display = "inline";
				//document.getElementById('app-content').style.display = "inline";

				if (paginaLogin == true) {
					//console.log(uid);
					window.location.href = "central.html?pagina=home";
					
					}
			}
				else{
					console.log('não logado');
				document.getElementById('btnLogOut').style.display = "none";
				if (paginaLogin != true) {
					window.document.write('');
					window.location.href = "auth.html";

					}
				}
		})

		function recuperarSenha(){
		var auth = firebase.auth();
		var emailAddress = document.getElementById('recuperaEmail').value;
		

		auth.sendPasswordResetEmail(emailAddress).then(function() {
			  // Email sent.
			}).catch(function(error) {
			  // An error happened.
			});

			alert("Um email de recuperação foi enviado para: "+emailAddress);
		}

		