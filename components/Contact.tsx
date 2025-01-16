"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  //   const { toast } = useToast();

  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     setIsSubmitting(true);

  //     const formData = new FormData(event.currentTarget);
  //     const data = Object.fromEntries(formData);

  //     try {
  //       const response = await fetch("/api/send-email", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       if (response.ok) {
  //         toast({
  //           title: "Message sent!",
  //           description: "Thank you for your message. I'll get back to you soon.",
  //         });
  //         event.currentTarget.reset();
  //       } else {
  //         throw new Error("Failed to send message");
  //       }
  //     } catch (error) {
  //       toast({
  //         title: "Error",
  //         description: "Failed to send message. Please try again later.",
  //         variant: "destructive",
  //       });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-center">
              Have a project in mind? Lets discuss how I can help you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project"
                  rows={4}
                  required
                />
              </div>
              {/* <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button> */}
              <Button>Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
