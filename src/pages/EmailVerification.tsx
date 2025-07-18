import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const EmailVerification = () => {
  const [message, setMessage] = useState('Verifying your email...');
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');

    if (token) {
      fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then(async (res) => {
          const data = await res.json();
          if (res.ok) {
            setMessage(data.message);
          } else {
            setMessage(data.message || 'An error occurred during email verification.');
          }
        })
        .catch(() => {
          setMessage('An unexpected error occurred.');
        });
    } else {
      setMessage('Invalid verification link.');
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Email Verification</h1>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default EmailVerification;
