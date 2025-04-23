import React from 'react'

function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route index element={<Home/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes