//CassianoPontes 03/21
//Visite: http://e.vivo.com.br/ (não precisa ta logado na vivo nem usar a internet da vivo)
//baixe a extensão CJS para Chrome (https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija), clique no botão 'raw' aqui do pastebin, copie e cole este código (certifique de marcar 'enable cjs for this host' na extensão CJS
//Lembre-se de definir seu número abaixo:
var vivonumero = prompt("Qual é o número da sua linha?", 11000000000)//seu numero com DDD
requestsError = 0;
requestsOk = 0;
alert("Aguarde um tempo... daqui a pouco lhe avisamos se deu certo...");
refreshIntervalId = setInterval(async()=>{
    var details = {
        'msisdn': '55'+vivonumero,
        'campid': '4919b47c-f588-4e71-87e3-639b3af92e4d'
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const affect = (function(){
       fetch('http://interatividade.vivo.ddivulga.com/carrotProcess', {
        method: "POST",
           headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
       })
       .then(response => response.json())
        .then(function(response) {
          if(response.return){
			  requestsOk++;
              console.log("+50MB");
          } else {
              requestsError++;
			  alert("Conseguimos adicionar "+requestsOk+" pacotes");
			  clearInterval(refreshIntervalId);
              console.log("Error!");
          }
        }) 
    });
    if(requestsError>=2){
        clearInterval(refreshIntervalId);
        alert("Não é possível adicionar mais pacotes!");
    }
    

    await affect();
    
},2000);
