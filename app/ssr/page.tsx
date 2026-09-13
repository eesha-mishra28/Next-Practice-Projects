export default function SSRPage() {
  const currentTime = new Date();

  return (
    <div>
      <h1>SSR Page</h1>
      <p>Current Time: {currentTime.toString()}</p>
    </div>
  );
}