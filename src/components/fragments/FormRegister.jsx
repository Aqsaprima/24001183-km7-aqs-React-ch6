import { Button } from "../elements/button/Button";
import { InputForm } from "../elements/input";

export const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          label={"Fullname"}
          type={"text"}
          placeholder={"Insert your full name here"}
          name={"john doe"}
        ></InputForm>
        <InputForm
          label={"Email"}
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
        <InputForm
          label={"Confirm Password"}
          type={"password"}
          placeholder={"******"}
          name={"password"}
        ></InputForm>
        <Button>Register</Button>
      </form>
    </>
  );
};
