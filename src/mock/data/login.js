import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    userinfo: {
      name: 'super_admin',
      user_id: '1',
      access: ['super_admin', 'admin'],
      token: 'super_admin',
      avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
    },
    menus: [
      {
        path: '/home',
        title: '首页',
        icon: 'md-home',
        children: []
      },
      {
        path: '/join/join_page',
        icon: '_qq',
        title: 'QQ群',
        children: []
      },
      {
        path: '/message/message_page',
        icon: 'md-notifications',
        title: '消息中心',
        children: []
      },
      {
        path: '/components',
        icon: 'logo-buffer',
        title: '组件',
        children: [
          {
            path: '/components/tree_select_page',
            icon: 'md-arrow-dropdown-circle',
            title: '树状下拉选择器',
            children: []
          },
          {
            path: '/components/count_to_page',
            icon: 'md-trending-up',
            title: '数字渐变',
            children: []
          },
          {
            path: '/components/drag_list_page',
            icon: 'ios-infinite',
            title: '拖拽列表',
            children: []
          },
          {
            path: '/components/drag_drawer_page',
            icon: 'md-list',
            title: '可拖拽抽屉',
            children: []
          },
          {
            path: '/components/org_tree_page',
            icon: 'ios-people',
            title: '组织结构树',
            children: []
          },
          {
            path: '/components/tree_table_page',
            icon: 'md-git-branch',
            title: '树状表格',
            children: []
          }
        ]
      },
      {
        path: '/update',
        icon: 'md-cloud-upload',
        title: '数据上传',
        children: [
          {
            path: '/update/update_table_page',
            icon: 'ios-document',
            title: '上传Csv',
            children: []
          },
          {
            path: '/update/update_paste_page',
            icon: 'md-clipboard',
            title: '粘贴表格数据',
            children: []
          }
        ]
      },
      {
        path: '/excel',
        icon: 'ios-stats',
        title: 'EXCEL导入导出',
        children: [
          {
            path: '/excel/upload-excel',
            icon: 'md-add',
            title: '导入EXCEL',
            children: []
          },
          {
            path: '/excel/export-excel',
            icon: 'md-download',
            title: '导出EXCEL',
            children: []
          }
        ]
      }
    ]
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  return {
    code: 200,
    msg: '操作成功',
    data: USER_MAP[req.userName]
  }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}
