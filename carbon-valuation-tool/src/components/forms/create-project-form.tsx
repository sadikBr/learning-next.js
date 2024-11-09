'use client';

import { FormData, projectDefaultValues } from '@/zod-schemas/project';
import ProjectBaseForm from './project-base-form';
import { createProject } from '@/server/projects/projects';
import { useRouter } from 'next/navigation';

export default function CreateProjectForm({
  regions,
  sectors,
}: {
  regions: string[];
  sectors: string[];
}) {
  const router = useRouter();
  async function handleSubmit(data: FormData) {
    const { error, message, projectId } = await createProject(data);

    if (error) throw new Error(message);

    router.replace(`/projects/${projectId}`);
  }

  return (
    <ProjectBaseForm
      defaultValues={projectDefaultValues}
      handleSubmit={handleSubmit}
      regions={regions}
      sectors={sectors}
      submitButtonValue='Create Project'
    />
  );
}
