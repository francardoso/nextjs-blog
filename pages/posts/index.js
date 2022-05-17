import Link from "next/link"

export default function Posts(){
    return (<div>
        <p>Página de posts</p>
        <Link href="/posts/1">
            <a>Post 1</a>
        </Link>
        <br></br>
        <a href="/posts/1">Post 1 - sem next link</a>
      
    </div>
    )
}