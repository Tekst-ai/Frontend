import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const Login: NextPageWithLayout = () => {
    return (
        <div>
            Login
        </div>
    )
}

export default Login

Login.getLayout = function PageLayout(page: ReactElement) {
    return page
}