import React from 'react';
import { useAuth } from '../../utils/useAuth';

export const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  return <div>{code}</div>;
};
