const substituicoes = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const substituicoesInversas = {};
for (const chave in substituicoes) {
    substituicoesInversas[substituicoes[chave]] = chave;
}


const criptografar = (texto) => {
    let resultado = texto;
    for (const chave in substituicoes) {
        const regex = new RegExp(chave, 'g');
        resultado = resultado.replace(regex, substituicoes[chave]);
    }
    return resultado;
}

const descriptografar = (texto) => {
    let resultado = texto;
    for (const chave in substituicoesInversas) {
        const regex = new RegExp(chave, 'g');
        resultado = resultado.replace(regex, substituicoesInversas[chave]);
    }
    return resultado;
}

document.getElementById('criptografar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    document.getElementById('textoSaida').innerText = criptografar(texto);
    document.getElementById('nenhumaMensagem').innerText = ('');
    document.getElementById('texto').value = ('');
});

document.getElementById('descriptografar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    document.getElementById('textoSaida').innerText = descriptografar(texto);
    document.getElementById('nenhumaMensagem').innerText = ('');
    document.getElementById('texto').value = ('');
});
