import { promises as fs } from 'fs';

import { comments } from './data';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const query = params.get('query');

  const commentsToReturn = query
    ? comments.filter((item) => item.text.includes(query))
    : comments;

  return Response.json(commentsToReturn);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const commentWithID = {
    id: comments.length + 1,
    ...comment,
  };

  try {
    comments.push(commentWithID);
    fs.writeFile(
      './src/app/comments/data.ts',
      `export const comments = ${JSON.stringify(comments)}`,
      'utf-8'
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Unable to save your comment, try again later.',
        error,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 500,
      }
    );
  }

  return new Response(JSON.stringify(commentWithID), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}
