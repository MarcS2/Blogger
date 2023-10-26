import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { Blog } from "../models/Blog"
import { AppState } from "../AppState"
class BlogService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log('Got Blogs', res.data)
    const blogs = res.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
  }

  async createPost(blogData) {
    const res = await api.post('api/blogs', blogData)
    const newPost = new Blog(res.data)
    logger.log('[AppState] createPost() post made', newPost)
    AppState.blogs.push(newPost)
  }

  clearData() {
    AppState.blogs = []
  }
}

export const blogsService = new BlogService()