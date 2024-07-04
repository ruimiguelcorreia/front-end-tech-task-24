export const fetchData = async <T>(path: string): Promise<T> => {
    const response = await fetch(path)

    if (!response.ok) {
        throw new Error('Failed to fetch data.')
    }

    return response.json()
}
