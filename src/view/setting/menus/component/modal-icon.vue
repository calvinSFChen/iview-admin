<template>
  <div>
    <Modal v-model="modals" scrollable width="600" title="图标选择" footer-hide>
      <Input
        v-model="iconVal"
        placeholder="输入关键词搜索,注意全是英文"
        clearable
        style="width: 300px"
        @on-change="handleUpIcon(iconVal)"
        ref="search"
      />
      <div class="trees-coadd">
        <div class="scollhide">
          <div class="iconlist">
            <ul class="list-inline">
              <li
                class="icons-item"
                v-for="(item, i) in list"
                :key="i"
                :title="item.type"
              >
                <Icon
                  :type="item.type"
                  @click="handleIconChange(item.type)"
                  class="ivu-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import icon from '@/libs/icon'
export default {
  name: 'modal-icon',
  data () {
    return {
      modals: false,
      list: icon,
      iconVal: ''
    }
  },
  methods: {
    handleUpIcon () {
      let arrs = []
      for (var i = 0; i < this.search.length; i++) {
        if (this.search[i].type.indexOf(n) !== -1) {
          arrs.push(this.search[i])
          this.list = arrs
        }
      }
    },
    handleIconChange (val) {
      this.$emit('handleSetIconVal', val)
      this.modals = false
    },
    handleView () {
      this.modals = true
    }
  }
}
</script>
<style scoped>
.trees-coadd {
  width: 100%;
  height: 500px;
  border-radius: 4px;
  overflow: hidden;
}

.scollhide {
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-left: 18px;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
}
.icons-item {
  float: left;
  margin: 6px 6px 6px 0;
  width: 53px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 50px;
  color: #5c6b77;
  transition: all 0.2s ease;
  position: relative;
  padding-top: 10px;
}

.icons-item .ivu-icon {
  font-size: 16px;
}

</style>
