export function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function delay(duration) {
    if (!duration) {
        duration = random(1000, 5000)
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}

import {
    defineAsyncComponent,
    h
} from 'vue';
import Loading from '../components/Loading.vue'
import Error from '../components/Error.vue'
import nprogress from 'nprogress'
import "nprogress/nprogress.css";
nprogress.configure({
    showSpinner: false,
    trickleSpeed: 50
})
window.nprogress = nprogress



export function getAsyncComponent(path) {
    return defineAsyncComponent({
        loader: async () => {
            await delay();
            if (Math.random() < 0.5) {
                return import(path)
            }
            throw new TypeError()
        },
        loadingComponent: Loading,
        errorComponent: {
            render() {
                return h(Error, '出错了!!!')
            }
        }
    })
}

export function getAsyncPage(path) {
    return defineAsyncComponent({
        loader: async () => {
            nprogress.start();
            await delay();
            const comp = await import(path);
            nprogress.done();
            return comp
        },
        loadingComponent: Loading,
    })
}