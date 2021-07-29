import {
    asyncPage
} from '../util/index'

const Home = asyncPage('../views/Home.vue')
const About = asyncPage('../views/About.vue')

export default [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]