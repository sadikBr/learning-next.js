import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash, ListTodo } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormMilestonesProps {
  name: string;
  label: string;
  className?: string;
}

export function FormMilestones({
  name,
  label,
  className,
}: FormMilestonesProps) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className={cn('space-y-4', className)}>
      <div className='flex justify-between'>
        <FormLabel className='flex items-center'>
          <ListTodo className='mr-2 h-4 w-4' /> {label}
        </FormLabel>
        <Button
          type='button'
          variant='outline'
          size='sm'
          onClick={() => append({ name: '', completed: false })}
        >
          <Plus className='mr-2 h-4 w-4' /> Add {label}
        </Button>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className='flex gap-2 items-center'>
          <FormField
            control={control}
            name={`${name}.${index}.name`}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input placeholder={`${label} name`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`${name}.${index}.completed`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className='group'
            type='button'
            variant='ghost'
            size='sm'
            onClick={() => remove(index)}
          >
            <Trash className='h-4 w-4 group-hover:text-red-500 transition' />
          </Button>
        </div>
      ))}
    </div>
  );
}
