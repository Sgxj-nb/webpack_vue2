<template>
  <div>
    <img src="../ass/img/8cce038764839fca8e2d7b8de8eb417.png" alt="" />

    <div>
      <input type="text" v-model="ingo.username" name="" id="" />
      <input type="text" v-model="ingo.password" name="" id="" />
      <div>
        <button @click="addinfo">点击</button>
      </div>
      <div class="quanzhaninfo">字体大小</div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/index';
export default {
  data() {
    return {
      ingo: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    addinfo() {
      login(this.ingo).then((res) => {
        console.log(res);
      });
    },
    add() {
      new Promise((a, b) => {
        console.log(a, b);
      });
    }
  },
  created() {
    this.add();
  }
};
</script>

<style scoped>
.quanzhaninfo {
  font-size: 12px;
}
</style>
