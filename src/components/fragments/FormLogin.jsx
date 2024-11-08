import { Button } from "../elements/button/Button";
import { InputForm } from "../elements/input";

export const FormLogin = () => {
  return (
    <>
      <form action="">
        <InputForm
          label={"email"}
          type={"email"}
          placeholder={"example@gmail.com"}
          name={"email"}
        ></InputForm>
        <InputForm
          label={"Password"}
          type={"password"}
          placeholder={"******"}
          name={"password"}
        ></InputForm>
        <Button>Login</Button>
      </form>
    </>
  );
};
