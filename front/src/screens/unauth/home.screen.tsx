import UserRequests from "@/store/users/user.request";
import { useUserStore } from "@/store/users/user.store";
import { useState } from "react";
import {Button} from "@/components/ui/button";

export const HomeScreen = () => {
  const { login } = useUserStore();

  const [loginData, setLoginData] = useState({ email: "atiteux@dev-id.fr", password: "Test1234**" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    UserRequests.login(loginData).then((x) => login(x));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-evenly gap-4 rounded-xl items-center px-8 pb-8 bg-[#203D4E] shadow-[0px_4px_15px_rgba(100,100,100,0.5)]">
        <img src="src/assets/logo.png" alt="logo" className="h-40" />
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="email" className="text-white text-sm">Entrez votre email</label>
          <input name="email" type="text" placeholder="Email" value={loginData.email} onChange={handleChange} className="px-4 py-2 border rounded-md" />
          <label htmlFor="password" className="text-white text-sm">Entrez votre mot de passe</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={loginData.password}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md"
          />
        </div>
        <Button variant={"secondary"} onClick={handleSubmit} >
          Entrer
        </Button>
      </div>
    </div>
  );
};
