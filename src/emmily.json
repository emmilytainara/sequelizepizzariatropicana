const {Pool} = require ("pg");
async function criarConexao () {
    const pool = new Pool({
        connectionString:'postgres://puywwxvipodsjk : 0a646a05b59d358407c7172a999665ccbcf3676a05f7b9e706e0eed3350bfbe0 @ ec2-34-192-58-41.compute-1.amazonaws.com : 5432 / dfdu03fhl5kptbpt',
        ssl: {
            rejectUnauthorized: false
        }
    });

    let con = await pool.connect();
    let res = await con.query("create table pessoa (id_pes serial primary key, nome varchar, sobrenome varchar, telefone integer, endereco varchar)");

    let nome = "pessoa"
    let sobrenome = "sobrenome"
    let endereco = "endereco"
    let telefone = "telefone"
    //let res = await con.query("insert into pessoa (nome, sobrenome, endereco, telefone) values ($1, $2, $3, $4)", ["pessoa1", "sobrenome2", "endereco3", "telefone4"]);
   // let res = await con.query("insert into pessoa (nome, sobrenome, endereco, telefone) values ($1, $2, $3, $4)", ["Emmily", "Lima", "Freitas", "96033600"]); 
   // await con.query("uptade pessoa set nome = $1 where id_pes = $2", ["pessoa1", 1]); 
   await con.query("delete from pessoa where nome like 'pessoa%'");
   await con.query("delete from pessoa where endereco like 'endereco%'");
   await con.query("delete from pessoa where telefone like 'telefone%'");
   let res = await con.query("select * from pessoa");  
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log ("tupla");
    }
    con.release();
}
criarConexao();