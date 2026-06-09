import { Helmet } from "react-helmet-async"
import { scmBlogPosts } from "@/data/scm-blog";
import { Link } from "react-router-dom";

export default function SCMBlog() {
  return (
    <>
      <Helmet>
        <title>Bài viết Supply Chain | SCM Thực Chiến</title>
        <meta name="description" content="Bài viết thực chiến về Supply Chain: Planning, Procurement, Inventory, Warehouse, Logistics cho doanh nghiệp Việt Nam." />
      </Helmet>
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">SCM Blog</h1>
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
              <div className="glass-card p-5 h-full flex flex-col border-blue-500/10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-xs font-medium text-white">{post.id}</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">Bài viết</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-100 line-clamp-2 group-hover:text-blue-400 transition-colors">
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
    </>
  );
}