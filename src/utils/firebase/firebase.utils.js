import { initializeApp } from 'firebase/app'
// import {signInWithRedirect} from 'firebase/auth'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore'

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

export const createUserDocumentFromAuth = async (
	user,
	additionalInformation = {}
) => {
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
				...additionalInformation,
			})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return
	return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return
	return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
	await signOut(auth)
}

export const onAuthStateChangedListner = (callback) => {
	return onAuthStateChanged(auth, callback)
}

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey)
	const batch = writeBatch(db)
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase())
		batch.set(docRef, object)
	})

	await batch.commit()
	console.log('done')
}

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef)

	const querySnapshot = await getDocs(q)
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data()
		acc[title.toLowerCase()] = items
		return acc
	}, {})

	return categoryMap
}
