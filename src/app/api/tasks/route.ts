import { NextRequest, NextResponse } from "next/server";
import { tasks } from "@/lib/store";
import { Task } from "@/lib/types";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  let result = [...tasks];

  const completed = searchParams.get("completed");
  const sort = searchParams.get("sort");
  const order = searchParams.get("order") || "asc";

  // Filtering
  if (completed !== null) {
    if (completed !== "true" && completed !== "false") {
      return NextResponse.json(
        { error: "Invalid completed value" },
        { status: 400 }
      );
    }
    result = result.filter(t => t.completed === (completed === "true"));
  }

  // Sorting
  if (sort) {
    if (!["createdAt", "title"].includes(sort)) {
      return NextResponse.json(
        { error: "Invalid sort field" },
        { status: 400 }
      );
    }

    result.sort((a, b) => {
      if (sort === "createdAt") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return a.title.localeCompare(b.title);
    });

    if (order === "desc") result.reverse();
  }

  return NextResponse.json(result);
}

// POST
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.title) {
    return NextResponse.json(
      { error: "Title is required" },
      { status: 400 }
    );
  }

  let postid;
  if (body.id) {
    postid = body.id;
  } else {
    postid = crypto.randomUUID();
  }

  let completionStatus;
  if (body.completed) {
    completionStatus = body.completed;
  } else {
    completionStatus = false;
  }

  const newTask: Task = {
    id: postid,
    title: body.title,
    completed: completionStatus,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  return NextResponse.json(newTask, { status: 201 });
}