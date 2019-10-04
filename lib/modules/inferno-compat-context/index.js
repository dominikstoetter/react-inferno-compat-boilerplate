import React from 'inferno-compat'
export default React
export * from 'inferno-compat'
// bypass export of React.createContext
import createContext from 'create-react-context/lib/implementation' //eslint-disable-line
export { createContext }
