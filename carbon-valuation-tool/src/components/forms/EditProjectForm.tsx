'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema, type FormData } from '@/zod_schemas/project_schema';
import { getAllRegions } from '@/server-actions/regions';
import { getAllSectors } from '@/server-actions/sectors';
import { Project, Region, Sector } from '@/types';
import { createNewProject, getProjectByID } from '@/server-actions/projects';
import BaseForm from './BaseForm';
import LoadingSpinner from '../LoadingSpinner';

export default function EditProjectForm({ projectId }: { projectId: string }) {
  const [regions, setRegions] = useState<Region[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [project, setProject] = useState<Project>({} as Project);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRegionsAndSectors() {
      const regions = await getAllRegions();
      const sectors = await getAllSectors();
      const project = await getProjectByID(projectId);
      setRegions(regions);
      setSectors(sectors);
      setProject(project);
    }
    getRegionsAndSectors().then(() => {
      setLoading(false);
    });
  }, [projectId]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: project,
  });

  useEffect(() => {
    if (project) {
      reset(project);
    }
  }, [project, reset]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <BaseForm
      onSubmit={handleSubmit((data) => createNewProject(data))}
      control={control}
      register={register}
      errors={errors}
      sectors={sectors}
      regions={regions}
      formSubmitValue='Save'
    />
  );
}
