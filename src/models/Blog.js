export class Blog {
  constructor(data) {
    this.blogId = data.id
    this.creatorId = data.creatorId
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creator = data.creator
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)

  }
}



const blog = {
  // "_id": "650386473b199713c0ae1ea8",
  // "title": "Pacer Test",
  // "body": "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.\nThe 20 meter pacer test will begin in 30 seconds. Line up at the start.\nThe running speed starts slowly, but gets faster each minute after you hear this signal.\nA single lap should be completed each time you hear this sound.\nRemember to run in a straight line, and run as long as possible.\nThe second time you fail to complete a lap before the sound, your test is over.\nThe test will begin on the word start.\nOn your mark, get ready, start.",
  // "imgUrl": "https://images.unsplash.com/photo-1563302905-4830598613c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "tags": [],
  "published": true,
  // "creatorId": "64ef6b6533a59bbc04c4195b",
  "createdAt": "2023-09-14T22:16:39.930Z",
  "updatedAt": "2023-09-14T22:16:39.930Z",
  "__v": 0,
  "creator": {
    "_id": "64ef6b6533a59bbc04c4195b",
    "subs": [
      "auth0|64ef6b640058efabfef1546f"
    ],
    "email": "tchrist@hotmail.com",
    "name": "TChrist",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpq-2SCgjxfBiAOXPk6PBk0kgYRkXkYVxV9A&usqp=CAU",
    "bio": "Hello! This is a test to see if I pass :)",
    "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    "github": "https://github.com/TylerChristiansen22",
    "linkedin": "",
    "resume": "",
    "class": "",
    "graduated": false,
    "createdAt": "2023-08-30T16:17:10.918Z",
    "updatedAt": "2023-09-18T17:42:09.052Z",
    "__v": 0,
    "id": "64ef6b6533a59bbc04c4195b"
  },
  "id": "650386473b199713c0ae1ea8"
}