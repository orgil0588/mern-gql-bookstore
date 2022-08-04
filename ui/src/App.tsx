import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import BooksDetail from "./components/BooksDetail";

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:8000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="bg-gray-100">
        <Navbar />
        <div className="container mx-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:_id" element={<BooksDetail />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
