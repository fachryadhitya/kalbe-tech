import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  const logout = () => {
    Cookies.remove("email");
    router.push("/Home");
  };

  useEffect(() => {
    logout();
  }, []);
  return null;
}
