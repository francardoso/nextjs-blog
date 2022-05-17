export async function getStaticProps() {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return {
        props: {
            catFact: data?.fact
        }
    }
  }

export default function StaticRender({catFact}){
    return (
        <div>
            Static Render
            <br/>
            -
            <br/>
            <h1>{catFact}</h1>
        </div>
    )
}