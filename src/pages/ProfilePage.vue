<template>
  <div class="container-fluid">
    <section v-if="profile" class="row">
      <div class="col-12 d-flex align-items-center p-5">
        <img class="img-Pfp rounded-circle " :src="profile.picture" alt="">
        <h1 class="d-inline ms-5">{{ profile.name }}</h1>
      </div>
      <div class="col-12 ps-5 pe-5">
        <p>{{ profile.bio }}</p>
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