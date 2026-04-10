import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Star, TrendingUp, ChevronDown, X } from "lucide-react";
import { VISIONARY_POSSIBILITIES, AI_TOOLS, AI_CATEGORIES } from "@/const";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedVisionaryId, setSelectedVisionaryId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let filtered = AI_TOOLS;

    if (searchTerm) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    // Sort
    filtered.sort((a: typeof AI_TOOLS[0], b: typeof AI_TOOLS[0]) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

    const selectedVisionary = selectedVisionaryId
    ? VISIONARY_POSSIBILITIES.find((v: typeof VISIONARY_POSSIBILITIES[0]) => v.id === selectedVisionaryId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-maroon-950 text-white overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-maroon-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-purple-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-maroon-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-maroon-400 bg-clip-text text-transparent">
                  Neoaifinder
                </h1>
                <p className="text-sm text-purple-300">50+ Visionary AI Frontiers</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-maroon-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Submit Tool
            </motion.button>
          </motion.div>

          {/* Hero text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-purple-200 text-center mb-8"
          >
            Explore mind-bending applications pushing the boundaries of what's possible
          </motion.p>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* AI Tools Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            33+ AI Tools Directory
          </h2>

          {/* Search and filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Search 33+ AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-purple-300"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            >
              <option value="rating">Rating</option>
              <option value="reviews">Reviews</option>
              <option value="name">Name</option>
            </select>

            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:bg-purple-800/30 transition-colors"
            >
              {viewMode === "grid" ? "List" : "Grid"}
            </button>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-purple-600 to-maroon-600 text-white"
                  : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/30"
              }`}
            >
              All ({AI_TOOLS.length})
            </motion.button>
            {AI_CATEGORIES.map((cat: typeof AI_CATEGORIES[0]) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-maroon-600 text-white"
                    : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/30"
                }`}
              >
                {cat.icon} {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Tools grid/list */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                : "space-y-3"
            }
          >
            {filteredTools.map((tool: typeof AI_TOOLS[0], idx: number) => (
              <motion.a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 bg-gradient-to-br from-purple-900/40 to-maroon-900/40 border border-purple-500/20 rounded-lg hover:border-purple-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-purple-400">{tool.category}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold">{tool.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-purple-200 mb-2">{tool.description}</p>
                <p className="text-xs text-purple-400">{tool.pricing}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Visionary Possibilities Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-maroon-400 to-purple-400 bg-clip-text text-transparent">
            50+ Visionary AI Frontiers
          </h2>

          {/* Visionary grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VISIONARY_POSSIBILITIES.map((possibility: typeof VISIONARY_POSSIBILITIES[0], idx: number) => (
              <motion.button
                key={possibility.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() =>
                  setSelectedVisionaryId(
                    selectedVisionaryId === possibility.id ? null : possibility.id
                  )
                }
                className="relative p-6 bg-gradient-to-br from-purple-900/50 to-maroon-900/50 border-2 border-purple-500/30 rounded-xl hover:border-purple-500/70 transition-all text-left group overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: possibility.color }}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-3">{possibility.icon}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                    {possibility.title}
                  </h3>
                  <p className="text-sm text-purple-200">{possibility.description}</p>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: selectedVisionaryId === possibility.id ? 180 : 0 }}
                    className="mt-4 flex justify-end"
                  >
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Detailed Visionary Section */}
        <AnimatePresence>
          {selectedVisionary && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedVisionaryId(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-black via-purple-950 to-maroon-950 border border-purple-500/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedVisionaryId(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-purple-900/50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="mb-6">
                  <div className="text-5xl mb-4">{selectedVisionary.icon}</div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-maroon-400 bg-clip-text text-transparent mb-2">
                    {selectedVisionary.title}
                  </h2>
                  <p className="text-purple-200">{selectedVisionary.description}</p>
                </div>

                {/* Full content */}
                <div className="prose prose-invert max-w-none mb-8">
                  <div className="text-purple-100 whitespace-pre-wrap text-sm leading-relaxed">
                    {selectedVisionary.fullContent}
                  </div>
                </div>

                {/* Key sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Possibilities */}
                  <div>
                    <h3 className="font-bold text-lg text-purple-300 mb-3">Key Possibilities</h3>
                    <ul className="space-y-2">
                      {selectedVisionary.possibilities.map((p: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-purple-200">
                          <span className="text-maroon-400 mt-1">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="font-bold text-lg text-purple-300 mb-3">Powered by</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedVisionary.tools.map((tool: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-900/50 border border-purple-500/30 rounded-full text-xs text-purple-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Use cases and challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-bold text-lg text-purple-300 mb-3">Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedVisionary.useCases.map((uc: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-maroon-900/50 border border-maroon-500/30 rounded-full text-xs text-maroon-200"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-purple-300 mb-3">Challenges</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedVisionary.challenges.map((c: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-yellow-900/50 border border-yellow-500/30 rounded-full text-xs text-yellow-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Future outlook */}
                <div className="p-4 bg-gradient-to-r from-purple-900/30 to-maroon-900/30 border border-purple-500/30 rounded-lg">
                  <h3 className="font-bold text-purple-300 mb-2">Future Outlook</h3>
                  <p className="text-sm text-purple-200">{selectedVisionary.futureOutlook}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 border-t border-purple-500/20 backdrop-blur-sm py-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Discover Your Next AI Tool</h2>
          <p className="text-purple-200 mb-6">
            Help the community by submitting your favorite AI tool or innovative application.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-maroon-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Submit a Tool
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
