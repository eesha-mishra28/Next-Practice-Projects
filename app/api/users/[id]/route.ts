import { NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const arr = [{
    id: "1",
    name: "Alice"
  }, {
    id: "2",
    name: "Bob"
  }]

  return NextResponse.json({
    message: `User ID is ${id}`,
    user: arr.find((user) => user.id === id)
  });
}

export async function PUT(request: Request) {
  const body = await request.json();
  return NextResponse.json({message:`User ${body.name} updated successfully`});
}