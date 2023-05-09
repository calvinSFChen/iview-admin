<template>
  <div>
    <menu-table ref="menuTable" @handleAdd="handleAdd"></menu-table>
    <modal-form ref="modalForm" @handleViewIcon="handleViewIcon"></modal-form>
    <modal-icon ref="modalIcon" @handleSetIconVal="handleSetIconVal"></modal-icon>
  </div>
</template>
<script>
import menuTable from './component/menu-table'
import modalForm from './component/modal-form'
import modalIcon from './component/modal-icon'
export default {
  name: 'menus',
  components: { menuTable, modalForm, modalIcon },
  methods: {
    handleAdd () {
      this.$refs.modalForm.handleAdd('新增')
    },
    handleViewIcon () {
      this.$refs.modalIcon.handleView()
    },
    handleSetIconVal (val) {
      this.$refs.modalForm.handleSetIconVal(val)
    }
  }
}
</script>

<style lang="stylus"></style>
