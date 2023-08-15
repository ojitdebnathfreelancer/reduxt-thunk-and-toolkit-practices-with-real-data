import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

const PrivetRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const pathname = useLocation();

  if (isLoading) {
    console.log(isLoading);
    return <p>Loading...</p>;
  }

  if (!isLoading && !user?.email) {
    console.log(isLoading);
    return <Navigate to="/login" state={{ pathname: pathname }} />;
  }

  if (user.email && !isLoading) {
    return children;
  }
};

export default PrivetRoute;
