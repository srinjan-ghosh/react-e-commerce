// import { useEffect } from 'react'
// import { auth } from '../../utils/firebase/firebase.utils'
// import { getRedirectResult } from 'firebase/auth'
// import {
// 	signInWithGoogleRedirect,
// } from '../../utils/firebase/firebase.utils'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => {
	// const logGoogleUser = async () => {
	// 	const { user } = await signInWithGooglePopup()
	// 	// console.log(response)
	// 	const docRef = await createUserDocumentFromAuth(user)
	// }

	// const logGoogleRedirectUser = async () => {
	// 	const response = await signInWithGoogleRedirect()
	// 	// after redirect below code is not run. as react unmounts the component due to new url
	// 	// and again mounts it. hence no auth state. hence useEffect is needed which gets the auth state
	//     // when the component mounts
	// 	console.log(response)
	// }

	// useEffect(() => {
	// 	async function getResponse() {
	// 		const response = await getRedirectResult(auth)
	// 		console.log(response)
	// 		if (response) {
	// 			const docRef = await createUserDocumentFromAuth(response.user)
	// 		}
	// 	}

	// 	getResponse()
	// }, [])

	return (
		<AuthenticationContainer>
			<SignInForm />
			{/* <button onClick={logGoogleRedirectUser}>
				Sign in with google redirect
			</button> */}
			<SignUpForm />
		</AuthenticationContainer>
	)
}

export default Authentication
