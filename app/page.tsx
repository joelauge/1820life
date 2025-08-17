import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Users, BookOpen, MessageCircle, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/10 bg-background/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                  alt="1820.life logo"
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold text-primary tracking-tight">1820.life</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link
                  href="/about"
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  About
                </Link>
                <div className="relative group">
                  <button className="flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                    Teaching
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border/20 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      <Link
                        href="/ghost-of-1820"
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                      >
                        Ghost of 1820
                      </Link>
                      <Link
                        href="/jesus-services"
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                      >
                        Jesus Services
                      </Link>
                      <Link
                        href="/sermon-on-mount"
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                      >
                        Sermon on Mount
                      </Link>
                      <Link
                        href="/conversations"
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                      >
                        Conversations
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  href="/passport"
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  Passport
                </Link>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-12 lg:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jacob-sangster-juBLfhhdMrg-unsplash.jpg-BxIaBE828dPHx144xSXJjxD30DcHXe.jpeg)",
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                  alt="1820.life logo"
                  className="w-40 h-40"
                />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                WELCOME
                <br />
                <span className="text-muted-foreground font-normal">to</span>
                <br />
                <span className="text-primary">1820.life</span>
              </h1>
              <p className="text-xl lg:text-2xl text-accent font-semibold mb-6 tracking-wide">
                Conversation. Connection. Compassion.
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                We're here to help you connect with other spiritually curious people, using the teaching of Jesus as a
                rallying point for discovery and relationship. Regardless of your religious background, you're invited
                to join this growing community of faith, hope, & love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8 py-6 rounded-full bg-primary hover:bg-primary/90">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6 rounded-full border-primary/20 hover:bg-primary/5 transition-all bg-transparent"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                    alt="1820.life logo"
                    className="w-8 h-8"
                  />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">Building Champions</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                  Who is the Ghost of 1820?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In Matthew 18:20, Jesus promised to be spiritually present with two or three people gathered in his
                  name - especially when we come together to practice self-love. This site is all about Jesus, the Ghost
                  of 1820.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/ghost-of-1820"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <BookOpen className="w-5 h-5 mr-3" />
                    Start reading here...
                  </Link>
                  <Link
                    href="/jesus-services"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <Heart className="w-5 h-5 mr-3" />
                    Intro to Jesus services...
                  </Link>
                  <Link
                    href="/sermon-on-mount"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <BookOpen className="w-5 h-5 mr-3" />
                    Sermon on the Mount...
                  </Link>
                  <Link
                    href="/conversations"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Join the conversation...
                  </Link>
                </div>
                <Button
                  className="mt-8 rounded-full px-8 py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  Donate
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl transform rotate-2"></div>
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&crop=center"
                  alt="Small group of people laughing and enjoying fellowship together"
                  className="relative rounded-3xl shadow-2xl w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                alt="1820.life logo"
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Explore Our Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover different ways to connect, learn, and grow in your spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="modern-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                    alt="Ghost of 1820 - Spiritual presence of Jesus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                      alt="1820.life logo"
                      className="w-8 h-8"
                    />
                    <span className="text-accent font-semibold text-xs uppercase tracking-wider">Spiritual</span>
                  </div>
                  <CardTitle className="text-xl mb-3 tracking-tight">Ghost of 1820</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Discover the spiritual presence of Jesus in community gatherings and personal reflection
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <Link href="/ghost-of-1820">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-full border-border/30 bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="modern-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=400&h=300&fit=crop&crop=center"
                    alt="Jesus Services - Community worship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                      alt="1820.life logo"
                      className="w-8 h-8"
                    />
                    <span className="text-accent font-semibold text-xs uppercase tracking-wider">Services</span>
                  </div>
                  <CardTitle className="text-xl mb-3 tracking-tight">Jesus Services</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Join our welcoming services focused on love, compassion, and spiritual growth
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <Link href="/jesus-services">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-full border-border/30 bg-transparent"
                  >
                    Join Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="modern-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
                    alt="Sermon on the Mount - Jesus teaching"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                      alt="1820.life logo"
                      className="w-8 h-8"
                    />
                    <span className="text-accent font-semibold text-xs uppercase tracking-wider">Teaching</span>
                  </div>
                  <CardTitle className="text-xl mb-3 tracking-tight">Sermon on the Mount</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Explore Jesus's foundational teachings on love, forgiveness, and living with purpose
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <Link href="/sermon-on-mount">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-full border-border/30 bg-transparent"
                  >
                    Read Teachings
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="modern-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&crop=center"
                    alt="Conversations - Community discussions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                      alt="1820.life logo"
                      className="w-8 h-8"
                    />
                    <span className="text-accent font-semibold text-xs uppercase tracking-wider">Community</span>
                  </div>
                  <CardTitle className="text-xl mb-3 tracking-tight">Conversations</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Engage in meaningful discussions about faith, life, and spiritual growth with our community
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <Link href="/conversations">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-full border-border/30 bg-transparent"
                  >
                    Start Talking
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="modern-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://static.wixstatic.com/media/e30cd1_99f10a574c204e4fa933b4c70a38988b~mv2.webp/v1/fill/w_629,h_589,al_c,lg_1,q_85,enc_avif,quality_auto/e30cd1_819ec587d93c4f178247753cc4e7719b~mv2.webp"
                    alt="Freedom Passport - Spiritual guide"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                      alt="1820.life logo"
                      className="w-8 h-8"
                    />
                    <span className="text-accent font-semibold text-xs uppercase tracking-wider">Guide</span>
                  </div>
                  <CardTitle className="text-xl mb-3 tracking-tight">Freedom Passport</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Get your spiritual passport - a guide to understanding key kingdom teachings of Jesus
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <Link href="/passport">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-full border-border/30 bg-transparent"
                  >
                    Get Passport
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="modern-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop&crop=center"
                    alt="Community - Fellowship gathering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                      alt="1820.life logo"
                      className="w-8 h-8"
                    />
                    <span className="text-accent font-semibold text-xs uppercase tracking-wider">Fellowship</span>
                  </div>
                  <CardTitle className="text-xl mb-3 tracking-tight">Community</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Connect with like-minded individuals on their spiritual journey and build lasting relationships
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <Link href="/community">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-full border-border/30 bg-transparent"
                  >
                    Join Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-12 text-center">
            <div className="flex justify-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                alt="1820.life logo"
                className="w-25 h-25"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Subscribe & Never Miss a New Post
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Stay connected with our community and receive updates on new teachings, events, and conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-full border-border/30 py-6 bg-background/50"
              />
              <Button className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1820logo-i9mRWl6vs1B2jcgjpRI2k9XQpe1AaK.png"
                  alt="1820.life logo"
                  className="w-8 h-8"
                />
                <h3 className="text-2xl font-bold text-primary">1820.life</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A spiritual community focused on conversation, connection, and compassion through the teachings of
                Jesus. Join us on this journey of faith and discovery.
              </p>
              <div className="text-accent font-semibold">Conversation. Connection. Compassion.</div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/ghost-of-1820" className="hover:text-primary transition-colors">
                    Ghost of 1820
                  </Link>
                </li>
                <li>
                  <Link href="/jesus-services" className="hover:text-primary transition-colors">
                    Jesus Services
                  </Link>
                </li>
                <li>
                  <Link href="/sermon-on-mount" className="hover:text-primary transition-colors">
                    Sermon on the Mount
                  </Link>
                </li>
                <li>
                  <Link href="/conversations" className="hover:text-primary transition-colors">
                    Conversations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/passport" className="hover:text-primary transition-colors">
                    Get Your Passport
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-primary transition-colors">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/20 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 1820.life. All rights reserved. Built with love and compassion.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
