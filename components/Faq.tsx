import React from "react";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

const Faq = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen bg-transparent"
    >
      <Card className="shadow-lg w-5/6 bg-transparent border-0 text-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="w-full mt-4" type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:underline-none">
                What is VisionSync?
              </AccordionTrigger>
              <AccordionContent>
                VisionSync is an innovative platform that leverages artificial
                intelligence to generate unique project ideas and streamline the
                project planning process, making it easier for individuals and
                teams to kickstart their projects efficiently and creatively.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:underline-none">
                How does VisionSync use AI to generate project ideas?
              </AccordionTrigger>
              <AccordionContent>
                Our platform utilizes advanced AI algorithms, powered by OpenAI,
                to analyze your input and preferences. It then generates
                personalized project ideas and planning guides tailored to your
                interests and goals, ensuring relevance and innovation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:underline-none">
                Can I collaborate with my team on VisionSync?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Our platform is designed to facilitate
                collaboration. You can invite team members to view, discuss, and
                contribute to project plans directly on our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:underline-none">
                How does VisionSync protect my data?
              </AccordionTrigger>
              <AccordionContent>
                We prioritize your privacy and security. All data on our
                platform is encrypted and protected with the latest security
                measures. We never share your information without your explicit
                consent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-5">
              <AccordionTrigger className="hover:underline-none">
                How can I get in touch with customer support?
              </AccordionTrigger>
              <AccordionContent>
                Our customer support team is here to help! You can reach out to
                us via email at huleshjangde@yahoo.com, or use the contact form
                on our website. We aim to respond to all inquiries within 24
                hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Faq;
