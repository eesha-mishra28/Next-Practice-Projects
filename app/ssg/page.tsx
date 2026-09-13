export default function SSG(){
  const buildTime = new Date().toISOString();
  return(
    <div>
      <h1>SSG Page</h1>
      <p>This page is generated ahead of time.</p>
      <p>Build time: {buildTime}</p>
    </div>
  )
}