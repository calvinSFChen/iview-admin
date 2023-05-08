
/**
 * 布局菜单配置
 * */
function getMenusName () {
  let storage = window.localStorage
  let menuList = JSON.parse(storage.getItem('menuList'))
  if (typeof menuList !== 'object' || menuList === null) {
    menuList = []
  }
  return menuList
}
export default {
  namespaced: true,
  state: {
    menuList: getMenusName(),
    openMenus: [],
    childMenuList: []
  },
  mutations: {
    getmenusNav (state, menuList) {
      state.menuList = menuList
    },
    // getopenMenus (state, openList) {
    //   state.openMenus = openList
    // }
    setopenMenus (state, openList) {
      state.openMenus = openList
    },
    childMenuList (state, list) {
      state.childMenuList = list
    },
    setMenusNav (state, menuList) {
      console.log(1111, menuList)
      state.menuList = menuList
    }
  },
  actions: {
    getMenusNavList ({ commit }) {
      return new Promise((resolve, reject) => {
        // menusApi()
        //   .then(async (res) => {
        //     resolve(res)
        //     commit('getmenusNav', res.data.menus)
        //   })
        //   .catch((res) => {
        //     reject(res)
        //   })
      })
    }
  }
}
