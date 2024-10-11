import axios from 'axios';

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await axios.get('http://jsonplaceholder.typicode.com/users');
  const users: User[] = response.data.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };
  });

  return (
    <div className='grid grid-cols-2 gap-2 p-4'>
      {users.map((user) => (
        <div
          key={user.id}
          className='flex items-center justify-between p-4 bg-white shadow rounded-md text-gray-700'
        >
          <div className='flex flex-col space-y-1'>
            <h2 className='text-md font-semibold'>{user.name}</h2>
            <p className='text-sm'>{user.username}</p>
          </div>
          <div className='flex flex-col space-y-1 items-end'>
            <div className='text-sm'>{user.email}</div>
            <div className='text-sm'>{user.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
