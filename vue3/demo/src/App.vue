<template>
  <div class="container">
    <div class="list">
      <strong>编辑:</strong>
      <!-- v-model双向绑定复选框是否选中          
          v-model:title双向绑定商品名称数据 -->
      <div class="list">
        <CheckEditor
          v-for="item in productsRef"
          :key="item.id"
          v-model="item.sell"
          v-model:title="item.title"
        />
      </div>
    </div>
    <div class="list">
      <strong>销售中:</strong>
      <div>
        <template v-for="(item, index) in sellsRef" :key="item.id">
          <span>{{ index + 1 }}.</span>
          <strong>{{ item.title }}</strong>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import CheckEditor from "./components/CkeckEditor.vue";

const defaultSells = [
  {
    id: 1,
    sell: true,
    title: "iphone12",
  },
  { id: 2, sell: false, title: "xiaomi" },
  { id: 3, sell: true, title: "huawei" },
  { id: 4, sell: true, title: "vivo" },
];
export default {
  components: {
    CheckEditor,
  },
  setup() {
    const productsRef = ref(defaultSells); //把数据变为响应式数据

    const sellsRef = computed(() => productsRef.value.filter((it) => it.sell)); //筛选出上架中的商品

    return {
      productsRef,
      sellsRef,
    };
  },
};
</script>

<style>
.container {
  margin-top: 50px;
  width: 880px;
  margin: 50px auto;
}
.list {
  display: flex;
  margin: 1em 0;
  align-items: center;
}
strong {
  margin-right: 1em;
  white-space: nowrap;
}
</style>