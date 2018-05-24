import Stop1 from '@/pages/Stop1'
import Stop2 from '@/pages/Stop2'
import Stop3 from '@/pages/Stop3'

const flow = [
  {
    path: '/:context/stop1',
    name: 'Stop1',
    component: Stop1,
    props: true,
    meta: { back: '', next: 'stop2' }
  },
  {
    path: '/:context/stop2',
    name: 'Stop2',
    component: Stop2,
    props: true,
    meta: { back: 'stop1', next: 'stop3' }
  },
  {
    path: '/:context/stop3',
    name: 'Stop3',
    component: Stop3,
    props: true,
    meta: { back: 'stop2', next: '' }
  }
]

export default flow
