/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, UseFormRegister } from 'react-hook-form';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import { FormTextarea } from '../FormTextarea';
import InputLabel from '../InputLabel';
import Milestones from '../Milestones';
import Stakeholders from '../Stakeholders';
import { Region, Sector } from '@/types';
import { BaseSyntheticEvent } from 'react';

type BaseFormProps = {
  control: Control<any>;
  register: UseFormRegister<any>;
  errors: any;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  sectors: Sector[];
  regions: Region[];
  formSubmitValue: string;
};

export default function BaseForm({
  errors,
  onSubmit,
  register,
  sectors,
  regions,
  control,
  formSubmitValue,
}: BaseFormProps) {
  return (
    <form className='flex flex-col gap-6' onSubmit={onSubmit}>
      <InputLabel
        value='Title'
        htmlFor='title'
        errorMessage={errors.title?.message}
      >
        <FormInput id='title' type='text' register={register} />
      </InputLabel>

      <div className='flex items-center justify-between gap-4'>
        <InputLabel
          value='Sector'
          htmlFor='sector'
          errorMessage={errors.sector?.message}
        >
          <FormSelect
            id='sector'
            defaultText='Select the sector of Activity'
            register={register}
            values={sectors}
          />
        </InputLabel>
        <InputLabel
          value='Region'
          htmlFor='region'
          errorMessage={errors.region?.message}
        >
          <FormSelect
            id='region'
            defaultText='Select the region'
            register={register}
            values={regions}
          />
        </InputLabel>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <InputLabel
          value='Department'
          htmlFor='department'
          errorMessage={errors.department?.message}
        >
          <FormInput id='department' type='text' register={register} />
        </InputLabel>

        <InputLabel
          value='Client Name'
          htmlFor='clientName'
          errorMessage={errors.clientName?.message}
        >
          <FormInput id='clientName' type='text' register={register} />
        </InputLabel>

        <InputLabel
          value='Budget'
          htmlFor='budget'
          errorMessage={errors.budget?.message}
        >
          <FormInput id='budget' type='number' register={register} />
        </InputLabel>
      </div>

      <InputLabel
        value='Description'
        htmlFor='description'
        errorMessage={errors.description?.message}
      >
        <FormTextarea id='description' register={register} />
      </InputLabel>

      <div className='flex items-center justify-between gap-4'>
        <InputLabel
          value='Start Date'
          htmlFor='startDate'
          errorMessage={errors.startDate?.message}
        >
          <FormInput id='startDate' type='date' register={register} />
        </InputLabel>

        <InputLabel
          value='End Date'
          htmlFor='endDate'
          errorMessage={errors.endDate?.message}
        >
          <FormInput id='endDate' type='date' register={register} />
        </InputLabel>
      </div>

      <div className='flex items-center justify-between gap-4'>
        <Milestones control={control} errors={errors} register={register} />
        <Stakeholders control={control} errors={errors} register={register} />
      </div>

      <input
        className='self-end border-2 cursor-pointer border-primary px-4 py-2 rounded text-primary font-bold hover:text-white hover:bg-primary transition'
        type='submit'
        value={formSubmitValue}
      />
    </form>
  );
}
