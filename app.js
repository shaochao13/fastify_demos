
//加载框架并新建实例
const fastify = require('fastify')({
    logger: {
        level: 'info',
        file: '/Users/kevin/Documents/gits/fastify_demos/logs/info.log'
    }
})


fastify.register(require('./db/mongo-db-connector'))

fastify.addHook('onRequest', (request, reply, done) => {
    console.log('..........')
    done()
})

//路由
fastify.register(require('./routes/index_route'))


const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()