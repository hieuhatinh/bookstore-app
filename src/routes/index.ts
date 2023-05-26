const routes = {
    home: '/', 
    login: '/auth/login', 
    register: '/auth/register', 
    booksOfTheGenre: (params: string) => {
        return `/products/${params}`
    }, 
    linkToProduct: (category: string | string[] | undefined, id: string) => {
        return `/product/${category}/${id}`
    }
}

export default routes