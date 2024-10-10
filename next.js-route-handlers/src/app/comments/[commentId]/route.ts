import { promises as fs } from 'fs';

import { comments } from '../data';
// import { redirect } from 'next/navigation';

export async function GET(
  _: Request,
  { params: { commentId } }: { params: { commentId: string } }
) {
  const comment = comments.find((item) => item.id === parseInt(commentId));

  if (!comment) {
    // In this case you have two options (I prefer the first option when using this as a CRUD api that we will be calling from a UI and not server rendering)
    // Either you return an error saying that the item is not found
    return new Response(
      JSON.stringify({
        message: 'There is no such comment with the id ' + commentId,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      }
    );

    //Or you can redirect to the comments home page
    // redirect('/comments');
  }

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params: { commentId } }: { params: { commentId: string } }
) {
  const comment = comments.find((item) => item.id === parseInt(commentId));

  if (!comment) {
    return new Response(
      JSON.stringify({
        message: 'There is no such comment with the id ' + commentId,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      }
    );
  }

  const newComment = await request.json();
  const newCommentWithID = {
    id: comment.id,
    ...newComment,
  };

  const newComments = comments.map((item) => {
    if (item.id === parseInt(commentId)) {
      return newCommentWithID;
    }

    return item;
  });

  try {
    fs.writeFile(
      './src/app/comments/data.ts',
      `export const comments = ${JSON.stringify(newComments)}`,
      'utf-8'
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Unable to save the updated comment, try again later.',
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

  return Response.json(newCommentWithID);
}

export async function DELETE(
  request: Request,
  { params: { commentId } }: { params: { commentId: string } }
) {
  const comment = comments.find((item) => item.id === parseInt(commentId));

  if (!comment) {
    return new Response(
      JSON.stringify({
        message: 'There is no such comment with the id ' + commentId,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      }
    );
  }

  const newComments = comments.filter(
    (item) => item.id !== parseInt(commentId)
  );

  try {
    fs.writeFile(
      './src/app/comments/data.ts',
      `export const comments = ${JSON.stringify(newComments)}`,
      'utf-8'
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Unable to delete the comment, try again later.',
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

  return Response.json({
    message: `Comment with id ${commentId} has been deleted!`,
  });
}
