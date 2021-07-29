const colors = ["#334552", "#B34335", "#6E9FA5", "#A2C3AC", "#C8846C"];
import {
    ref,
    computed,
    watch,
    onMounted
} from 'vue'
import gsap from 'gsap';

export default function useGdpRef(gdpRef, maxSize) {
    const maxValue = computed(() => {
        if (gdpRef.value.length) {
            return Math.max(...gdpRef.value.map(it => it.value));
        };
        return 0;
    });
    const bars = ref([]);
    const barsTarget = computed(() => {
        // gdpRef.value.map((it, i) => {
        //     return {
        //         ...it,
        //         color: colors[i % colors.length],
        //         size: (it.value / maxValue.value) * maxSize
        //     };
        // });
        console.log(gdpRef.value);
        gdpRef.value.map((it, i) => {
            let size = (it.value / maxValue.value) * maxSize;
            return {
                size,
                color: colors[i % colors.length],
                ...it,
            };
        })
    });

    watch(barsTarget, (newValue) => {
        for (let i = 0; i < newValue.length; i++) {
            if (!bars.value[i]) {
                bars.value[i] = {
                    ...newValue[i],
                    size: 0,
                    value: 0
                }
            }
            gsap.to(bars.value[i], {
                ...newValue[i],
                duration: 1
            })
        }
    }, {
        deep: true
    });

    return {
        bars
    }
}