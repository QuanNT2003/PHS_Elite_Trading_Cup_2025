import { defaultLayout } from "@/components/shared/layout";
// import ConnectPage from "@/pages/ConnectPage";
// import RulesPage from "@/pages/RulesPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

export type AppRoute = {
  path: string;
  component: React.ComponentType;
  layout?: React.ComponentType<{ children?: React.ReactNode }> | null;
};

export const routes: AppRoute[] = [
  {
    path: "/",
    component: HomePage,
    layout: defaultLayout,
  },
  {
    path: "/rules",
    // component: RulesPage,
    component: NotFoundPage,
    layout: defaultLayout,
  },
  {
    path: "/connect",
    // component: ConnectPage,
    component: NotFoundPage,
    layout: defaultLayout,
  },
  {
    path: "/404",
    component: NotFoundPage,
    layout: defaultLayout,
  },
];
