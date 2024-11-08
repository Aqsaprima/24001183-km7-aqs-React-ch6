export const AuthLayout = ({ title, children }) => {
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
          <p>Welcome Back, Please enter your details</p>
        </div>
        {children}
      </div>
    </>
  );
};
