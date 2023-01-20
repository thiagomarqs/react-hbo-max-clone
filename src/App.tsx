import { ContentDetailsPage } from "pages/ContentDetailsPage";
import { Home } from "pages/Home";
import { Root } from "pages/Root/Root";
import { SearchPage } from "pages/SearchPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} errorElement={<Navigate to={"/"}/>}>
      <Route index element={<Home/>}/>
      <Route path="search" element={<SearchPage/>}/>
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