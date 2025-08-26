import { Stack } from "@mui/material";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    info: "mahmedbwop@gmail.com",
    href: "mailto:mahmedbwop@gmail.com",
  },
  { icon: Phone, info: "+92 319-5356353" },
  {
    icon: MapPin,
    info: "Islamabad, Pakistan",
    href: "https://maps.google.com/?q=Islamabad,+Pakistan",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/mahmed005",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-ahmed-49321b2a6/",
    label: "LinkedIn",
  },
];

export default function GetInTouch() {
  return (
    <Stack width={"100%"}>
      <Stack
        width={"100%"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        direction={"row"}
        gap={{
          xs: 5,
          md: 10,
        }}
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Get In Touch
          </h3>
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="flex items-center text-muted-foreground group"
              >
                <div className="pr-3 bg-background rounded-xl group-hover:bg-purple-500/10 transition-colors duration-300">
                  <contact.icon
                    size={20}
                    className="text-[#2576D3] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:text-[#2576D3] transition-all duration-300"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <span className="text-base font-medium">{contact.info}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <p className="text-md font-semibold text-muted-foreground mb-4 text-left">
            Follow me on
          </p>
          <div className="flex space-x-4 justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-xl text-foreground/70 hover:text-[#2576D3] hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Stack>
      <footer className="bg-background/50">
        <div className="container mx-auto md:px-6 py-8  xs:px-3">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {2025} Muhammad Ahmed. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group p-3 rounded-full bg-[#2576D3] hover:bg-[#2576D3] text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
              aria-label="Back to top"
            >
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </footer>
    </Stack>
  );
}
