import React from 'react'
import Start from './Start'
function PermissionDenied() {
  return (
    <>
    <h1 className="text-center text-danger">Permission Denied</h1>
    <Start/>
    </>
  )
}

export default PermissionDenied