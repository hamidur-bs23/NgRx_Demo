export interface Post {
  id: number,
  title: string,
  description: string
}

export interface PostsState {
  posts: Post[]
}

export const initialPostsState: PostsState = {
  posts: [
    { id: 101, title: 'First post', description: '1st post description'},
    { id: 101, title: 'Second post', description: '2nd post description'},
  ]
}
