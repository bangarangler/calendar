import React from 'react'
import { SpinnerProvider, EventProvider } from './allContexts'

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
    React.cloneElement(parent, {
      children: kids
    }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<SpinnerProvider />, <EventProvider />]}>
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
