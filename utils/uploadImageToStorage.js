import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

export const uploadImageToStorage = async (image, folder) => {
  if (image === null) return;
  const fileName = Date.now().toString();
  const imageRef = ref(storage, `avatars/${fileName}`);
  uploadBytes(imageRef, image).then(() => {
    alert('Image Uploaded');
  });
};
//   console.log('function', image);
//   const fileName = Date.now().toString();
//   console.log('fileName', fileName);
//   const imageRef = ref(storage, folder + fileName);
//   console.log('imageRef', imageRef);

//   uploadBytes(imageRef, image, { contentType: 'image/jpeg' }).then(() => {
//     alert('Image uploaded');
//   });
// };

// import { ref, uploadBytes } from 'firebase/storage';
// import { storage } from '../firebase/config';

// export const uploadImageToStorage = async (imageUri, folder) => {
//   if (imageUri === null) return;

//   //   const response = await fetch(imageUri);
//   //   const blob = await response.blob();

//   //   const fileName = Date.now().toString();
//   //   const imageRef = ref(storage, folder + fileName);

//   //   await uploadBytes(imageRef, blob);
//   //   console.log('Image uploaded successfully');
//   // } catch (error) {
//   //   console.error('Error uploading image:', error);
//   const uniqPostId = Date.now().toString();
//   try {
//     const response = await fetch(imageUri);
//     const file = await response.blob();
//     const imageRef = ref(storage, `avatars/${uniqPostId}`);
//     await uploadBytes(imageRef, file);

//     const processedPhoto = await getDownloadURL(imageRef);
//     return processedPhoto;
//   } catch (error) {
//     console.log('error', error.message);
//   }
// };

// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from '../firebase/config';
// import RNFS from 'react-native-fs';

// export const uploadImageToStorage = async (image, folder) => {
//   console.log('!!!! Start uploading Image to Storage !!!!');

//   const response = await fetch(image);
//   console.log('response', response);
//   const file = await response.blob();
//   const fileName = Date.now().toString();

//   const avatarsRef = ref(storage, folder + fileName);

//   await uploadBytes(avatarsRef, file);

//   const imageURL = await getDownloadURL(ref(storage, avatarsRef));

//   console.log('!!!! Image uploaded to Storage !!!!');

//   return imageURL;
// };
