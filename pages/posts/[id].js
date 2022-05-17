import { useRouter } from "next/router"
import Link from "next/link";

export default function Post(props){
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <p>Bem vindo ao post {id} !</p>
            <br></br>
            <Link href="/posts">
            <a>Voltar aos posts</a>
            </Link>
        </div>
    )
}