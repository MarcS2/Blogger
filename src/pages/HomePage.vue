<template>
  <div class="container-fluid">
    <section class="row">
      <div v-for="blog in blogs" :key="blog.blogId" class="col-12">
        <BlogCard :blog="blog" />
      </div>
    </section>

  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { blogsService } from "../services/BlogsService";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState.js"

export default {
  setup() {
    async function getBlogs() {
      await blogsService.getBlogs()
      logger.log('[Appstate] Blogs', AppState.blogs)
    }
    onMounted(() => {
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss"></style>
