import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, TrendingUp, ChevronDown, X, Sparkles, Zap } from "lucide-react";
import { VISIONARY_POSSIBILITIES, AI_TOOLS, AI_CATEGORIES } from "@/const";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663537154081/CryiRNCQAU6hTHfxuq7rHm/neoaifinder-hero-main-c8UKjevBuE7vwGbmCHQkSK.webp";
const HALLUCINATIONS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663537154081/CryiRNCQAU6hTHfxuq7rHm/neoaifinder-hallucinations-oDTEAAmdBE73KV5uE88oqp.webp";
const SPORTS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663537154081/CryiRNCQAU6hTHfxuq7rHm/neoaifinder-sports-ai-fjEGZq9HHKEiSjXHdnvtY8.webp";
const ASTRONOMY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663537154081/CryiRNCQAU6hTHfxuq7rHm/neoaifinder-astronomy-9W3sikTzdFSAQrV9vonEtL.webp";
const BIOTECH_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663537154081/CryiRNCQAU6hTHfxuq7rHm/neoaifinder-biotech-n4gBCR4XE33a25pL6BvU.webp";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedVisionaryId, setSelectedVisionaryId] = useState<string | null>(null);

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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION - FULL WIDTH IMMERSIVE */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>

        {/* Animated orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-maroon-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: "10%", right: "5%" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/40 to-maroon-600/40 border border-purple-500/50 rounded-full backdrop-blur-sm mb-6">
              <span className="text-sm font-semibold text-purple-200">✨ Discover 50+ AI Frontiers</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-maroon-400 to-purple-300 bg-clip-text text-transparent leading-tight"
          >
            Neoaifinder
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl text-purple-100 mb-8 font-light"
          >
            Explore mind-bending applications pushing the boundaries of what's possible
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-maroon-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              Explore Now
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-bold text-lg hover:bg-purple-500/10 transition-all">
              Submit Tool
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="text-purple-400">↓ Scroll to explore</div>
        </motion.div>
      </motion.section>

      {/* AI TOOLS SECTION - ASYMMETRIC LAYOUT */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-maroon-400 bg-clip-text text-transparent">
                33+ AI Tools
              </h2>
            </div>
            <p className="text-xl text-purple-200 max-w-2xl">
              Handpicked collection of the most powerful AI tools transforming industries
            </p>
          </motion.div>

          {/* Search and filters */}
          <div className="mb-12 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Search 33+ AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-purple-900/20 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-purple-300 text-lg"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-purple-600 to-maroon-600 text-white shadow-lg shadow-purple-500/50"
                    : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/40"
                }`}
              >
                All ({AI_TOOLS.length})
              </motion.button>
              {AI_CATEGORIES.map((cat: typeof AI_CATEGORIES[0]) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-purple-600 to-maroon-600 text-white shadow-lg shadow-purple-500/50"
                      : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/40"
                  }`}
                >
                  {cat.icon} {cat.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tools grid - asymmetric masonry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {filteredTools.map((tool: typeof AI_TOOLS[0], idx: number) => (
              <motion.a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl border border-purple-500/20 hover:border-purple-500/60 transition-all backdrop-blur-sm ${
                  idx % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-maroon-900/40" />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/20 to-maroon-500/20" />

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-xl group-hover:text-purple-300 transition-colors mb-2">
                          {tool.name}
                        </h3>
                        <p className="text-xs text-purple-400 uppercase tracking-wider">{tool.category}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold">{tool.rating}</span>
                      </div>
                    </div>
                    <p className="text-purple-200 mb-4">{tool.description}</p>
                  </div>
                  <div className="text-sm text-purple-300 font-semibold">{tool.pricing}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* VISIONARY SECTIONS - DYNAMIC LAYOUTS */}
      <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/40 to-maroon-600/40 border border-purple-500/50 rounded-full backdrop-blur-sm mb-6">
              <span className="text-sm font-semibold text-purple-200">🌟 50+ Visionary Frontiers</span>
            </div>
            <h2 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-maroon-400 to-purple-300 bg-clip-text text-transparent mb-4">
              The Future of AI
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Explore mind-bending applications that push the boundaries of what's possible
            </p>
          </motion.div>

          {/* Featured sections with images */}
          <div className="space-y-12 mb-16">
            {/* Hallucinations - Large featured */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div
                className="rounded-2xl overflow-hidden h-96 bg-cover bg-center"
                style={{ backgroundImage: `url('${HALLUCINATIONS_IMAGE}')` }}
              >
                <div className="w-full h-full bg-gradient-to-r from-black/60 to-transparent" />
              </div>
              <div>
                <h3 className="text-4xl font-black mb-4 text-purple-300">🌀 AI Hallucinations</h3>
                <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                  Explore the beautiful chaos of AI-generated hallucinations and impossible worlds. These aren't errors—they're creative manifestations of how neural networks interpret and extrapolate from training data.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedVisionaryId("hallucinations")}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-maroon-600 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Explore Section →
                </motion.button>
              </div>
            </motion.div>

            {/* Sports AI - Right aligned */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="md:order-2">
                <h3 className="text-4xl font-black mb-4 text-maroon-300">🏎️ Sports AI Revolution</h3>
                <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                  AI is transforming sports with real-time optimization, performance analytics, and strategic insights. From racing telemetry to cricket analytics, AI is revolutionizing how we play and watch sports.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedVisionaryId("sports-ai")}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-maroon-600 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Explore Section →
                </motion.button>
              </div>
              <div
                className="md:order-1 rounded-2xl overflow-hidden h-96 bg-cover bg-center"
                style={{ backgroundImage: `url('${SPORTS_IMAGE}')` }}
              >
                <div className="w-full h-full bg-gradient-to-l from-black/60 to-transparent" />
              </div>
            </motion.div>

            {/* Astronomy - Full width */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url('${ASTRONOMY_IMAGE}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-4xl font-black mb-2 text-purple-300">🌌 Astronomy & Universe</h3>
                <p className="text-lg text-purple-100 max-w-2xl">
                  AI is mapping the cosmos, discovering distant galaxies, and analyzing cosmic phenomena at unprecedented scales.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visionary grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VISIONARY_POSSIBILITIES.slice(0, 24).map((possibility: typeof VISIONARY_POSSIBILITIES[0], idx: number) => (
              <motion.button
                key={possibility.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedVisionaryId(possibility.id)}
                viewport={{ once: true }}
                className="relative p-6 bg-gradient-to-br from-purple-900/50 to-maroon-900/50 border-2 border-purple-500/30 hover:border-purple-500/70 rounded-xl transition-all text-left group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: possibility.color }} />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{possibility.icon}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">{possibility.title}</h3>
                  <p className="text-sm text-purple-200">{possibility.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED MODAL */}
      <AnimatePresence>
        {selectedVisionary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedVisionaryId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-black via-purple-950 to-maroon-950 border border-purple-500/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            >
              <button
                onClick={() => setSelectedVisionaryId(null)}
                className="absolute top-4 right-4 p-2 hover:bg-purple-900/50 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="text-6xl mb-4">{selectedVisionary.icon}</div>
                <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-maroon-400 bg-clip-text text-transparent mb-3">
                  {selectedVisionary.title}
                </h2>
                <p className="text-purple-200 text-lg">{selectedVisionary.description}</p>
              </div>

              <div className="prose prose-invert max-w-none mb-8 text-purple-100">
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{selectedVisionary.fullContent}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

                <div>
                  <h3 className="font-bold text-lg text-purple-300 mb-3">Powered by</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedVisionary.tools.map((tool: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-purple-900/50 border border-purple-500/30 rounded-full text-xs text-purple-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-maroon-900/30 border border-purple-500/30 rounded-lg">
                <h3 className="font-bold text-purple-300 mb-2">Future Outlook</h3>
                <p className="text-sm text-purple-200">{selectedVisionary.futureOutlook}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative py-24 px-4 md:px-8 bg-gradient-to-r from-purple-950 to-maroon-950 border-t border-purple-500/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6 text-white">Ready to Explore?</h2>
          <p className="text-xl text-purple-200 mb-8">
            Discover the next generation of AI tools and visionary applications shaping the future.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-maroon-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Start Exploring Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
