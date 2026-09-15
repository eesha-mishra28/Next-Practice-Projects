import Image from "next/image";

export default function ImagesPage() {
  return (
    <div>
      <h1>External Image</h1>

      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Nature"
        width={500}
        height={300}
      />
    </div>
  );
}