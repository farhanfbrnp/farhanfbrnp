import { Box, Button, Input, Text, Center } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

import { db } from "../configs/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

function AddFirestore() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = async () => {
    await setDoc(doc(db, "books", name), {
      name: name,
      author: author,
      publisher: publisher,
      publishedDate: date,
    });
  };

  // const docRef = doc(db, "books");
  // const docSnap = async () => {
  //   await getDoc(docRef);
  // };

  // if (docSnap.exist()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   console.log("No such document:");
  // }

  return (
    <Center>
      <Box fontSize='20px'maxW="300px" align="center" mb={5} fontFamily="cursive">
        <Text>Book Title</Text>
        <Input
          fontFamily="cursive"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <Text>Author Name</Text>
        <Input type="text" onChange={(e) => setAuthor(e.target.value)} />

        <Text>Publisher Name</Text>
        <Input type="text" onChange={(e) => setPublisher(e.target.value)} />

        <Text>Year Pubslished</Text>
        <Input type="date" onChange={(e) => setDate(e.target.value)} />

        <Button colorScheme='whatsapp' onClick={() => handleSubmit()} mt={5}>
          Submit
        </Button>
      </Box>
    </Center>
  );
}

export default AddFirestore;
