import { NextRequest, NextResponse } from "next/server";
import { getRoom, deleteRoom } from "@/lib/rooms";

export async function GET(
  _request: NextRequest,
  { params }: { params: { roomId: string } }
) {
  const room = getRoom(params.roomId);
  if (!room) {
    return NextResponse.json({ error: "방을 찾을 수 없습니다." }, { status: 404 });
  }
  return NextResponse.json(room);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { roomId: string } }
) {
  const deleted = deleteRoom(params.roomId);
  if (!deleted) {
    return NextResponse.json({ error: "방을 찾을 수 없습니다." }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
