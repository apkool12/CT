import { NextRequest, NextResponse } from "next/server";
import { getRooms, createRoom } from "@/lib/rooms";

export async function GET() {
  const rooms = getRooms();
  return NextResponse.json(rooms);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = body?.name?.trim();
    if (!name || name.length < 1) {
      return NextResponse.json(
        { error: "방 이름을 입력해 주세요." },
        { status: 400 }
      );
    }
    const room = createRoom(name);
    return NextResponse.json(room);
  } catch {
    return NextResponse.json(
      { error: "방 생성에 실패했습니다." },
      { status: 500 }
    );
  }
}
