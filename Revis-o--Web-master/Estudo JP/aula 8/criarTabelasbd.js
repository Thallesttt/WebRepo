var conexao=require('./conectarAgenda.js');

conexao.connect(
    
    function(err){
        if (err)
            throw err;
        else{
            console.log('Conexão estabelecida com sucesso!!!')
            var op='CREATE TABLE pessoa(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,nome VARCHAR(50), email VARCHAR(35))';

            conexao.query(op,
                function(err){
            if (err)
                throw err;
            else{
        console.log('tabela criada com sucesso')
            }
        });
    }
}
);

        /*
        var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            console.log('Conexão estabelecida com sucesso!!!');

            var operacao = 'CREATE TABLE pessoa(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50), email VARCHAR(30))';

            conexao.query(operacao,
                function(err) {
                    if (err)
                        throw err;
                    else
                        console.log('Tabela criada com sucesso!!!');
                }
            );
        }
    }
);
*/ 
