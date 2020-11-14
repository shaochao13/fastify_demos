
const fastifyPlugin = require('fastify-plugin')

async function mongodbConnector(fastify, options) {
    fastify.register(require('fastify-mongodb'), {
        url: 'mongodb://192.168.0.152:27017/test_database'
    })
}

module.exports = fastifyPlugin(mongodbConnector)