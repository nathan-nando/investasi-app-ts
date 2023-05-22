import { createBrowserRouter } from "react-router-dom";
import { Root } from "../../features/Root/Root";
import { DanaPensiun } from "../../features/DanaPensiun/DanaPensiun";
import { Dashboard } from "../../features/Dashboard/Dashboard";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "", Component: Dashboard },
      { path: "/dana-pensiun", Component: DanaPensiun },
    ],
  },
]);
