import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Brain, 
  Shield, 
  Zap, 
  Target,
  MessageSquare,
  TrendingUp,
  Settings,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Cpu,
  Network,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const Algorithm = () => {
  return (
    <div className="min-h-screen animated-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary neon-glow" />
            <span className="text-2xl font-bold neon-text">SynapseKick</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Brain className="w-4 h-4 mr-2" />
              Advanced AI Algorithm
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The <span className="neon-text">Intelligence</span>
              <br />
              Behind SynapseKick
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how our cutting-edge AI algorithms power real-time moderation, 
              context understanding, and intelligent automation for Kick.com streamers.
            </p>
          </div>
        </div>
      </section>

      {/* Algorithm Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Core Technology</Badge>
                <h2 className="text-4xl font-bold mb-6">
                  Neural Network Architecture Built for <span className="neon-text">Streaming</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  SynapseKick's AI leverages advanced natural language processing and machine learning 
                  to understand context, detect harmful content, and learn from your community's unique patterns.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Real-time processing under 100ms response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Context-aware sentiment analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Adaptive learning from your community</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <Brain className="w-24 h-24 text-primary mb-6 pulse-neon" />
                  <h3 className="text-2xl font-bold mb-4">Multi-Layer Processing</h3>
                  <p className="text-muted-foreground">
                    Our algorithm processes messages through multiple neural network layers, 
                    analyzing context, sentiment, and intent simultaneously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm Features */}
      <section className="py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">AI Capabilities</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced <span className="neon-text">AI Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each component of our AI system is designed to work together, creating a comprehensive 
              moderation and engagement solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1: Content Analysis */}
            <Card className="feature-card">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Content Analysis Engine</CardTitle>
                <CardDescription>Deep understanding of message content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Analyzes text, emojis, and patterns to detect spam, toxicity, and inappropriate content 
                  with 99.3% accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Spam Detection</Badge>
                  <Badge variant="secondary">Toxicity Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2: Context Understanding */}
            <Card className="feature-card">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Context Neural Network</CardTitle>
                <CardDescription>Understands conversation flow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Maintains conversation context to understand sarcasm, jokes, and community inside jokes 
                  while still catching genuine problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Sarcasm Detection</Badge>
                  <Badge variant="secondary">Context Memory</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3: Adaptive Learning */}
            <Card className="feature-card">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Adaptive Learning System</CardTitle>
                <CardDescription>Learns from your community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Continuously learns from your moderation decisions and community feedback to 
                  improve accuracy over time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Self-Improving</Badge>
                  <Badge variant="secondary">Custom Training</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4: Real-time Processing */}
            <Card className="feature-card">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning-Fast Processing</CardTitle>
                <CardDescription>Under 100ms response time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Optimized for real-time chat environments with minimal latency, ensuring seamless 
                  moderation without interrupting conversation flow.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Real-time</Badge>
                  <Badge variant="secondary">Low Latency</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5: Multi-Language Support */}
            <Card className="feature-card">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Multi-Language AI</CardTitle>
                <CardDescription>Global community support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Supports moderation in 15+ languages with cultural context awareness, perfect for 
                  international streaming communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">15+ Languages</Badge>
                  <Badge variant="secondary">Cultural Context</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6: Behavioral Patterns */}
            <Card className="feature-card">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Behavioral Pattern Recognition</CardTitle>
                <CardDescription>Identifies user behavior trends</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tracks user behavior patterns to predict and prevent harassment, ban evasion, 
                  and coordinated attacks before they escalate.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Pattern Detection</Badge>
                  <Badge variant="secondary">Predictive Analysis</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Technical Specs</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Built for <span className="neon-text">Performance</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Industry-leading specifications designed for high-volume chat environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="feature-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Processing Power</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-semibold text-primary">&lt; 100ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Messages/Second</span>
                    <span className="font-semibold text-primary">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Accuracy Rate</span>
                    <span className="font-semibold text-primary">99.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Uptime</span>
                    <span className="font-semibold text-primary">99.9%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">AI Configuration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Neural Layers</span>
                    <span className="font-semibold text-primary">12-Layer</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Training Data</span>
                    <span className="font-semibold text-primary">2.5B+ Messages</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Model Updates</span>
                    <span className="font-semibold text-primary">Weekly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">API Version</span>
                    <span className="font-semibold text-primary">v2.1</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 pulse-neon" />
            <h2 className="text-4xl font-bold mb-4">
              Experience the Future of <span className="neon-text">AI Moderation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of streamers who trust SynapseKick's advanced AI to protect and 
              grow their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="btn-hero">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try SynapseKick Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="btn-secondary">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Algorithm;