<template>
  <div class="pic_container">
    <img v-for="(photo, index) in photos" :src="photo" :key='index' />
  </div>
</template>
<script>
export default {
  data() {
    return {
      numbers: [...Array(42).keys()],
    };
  },
  computed: {
    photos() {
      return this.numbers.map(
        (num) => `https://picsum.photos/1400?random=${num}`
      );
    },
  },
};
</script>

<style scoped>
.pic_container {
  background: black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

div img {
  width: 100%;
  object-fit: cover;
}

@media screen and (min-width: 925px) and (max-width: 1600px) {
  .pic_container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 568px) and (max-width: 924px) {
  .pic_container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 567px) {
  .pic_container {
    grid-template-columns: 1fr;
  }
}
</style>
