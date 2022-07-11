import logo from "./logo.svg";
import "./App.css";
import { Box, Center, Heading } from "@chakra-ui/react";
import AppKodok from "./AppComponents/appKodok";
import AppBook from "./AppComponents/appBook";
import AppAddDoc from "./AppComponents/appAddDoc"
import BooksData from "./AppComponents/booksData";

function App() {
  return (
    <Box>
      <Box>
        {/* <AppKodok /> */}
      </Box>
      <Box>
        {/* <AppBook /> */}
      </Box>
      <Box>
        <AppAddDoc />
      </Box>
      <Box>
        <BooksData />
      </Box>
    </Box>
  );
}

export default App;
