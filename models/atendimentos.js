//Conexoes com o banco de dados

const conexao = require('../infraestrutura/conexao')


class Atendimento {

	adiciona(atendimento) {
		const sql = 'INSERT INTO tb_atendimentos SET ?'

		conexao.query(sql, atendimento, (error, results) => {
			if (error){
				console.log(error)
			} else {
				console.log("SUCCESS")
				console.log(results)
			}
		})

	}
}