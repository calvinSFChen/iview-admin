
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  }
//   {
//     path: '/setting',
//     component: layout,
//     children: [
//       {
//         path: '/setting/menu/index',
//         name: `menu_management`,
//         meta: {
//           title: `menu_management`
//         },
//         component: () => import('@/view/setting/menus/index')
//       }
//     ]
//   }
]
