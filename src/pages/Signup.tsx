import SignupForm from '@/components/SignupForm';

const Signup = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <p className="text-gray-600 mb-8">Create an account to get started.</p>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
