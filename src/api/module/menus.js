import request from '@/libs/request'

export const getTreeList = (data) => {
  return request({
    url: '/setting/menu/get-tree-list',
    data: data,
    method: 'get'
  })
}
