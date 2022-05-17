export async function getServerSideProps(context){
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return {
        props: {
            catFact: data?.fact
        }
    }
}

export default function ServerRender({catFact}){
    return (
        <div>
            Server Render
            <br/>
            -
            <br/>
            <h1>{catFact}</h1>
        </div>
    )
}