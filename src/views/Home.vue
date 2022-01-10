<template>
  <div>
    <img src="../ass/img/8cce038764839fca8e2d7b8de8eb417.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
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

<style></style>
