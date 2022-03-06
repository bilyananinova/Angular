import Article from '../app/models/article.model';
import { data } from './seed';

export class ArticleData {
    getData() {
        let articles: Article[] = [];

        data.forEach((a, i) => {
            let article = new Article(a.title, a.description, a.author, a.imageUrl);
            articles.push(article)
        })

        return articles;
    }
}
