import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const portfolioItems = [
  {
    title: 'Brand Growth Campaign',
    client: 'Fashion Retail Brand',
    description: 'Increased social media engagement by 150% through strategic content and community management.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stats: {
      engagement: '+150%',
      followers: '+10K',
      reach: '+500K',
    },
  },
  {
    title: 'Social Media Revamp',
    client: 'Tech Startup',
    description: 'Complete social media strategy overhaul resulting in 200% increase in brand awareness.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stats: {
      engagement: '+200%',
      followers: '+15K',
      reach: '+750K',
    },
  },
  {
    title: 'Influencer Campaign',
    client: 'Lifestyle Brand',
    description: 'Managed successful influencer partnerships reaching over 1M+ audience.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    stats: {
      engagement: '+180%',
      followers: '+20K',
      reach: '+1M',
    },
  },
  // Add more portfolio items as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground">
            Showcasing successful social media campaigns and strategies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="cursor-pointer overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative h-[300px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.client}</p>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-4">
                  <p className="text-sm">{item.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">{item.stats.engagement}</p>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">{item.stats.followers}</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">{item.stats.reach}</p>
                      <p className="text-xs text-muted-foreground">Reach</p>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
