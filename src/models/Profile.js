export class Profile {
  constructor(data) {
    this.name = data.name
    this.creatorId = data.id
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.graduated = data.graduated
  }
}