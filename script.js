document.getElementById('executeBtn').addEventListener('click', function() {
    const sqlInput = document.getElementById('sqlImput').value;
    const resultDiv = document.getElementById('result');
    
        //Simulaçao basica de execuçao SQL
        if(sqlInput.toLowerCase().include('select')) {
            resultDiv.innerHTML = '<p>Resultado da consulta: Exemplo de fafod retornados.</p>';
        } else if (sqlInput.toLowerCase().include('insert')) {
            resultDiv.innerHTML = '<p>Dados inseridos com sucesso!</p>'; 
        } else if (sqlInput.toLowerCase().include('delete')){
            resultDiv.innerHTML  = '<p>Dados deletados com sucesso!</p>';
        } else {
            resultDiv.innerHTML = '<p>Erro: Comando SQL não reconhecido ou não suportado.</p>'
        }
});
