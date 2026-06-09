import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Save, Copy, Eye, ArrowLeft, Trash2, Plus, FileText, Star } from "lucide-react";

// Template cho bài viết mới
const newPost = {
  id: "",
  title: "",
  description: "",
  date: "",
  readTime: "",
  content: "",
};

type BlogPost = typeof newPost;

// Convert Vietnamese to slug
const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Generate date
const getDate = (): string => {
  const now = new Date();
  return now.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
};

export default function BlogEditor() {
  // Form state
  const [post, setPost] = useState<BlogPost>({
    ...newPost,
    date: getDate(),
    readTime: "5 phút đọc",
  });
  
  // UI state
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [savedPosts, setSavedPosts] = useState<BlogPost[]>([]);
  const [activeTab, setActiveTab] = useState<"editor" | "list">("editor");
  
  // Load saved posts from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("scm_blog_drafts");
    if (saved) {
      setSavedPosts(JSON.parse(saved));
    }
  }, []);
  
  // Save to localStorage
  const saveToLocalStorage = () => {
    const newPostWithId = { ...post, id: Date.now().toString() };
    const updated = [...savedPosts, newPostWithId];
    localStorage.setItem("scm_blog_drafts", JSON.stringify(updated));
    setSavedPosts(updated);
    alert("Đã lưu vào localStorage!");
  };
  
  // Delete from localStorage
  const deleteFromLocalStorage = (id: string) => {
    const updated = savedPosts.filter(p => p.id !== id);
    localStorage.setItem("scm_blog_drafts", JSON.stringify(updated));
    setSavedPosts(updated);
  };
  
  // Load from localStorage
  const loadFromLocalStorage = (id: string) => {
    const found = savedPosts.find(p => p.id === id);
    if (found) {
      setPost(found);
      setActiveTab("editor");
    }
  };
  
  // Generate code for data/scm-blog.tsx
  const generateListCode = (): string => {
    const slug = toSlug(post.title) || "ten-slug";
    return `{
  id: "${Date.now()}",
  title: "${post.title}",
  description: "${post.description}",
  link: "/scm/blog/${slug}",
},`;
  };
  
  // Generate code for SCMBlogDetail.tsx
  const generateDetailCode = (): string => {
    const slugValue = toSlug(post.title) || "ten-slug";
    return `"${slugValue}": {
  title: "${post.title}",
  description: "${post.description}",
  date: "${post.date}",
  readTime: "${post.readTime}",
  content: \`
    <div className="space-y-6">
      <div className="bg-pink-500/10 border-l-4 border-pink-500 p-4 rounded-r-lg">
        <h3 className="font-semibold text-pink-400 flex items-center gap-2">
          <Star className="w-4 h-4" /> Mục tiêu bài viết
        </h3>
        <p className="text-sm text-muted-foreground">
          ${post.description}
        </p>
      </div>
      
      <h2 id="phan-1" className="text-2xl font-bold mb-4 text-gradient">1. Tiêu đề phần 1</h2>
      <p className="mb-4 leading-relaxed">Nội dung...</p>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <h3 className="font-semibold text-pink-400 mb-1">📊 Tiêu đề card</h3>
        <p className="text-sm text-muted-foreground">Nội dung card...</p>
      </div>
      
      <h2 id="ket-luan" className="text-2xl font-bold mb-4 text-gradient">Kết luận</h2>
      <p className="mb-4 leading-relaxed">Tóm tắt kết luận...</p>
    </div>
  \`
},`;
  };
  
  // Copy code
  const copyCode = () => {
    const code = `// ===== THÊM VÀO src/data/scm-blog.tsx =====\n${generateListCode()}\n\n// ===== THÊM VÀO src/pages/SCMBlogDetail.tsx =====\n${generateDetailCode()}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Preview content
  const PreviewContent = () => (
    <div className="prose prose-invert max-w-none">
      <div className="bg-pink-500/10 border-l-4 border-pink-500 p-4 rounded-r-lg mb-6">
        <h3 className="font-semibold text-pink-400 flex items-center gap-2">
          <Star className="w-4 h-4" /> Mục tiêu bài viết
        </h3>
        <p className="text-sm text-muted-foreground">
          {post.description || "Mô tả ngắn về bài viết..."}
        </p>
      </div>
      
      <h2 id="phan-1" className="text-2xl font-bold mb-4">1. Tiêu đề phần 1</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        Nội dung phần 1... (soạn thảo nội dung chi tiết)
      </p>
      
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
        <h3 className="font-semibold text-pink-400 mb-1">📊 Tiêu đề card</h3>
        <p className="text-sm text-muted-foreground">Nội dung card...</p>
      </div>
      
      <h2 id="ket-luan" className="text-2xl font-bold mb-4">Kết luận</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        Tóm tắt kết luận...
      </p>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/scm/blog" className="flex items-center gap-2 text-muted-foreground hover:text-pink-400 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Quay lại</span>
            </Link>
            <div className="h-4 w-px bg-white/10" />
            <h1 className="text-lg font-bold">Blog Editor</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "editor" ? "bg-pink-500 text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              <Plus className="w-4 h-4 inline mr-1" />
              Soạn bài
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "list" ? "bg-pink-500 text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-1" />
              Bản nháp ({savedPosts.length})
            </button>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar - Form */}
        {activeTab === "editor" && (
          <aside className="w-80 border-r border-white/10 p-4 space-y-4 h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tiêu đề bài viết</label>
                <input
                  type="text"
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                  placeholder="Nhập tiêu đề..."
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Mô tả ngắn</label>
                <textarea
                  value={post.description}
                  onChange={(e) => setPost({ ...post, description: e.target.value })}
                  placeholder="Mô tả 1-2 câu..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none resize-none"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Ngày đăng</label>
                  <input
                    type="text"
                    value={post.date}
                    onChange={(e) => setPost({ ...post, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Thời gian đọc</label>
                  <input
                    type="text"
                    value={post.readTime}
                    onChange={(e) => setPost({ ...post, readTime: e.target.value })}
                    placeholder="5 phút đọc"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={saveToLocalStorage}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Lưu LocalStorage
                </button>
                
                <button
                  onClick={copyCode}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Đã copy!" : "Copy Code"}
                </button>
              </div>
            </div>
          </aside>
        )}
        
        {/* Main - Preview */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === "editor" ? (
            <div className="max-w-3xl mx-auto">
              {/* Preview Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">{post.title || "Tiêu đề bài viết"}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {post.date} • {post.readTime}
                  </p>
                </div>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    showPreview ? "bg-pink-500 text-white" : "bg-white/10 text-muted-foreground"
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
              </div>
              
              {/* Preview Content */}
              {showPreview ? (
                <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
                  <PreviewContent />
                </div>
              ) : (
                <div className="text-center py-20">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-muted-foreground/30" />
                  <p className="text-muted-foreground">Nhấn Preview để xem trước bài viết</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">
                    Hoặc nhấn "Copy Code" để xuất code
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Draft List */
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold mb-4">Bản nháp đã lưu ({savedPosts.length})</h2>
              
              {savedPosts.length === 0 ? (
                <p className="text-muted-foreground">Chưa có bản nháp nào.</p>
              ) : (
                <div className="space-y-3">
                  {savedPosts.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium">{p.title || "Chưa có tiêu đề"}</h3>
                        <p className="text-sm text-muted-foreground">{p.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => loadFromLocalStorage(p.id)}
                          className="p-2 rounded-lg hover:bg-white/10 text-pink-400"
                          title="Chỉnh sửa"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteFromLocalStorage(p.id)}
                          className="p-2 rounded-lg hover:bg-white/10 text-red-400"
                          title="Xóa"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}