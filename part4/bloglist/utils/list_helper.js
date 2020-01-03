const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let likes = []
    blogs.forEach((blog) => {
        likes.push(blog.likes);
    })
    const reducer = (sum, item) => {
        return sum + item
    }
    return likes.reduce(reducer, 0)
}

module.exports = {
    dummy,
    totalLikes
}