import { MasterPage } from "components/MasterPage/MasterPage";
import { ContentDetailsPage } from "pages/ContentDetailsPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterPage />}>
            <Route path="movie">
              <Route path=":id" element={<ContentDetailsPage />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}