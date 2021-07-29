<template>
  <div class="container">
    <div class="block">
      <h2>区域1</h2>
      <p>
        <button @click="modelShow = true">打开蒙层</button>
      </p>
      <teleport to="body">
        <Model v-if="modelShow">
          <button @click="modelShow = false">关闭蒙层</button>
        </Model>
      </teleport>
    </div>
    <div class="block mid">
      <h2>区域2</h2>
    </div>
    <div class="block big"><Block3 /></div>
    <div class="block big"><h2>区域4</h2></div>
    <div class="block mid"><Block5 /></div>
    <div class="block"><h2>区域6</h2></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { asyncComponent } from "../util/index";
import Model from "../components/Model.vue";
const Block3 = asyncComponent("../components/Block3.vue");
const Block5 = asyncComponent("../components/Block5.vue");
export default {
  components: { Block3, Block5, Model },
  setup() {
    const modelShowRef = ref(false);
    return {
      modelShow: modelShowRef,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 50px;
  justify-content: space-between;
}
.block {
  width: 200px;
  margin: 15px;
  height: 250px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mid {
  width: 300px;
}
.big {
  width: 400px;
}
</style>