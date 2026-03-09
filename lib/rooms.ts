export type Room = {
  id: string;
  name: string;
  createdAt: string;
};

const rooms = new Map<string, Room>();

export function getRooms(): Room[] {
  return Array.from(rooms.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getRoom(id: string): Room | undefined {
  return rooms.get(id);
}

export function createRoom(name: string): Room {
  const id = crypto.randomUUID();
  const room: Room = {
    id,
    name,
    createdAt: new Date().toISOString(),
  };
  rooms.set(id, room);
  return room;
}

export function deleteRoom(id: string): boolean {
  return rooms.delete(id);
}
