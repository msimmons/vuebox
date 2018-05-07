import Stop1 from '@/pages/Stop1'
import Stop2 from '@/pages/Stop2'
import Stop3 from '@/pages/Stop3'

function generateFlow (start) {
  return [
    {
      path: `${start}/stop1`,
      name: `${start}-Stop1`,
      component: Stop1,
      meta: { back: `${start}/stop1`, next: `${start}/stop2` }
    },
    {
      path: `${start}/stop2`,
      name: `${start}-Stop2`,
      component: Stop2,
      meta: { back: `${start}/stop2`, next: `${start}/stop3` }
    },
    {
      path: `${start}/stop3`,
      name: `${start}-Stop3`,
      component: Stop3,
      meta: { back: `${start}/stop2`, next: `${start}` }
    }
  ]
}
const flows = generateFlow('/start1').concat(generateFlow('/start2'))

export default flows
