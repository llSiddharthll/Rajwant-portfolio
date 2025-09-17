import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  LineChart, 
  PenTool, 
  MessageCircle 
} from 'lucide-react';

const services = [
  {
    icon: Instagram,
    title: 'Social Media Management',
    description: 'Strategic management of social media accounts to boost engagement and grow your online presence.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights and detailed reporting to track performance and optimize strategies.',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Engaging and creative content that resonates with your target audience and drives engagement.',
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    description: 'Active community engagement and response management to build strong relationships with followers.',
  },
  {
    icon: Facebook,
    title: 'Paid Social Campaigns',
    description: 'Strategic paid social media campaigns to reach wider audiences and achieve business goals.',
  },
  {
    icon: Twitter,
    title: 'Brand Strategy',
    description: 'Development of comprehensive social media strategies aligned with your brand values and objectives.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <p className="text-muted-foreground">
            Comprehensive social media solutions to help your brand thrive in the digital landscape
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
