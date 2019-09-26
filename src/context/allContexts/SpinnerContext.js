import React, { useState, createContext } from 'react'
import Spinner from '../../components/globalComponents/Spinner/Spinner.js'

export const SpinnerContext = createContext()

export function SpinnerProvider(props) {
  const [loading, setLoading] = useState(false)

  const Loader = () => {
    return <Spinner />
  }

  return (
    <SpinnerContext.Provider
      value={{
        loading,
        setLoading,
        Loader
      }}
    >
      {props.children}
    </SpinnerContext.Provider>
  );
}
