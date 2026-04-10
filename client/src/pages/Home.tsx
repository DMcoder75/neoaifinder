import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Search,
  ExternalLink,
  Zap,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Sparkles,
  Grid3x3,
  List,
} from "lucide-react";
import { AI_CATEGORIES, AI_TOOLS, VISIONARY_POSSIBILITIES } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Neoaifinder - World's Greatest AI Discovery Platform
 * Design: Premium, innovative, space-efficient with 50+ visionary sections
 * Colors: Black (#0F0F0F), Purple (#9D4EDD), Maroon (#560BAD), White
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "name">("rating");
  const [activeVisionaryTab, setActiveVisionaryTab] = useState("hallucinations");
  const [toolsView, setToolsView] = useState<"grid" | "compact">("compact");

  const filteredAndSortedTools = useMemo(() => {
    let tools = AI_TOOLS.filter((tool) => {
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "rating") {
      tools.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      tools.sort((a, b) => b.reviews - a.reviews);
    } else {
      tools.sort((a, b) => a.name.localeCompare(b.name));
    }

    return tools;
  }, [selectedCategory, searchTerm, sortBy]);

  const stats = [
    { label: "AI Tools", value: "33+", icon: Zap },
    { label: "Visionary Sections", value: "50+", icon: Award },
    { label: "Avg Rating", value: "4.7★", icon: Star },
    { label: "Active Users", value: "500K+", icon: Users },
  ];

  const activeVisionarySection = VISIONARY_POSSIBILITIES.find(
    (v) => v.id === activeVisionaryTab
  );

  // Group visionary sections by category
  const visionaryGroups = {
    perception: VISIONARY_POSSIBILITIES.slice(0, 5),
    sports: VISIONARY_POSSIBILITIES.slice(5, 12),
    science: VISIONARY_POSSIBILITIES.slice(12, 20),
    entertainment: VISIONARY_POSSIBILITIES.slice(20, 25),
    healthcare: VISIONARY_POSSIBILITIES.slice(25, 29),
    environment: VISIONARY_POSSIBILITIES.slice(29, 32),
    education: VISIONARY_POSSIBILITIES.slice(32, 34),
    finance: VISIONARY_POSSIBILITIES.slice(34, 36),
    transportation: VISIONARY_POSSIBILITIES.slice(36, 38),
    agriculture: VISIONARY_POSSIBILITIES.slice(38, 40),
    language: VISIONARY_POSSIBILITIES.slice(40, 42),
    ethics: VISIONARY_POSSIBILITIES.slice(42, 44),
    neuroscience: VISIONARY_POSSIBILITIES.slice(44, 46),
    fashion: VISIONARY_POSSIBILITIES.slice(46, 47),
    urban: VISIONARY_POSSIBILITIES.slice(47, 48),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1A0F2E] to-[#0F0F0F]" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 border-b border-border/50 backdrop-blur-md bg-background/80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Neoaifinder
              </h1>
              <p className="text-xs text-muted-foreground">50+ Visionary AI Frontiers</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-purple-500/30 hover:bg-purple-500/10"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Submit Tool
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                The Future of AI
              </span>
              <br />
              <span className="text-white">Awaits Discovery</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              Explore 33+ AI tools and 50+ visionary frontiers. From mind-bending hallucinations to revolutionary sports AI, from digital resurrection to quantum computing.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-card border border-border/50 rounded-lg p-3 hover:border-purple-500/50 transition-all"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search 33+ AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border/50 focus:border-purple-500/50 text-sm"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "rating" | "reviews" | "name")}
              className="px-3 py-2 bg-card border border-border/50 rounded-lg text-foreground text-sm hover:border-purple-500/50 transition-all"
            >
              <option value="rating">Rating</option>
              <option value="reviews">Reviews</option>
              <option value="name">Name</option>
            </select>
            <div className="flex gap-2 bg-card border border-border/50 rounded-lg p-1">
              <button
                onClick={() => setToolsView("compact")}
                className={`p-2 rounded transition-all ${
                  toolsView === "compact"
                    ? "bg-purple-600 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setToolsView("grid")}
                className={`p-2 rounded transition-all ${
                  toolsView === "grid"
                    ? "bg-purple-600 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all ${
                selectedCategory === null
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/50"
                  : "bg-card border border-border/50 text-foreground hover:border-purple-500/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              All ({AI_TOOLS.length})
            </motion.button>
            {AI_CATEGORIES.map((category) => {
              const count = AI_TOOLS.filter((t) => t.category === category.id).length;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all flex items-center gap-1 ${
                    selectedCategory === category.id
                      ? "text-white shadow-lg"
                      : "bg-card border border-border/50 text-foreground hover:border-purple-500/50"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category.id ? category.color : undefined,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <span className="text-sm">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{count}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Tools Section - Optimized */}
      <motion.section
        className="py-16 px-4 border-t border-border/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-1">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                AI Tools Directory
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {filteredAndSortedTools.length} tools found • Curated & verified
            </p>
          </motion.div>

          {filteredAndSortedTools.length > 0 ? (
            <motion.div
              className={
                toolsView === "compact"
                  ? "space-y-2"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              }
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredAndSortedTools.map((tool, idx) => (
                <CompactToolCard key={tool.id} tool={tool} index={idx} view={toolsView} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground">No tools found. Try a different search.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* 50+ Visionary Possibilities Section */}
      <motion.section
        className="py-20 px-4 border-t border-border/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                50+ Visionary AI Frontiers
              </span>
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore mind-bending applications pushing the boundaries of what's possible
            </p>
          </motion.div>

          {/* Visionary Categories Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(visionaryGroups).map(([groupName, sections]) => (
              <motion.div
                key={groupName}
                className="bg-card border border-border/50 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                <h4 className="font-bold text-sm mb-3 capitalize text-purple-400">
                  {groupName.replace(/([A-Z])/g, " $1")}
                </h4>
                <div className="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveVisionaryTab(section.id)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${
                        activeVisionaryTab === section.id
                          ? "bg-purple-600 text-white"
                          : "hover:bg-purple-500/10 text-foreground"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <span className="mr-2">{section.icon}</span>
                      {section.title.split(" &")[0]}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Visionary Content */}
          {activeVisionarySection && (
            <motion.div
              className="bg-card border border-border/50 rounded-xl p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ backgroundColor: activeVisionarySection.color + "20" }}
                    >
                      {activeVisionarySection.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{activeVisionarySection.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {activeVisionarySection.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-bold text-purple-400 text-sm">Key Possibilities:</h5>
                    {activeVisionarySection.possibilities.map((possibility, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                      >
                        <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground">{possibility}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="w-full h-64 rounded-lg bg-cover bg-center border border-border/50 mb-4"
                    style={{
                      backgroundColor: activeVisionarySection.color + "10",
                      backgroundImage: `linear-gradient(135deg, ${activeVisionarySection.color}20 0%, transparent 100%)`,
                    }}
                  />
                  <div>
                    <h5 className="font-bold text-purple-400 text-sm mb-3">Powered by:</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeVisionarySection.tools.map((tool, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded text-xs text-purple-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 px-4 border-t border-border/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Discover Your Next AI Tool
              </span>
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Help the community by submitting your favorite AI tool or innovative application.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Submit a Tool
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-border/50 py-10 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p className="mb-3">Neoaifinder © 2026 • The World's Greatest AI Discovery Platform</p>
          <div className="flex justify-center gap-6 text-xs">
            <a href="#" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

interface CompactToolCardProps {
  tool: (typeof AI_TOOLS)[0];
  index: number;
  view: "grid" | "compact";
}

function CompactToolCard({ tool, index, view }: CompactToolCardProps) {
  const category = AI_CATEGORIES.find((c) => c.id === tool.category);

  if (view === "compact") {
    return (
      <motion.a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 p-3 bg-card border border-border/50 rounded-lg hover:border-purple-500/50 transition-all"
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: index * 0.02 },
          },
        }}
        whileHover={{ x: 4 }}
      >
        <div
          className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0"
          style={{ backgroundColor: category?.color + "20" }}
        >
          {category?.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-sm text-foreground group-hover:text-purple-400 transition-colors truncate">
            {tool.name}
          </h4>
          <p className="text-xs text-muted-foreground truncate">{category?.name}</p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold">{tool.rating}</span>
        </div>
        <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: index * 0.03 },
        },
      }}
      whileHover={{ y: -4 }}
    >
      <div className="relative bg-card border border-border/50 rounded-lg p-4 hover:border-purple-500/50 transition-all h-full flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-base"
            style={{ backgroundColor: category?.color + "20" }}
          >
            {category?.icon}
          </div>
          {tool.isFeatured && (
            <motion.div
              className="flex items-center gap-1 bg-purple-600/20 px-2 py-0.5 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 text-purple-400 fill-purple-400" />
            </motion.div>
          )}
        </div>

        <h4 className="font-bold text-sm text-foreground mb-1 line-clamp-1">{tool.name}</h4>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{tool.description}</p>

        <div className="flex flex-wrap gap-1 mb-3 mt-auto">
          {tool.features.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded whitespace-nowrap"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-xs">{tool.rating}</span>
            <span className="text-xs text-muted-foreground">({(tool.reviews / 1000).toFixed(1)}k)</span>
          </div>
          <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
