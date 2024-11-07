import UserRequests from "@/store/users/user.request";
import { useUserStore } from "@/store/users/user.store";
import { useState } from "react";

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
      <div className="flex flex-col justify-evenly items-center h-[400px] w-[50%] space-y-4 bg-black rounded-md shadow-[0px_4px_15px_rgba(100,100,100,0.5)]">
        <h1 className="text-white text-2xl font-bold">Bienvenue sur le site de 4Sud !</h1>
        <div className="flex flex-col items-start gap-2">
          <label className="text-gray-500 text-sm text-end">Entrez votre code d&apos;accès</label>
          <input name="email" type="text" placeholder="Email" value={loginData.email} onChange={handleChange} className="px-4 py-2 border rounded-md" />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={loginData.password}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md"
          />
        </div>
        <button onClick={handleSubmit} className="mt-2 bg-blue-500 text-md text-white px-8 py-2 rounded-md">
          Entrer
        </button>
      </div>
    </div>
  );
};
