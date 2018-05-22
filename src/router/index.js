import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
const About = { template: '<div><h2>About Page</h2></div>' }

export default[
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]
