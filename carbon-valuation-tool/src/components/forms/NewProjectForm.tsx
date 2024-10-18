'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema, type FormData } from '@/zod_schemas/project_schema';
import { getAllRegions } from '@/server-actions/regions';
import { getAllSectors } from '@/server-actions/sectors';
import { Region, Sector } from '@/types';
import { createNewProject } from '@/server-actions/projects';
import BaseForm from './BaseForm';

export default function NewProjectForm() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);

  useEffect(() => {
    async function getRegionsAndSectors() {
      const regions = await getAllRegions();
      const sectors = await getAllSectors();
      setRegions(regions);
      setSectors(sectors);
    }
    getRegionsAndSectors();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(projectSchema),
  });

  return (
    <BaseForm
      onSubmit={handleSubmit((data) => createNewProject(data))}
      control={control}
      register={register}
      errors={errors}
      sectors={sectors}
      regions={regions}
      formSubmitValue='Create'
    />
  );
}
