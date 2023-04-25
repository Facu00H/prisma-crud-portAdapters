"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(title, content, published, author) {
        this.id = -1;
        this.title = title;
        this.content = content;
        this.published = published;
        this.author = author;
        this.authorId = author.id;
    }
}
exports.Post = Post;
//# sourceMappingURL=post.js.map