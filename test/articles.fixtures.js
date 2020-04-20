function makeArticlesArray() {
    return [
        {
            id: 1,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'First post!',
            style: 'How-to',
            content: 'First place content yeah'
        },
        {
            id: 2,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'Second post',
            style: 'News',
            content: 'Second content oooo'
        },
        {
            id: 3,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'Ok Ok Third',
            style: 'Listicle',
            content:' Third place Listicle'
        },
        {
            id: 4,
            date_published: '2029-01-22T16:28:32.615Z',
            title: '4th is the 4th',
            style: 'Story',
            content: 'May the 4th be with you'
        }
    ];
};

module.exports = {
    makeArticlesArray,
}