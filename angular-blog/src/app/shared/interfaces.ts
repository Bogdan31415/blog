export interface User {
  email: string;
  password: string;
}
export interface Message{
  message: string;
}
export interface Post {
  _id?: string;
  user?: string;
  title: string;
  text: string;
  author?: string;
  imageSrc?: string;
}
export interface FbCreateResponse {
  name: string;
}
export interface BlogComment{
  text: string;
  user?: string;
  post: string;
  _id?: string;
}




