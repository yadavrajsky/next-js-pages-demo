import { useRouter } from 'next/router'
import { useEffect } from 'react'

const errorPage = () => {
  const router=useRouter();
  const redirect=()=>{
    router.push("/")
  }
  useEffect(() => {
    
  setTimeout(()=>{
    router.push("/")

  },5000)
  }, [])
  
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className=''>
       404 | Not Found 
      </h1>
<button className='' onClick={redirect}>Go to Home</button>
      </div>

<div>

</div>
    </div>
  )
}

export default errorPage