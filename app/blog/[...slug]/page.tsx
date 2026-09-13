
export default async function Blogpage({ params }: { params: { slug: string[] } })
{
  const { slug } = await params;
  
    return(
        <div>
            <h1>Blog Page</h1>
        <p>Slug: {slug.join('/')}</p>
        
        </div>
    )
}