export const load = async ({ fetch }) => {
    const response = await fetch (`/api/news`)
    const posts = await response.json()

    return {
        posts
    }
}
