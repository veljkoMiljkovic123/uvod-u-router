import axios from "axios";


class PostsService {
    static getSingleProduct = () => axios.get('https://dummyjson.com/products/96')
}

export default PostsService