import { mount } from 'svelte'
import './reset.scss'
// import Main from './components/Main.svelte'
import Chengfabiao from './components/Chengfabiao.svelte'

const app = mount(Chengfabiao, {
  target: document.getElementById('app'),
})

export default app
