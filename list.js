window.onload = getEstablishments();

function getEstablishments() {

    fetch("https://economiza.azurewebsites.net/Estabelecimento", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(
        res => {
            res.json().then(
                data => {
                    console.log(data);
                    if (data.length > 0) {

                        var temp = "";
                        data.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<th scope='row'>" + itemData.idEstabelecimento + "</th>";
                            temp += "<td>" + itemData.nomeEstabelecimento + "</td>";
                            temp += "<td>" + itemData.cnpj + "</td>";
                            temp += "<td>" + itemData.logradouro + "</td>";
                            temp += "<td>" + itemData.numero + "</td>";
                            temp += "<td>" + itemData.cep + "</td>";
                            temp += "<td>" + itemData.cidade + "</td>";
                            temp += "</tr>";
                        });
                        document.getElementById('estabelecimentos').innerHTML = temp;
                    }
                }
            )
        }

    )

}