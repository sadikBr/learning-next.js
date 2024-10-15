export async function GET(
  _: Request,
  { params: { projectId } }: { params: { projectId: string } }
) {
  // sent the response only if the user who requested this project is the owner or admin
  // otherwise send unauthorized response

  return Response.json({
    message: 'API to request a specific project details! ' + projectId,
  });
}
