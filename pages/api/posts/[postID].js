import data from '../data'

export default async function products(req, res) {
    const postId  = Number(req.query.postID);
    const { Posts } = data;

    if (postId) {
        const post = Posts.find(value => value.id === postId);
        
        return res.status(200).json(post);
    }

    return res.status(404).json({ error    : 'Post not found' });
}