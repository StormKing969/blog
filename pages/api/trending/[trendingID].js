import data from '../data'

export default async function products(req, res) {
    const trendingId  = Number(req.query.trendingID);
    const { Trending } = data;

    if (trendingId) {
        const trending = Trending.find(value => value.id === trendingId);
        
        return res.status(200).json(trending);
    }

    return res.status(404).json({ error    : 'Trending Post not found' });
}