import { Link } from "react-router-dom";
import { FormLogin } from "../components/fragments/FormLogin";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="login">
        <FormLogin />
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </AuthLayout>
    </>
  );
};
