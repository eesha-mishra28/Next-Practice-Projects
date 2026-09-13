import CurrentPath from "./components/CurrentPath";
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return(
    <div>
      <html>
        <body>
          <Link href="/">HOME|</Link>
          <Link href="/about">ABOUT|</Link>
          <Link href="/product">PRODUCT</Link>
           <CurrentPath/>
          {children}
      </body>
      </html>
    </div>
  )
}