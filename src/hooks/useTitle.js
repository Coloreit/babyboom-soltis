import { useEffect } from "react"

export const useTitle = (title, dependencies) => {

    if(!Array.isArray(dependencies)) {
        console.error('La dependencia no es un array')
        dependencies = []
    }

    useEffect(() => {
        document.title = title
    }, dependencies) //eslint-disable-line
}