import { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginApi } from "../LoginApi";

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();

      const result = await loginApi({ email, password });
      console.log({ result });

      const { success, jwt } = result;
      console.log({ success });

      if (success) {
        localStorage.setItem("UPSTART_JWT", jwt);
        history.push("/");
      } else {
        history.push("/login");
      }
    } catch (error) {
      console.log("[LoginPage/onFormSubmit]", { error });
    }
  };

  return (
    <div class="mx-auto justify-center flex h-screen bg-blue-200">
      <div class="my-auto w-3/4 md:w-2/5 h- bg-blue-900 p-5 rounded-lg">
        <h1 class="pb-5 text-xl text-center text-white">
          Welcome on News app!
        </h1>

        <form className="flex flex-col" onSubmit={onFormSubmit}>
          <input
            className="rounded py-1 px-2 mb-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            className="rounded py-1 px-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button
            className="rounded py-1 px-2 mb-1 border border-solid bg-blue-600 text-white"
            type="submit"
            id="login-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
