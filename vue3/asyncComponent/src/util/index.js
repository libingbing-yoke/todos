import {
    defineAsyncComponent,
    h
} from "vue";
import loading from '../components/loading.vue'
import ErrorComp from '../components/Error.vue'
import NProgress from 'nprogress'
NProgress.configure({
    trickleSpeed: 50,
    showSpinner: false
})

export function delay(duration) {
    if (!duration) {
        duration = random(1000, 3000)
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}

export function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


export function asyncComponent(path) {
    return defineAsyncComponent({
        loader: async () => {
            await delay();
            if (Math.random() < 0.5) {
                throw new Error()
            }
            return import(path)
        },
        loadingComponent: loading,
        errorComponent: {
            render() {
                return h(ErrorComp, '出错了！！！')
            }
        }
    })
}

export function asyncPage(path) {
    return defineAsyncComponent({
        loader: async () => {
            NProgress.start();
            await delay();
            const comp = await import(path);
            NProgress.done()
            return comp
        },
        loadingComponent: loading,
    })
}