<template>
  <div>
    <Modal
      v-model="modals"
      width="700"
      scrollable
      footer-hide
      closable
      :title="title"
      :mask-closable="false"
      :z-index="999"
      @on-cancel="handleReset"
      @on-ok="handleSubmit"
    >
      <Form
        ref="formValidate"
        :model="formValidate"
        :label-width="110"
        @submit.native.prevent
      >
        <Row type="flex" :gutter="24">
          <Col v-bind="grid">
            <FormItem :label="'菜单名称'">
              <div class="add">
                <Input v-model="formValidate.title" :placeholder="'菜单名称'">
                </Input>
              </div>
            </FormItem>
          </Col>

          <Col v-bind="grid">
            <FormItem label="父级分类">
              <Select v-model="formValidate.methods">
                <Option value="">请求</Option>
                <Option value="GET">GET</Option>
                <Option value="POST">POST</Option>
                <Option value="PUT">PUT</Option>
                <Option value="DELETE">DELETE</Option>
              </Select>
            </FormItem>
          </Col>
          <Col v-bind="grid">
            <FormItem label="接口地址：">
              <Input
                v-model="formValidate.path"
                placeholder="请输入接口地址"
                prop="path"
              ></Input>
            </FormItem>
          </Col>
          <Col v-bind="grid">
            <FormItem label="图标：">
              <Input
                v-model="formValidate.icon"
                placeholder="请选择图标，点击右面图标"
                icon="ios-appstore"
                @on-click="handleIconClick"
              ></Input>
            </FormItem>
          </Col>

          <Col v-bind="grid">
            <FormItem label="排序：">
              <Input
                type="number"
                v-model="formValidate.sort"
                placeholder="请输入排序"
                number
              ></Input>
            </FormItem>
          </Col>
          <Col :xs="24">
            <FormItem label="状态：">
              <RadioGroup v-model="formValidate.is_show">
                <Radio label="1">
                  <span>开启</span>
                </Radio>
                <Radio label="0">
                  <span>关闭</span>
                </Radio>
              </RadioGroup>
            </FormItem>
          </Col>
          <Col span="24">
            <Button type="primary" long @click="handleSubmit('formValidate')"
              >提交</Button
            >
          </Col>
        </Row>
      </Form>
    </Modal>
  </div>
</template>
<script>
import { getTreeList } from '@/api/module/menus'
const createFormData = function () {
  return {
    methods: '',
    pid: '',
    icon: '',
    title: '',
    sort: '',
    is_show: '',
    path: ''
  }
}
export default {
  name: 'modalForm',
  data () {
    return {
      modals: false,
      title: '弹框',
      authType: true,
      formValidate: createFormData(),
      grid: {
        xl: 12,
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      }
    }
  },
  methods: {
    handleSubmit () {
      getTreeList()
        .then(async (res) => {
          if (res.code !== 200) {
            this.$Message.error(res.msg)
            return
          }
          this.$Message.info(res.msg)
          this.formValidate = createFormData()
          this.modals = false
        })
        .catch((res) => {
          this.$Message.error(res.msg)
        })
    },
    handleAdd (title) {
      this.modals = true
      this.title = title
    },
    handleIconClick () {
      console.log('handleIconClick')
      this.$emit('handleViewIcon')
    },
    handleSetIconVal (val) {
      this.formValidate.icon = val
    },
    handleReset (name) {
      this.$refs[name].resetFields()
      this.formValidate = createFormData()
    }
  }
}
</script>
<style>
</style>
