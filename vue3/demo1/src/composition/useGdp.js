import {
    computed,
    watch,
    ref,
    watchEffect
} from 'vue';
import gsap from 'gsap'
const colors = ["#334552", "#B34335", "#6E9FA5", "#A2C3AC", "#C8846C"];

export default function useGdp(maxSize, gdp) {
    console.log(gdp);
    let max = computed(() => {
        if (gdp.value.length) {
            return Math.max(...gdp.value.map(it => it.value))
        }
        return 0
    })
    let bars = ref([]);
    let targetBars = computed(() => {
        return gdp.value.map((it, i) => {
            let size = (it.value / max.value) * maxSize;
            return {
                size,
                color: colors[i % colors.length],
                ...it
            }
        })
    })

    watchEffect(() => {
        targetBars,
        bars
        console.log(targetBars, bars);
    })

    watch(
        targetBars,
        (newValue) => {
            for (let i = 0; i < newValue.length; i++) {
                if (!bars.value[i]) {
                    bars.value[i] = {
                        ...newValue[i],
                        size: 0,
                        value: 0,
                    };
                }
                gsap.to(bars.value[i], {
                    ...newValue[i],
                    duration: 1,
                });
            }
        }, {
            deep: true,
        }
    );




    return {
        bars
    }
}