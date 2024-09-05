//サーバーサイドのfetchを行う

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

//上記のエンドポイントにfetchを使ってアクセスするため
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl)); //エンドポイントからデータをとってくる
  const posts = await res.json(); //resをjson形式にしますよ
  return posts;
}

//idの取得
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

//指定されたidのエンドポイントにアクセスしてポストの内容をとってくる
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}
