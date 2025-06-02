import { useSelector } from 'react-redux';

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden rounded-full bg-yellow-800 px-4 py-2 text-sm font-semibold text-stone-100 md:block">
      {username}
    </div>
  );
}

export default UserName;
