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
} from "lucide-react";
import { AI_CATEGORIES, AI_TOOLS, VISIONARY_POSSIBILITIES } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Neoaifinder - World's Greatest AI Discovery Platform
 * Design Philosophy: Premium, innovative, mind-expanding
 * Colors: Black (#0F0F0F), Purple (#9D4EDD), Maroon (#560BAD), White
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "name">("rating");
  const [activeVisionaryTab, setActiveVisionaryTab] = useState("hallucinations");

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
    { label: "AI Tools", value: "100+", icon: Zap },
    { label: "Categories", value: "8", icon: Award },
    { label: "Avg Rating", value: "4.7★", icon: Star },
    { label: "Active Users", value: "500K+", icon: Users },
  ];

  const activeVisionarySection = VISIONARY_POSSIBILITIES.find(
    (v) => v.id === activeVisionaryTab
  );

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
              <p className="text-xs text-muted-foreground">World's Greatest AI Platform</p>
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
        className="relative py-24 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663537154081/CryiRNCQAU6hTHfxuq7rHm/neoaifinder-hero-bg-D4iQfbNGwpsyTrMiyCA7cX.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                The Future of AI
              </span>
              <br />
              <span className="text-white">Starts Here</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              Discover 100+ AI tools, explore mind-bending visionary applications, and unlock
              revolutionary possibilities in sports, science, and technology.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-card border border-border/50 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search 100+ AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-card border-border/50 focus:border-purple-500/50 text-base"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "rating" | "reviews" | "name")}
              className="px-4 py-2 bg-card border border-border/50 rounded-lg text-foreground hover:border-purple-500/50 transition-all"
            >
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
              <option value="name">Sort by Name</option>
            </select>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
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
                  className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
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
                  <span>{category.icon}</span>
                  {category.name} ({count})
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Tools Grid */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.div
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Complete AI Tools Directory
              </span>
            </h3>
            <p className="text-muted-foreground">
              {filteredAndSortedTools.length} tools found • Curated & verified
            </p>
          </motion.div>

          {filteredAndSortedTools.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredAndSortedTools.map((tool, idx) => (
                <ToolCard key={tool.id} tool={tool} index={idx} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground text-lg">
                No tools found. Try a different search or category.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Visionary Possibilities Section */}
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
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Visionary AI Possibilities
              </span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore mind-bending applications that push the boundaries of what's possible with AI
            </p>
          </motion.div>

          {/* Visionary Tabs */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {VISIONARY_POSSIBILITIES.map((possibility) => (
              <motion.button
                key={possibility.id}
                onClick={() => setActiveVisionaryTab(possibility.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeVisionaryTab === possibility.id
                    ? "text-white shadow-lg"
                    : "bg-card border border-border/50 text-foreground hover:border-purple-500/50"
                }`}
                style={{
                  backgroundColor:
                    activeVisionaryTab === possibility.id ? possibility.color : undefined,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="text-xl">{possibility.icon}</span>
                <span className="hidden sm:inline">{possibility.title.split(" ")[0]}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Visionary Content */}
          {activeVisionarySection && (
            <motion.div
              className="bg-card border border-border/50 rounded-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-4xl"
                      style={{ backgroundColor: activeVisionarySection.color + "20" }}
                    >
                      {activeVisionarySection.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{activeVisionarySection.title}</h4>
                      <p className="text-muted-foreground mt-1">
                        {activeVisionarySection.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-lg text-purple-400">Key Possibilities:</h5>
                    {activeVisionarySection.possibilities.map((possibility, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Sparkles className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground">{possibility}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="w-full h-80 rounded-lg bg-cover bg-center border border-border/50"
                    style={{
                      backgroundColor: activeVisionarySection.color + "10",
                      backgroundImage: `linear-gradient(135deg, ${activeVisionarySection.color}20 0%, transparent 100%)`,
                    }}
                  />
                  <div className="mt-6">
                    <h5 className="font-bold text-lg text-purple-400 mb-4">Powered by:</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeVisionarySection.tools.map((tool, idx) => (
                        <motion.span
                          key={idx}
                          className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-sm text-purple-300"
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
        className="py-20 px-4 border-t border-border/50"
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
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Discover the Next Big AI Tool
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Help the community by submitting your favorite AI tool or innovative application.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Submit a Tool
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-border/50 py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-4">Neoaifinder © 2026 • The World's Greatest AI Discovery Platform</p>
          <div className="flex justify-center gap-6 text-sm">
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

interface ToolCardProps {
  tool: (typeof AI_TOOLS)[0];
  index: number;
}

function ToolCard({ tool, index }: ToolCardProps) {
  const category = AI_CATEGORIES.find((c) => c.id === tool.category);

  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: index * 0.03 },
        },
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

      <div className="relative bg-card border border-border/50 rounded-lg p-5 hover:border-purple-500/50 transition-all h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 flex-1">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
              style={{ backgroundColor: category?.color + "20" }}
            >
              {category?.icon}
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-foreground group-hover:text-purple-400 transition-colors text-sm truncate">
                {tool.name}
              </h4>
              <p className="text-xs text-muted-foreground">{category?.name}</p>
            </div>
          </div>
          {tool.isFeatured && (
            <motion.div
              className="flex items-center gap-1 bg-purple-600/20 px-2 py-1 rounded-full flex-shrink-0"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 text-purple-400 fill-purple-400" />
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground mb-3 flex-grow line-clamp-2">
          {tool.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tool.features.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded whitespace-nowrap"
            >
              {feature}
            </span>
          ))}
          {tool.features.length > 2 && (
            <span className="text-xs text-muted-foreground px-2 py-0.5">
              +{tool.features.length - 2}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-xs">{tool.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({(tool.reviews / 1000).toFixed(1)}k)
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{tool.pricing}</p>
          </div>
          <motion.div
            whileHover={{ x: 4 }}
            className="text-purple-400 group-hover:text-purple-300 flex-shrink-0"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
