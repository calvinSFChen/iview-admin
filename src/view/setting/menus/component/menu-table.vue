<template>
  <div>
    <div>
      <Form ref="formInline" :model="formInline" inline>
        <FormItem label="状态" :label-width="50">
          <Input type="text" v-model="formInline.status" placeholder="">
          </Input>
        </FormItem>
        <FormItem label="名称" :label-width="50">
          <Input type="text" v-model="formInline.name" placeholder=""> </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
          <Button type="primary" @click="handleAdd()" style="margin-left: 10px">添加</Button>
        </FormItem>
      </Form>
    </div>

    <div>
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="handleAdd(index)"
            >查看</Button
          >
          <Button type="error" size="small" @click="handleDelete(index)"
            >Delete</Button
          >
        </template>
      </Table>
      <Page
        :total="pages.total"
        :current="pages.page"
        show-elevator
        show-total
        @on-change="handleChangePage"
        :page-size="pages.limit"
        style="margin-top: 10px; text-align: center"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'menuTable',
  data () {
    return {
      pages: {
        page: 1,
        total: 20,
        limit: 10
      },
      formInline: {},
      columns12: [
        {
          title: 'Name',
          slot: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data6: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  },
  methods: {
    handleSubmit () {
      console.log('handleSubmit')
    },
    handleDelete () {
      console.log('handleDelete')
    },
    handleAdd () {
      this.$emit('handleAdd')
    },
    handleChangePage () {
      console.log('handleChangePage')
    }
  }
}
</script>
<style>
</style>
