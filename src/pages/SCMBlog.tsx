import { scmBlogPosts } from "@/data/scm-blog";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function SCMBlog() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">SCM Blog</h1>
        <Link
          to="/scm/blog/new"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Viết bài mới
        </Link>
      </div>
      <p className="text-muted-foreground mb-8">
        Đọc các bài viết thực chiến về tồn kho, logistics, và chuỗi cung ứng
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scmBlogPosts.map((post) => (
          <Link
            key={post.id}
            to={post.link}
            className="group block hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="glass-card p-5 h-full flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-xs font-medium text-white">{post.id}</span>
                </div>
                <span className="text-xs text-muted-foreground mt-1">Bài viết</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-100 line-clamp-2 group-hover:text-pink-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 mt-auto">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}