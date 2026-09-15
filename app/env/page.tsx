"use client";
export default function EnvPage() {
  const name = process.env.NEXT_PUBLIC_MY_NAME;
  console.log(name);
  return (
    <div>
      <h1>ye hai env page</h1>
      <p>My name is: {name}</p>
    </div>
  );
}