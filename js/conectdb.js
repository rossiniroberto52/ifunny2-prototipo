

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "qualquer titulo",
    consteudo: "fgefegyfgeyfgeygfy"
})

const Usuario = sequelize.define("usuarios", {
    nome:{
        type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome:"Rossini",
    sobrenome:"junior",
    idade: 14,
    email: "rossiniroberto52"
})

//Usuario.sync({force: true})