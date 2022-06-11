export const CheckEnv = (env: any) => {
    if (env) {
        return env
    } else {
        return new Error(`${env} environment variable is not set`)
    }
}