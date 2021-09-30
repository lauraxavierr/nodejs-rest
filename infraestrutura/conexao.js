const mysql = requier('mysql')

const conexao = mysql.createConnection({
	host: 'a',
	port: 3306,
	user: 'a',
	password: 'a',
	database: 'a'
})

module.exports = conexao