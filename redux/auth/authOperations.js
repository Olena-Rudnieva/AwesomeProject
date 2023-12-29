import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { authSlice } from './authSlice';

const { updateUserProfile, authStateChange, authSignOut, updatePhoto } =
  authSlice.actions;

export const registerDB =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const image = getState().auth.image;
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      await updateProfile(user, {
        photoURL: image,
        displayName: login,
      });

      const userUpdated = auth.currentUser;

      const userUpdatedProfile = {
        id: userUpdated.uid,
        name: userUpdated.displayName,
        email: userUpdated.email,
        image: userUpdated.photoURL,
      };

      console.log(userUpdatedProfile);
      dispatch(updateUserProfile(userUpdatedProfile));
    } catch (error) {
      throw new Error(error.message);
    }
  };

export const loginDB =
  ({ email, password }) =>
  async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(error.message);
    }
  };

export const changeAuthStatusUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdatedProfile = {
        id: user.uid,
        image: user.photoURL,
        name: user.displayName,
        email: user.email,
      };

      dispatch(updateUserProfile(userUpdatedProfile));
      dispatch(authStateChange({ stateChange: true }));
    }
  });
};

export const changeAvatarUser =
  (processedAvatarURL) => async (dispatch, getState) => {
    const user = auth.currentUser;

    if (user !== null) {
      await updateProfile(user, {
        photoURL: processedAvatarURL,
      });
    }

    dispatch(updatePhoto({ image: processedAvatarURL }));
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  await signOut(auth);

  dispatch(authSignOut());
};
