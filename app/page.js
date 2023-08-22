"use client";

import { Flex, Heading, Text, Card, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Loader from "@/components/Loader/loader";

const Home = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    //get file from event, call upload api, redirect to run screen
    setLoading(true);
    const formData = new FormData()
    formData.append('splits_file', event.target.files[0])

    const response = await fetch('/goldsplit/upload/', {
      method: 'POST',
      body: formData,
    }).catch((e) => console.log(e));

    if (response.ok) {
      const data = await response.json()
      router.push(`/runs/${data.run_id}/`);
    }
    else {
      document.getElementById('fileInput').value = ''
      setError(true);
      console.error('File upload failed');
    }
    setLoading(false);
  }

  const handleClick = () => {
    document.getElementById('fileInput').click()
  }

  return (
    <Flex direction='column'>
      <Flex justify='center'>
        <Heading color='amber'>Goldsplit helps you get the most out of your splits!</Heading>
      </Flex>
      <Flex justify='center' py='5'>
        <Button onClick={handleClick} size='2'>
          Upload your splits!
          <input id='fileInput' type='file' accept='.lss' onChange={handleFileUpload} className='invisible'/>
        </Button>
      </Flex>
      {loading && 
        <Flex justify='center'>
          <Loader/>
        </Flex>
      }
      {error && (
        <Flex justify='center'>
          There was a problem uploading your splits. Please try again or select another splits file.
        </Flex>
      )}
    </Flex>
  );
}

export default Home;