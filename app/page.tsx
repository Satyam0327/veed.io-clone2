// pages/index.tsx
"use client";

import { useState } from 'react';
import {  MantineProvider } from '@mantine/core';
import {DropzoneButton} from './components/dropboxpopup';

const Home = () => {
  const [modalOpened, setModalOpened] = useState(true);

  return (
    <MantineProvider>
      <DropzoneButton />
    </MantineProvider>
      
    
  );
};

export default Home;
