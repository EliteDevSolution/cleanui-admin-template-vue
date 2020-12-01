<template>
  <div>
    <h5 class="mb-3">
      <strong>Basic</strong>
    </h5>
    <div class="mb-5">
      <a-list bordered :dataSource="data">
        <a-list-item slot="renderItem" slot-scope="item">{{item}}</a-list-item>
        <div slot="header">Header</div>
        <div slot="footer">Footer</div>
      </a-list>
    </div>
    <h5 class="mb-3">
      <strong>With Avatar</strong>
    </h5>
    <div class="mb-5">
      <a-list itemLayout="horizontal" :dataSource="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <a slot="title" href="https://www.antdv.com/">{{item.title}}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]
export default {
  name: 'KitAntdListExample',
  data() {
    return {
      data,
    }
  },
}
</script>
