import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faRocket, faUserAstronaut, faBuilding, faMask,
  faGears, faGraduationCap, faGem, faIndustry
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  materials: string[];
  turnaround: string;
}

export const services: Record<string, ServiceItem> = {
  "prototype-printing": {
    slug: "prototype-printing",
    title: "Rapid Prototyping",
    shortDesc: "Fast, accurate prototypes that bring your ideas to life in days, not weeks.",
    description: "From concept to physical prototype in record time. Our industrial-grade FDM and SLA printers produce high-fidelity prototypes with tight tolerances and smooth finishes. Ideal for product designers, engineers, and inventors who need to test form, fit, and function before committing to expensive tooling.",
    icon: faRocket,
    image: "/images/services/prototype-printing.jpg",
    features: ["Functional prototypes for testing and validation", "Multiple materials including PLA, ABS, PETG, and resin", "Color-matched prototypes for client presentations", "Rush turnaround available (24-48 hours)", "Design-for-manufacturing feedback included"],
    materials: ["PLA", "ABS", "PETG", "Resin (SLA)", "TPU (Flexible)", "Nylon"],
    turnaround: "3-7 business days"
  },
  "custom-figurines": {
    slug: "custom-figurines",
    title: "Custom Figurines & Miniatures",
    shortDesc: "Personalized 3D-printed figurines from your photos, designs, or imagination.",
    description: "Bring characters, people, and creatures to life with stunning detail. Our high-resolution resin printers capture every nuance — from facial features to fabric textures. Perfect for tabletop gaming miniatures, personalized gifts, wedding cake toppers, and collectible figurines.",
    icon: faUserAstronaut,
    image: "/images/services/custom-figurines.jpg",
    features: ["Full-color or hand-paint-ready prints", "From photos or custom 3D designs", "Sizes from 2-inch miniatures to 12-inch statues", "D&D, Warhammer, and custom tabletop miniatures", "Gift-ready packaging available"],
    materials: ["High-detail Resin", "PLA", "Full-color Sandstone"],
    turnaround: "5-10 business days"
  },
  "architectural-models": {
    slug: "architectural-models",
    title: "Architectural Models",
    shortDesc: "Detailed scale models for presentations, client approvals, and project planning.",
    description: "Stunning architectural scale models that communicate your vision with precision. From residential developments to commercial complexes, our models combine accurate dimensions with beautiful finishing. Includes site topography, landscaping elements, and removable roof sections for interior visibility.",
    icon: faBuilding,
    image: "/images/services/architectural-models.jpg",
    features: ["Scaled models from 1:50 to 1:1000", "Detailed site context and landscaping", "Removable sections for interior views", "Lighting integration (LED) available", "Multi-material construction for realism"],
    materials: ["PLA", "Resin", "Acrylic", "Wood PLA", "Clear Resin"],
    turnaround: "10-20 business days"
  },
  "cosplay-props": {
    slug: "cosplay-props",
    title: "Cosplay Props & Costumes",
    shortDesc: "Screen-accurate cosplay props, armor, and accessories printed to perfection.",
    description: "Level up your cosplay game with professionally printed props and armor pieces. We work from reference images, 3D game rips, or commissioned designs to produce durable, lightweight pieces ready for painting and weathering. Helmets, weapons, armor sets — we print it all.",
    icon: faMask,
    image: "/images/services/cosplay-props.jpg",
    features: ["Helmets, weapons, armor, and accessories", "Lightweight and wearable designs", "Sanded and primed finish options", "Multi-part assembly for large pieces", "Convention-ready turnaround scheduling"],
    materials: ["PLA+", "PETG", "TPU (Flexible)", "Resin (detail pieces)"],
    turnaround: "7-14 business days"
  },
  "replacement-parts": {
    slug: "replacement-parts",
    title: "Replacement Parts",
    shortDesc: "Reverse-engineer and print hard-to-find replacement parts for appliances and equipment.",
    description: "Don't throw it away — print a replacement. We reverse-engineer broken or obsolete parts for appliances, automotive, electronics, and home goods. Using CAD modeling and 3D scanning, we recreate parts that are no longer manufactured, saving you money and reducing waste.",
    icon: faGears,
    image: "/images/services/replacement-parts.jpg",
    features: ["Reverse engineering from broken parts", "CAD modeling for custom-fit replacements", "High-strength materials for functional use", "Appliance, automotive, and household parts", "One-off or small batch production"],
    materials: ["ABS", "PETG", "Nylon", "ASA (UV-resistant)", "Carbon-fiber PLA"],
    turnaround: "5-10 business days"
  },
  "educational-models": {
    slug: "educational-models",
    title: "Educational Models",
    shortDesc: "Interactive 3D models for classrooms, museums, and medical training.",
    description: "Transform abstract concepts into tangible learning experiences. Our educational models span anatomy, chemistry, engineering, and geography — designed with educators to complement curriculum. Multi-part and interactive designs engage students and make complex subjects accessible.",
    icon: faGraduationCap,
    image: "/images/services/educational-models.jpg",
    features: ["Anatomical, molecular, and engineering models", "Color-coded components for clarity", "Durable, classroom-ready construction", "Custom curriculum-aligned designs", "Bulk discounts for schools and institutions"],
    materials: ["PLA", "Resin", "Multi-color PLA"],
    turnaround: "7-14 business days"
  },
  "jewelry-fashion": {
    slug: "jewelry-fashion",
    title: "Jewelry & Fashion",
    shortDesc: "Intricate jewelry and fashion accessories using castable resin and precision printing.",
    description: "Design and print jewelry with microscopic detail. Our castable resin prints serve as master patterns for lost-wax casting in precious metals, while our flexible TPU prints create avant-garde fashion pieces. From engagement rings to runway accessories, precision is our promise.",
    icon: faGem,
    image: "/images/services/jewelry-fashion.jpg",
    features: ["Castable resin for precious metal casting", "Custom ring, pendant, and earring designs", "Fashion accessories and wearable art", "High-detail resolution down to 25 microns", "Finishing and polishing services"],
    materials: ["Castable Resin", "High-detail Resin", "TPU", "Wax"],
    turnaround: "5-10 business days"
  },
  "industrial-parts": {
    slug: "industrial-parts",
    title: "Industrial Manufacturing Parts",
    shortDesc: "End-use parts, jigs, fixtures, and tooling for manufacturing and industrial applications.",
    description: "Production-ready parts engineered for the factory floor. From assembly jigs and inspection fixtures to end-use components, our industrial 3D printing service delivers parts that withstand real-world conditions. Engineering-grade materials including carbon-fiber composites and high-temp resins.",
    icon: faIndustry,
    image: "/images/services/industrial-parts.jpg",
    features: ["Jigs, fixtures, and assembly tooling", "End-use production parts", "Engineering-grade materials", "ISO 9001-compliant quality control", "Volume production runs available"],
    materials: ["Carbon-fiber Nylon", "ASA", "PC", "Ultem", "PEEK"],
    turnaround: "5-15 business days"
  }
};

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
  serviceSlug: string;
}

