import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { db } from "../firebase"

const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    async function signup(email, password, name) {
        return auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
            userCredentials.user.updateProfile({
                displayName: name,
            })
            const usersRef = db.ref('users');
            const user = auth.currentUser
            const childNode = user.uid
            usersRef.child(childNode).set({
                name,
                email
            })
        })
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}