import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Bot, 
  MessageSquare,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import aiModIcon from "@/assets/ai-mod-icon.jpg";
import mobileIcon from "@/assets/mobile-control.jpg";

const Index = () => {
  return (
    <div className="min-h-screen animated-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary neon-glow" />
            <span className="text-2xl font-bold neon-text">SynapseKick</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="/algorithm" className="text-muted-foreground hover:text-primary transition-colors">Algorithm</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <Button variant="outline" className="btn-secondary">Contact Us</Button>
            <Button className="btn-hero">Get Started Free</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/60" />
        
        <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Moderation for Kick.com
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your AI Auto-Moderator
              <br />
              <span className="neon-text">for Kick.com</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stream smarter with SynapseKick's AI-powered moderation and one-tap macro messages. 
              Focus on your content while we keep your chat clean and engaging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Get SynapseKick Free
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                <BarChart3 className="w-5 h-5 mr-2" />
                See Features
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                No Coding Required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Real-time Protection
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Mobile Control
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your All-in-One Solution for <span className="neon-text">Kick</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From handling spam to sparking conversation, SynapseKick is packed with features 
              designed to elevate your stream and empower your community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Feature 1: AI Moderation */}
            <Card className="feature-card group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="h-8 w-8 text-primary pulse-neon" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">AI-Powered Moderation</CardTitle>
                    <CardDescription className="text-lg">Real-Time Protection</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our intelligent AI learns your community's vibe and automatically detects spam, 
                  hate speech, and trolls before they disrupt your stream. You set the rules; we handle the rest.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary">Context-Aware</Badge>
                  <Badge variant="secondary">Spam Detection</Badge>
                  <Badge variant="secondary">Adaptive Learning</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2: One-Tap Macros */}
            <Card className="feature-card group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Smartphone className="h-8 w-8 text-primary pulse-neon" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">One-Tap Pinned Messages</CardTitle>
                    <CardDescription className="text-lg">Mobile Control Panel</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Pin custom messages to your chat instantly from your phone. Create unlimited 
                  pre-written announcements, giveaways, or social links with a single tap.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary">Instant Pinning</Badge>
                  <Badge variant="secondary">Unlimited Macros</Badge>
                  <Badge variant="secondary">Mobile Ready</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3: Custom Automation */}
            <Card className="feature-card group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Zap className="h-8 w-8 text-primary pulse-neon" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Complete Customization</CardTitle>
                    <CardDescription className="text-lg">Tailored to You</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Create custom filters, unique commands, and automated actions. With SynapseKick, 
                  your bot is a seamless extension of your brand and streaming style.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom Commands</Badge>
                  <Badge variant="secondary">Auto Responses</Badge>
                  <Badge variant="secondary">Brand Integration</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4: Analytics */}
            <Card className="feature-card group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-primary pulse-neon" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Community Insights</CardTitle>
                    <CardDescription className="text-lg">Understand Your Audience</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Gain valuable insights into your chat activity. Track popular keywords, moderation reports, 
                  and audience engagement to make data-driven decisions for stream growth.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary">Chat Analytics</Badge>
                  <Badge variant="secondary">Moderation Reports</Badge>
                  <Badge variant="secondary">Growth Insights</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">How It Works</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready in <span className="neon-text">3 Easy Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We made the setup process simple and fast so you can get back to streaming.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Connect Your Account</h3>
                <p className="text-muted-foreground">
                  Securely link your Kick.com account with just a few clicks using our safe API connection.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Customize Your Settings</h3>
                <p className="text-muted-foreground">
                  Use our intuitive dashboard to set up moderation rules and create your custom macro messages.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Go Live</h3>
                <p className="text-muted-foreground">
                  Start streaming and let SynapseKick automatically protect your chat and engage your audience.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="btn-hero">
                Start Your Setup Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Beta Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">Beta Access</span> Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're in beta! Limited GPU resources mean exclusive early access. Contact us for unlimited features.
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-primary font-medium">
                🚀 Beta Phase: We're scaling our infrastructure. Some features have usage limits while we expand our GPU capacity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="feature-card">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Free</CardTitle>
                <div className="text-4xl font-bold text-primary">$0</div>
                <p className="text-muted-foreground">Perfect for getting started</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Basic AI moderation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>5 custom commands</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>1 macro slot</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Community support</span>
                  </div>
                </div>
                <Button className="w-full btn-secondary mt-6">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="feature-card border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Beta Access</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Pro Beta</CardTitle>
                <div className="text-4xl font-bold text-primary">$9.99</div>
                <p className="text-muted-foreground">per month</p>
                <Badge className="mt-2 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Limited GPU Access</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Advanced AI moderation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>50 macros/day limit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Custom filters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Chat analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Beta support access</span>
                  </div>
                </div>
                <Button className="w-full btn-hero mt-6">
                  Join Beta
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="feature-card border-2 border-primary/30">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2 text-primary">Custom Enterprise</CardTitle>
                <div className="text-4xl font-bold text-primary">Contact Us</div>
                <p className="text-muted-foreground">Unlimited everything</p>
                <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">Full GPU Access</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Unlimited AI processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Dedicated GPU allocation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Custom integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>24/7 priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>White-label & API access</span>
                  </div>
                </div>
                <Button className="w-full btn-hero mt-6">
                  Contact Our Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Don't Just Take <span className="neon-text">Our Word</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "I used to spend half my stream dealing with trolls. Now, SynapseKick handles 
                  everything automatically. I can finally focus on my gameplay!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">MG</span>
                  </div>
                  <div>
                    <p className="font-semibold">MidnightGamer</p>
                    <p className="text-sm text-muted-foreground">FPS Streamer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The one-tap macros are a game changer! I can instantly share my socials 
                  and sponsor codes without missing a beat in my stream."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">SP</span>
                  </div>
                  <div>
                    <p className="font-semibold">StreamPro_Alex</p>
                    <p className="text-sm text-muted-foreground">Variety Streamer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Setup was incredibly easy, and the analytics help me understand my 
                  community better. SynapseKick is essential for any serious Kick streamer."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">NQ</span>
                  </div>
                  <div>
                    <p className="font-semibold">NightQueen</p>
                    <p className="text-sm text-muted-foreground">Just Chatting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-10" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Ready to Get Started?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Take Control of Your <span className="neon-text">Chat Today</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of streamers who are saving time, reducing stress, and building 
            better communities with SynapseKick's AI-powered moderation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero text-lg px-10 py-4">
              <Bot className="w-5 h-5 mr-2" />
              Try SynapseKick Free
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="h-8 w-8 text-primary neon-glow" />
                <span className="text-2xl font-bold neon-text">SynapseKick</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The ultimate AI-powered moderator for Kick.com streamers. 
                Keep your chat clean and engaging with intelligent automation.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline">Twitter</Button>
                <Button size="sm" variant="outline">Discord</Button>
                <Button size="sm" variant="outline">Support</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-muted-foreground">
                <a href="#features" className="block hover:text-primary transition-colors">Features</a>
                <a href="#pricing" className="block hover:text-primary transition-colors">Pricing</a>
                <a href="#" className="block hover:text-primary transition-colors">Changelog</a>
                <a href="#" className="block hover:text-primary transition-colors">Roadmap</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-muted-foreground">
                <a href="#" className="block hover:text-primary transition-colors">Documentation</a>
                <a href="#" className="block hover:text-primary transition-colors">Help Center</a>
                <a href="#" className="block hover:text-primary transition-colors">Contact</a>
                <a href="#" className="block hover:text-primary transition-colors">Status</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SynapseKick. All rights reserved. Built for Kick.com streamers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;