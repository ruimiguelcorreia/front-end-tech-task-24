import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetchData'
import type { AppliedFilters, Properties } from '../types'

type UseFetchDataResult = {
    data: Properties
    loading: boolean
    error: string | null
}

type JSONFetchResult = Record<'properties', Properties>

const useFetchData = (
    filters: AppliedFilters | undefined
): UseFetchDataResult => {
    const [state, setState] = useState<UseFetchDataResult>({
        data: [],
        loading: true,
        error: null,
    })

    useEffect(() => {
        const callback = async () => {
            try {
                const results = await fetchData<JSONFetchResult>(
                    process.env.REACT_APP_DATA_PATH
                )

                const data = !filters
                    ? results.properties
                    : results.properties.filter(
                          (property) =>
                              (!filters.bedrooms.length ||
                                  filters.bedrooms.includes(
                                      property.bedrooms
                                  )) &&
                              (!filters.propertyType.length ||
                                  filters.propertyType.includes(property.type))
                      )

                setState((prev) => ({ ...prev, data }))
            } catch (err) {
                // TODO: Create the type guard.
                setState((prev) => ({ ...prev, error: (err as Error).message }))
            } finally {
                setState((prev) => ({ ...prev, loading: false }))
            }
        }

        callback()
    }, [filters])

    return state
}

export default useFetchData
