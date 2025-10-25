import { useContext } from "react";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import { AuthContext } from "./context/AuthContext";

const AppRouter = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

export default AppRouter;
