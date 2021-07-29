<template>
  <div class="container">
    <div class="list">
      <strong>编辑:</strong>
      <CheckedEditor
        v-for="item in task"
        :key="item.id"
        v-model="item.sell"
        v-model:title.trim="item.title"
      />
    </div>
    <div class="list">
      <strong>销售中:</strong>
      <div>
        <template v-for="(item, i) in sellTask" :key="item.id">
          <span>{{ i + 1 }}.</span>
          <strong>{{ item.title }}</strong>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedEditor from "./components/checkedEditor.vue";
import { ref, computed } from "vue";
export default {
  components: {
    CheckedEditor,
  },
  setup() {
    const tasksRef = ref([
      {
        id: 1,
        sell: true,
        title: "iphone12",
      },
      { id: 2, sell: false, title: "xiaomi" },
      { id: 3, sell: true, title: "huawei" },
      { id: 4, sell: true, title: "vivo" },
    ]);
    const sellTaskRef = computed(() => {
      return tasksRef.value.filter((it) => it.sell);
    });
    return {
      task: tasksRef,
      sellTask: sellTaskRef,
    };
  },
};
</script>

<style scoped>
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
