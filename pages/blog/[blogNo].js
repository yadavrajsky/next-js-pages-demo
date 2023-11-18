
export const getStaticPaths=async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  const data=await res.json();
  const paths=data.map((currEle)=>{
    return {
      params:{
        blogNo:currEle.id.toString()
      }
    }
  });
  return {
    paths,
    fallback:false
  }
}
export const getStaticProps=async (context)=>{
  const id=context.params.blogNo;
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data=await res.json();
  return {
    props:{
      data
    }
  }
  }

import { useRouter } from 'next/router'
const blogNo = ({data}) => {
  const router = useRouter();
  return <div>
    <h1>Blog: {router.query.blogNo}</h1>
    <div>
      <span className='p-2 m-2'>{data.id}</span>
    <span className='p-2'>{data.title}</span>
    <p>{data.body}</p>
    </div>
    </div>
  
}

export default blogNo;