'use client'
import { useRouter } from "next/navigation";
export default function NavigationButton() {
  const router = useRouter();
  return (
    <div>
      <button onClick={()=>{router.push("/")}}>Go to Home</button>
    </div>
  )
}