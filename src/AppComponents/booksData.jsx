import React, { useEffect, useState } from "react";
import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import { db } from "../configs/Firebase";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";

function BooksData() {
  const [posts, setPosts] = useState([]);
  let newArr = [];

  const getData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "books"));
        let arr = [];
        querySnapshot.forEach((doc) => {
            const booksData = doc.data()
            booksData.id = doc.id
            arr.push(booksData)
        })
        setPosts(arr);
    } catch (error) {
        console.log(error);        
    };
//     const docRef = collection(db, "books");
//     const querySnapshot = await getDocs(docRef);
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       const dataArr = doc.data();
//       newArr.push(dataArr);
//       setPosts(newArr);
//     });
  };

  const deleteBook = async (id) => {
    console.log("delete books", id);
    try {
      await deleteDoc(doc(db, "books", id));
    } catch (error) {
      console.error("Erroe delete document: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {console.log("Document:", posts)}
      <TableContainer>
        <Table variant="simple" fontSize="20px">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Publisher</Th>
              <Th>Year Publish</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.length === 0
              ? console.log("no data")
              : posts.map((books) => {
                  return (
                    <Tr key={books.id}>
                      <Td>{books.name}</Td>
                      <Td>{books.author}</Td>
                      <Td>{books.publisher}</Td>
                      <Td>{books.publishedDate}</Td>
                      <Td>
                        <Button colorScheme="blue">Update</Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={() => {
                            deleteBook(doc.id);
                          }}
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BooksData;
