import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post)
      return NextResponse.json({ message: "post not found" }, { status: 404 });
    return NextResponse.json(post);
  } catch (e) {
    return NextResponse.json(
      { message: `post not found lol xdd1 ${e}` },
      { status: 404 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { id } = params;

    const { title, description } = body;
    const updatePost = await prisma.post.update({
      where: {
        id,
      },

      data: {
        title,
        description,
      },
    });
    if (!updatePost)
      return NextResponse.json({ message: "post not found" }, { status: 404 });
    return NextResponse.json(updatePost);
  } catch (err) {
    return NextResponse.json({ message: "post Error", err }, { status: 500 });
  }
};

//  delete

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("post deleted");
  } catch (e) {
    return NextResponse.json(
      { message: `post not found lol xdd1 ${e}` },
      { status: 404 }
    );
  }
};
