import { scmBlogPosts } from "@/data/scm-blog";
import { Link } from "react-router-dom";

export default function SCMBlog() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-6">
      <h1 className="text-2xl font-bold mb-6">SCM Blog</h1>
      <p className="text-muted-foreground mb-8">
        Đọc các bài viết thực chiến về tồn kho, logistics, và chuỗi cung ứng
      </p>

      <div className="space-y-6">
        {scmBlogPosts.map((post) => (
          <Link
            key={post.id}
            to={post.link}
            className="block hover:shadow-lg transition-shadow"
          >
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{post.id}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-gray-100">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}