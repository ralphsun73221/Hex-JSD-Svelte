import { mount } from 'svelte'
import '../reset.scss'
import Chengfabiao from '../components/Chengfabiao.svelte'

const app = mount(Chengfabiao, {
  target: document.getElementById('chengfabiao'),
})

export default app
