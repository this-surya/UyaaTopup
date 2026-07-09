import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join thousands of gamers and enjoy fast, secure top up transactions."
    >
      <RegisterForm />
    </AuthLayout>
  );
}