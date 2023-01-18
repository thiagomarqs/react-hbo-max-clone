import { ContentDetailsPage } from "pages/ContentDetailsPage";
import { Root } from "pages/Root/Root";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="movie/:id" element={<ContentDetailsPage/>}/>
    </Route>
  )
)

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}