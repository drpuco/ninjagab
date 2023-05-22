import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'


export default function NotFound() {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 3000)
    })
  return (
    <div className="not-found">
        <h1>Ooops...</h1>
        <h2>this page is not done yet or does not exist</h2>
        <p> <Link href="/">Go back to the Homepage </Link></p>
    </div>
  )
}