export const projects: ProjectItem[] = [
  { title: "Smart Speaker Prototype", category: "Prototyping", description: "40+ iterations of a consumer smart speaker, taking the product from sketch to manufacturing-ready design in 3 months.", image: "/images/projects/smart-speaker.jpg", serviceSlug: "prototype-printing" },
  { title: "Fantasy Tavern Diorama", category: "Figurines", description: "A 24-inch fantasy tavern diorama with 15 custom miniatures for a tabletop gaming convention centerpiece.", image: "/images/projects/tavern-diorama.jpg", serviceSlug: "custom-figurines" },
  { title: "Downtown Development Model", category: "Architecture", description: "1:200 scale model of a 5-building mixed-use development, complete with removable roofs and LED street lighting.", image: "/images/projects/downtown-model.jpg", serviceSlug: "architectural-models" },
  { title: "Cyberpunk Cosplay Armor", category: "Cosplay", description: "Full-body cyberpunk armor set with integrated LED lighting, printed in 36 interlocking parts over 2 weeks.", image: "/images/projects/cyberpunk-armor.jpg", serviceSlug: "cosplay-props" },
  { title: "Vintage Camera Gear", category: "Replacement Parts", description: "Reverse-engineered replacement gear mechanism for a 1960s Leica camera — the part had been unavailable for 30 years.", image: "/images/projects/vintage-camera.jpg", serviceSlug: "replacement-parts" },
  { title: "Human Heart Model", category: "Education", description: "Full-color anatomical heart model with removable chambers for a university cardiology program.", image: "/images/projects/heart-model.jpg", serviceSlug: "educational-models" },
  { title: "Art Deco Pendant", category: "Jewelry", description: "Custom engagement ring master pattern in castable resin, ultimately cast in 18K rose gold.", image: "/images/projects/art-deco-pendant.jpg", serviceSlug: "jewelry-fashion" },
  { title: "Assembly Line Jig Set", category: "Industrial", description: "20 custom assembly jigs for an automotive parts manufacturer, reducing assembly time by 35%.", image: "/images/projects/assembly-jigs.jpg", serviceSlug: "industrial-parts" }
];

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  { name: "Sarah Chen", role: "Product Designer", company: "NovaTech", quote: "PrintLayer turned our napkin sketch into a working prototype in 4 days. The level of detail and finish quality exceeded our expectations. We've been using them for every iteration since.", rating: 5 },
  { name: "Marcus Webb", role: "Architect", company: "Webb & Associates", quote: "The architectural model they produced for our downtown development won over the planning commission. The removable roof sections and LED lighting were showstoppers.", rating: 5 },
  { name: "Ashley Park", role: "Cosplayer & Content Creator", company: "CosplayByAsh", quote: "My Cyberpunk armor set got 2M views on TikTok. The team worked closely with me on sizing and assembly — every piece fit perfectly without adjustments.", rating: 5 },
  { name: "Dr. James Rodriguez", role: "Professor of Anatomy", company: "State University", quote: "The full-color heart model transformed how our students learn cardiac anatomy. The level of detail rivals plastinated specimens at a fraction of the cost.", rating: 5 },
  { name: "Tom Keller", role: "Manufacturing Engineer", company: "PrecisionParts Inc", quote: "We needed 20 custom jigs fast. PrintLayer delivered in 10 days with tolerances tighter than our CNC shop. They've become an essential part of our production workflow.", rating: 5 }
];

