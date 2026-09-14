// "use client"
// export default function make() {
//   async function dataUsers() {
//     const data = await fetch("/api/users", {
//       method: "GET",
//     });
//     const result = await data.json();
//     console.log(result);
//   }
// async function Users() {
//   const data = await fetch("/api/users", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify({ name: "Alice" })
//   });
//   const result = await data.json();
//   console.log(result);
//   }
//   async function updateUser() {
//   const response = await fetch("/api/users", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Alice Updated",
//     }),
//   });

//   const result = await response.json();

//   console.log(result);
// }
//   return (
//     <div>
//       {/* <button onClick={Users}>Create User</button>
//       <button onClick={updateUser}>Update User</button> */}
//       <p>Welcome to the Users page</p>
//       {result.map((value) => (
//         <div key={value.id}>
//           <h2>{value.name}</h2>
//         </div>
//       ))}
//     </div>
//   )
// }



"use client";

import { useEffect, useState } from "react";

type User = {
  id: string | number;
  name: string;
};

export default function Users() {
  const [state, setState] = useState<User[]>([]);

  async function dataUsers() {
    const data = await fetch("/api/users", {
      method: "GET",
    });

    const result = await data.json();

    console.log(result);
    setState(result);
  }

  useEffect(() => {
    dataUsers();
  }, []);

  return (
    <div>
      <p>Welcome to the Users page</p>

      {state.map((value) => (
        <div key={value.id}>
          <h2>{value.name}</h2>
        </div>
      ))}
    </div>
  );
}