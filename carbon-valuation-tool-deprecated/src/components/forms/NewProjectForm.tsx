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
import LoadingSpinner from '../LoadingSpinner';

export default function NewProjectForm() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRegionsAndSectors() {
      const regions = await getAllRegions();
      const sectors = await getAllSectors();
      setRegions(regions);
      setSectors(sectors);
    }
    getRegionsAndSectors().then(() => {
      setLoading(false);
    });
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(projectSchema),
  });

  return loading ? (
    <LoadingSpinner />
  ) : (
    <BaseForm
      onSubmit={handleSubmit((data) => {
        setLoading(true);
        createNewProject(data);
      })}
      control={control}
      register={register}
      errors={errors}
      sectors={sectors}
      regions={regions}
      formSubmitValue='Create'
    />
  );
}
