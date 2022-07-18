import data from '../data'

export default async function products(req, res) {
    const popularId  = Number(req.query.popularID);
    const { Popular } = data;

    if (popularId) {
        const popular = Popular.find(value => value.id === popularId);
        
        return res.status(200).json(popular);
    }

    return res.status(404).json({ error    : 'Popular Post not found' });
}