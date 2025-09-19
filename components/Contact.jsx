import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Let's discuss how I can help elevate your brand's social media presence
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="mailto:contact@rajwantmorya.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                rajleadmag@gmail.com
              </a>
              <a
                href="tel:+918699347100"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91-8699347100
              </a>
              <a
                href="https://www.linkedin.com/in/moryarajwant/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
              <a
                href="https://www.instagram.com/morya_rajwant/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram Profile
              </a>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Message</label>
                  <textarea
                    className="w-full p-2 rounded-md border bg-background min-h-[120px]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
