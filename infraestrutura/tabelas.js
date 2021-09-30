class Tabelas {
	init(conexao) {
		this.conexao = conexao;
		this.criarAtendimentos();
		console.log('Tabelas criadas!')
	}

	criarAtendimentos() {

		const sql = ```CREATE TABLE IF NOT EXISTS tb_atendimento 
		(
			id int NOT NULL AUTOINCREMENT, 
			client VARCHAR(50) NOT NULL, 
			pet VARCHAR(20), 
			servico VARCHAR(20) NOT NULL, 
			status VARCHAR(20) NOT NULL,
			observacoes text, 
			PRIMARY KEY(id))```

		this.conexao.query(sql, (error) =>{
			if (error) {
				console.log(error)
			} else {
				console.log("TABELA ATENDIMENTOS CRIADA COM SUCESSO!")
			}

		})
		//espera uma query sql e função
	}
}

module.exports = new Tabelas