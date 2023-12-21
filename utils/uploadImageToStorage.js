import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

export const uploadImageToStorage = async (image, folder) => {
  if (image === null) return;
  const fileName = Date.now().toString();
  const imageRef = ref(storage, folder + fileName);
  uploadBytes(imageRef, image).then(() => {
    alert('Image uploaded');
  });
};
