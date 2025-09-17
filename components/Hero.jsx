import { Button } from './ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Social Media Manager & Digital Marketing Specialist
            </h1>
            <p className="text-lg text-muted-foreground">
              Helping brands build meaningful connections and drive engagement through strategic social media management and compelling content creation.
            </p>
            <div className="flex gap-4">
              <Button size="lg">View Portfolio</Button>
              <Button size="lg" variant="outline">Contact Me</Button>
            </div>
            <div className="flex gap-4 items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-medium">5+</span> Years Experience
              </div>
              <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2">
                <span className="font-medium">50+</span> Projects Completed
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Rajwant Morya"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
