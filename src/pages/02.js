import { mount } from 'svelte'
import '../reset.scss'
import Clock from '../components/Clock.svelte'

const app = mount(Clock, {
  target: document.getElementById('clock'),
})

export default app
