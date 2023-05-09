import layout from '@/components/main'

export default [
  {
    path: '/setting',
    component: layout,
    children: [
      {
        path: '/setting/menu/index',
        name: `menu_management`,
        meta: {
          title: `menu_management`
        },
        component: () => import('@/view/setting/menus/index')
      }
    ]
  }
]
