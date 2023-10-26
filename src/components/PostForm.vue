<template>
  <div class="modal" tabindex="-1" id="form-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit()">
            <div class="form-floating mb-3">
              <input v-model="editable.title" type="text" class="form-control" id="floatingInput" placeholder=""
                maxlength="200" required>
              <label for="floatingInput">Title</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="editable.body" type="text" class="form-control" id="floatingInput" placeholder=""
                maxlength="400" required>
              <label for="floatingInput">Description</label>
            </div>
            <div class="form-floating">
              <input v-model="editable.imgUrl" type="url" class="form-control" id="floatingPassword" placeholder=""
                maxlength="500">
              <label for="floatingPassword">Image Url</label>
            </div>
            <button class="btn btn-outline-dark text-end mt-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger";
import { blogsService } from "../services/BlogsService";
import { Modal } from "bootstrap";
import Pop from "../utils/Pop";
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      handleSubmit() {
        if (!editable.value.id) {
          this.createPost()
        }

      },
      async createPost() {
        try {
          const blogData = editable.value
          await blogsService.createPost(blogData)

          // Modal.getOrCreateInstance('#form-modal').hide()

        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>