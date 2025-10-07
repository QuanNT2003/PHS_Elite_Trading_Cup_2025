import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { routes } from "@/routes";
import { defaultLayout as DefaultLayout } from "./components/shared/layout";
import NotFoundPage from "./pages/NotFoundPage";
// import defaultLayout from "@/components/layout/defaultLayout";

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  layout?: React.ElementType | null;
}
const renderRoute = (route: RouteConfig) => {
  const Page = route.component;
  let Layout: React.ElementType = DefaultLayout;

  if (route.layout) {
    Layout = route.layout;
  } else if (route.layout === null) {
    Layout = Fragment;
  }

  const layoutProps = Layout === Fragment ? {} : {};

  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Layout {...layoutProps}>
          <Page />
        </Layout>
      }
    />
  );
};
function App() {
  return (
    <>
      <Routes>
        {routes.map(renderRoute)}
        {/* Not Found Route */}
        <Route
          path="*"
          element={
            <DefaultLayout>
              <NotFoundPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
