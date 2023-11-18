import Link from "next/link";

export const getStaticProps=async ()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/posts");
const data=await res.json();
return {
  props:{
    data
  }
}
}
const index = ({data}) => {
  return (
   <>
 <div>
  <h1 className="text-center">Blogs</h1>
  {data.map((currEle)=>{
    return (<div className="my-3 border p-2" key={currEle.id}><Link href={`/blog/${currEle.id}`}><span className="mx-2">{currEle.id}</span><span className="p-1 my-2">{currEle.title}</span></Link></div>)
  })}
  </div>
   </>
  )
}

export default index