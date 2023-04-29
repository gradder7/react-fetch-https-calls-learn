//fetching the posts 
const fetchPost = async () => {
  const response = await fetch(`https://dummyjson.com/posts`);
  const data = await response.json();
  return data;
};
export default fetchPost;
