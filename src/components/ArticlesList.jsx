import { Link } from 'react-router-dom'

export default function ArticlesList({ articles }) {
    return (
        <>
            {articles.map((article, i) => (
                <div key={i} className='article-list-item'>
                    <Link key={article.name} to={`/articles/${article.name}`}>
                        <h3>{article.title}</h3>
                    </Link>
                    <p>{article.content[0].substring(0, 150)} ... </p>
                </div>
            ))}
        </>
    )
}
