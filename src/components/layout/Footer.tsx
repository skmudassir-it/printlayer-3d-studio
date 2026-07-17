import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const footerServices = [
  { label: "Prototype Printing", href: "/services/prototype-printing" },
  { label: "Custom Figurines", href: "/services/custom-figurines" },
  { label: "Architectural Models", href: "/services/architectural-models" },
  { label: "Cosplay Props", href: "/services/cosplay-props" },
  { label: "Industrial Parts", href: "/services/industrial-parts" },
];

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo.svg" alt="PrintLayer" className="h-7 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Premium 3D printing services for prototypes, figurines, architectural models, and industrial parts. Precision layer by layer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faLinkedin} className="size-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FontAwesomeIcon icon={faYoutube} className="size-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}><Link href={s.href} className="text-sm text-slate-400 hover:text-white transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <FontAwesomeIcon icon={faPhone} className="size-3.5 mt-0.5 text-primary" />
                <span>(555) 234-5678</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FontAwesomeIcon icon={faEnvelope} className="size-3.5 mt-0.5 text-primary" />
                <span>hello@printlayer.studio</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FontAwesomeIcon icon={faLocationDot} className="size-3.5 mt-0.5 text-primary" />
                <span>123 Innovation Drive, Suite 200, Maker City, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} PrintLayer 3D Studio. All rights reserved.</span>
          <span>Built with precision. Printed with passion.</span>
        </div>
      </div>
    </footer>
  );
}
