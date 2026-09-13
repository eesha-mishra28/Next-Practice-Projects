export default async function blogpage({params}: {params:{slug?:string[]}}){
  const { slug } = await params;
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Slug: {slug?slug.join('/'):"No slug"}</p>
    </div>
  )
}