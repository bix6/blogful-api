function makeArticlesArray() {
    return [
        {
            id: 1,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'First post!',
            style: 'How-to',
            content: 'First place content yeah',
            author: 1
        },
        {
            id: 2,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'Second post',
            style: 'News',
            content: 'Second content oooo',
            author: 1
        },
        {
            id: 3,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'Ok Ok Third',
            style: 'Listicle',
            content:' Third place Listicle',
            author: 2
        },
        {
            id: 4,
            date_published: '2029-01-22T16:28:32.615Z',
            title: '4th is the 4th',
            style: 'Story',
            content: 'May the 4th be with you',
            author: 2
        }
    ];
};

function makeMaliciousArticle() {
    const maliciousArticle = {
      id: 911,
      style: 'How-to',
      date_published: new Date().toISOString(),
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }
    const expectedArticle = {
      ...maliciousArticle,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousArticle,
      expectedArticle,
    }
}

module.exports = {
    makeArticlesArray,
    makeMaliciousArticle
}