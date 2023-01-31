import VueRouter from 'vue-router'
import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'
import NotFound from '@/views/NotFound'
import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'

// 创建路由规则数组
const routes = [
  {
    path: '/',
    // 给路由起名字
    name: 'index',
    redirect: '/my',
  },
  {
    path: '/find',
    name: 'find',
    component: Find,
    children: [
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'ranking',
        component: Ranking,
      },
      {
        path: 'songlist',
        component: SongList,
      },
    ],
  },
  {
    path: '/my',
    name: 'my',
    component: My,
  },
  {
    path: '/part',
    name: 'part',
    component: Part,
  },
  {
    path: '/part/:username',
    name: 'part_username',
    component: Part,
  },
  {
    path: '*',
    component: NotFound,
  },
]

// 创建路由对象并关联路由规则
const router = new VueRouter({
  routes,
  mode: 'history',
})

// 模拟用户是否登录
const isLogin = false

router.beforeEach((to, from, next) => {
  if (to.path === '/my' && !isLogin) {
    alert('请先登录')
    next(false) // 阻止路由跳转
  } else {
    next() // 正常放行
  }
})

export default router
