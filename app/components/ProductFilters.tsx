'use client'
import { useSearchParams } from "next/navigation";
export default function ProductFilters() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  return (
    <div>
      <p>Category: {category}</p>
      <p>Sort: {sort}</p>
    </div>
  )
}