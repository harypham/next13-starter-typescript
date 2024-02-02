'use client'
import Link from 'next/link'
import useSWR, { Fetcher } from 'swr'

const ViewDetailBlock = ({ params }: { params: { id: string } }) => {
    const fetcher: Fetcher<IBlog, string> = (url:string) => fetch(url).then(res => res.json())

    const {data, error, isLoading} = useSWR(
      `http://localhost:8000/blogs/${params.id}`,
      fetcher,
      {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
      }
    )

    if(isLoading){
        return <div>loading...</div>
      }

    return(
   <div>
   <Link href="./">Go back</Link>
   <div className="card" style={{textAlign:"center"}}>
  <div className="card-header">
    Title: {data?.title}
  </div>
  <div className="card-body">
    {data?.content}
  </div>
  <div className="card-footer">
   Author: {data?.author}
  </div>
</div>            
        </div>
    )
}

export default ViewDetailBlock