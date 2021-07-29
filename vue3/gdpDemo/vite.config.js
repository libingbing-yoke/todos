export default {

    proxy: {
        '/api': {
            target: 'http://127.0.0.1:5500/gdpDemo',
            rewrite: (path) => path.replace(/^\/api/, '')
        },
    }

}