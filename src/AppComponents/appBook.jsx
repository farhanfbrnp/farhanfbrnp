import React, { useEffect } from "react";
import { db } from "../configs/Firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Box, Text } from '@chakra-ui/react';

function AppBook() {
  const book = async () => {
    try {
      const docRef = await addDoc(collection(db, "books"), {
        title: "The Secret",
        writer: "Rhonda Byrne",
        year: 2006,
        publisher: "Atria Books",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  // useEffect(() => {
  //   book();
  // }, []);

  return(
    <Box>
        <Text>book</Text>
    </Box>
  )
}

export default AppBook;
