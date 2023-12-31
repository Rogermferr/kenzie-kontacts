import { useForm } from "react-hook-form";
import { useUserContext } from "../../../hooks/useUserContext";
import { ILoginUser } from "../../../providers/UserContext/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./validations";
import Input from "../../Input";
import { Link } from "react-router-dom";
import { LoginFormStyle } from "./style";
import InputPass from "../../Input/InputPass";
import { motion } from "framer-motion";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const { userLogin } = useUserContext();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <LoginFormStyle onSubmit={handleSubmit(userLogin)}>
        <Input
          id="email"
          label="Email"
          errors={errors.email?.message}
          placeholder="Digite seu email aqui"
          {...register("email")}
        />

        <InputPass
          id="password"
          label="Senha"
          errors={errors.password?.message}
          placeholder="Digite seu password aqui"
          {...register("password")}
        />

        <button type="submit">Entrar</button>
        <span>Não possui cadastro?</span>
        <Link to={"/register"}>Cadastre-se</Link>
      </LoginFormStyle>
    </motion.section>
  );
};

export default LoginForm;
