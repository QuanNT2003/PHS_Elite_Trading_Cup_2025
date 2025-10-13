import { defaultLayout } from "@/components/shared/layout";
import ConnectPage from "@/pages/ConnectPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import RulesPage from "@/pages/RulesPage";

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
    component: RulesPage,
    layout: defaultLayout,
  },
  {
    path: "/connect",
    component: ConnectPage,
    layout: defaultLayout,
  },
  {
    path: "/404",
    component: NotFoundPage,
    layout: defaultLayout,
  },
];
