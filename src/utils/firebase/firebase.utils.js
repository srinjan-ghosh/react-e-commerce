import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyC1jBi1-kB_UojZXWkPLH58ztz04pMq3MY',
	authDomain: 'react-crown-clothing-64dae.firebaseapp.com',
	projectId: 'react-crown-clothing-64dae',
	storageBucket: 'react-crown-clothing-64dae.appspot.com',
	messagingSenderId: '823039847062',
	appId: '1:823039847062:web:f04da5b1fd254d4f8370b7',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
