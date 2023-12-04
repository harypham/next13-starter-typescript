"use client";
import { useRouter } from "next/navigation";
const Admin = () => {
  const router = useRouter();
  const handlebtn = () => {
    router.push("/");
  };
  return (
    <>
      admin
      <div>
        <button onClick={() => handlebtn()}>Home</button>
      </div>
    </>
  );
};

export default Admin;
