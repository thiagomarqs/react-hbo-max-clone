import { MasterPage } from "components/MasterPage/MasterPage";
import { ContentDetailsPage } from "pages/ContentDetailsPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <MasterPage>
        <ContentDetailsPage/>
      </MasterPage>
    </QueryClientProvider>
  );
}