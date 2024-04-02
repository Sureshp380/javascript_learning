const post = {
  id: 1,
  title: 'Post One',
  body: 'This is body',
};

// Convert to JSON String
const str = JSON.stringify(post);

// Parse Json
const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is body'
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body'
  }
]

const str2 = JSON.stringify(posts)

console.log(str2)