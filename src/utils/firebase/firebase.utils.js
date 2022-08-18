import { initializeApp } from 'firebase/app'
// import {signInWithRedirect} from 'firebase/auth'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyC1jBi1-kB_UojZXWkPLH58ztz04pMq3MY',
	authDomain: 'react-crown-clothing-64dae.firebaseapp.com',
	projectId: 'react-crown-clothing-64dae',
	storageBucket: 'react-crown-clothing-64dae.appspot.com',
	messagingSenderId: '823039847062',
	appId: '1:823039847062:web:f04da5b1fd254d4f8370b7',
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// export const signInWithGoogleRedirect = () =>
// 	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (user) => {
	const userDocRef = doc(db, 'users', user.uid)

	// console.log(userDocRef)

	const userSnapshot = await getDoc(userDocRef)
	// console.log(userSnapshot)
	// console.log(userSnapshot.exists())

	if (!userSnapshot.exists()) {
		// user doesnot exsist
		const { displayName, email } = user
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}
