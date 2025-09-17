import { Button } from './ui/button';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { BadgeCheck } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Satisfied Clients', value: '40+' },
  { label: 'Industry Awards', value: '5' },
];

const skills = [
  'Social Media Strategy',
  'Content Creation',
  'Community Management',
  'Analytics & Reporting',
  'Brand Development',
  'Influencer Marketing',
  'Paid Social Advertising',
  'Crisis Management',
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Rajwant Morya - Social Media Manager"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-4">
                I'm a passionate Social Media Manager with over 5 years of experience in creating and implementing successful digital marketing strategies. My expertise lies in helping brands build meaningful connections with their audience through compelling content and strategic engagement.
              </p>
              <p className="text-muted-foreground">
                Throughout my career, I've worked with various brands across different industries, helping them achieve their social media goals and establish a strong online presence. My approach combines creativity with data-driven insights to deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg">Download Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
