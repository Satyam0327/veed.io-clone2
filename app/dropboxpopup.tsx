// components/DropboxPopup.tsx
import { Modal, Box, Text, Button } from '@mantine/core';

const DropboxPopup = ({ opened, onClose }) => (
  <Modal opened={opened} onClose={onClose} title="Upload your video">
    <Box className="text-center p-4">
      <Text size="lg">Drag and drop your video files here</Text>
      <Button variant="outline" className="mt-4">Browse Files</Button>
    </Box>
  </Modal>
);

export default DropboxPopup;
