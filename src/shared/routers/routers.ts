import { createBrowserRouter } from "react-router-dom";
import { Root } from "../../features/Root/Root";
import { DanaPensiun } from "../../features/DanaPensiun/DanaPensiun";
import { Home } from "../../features/Home/Home";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "", Component: Home },
      { path: "/dana-pensiun", Component: DanaPensiun },
    ],
  },
]);
