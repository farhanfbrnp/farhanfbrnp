import React,{useEffect} from 'react'
import { collection, addDoc } from "firebase/firestore";
import {db} from "../configs/Firebase";

import { Box,Text } from '@chakra-ui/react'

function AppKodok() {

    const kkodok= async()=>{
        try {
          const docRef = await addDoc(collection(db, "authors"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }        
      }
    


useEffect(() => {
  kkodok()

}, [])



  return (

    <Box>
        <Text>Kodok</Text>
    </Box>
  )
}

export default AppKodok