<template>
  <section class="row">
    <div class="col-9">
      <router-link :to="{ name: 'Profile', params: { profileId: blog.creatorId } }" role="button">

        <p class="d-inline me-5 text-dark">{{ blog.creator.name }}</p>
        <img class="rounded-circle img-Pfp" :src="blog.creator.picture" alt="">


      </router-link>
      <h1>
        {{ blog.title }}
      </h1>
      <p class="fs-5">{{ blog.body }}</p>
    </div>
    <div class="col-3">
      <img class="img-blogThumbnail" :src="blog.imgUrl" alt="blog image">
    </div>
  </section>
</template>


<script>
import { blogsService } from '../services/BlogsService'
import { Blog } from "../models/Blog";
import { AppState } from '../AppState';
import { computed, reactive, onMounted, onUnmounted } from 'vue';
export default {
  props: { blog: { type: Blog, required: true } },

  setup() {
    onUnmounted(() => {
      blogsService.clearData()
    })
    return {}
  }
};
</script>


<style lang="scss" scoped>
.img-blogThumbnail {
  height: 35vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.img-Pfp {
  height: 3.5rem;
  width: 3.5rem;
}
</style>