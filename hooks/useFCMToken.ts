'use client'
import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from '../firebase';

const useFcmToken = () => {
  const [token, setToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState('');

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging(firebaseApp);

          // Request notification permission
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          if (permission === 'granted') {
            const currentToken = await getToken(messaging, {
              vapidKey: 'BNVsMfWc4N47e4KgAiSLs3cAlkxXjddlOZ1bYzz5m2k5-nAO9OePkLkXxOr3uVSdhUcYnBxS0b_jUFsJteySY2E', // Replace with your Firebase project's VAPID key
            });
            if (currentToken) {
                console.log("current token" , currentToken)
              setToken(currentToken);
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          }
        }
      } catch (error) {
        console.log('Error retrieving token:', error);
      }
    };

    retrieveToken();
  }, []);

  return { token, notificationPermissionStatus };
};

export default useFcmToken;