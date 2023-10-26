<template>
  <div class="container-fluid">
    <PostForm />
    <section v-if="profile" class="row">
      <div class="col-12 d-flex align-items-center p-5">
        <img class="img-Pfp rounded-circle " :src="profile.picture" alt="">
        <h1 class="d-inline ms-5">{{ profile.name }}</h1>
        <i class="mdi fs-2 ms-5 mdi-pen btn btn-outline-dark" title="edit profile"></i>
      </div>
      <div class="col-12 ps-5 pe-5">
        <p>{{ profile.bio }}</p>
      </div>
      <div class="col-12 text-end d-flex align-items-center justify-content-end">
        <i role="button" data-bs-toggle="modal" data-bs-target="#form-modal"
          class="mdi mdi-plus fs-4 me-5 btn btn-outline-dark mb-3" title="create post"></i>
      </div>
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blog="blog" />
      </div>
    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService"
import Pop from "../utils/Pop";
export default {
  setup() {
    const route = useRoute();
    async function getProfile() {
      try {
        const profileId = route.params.profileId
        await profilesService.getProfile(profileId)

      } catch (error) {
        Pop.error(error)
      }
    }

    async function getBlogsByProfileId() {
      try {
        const profileId = route.params.profileId
        await profilesService.getBlogsByProfileId(profileId)
      } catch (error) {
        Pop.error
      }
    }
    onMounted(() => {
      getProfile()
      getBlogsByProfileId()
    })
    return {
      blogs: computed(() => AppState.blogs),
      profile: computed(() => AppState.profile)
    }
  }
};
</script>


<style lang="scss" scoped>
.img-Pfp {
  height: 8rem;
  width: 8rem;
}
</style>