/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema, type FormData } from '@/zod_schemas/project_schema';
import { getAllRegions } from '@/server-actions/regions';
import { getAllSectors } from '@/server-actions/sectors';
import { Project, Region, Sector } from '@/types';
import { editProject, getProjectByID } from '@/server-actions/projects';
import BaseForm from './BaseForm';
import LoadingSpinner from '../LoadingSpinner';

export default function EditProjectForm({ projectId }: { projectId: string }) {
  const [regions, setRegions] = useState<Region[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [project, setProject] = useState<Project>({} as Project);

  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: project,
  });

  const unsavedChanges = Object.keys(dirtyFields).length > 0;

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

  useEffect(() => {
    if (project) {
      reset(project);
    }
  }, [project, reset]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        const confirmationMessage =
          'You have unsaved changes. Are you sure you want to leave?';
        event.preventDefault();
        event.returnValue = confirmationMessage; // Most browsers
        return confirmationMessage; // For Firefox
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <BaseForm
      onSubmit={handleSubmit((data) => {
        setLoading(true);
        editProject(data, projectId);
      })}
      control={control}
      register={register}
      errors={errors}
      sectors={sectors}
      regions={regions}
      reset={reset}
      showCancelButton={unsavedChanges}
      formSubmitValue='Save'
    />
  );
}
