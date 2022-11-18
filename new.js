function newEstablishment(event) {
    event.preventDefault()

    let nome = document.getElementById("nome");
    let cnpj = document.getElementById("cnpj");
    let logradouro = document.getElementById("logradouro");
    let numero = document.getElementById("numero");
    let cidade = document.getElementById("cidade");
    let cep = document.getElementById("cep");

    const data = {
        nomeEstabelecimento: nome.value,
        cnpj: parseInt(cnpj.value.replace(/[^0-9]/g, '')),
        logradouro: logradouro.value,
        cidade: cidade.value,
        cep: parseInt(cep.value.replace(/[^0-9]/g, '')),
        numero: parseInt(numero.value.replace(/[^0-9]/g, '')),
    }

    fetch('https://economiza.azurewebsites.net/Estabelecimento', {

            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(function(res) {
            res.json()
            alert("Estabelecimento cadastrado com sucesso!")
            window.location.replace("list.html");
        })
        .catch(function(res) {
            console.log(res)
        });

}