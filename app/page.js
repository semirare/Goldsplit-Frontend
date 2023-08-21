"use client";

import { Flex, Heading, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleFileUpload = async (event) => {
    //get file from event, call upload api, redirect to run screen
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
      console.error('File upload failed');
    }
  }

  return (
    <Flex justify='center' direction='column'>
      <Heading>Goldsplit helps you get the most out of your LiveSplti files!</Heading>
      <Text>Upload your splits!</Text>
      <input type='file' accept='.lss' onChange={handleFileUpload}/>
    </Flex>
  );
}

export default Home;