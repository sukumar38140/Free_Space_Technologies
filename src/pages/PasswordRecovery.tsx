import PasswordRecoveryForm from '@/components/PasswordRecoveryForm';

const PasswordRecovery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
        <p className="text-gray-600 mb-8">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <PasswordRecoveryForm />
      </div>
    </div>
  );
};

export default PasswordRecovery;
