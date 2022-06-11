import useSWR from "swr"

const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then(res => res.json())

export function useData (url: string) {
    const { data, error } = useSWR(url, fetcher)
  
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
  }