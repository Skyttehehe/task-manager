import { NextRequest, NextResponse } from "next/server";
import { tasks } from "@/lib/store";

// helper
function findTask(id: string) {
  return tasks.find(t => t.id === id);
}

// GET one
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const task = findTask(id);

  if (!task) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(task);
}

// PATCH
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const task = findTask(id);

  if (!task) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const body = await req.json();

  if (body.title !== undefined) task.title = body.title;
  if (body.completed !== undefined) task.completed = body.completed;

  return NextResponse.json(task);
}

// DELETE
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  tasks.splice(index, 1);

  return NextResponse.json({ message: "Deleted" }, {status: 200});
}