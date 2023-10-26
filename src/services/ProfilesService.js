import { AppState } from "../AppState"
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";
import { Blog } from "../models/Blog";
import { Profile } from "../models/Profile";
class ProfilesService {
  async getProfile(profileId) {
    AppState.profile = null;
    const res = await api.get(`api/profiles/${profileId}`);
    AppState.profile = new Profile(res.data)
  }
  async getBlogsByProfileId(profileId) {
    const res = await api.get(`api/blogs?creatorId=${profileId}`)
    AppState.blogs = res.data.map(pojo => new Blog(pojo))
  }

}
export const profilesService = new ProfilesService