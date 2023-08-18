"use client";

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
      router.push('/runs');
    }
    else {
      console.error('File upload failed');
    }
  }

  return (
      <div className='flex flex-col justify-center text-yellow-500'>
        <div className='flex justify-center'>Goldsplit helps you get the most of your Livesplit files!</div>
        <label>
          Upload your splits!
          <input type='file' accept='.lss' onChange={handleFileUpload}/>
        </label>
      </div>
  );
}

export default Home;