export const pricingPlans = [
  { name: "Starter", price: "$49", description: "Small, simple prints for hobbyists and personal projects.", features: ["Up to 5x5x5 inch build volume", "Standard PLA material", "Single color", "5-7 day turnaround", "Basic post-processing", "Email support"], popular: false },
  { name: "Professional", price: "$149", description: "For designers, engineers, and serious makers who need quality and speed.", features: ["Up to 10x10x10 inch build volume", "PLA, PETG, ABS, or Resin", "Multi-color available", "3-5 day turnaround", "Sanded & primed finish", "Priority support", "Design review included"], popular: true },
  { name: "Enterprise", price: "Custom", description: "Volume production, industrial materials, and dedicated project management.", features: ["Any build volume (multi-part)", "All materials including engineering-grade", "Full-color & multi-material", "Rush turnaround available", "Professional finishing", "Dedicated project manager", "CAD design assistance", "NDA and IP protection"], popular: false }
];

export const faqs = [
  { q: "What file formats do you accept?", a: "We accept STL, OBJ, STEP, 3MF, and FBX files. If you have a different format, our team can help with conversion. For custom designs, sketches and reference images work great to start the conversation." },
  { q: "How accurate are your 3D prints?", a: "Our FDM printers achieve 0.1mm tolerance, while our SLA/resin printers reach 0.05mm. For industrial applications requiring tighter tolerances, we offer post-process machining on select materials." },
  { q: "Can you print in color?", a: "Yes! We offer multi-color FDM printing (up to 4 colors per print) and full-color sandstone printing with millions of color possibilities. Resin prints come in solid colors but can be hand-painted or finished." },
  { q: "What's the maximum size you can print?", a: "Our largest printer handles 400x400x450mm in a single piece. For larger objects, we split the model into interlocking or glue-ready sections. There's virtually no upper limit with multi-part assembly." },
  { q: "Do you offer design services?", a: "Absolutely. Our CAD team can take your concept from sketch to print-ready 3D model. We offer 3D scanning services for reverse engineering, and design-for-manufacturing consulting to optimize your model for printing." },
  { q: "How do I get a quote?", a: "Upload your 3D file or describe your project via our contact form or email. We'll review your requirements and provide a detailed quote within 24 hours, including material recommendations and turnaround time." }
];

export const stats = [
  { label: "Projects Completed", value: "2,500+" },
  { label: "Years Experience", value: "8+" },
  { label: "Materials Available", value: "20+" },
  { label: "Client Satisfaction", value: "99%" }
];
