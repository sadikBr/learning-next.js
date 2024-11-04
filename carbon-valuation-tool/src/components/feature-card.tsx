import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className='p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900'>
      <CardHeader className='flex flex-col'>
        <div className='self-start mb-4 bg-green-100 dark:bg-gray-950 rounded-full p-3 inline-block'>
          {icon}
        </div>
        <CardTitle className='text-xl font-semibold text-green-700 dark:text-green-400 mb-2 font-heading'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-gray-600 dark:text-gray-300'> {description} </p>
      </CardContent>
    </Card>
  );
}
