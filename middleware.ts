// import { NextRequest, NextResponse } from 'next/server'
// import path from 'path/win32';
// export function middleware(request: NextRequest) {
//   console.log(request.url);
//   return NextResponse.next()
// }
// export const config = {
//   matcher:["/csr:path*"],
// };  


import { NextRequest, NextResponse } from 'next/server';
export function middleware(request:NextRequest){
  const token = request.cookies.get("token");
  if(!token){
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/profile"],
};