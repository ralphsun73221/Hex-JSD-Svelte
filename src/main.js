import { mount } from 'svelte'
import './reset.scss'
import Chengfabiao from './components/Chengfabiao.svelte'

const CHENGFABIAO  = mount(Chengfabiao, {
  target: document.getElementById('Chengfabiao'),
})

export default Chengfabiao
