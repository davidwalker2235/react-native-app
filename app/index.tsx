import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from '../pages/Login';
import { registerForPushNotificationsAsync } from '../notifications/registerForPushNotifications';

const queryClient = new QueryClient();

const Index = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
};

export default Index;