import { ChevronRight } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import InAction1 from "../assets/images/service/TripleR-inAction2.webp";
import InAction2 from "../assets/images/service/TripleR-inAction3.webp";
import InAction3 from "../assets/images/service/TripleR-inAction4.webp";
import InAction4 from "../assets/images/service/TripleR-inAction5.webp";
import InAction6 from "../assets/images/service/TripleR-inAction7.mp4";
import weCyclers from "../assets/images/about/tripleR-wecyclers.webp";
import sajumahTableWater from "../assets/images/about/tripleR-sajumahTW.webp";

const steps = [
  {
    number: "01",
    title: "Collection & Logistics",
    description:
      "We work with neighborhoods, schools, and businesses to schedule curbside pickups or drop‑off events. GPS‑tracked trucks optimize routes, ensuring timely and eco‑efficient transport to our facility.",
  },
  {
    number: "02",
    title: "Sorting & Separation",
    description:
      "Combining manual inspection with optical NIR scanners, we sort plastics into PET, HDPE, PP, and more, achieving >98% purity before washing. This maximizes downstream quality and value.",
  },
  {
    number: "03",
    title: "Washing & Decontamination",
    description:
      "Multi‑stage friction washers, caustic baths, and rinse cycles strip labels, adhesives, and residues. A centrifuge dryer ensures moisture levels below 0.2% for optimal processing.",
  },
  {
    number: "04",
    title: "Shredding & Granulation",
    description:
      "Low‑noise industrial shredders convert flakes into consistent granules. Our granulation lines produce uniform particles (3–5 mm) ready for extrusion.",
  },
  {
    number: "05",
    title: "Extrusion & Pelletizing",
    description:
      "Flakes are melted, filtered, and extruded into standard pellets. Our twin‑screw extruders handle up to 1 ton/hour, creating virgin‑grade pellets for packaging, textiles, and more.",
  },
  {
    number: "06",
    title: "Baling & Logistics",
    description:
      "Pellets and sorted flakes are baled into 1,200 lb press‑locked blocks, shrink‑wrapped, and palletized. We manage export logistics or supply local manufacturers directly.",
  },
  {
    number: "07",
    title: "Quality Assurance",
    description:
      "Every batch is tested for melt flow index, density, and contaminant levels. Certificates of analysis accompany shipments to guarantee performance.",
  },
];

const stats = [
  { label: "1000+ Bales Processed", value: "500+" },
  { label: "98% Purity Achieved", value: "98%" },
  { label: "300 kg per Bale", value: "300 kg" },
  { label: "Energy-efficient machinery usage", value: "80%" },
];

const faqs = [
  {
    q: "What types of plastics are recyclable?",
    a: "Common recyclable plastics include PET (like water bottles), HDPE (milk jugs), PP (yogurt containers), and LDPE (plastic bags). Always check local recycling guidelines.",
  },
  {
    q: "Why is it important to clean recyclables before disposing of them?",
    a: "Dirty recyclables can contaminate entire batches, making them unusable and increasing processing costs. Clean, dry items ensure efficient recycling.",
  },
  {
    q: "Can I recycle plastic bags and film?",
    a: "Plastic bags and film usually can't go in curbside bins but can be recycled at designated drop-off locations in many stores or recycling centers.",
  },
  {
    q: "What happens to recycled materials after collection?",
    a: "Recyclables are sorted, cleaned, and processed into raw materials like pellets or fibers, which are then used to make new products such as clothing, furniture, and containers.",
  },
  {
    q: "Is recycling really effective in reducing pollution?",
    a: "Yes, recycling reduces the need for raw materials, lowers greenhouse gas emissions, and prevents plastic waste from polluting oceans and landfills.",
  },
  {
    q: "Can I recycle electronics or batteries through regular recycling?",
    a: "No, electronic waste and batteries require special handling and should be taken to certified e-waste recycling facilities or collection points.",
  },
];

export default function ServicesPage() {
  const inActionMedia = [
    { type: "img", src: InAction1 },
    { type: "img", src: InAction2 },
    { type: "img", src: InAction3 },
    { type: "img", src: InAction4 },
    {
      type: "you-video",
      src: "https://youtu.be/zzjd8lwWT44?si=5XNRrDYLrZ9SMmcg",
    },
    { type: "video", src: InAction6 },
  ];
  const partners = [
    { name: "weCyclers", src: weCyclers },
    { naem: "Sajumah Water", src: sajumahTableWater },
    { name: "weCyclers", src: weCyclers },
    { naem: "Sajumah Water", src: sajumahTableWater },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services – Triple R Recycling</title>
        <meta
          name="description"
          content="End-to-end plastic recycling: collection, sorting, washing, pelletizing, and quality assurance."
        />
      </Helmet>

      <main className="space-y-20">
        {/* Hero */}
        <section className="relative top-24 mx-4 sm:mx-8 lg:mx-16 bg-gradient-to-r from-green-900 to-green-700 text-white rounded-2xl dmt-12 p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold m-4">
            Our End-to-End Recycling Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            From curbside collection to high‑quality pellet production, our
            fully integrated process transforms plastic waste into valuable
            resources for a sustainable tomorrow.
          </p>
        </section>
        {/* How It Works Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map(({ number, title, description }) => (
              <div
                key={number}
                className="bg-gray-50 shadow-md rounded-2xl p-8 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-green-100 text-green-700 text-xl font-bold rounded-full">
                  {number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Metrics */}
        <section className="bg-green-800 py-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map(({ label, value }) => (
              <div key={label} className="p-6 bg-gray-100 rounded-lg shadow">
                <div className="text-3xl font-extrabold text-green-700 mb-2">
                  {value}
                </div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* "Triple R in Action" Gallery */}

        <section className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Triple R in Action
          </h2>
          <ul className="mb-8 md:mb-12">
            <li>
              <p className="text-center text-xl text-gray-600 mb-8 mt-2">
                Each of our tightly packed bales weighs over{" "}
                <span className="font-semibold text-gray-700">300kg</span> — a
                true testament to the volume of impact we're making in
                recycling.
              </p>
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {inActionMedia.map((media, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl w-full max-w-sm"
              >
                {media.type === "img" ? (
                  <img
                    src={media.src}
                    alt={`Triple R Action ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                ) : media.type === "video" ? (
                  <video
                    src={media.src}
                    className="w-full h-48 object-cover "
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"
                    preload="none"
                    poster="/tripleR-work-video-thumbnail.jpg"
                  ></video>
                ) : (
                  <iframe
                    className="w-full h-48"
                    src="https://www.youtube.com/embed/zzjd8lwWT44?autoplay=1&mute=1&loop=1&playlist=zzjd8lwWT44"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Video Tour */}
        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Facility Tour</h2>
          <div className="flex flex-col gap-8 mx-4">
            <div className="">
              <p className="text-gray-600">
                Inside Triple R Recyling: Daily Operations and Impact in Action
              </p>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg ">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uJ8TYNFEjN4?si=s2pwAZQ4nmaiqltH"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="">
              <p className="text-gray-600">
                See our state-of-the-art recycling line in action, from sorting
                to pelletizing.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zzjd8lwWT44?si=wle3bQldCavHSWYO"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* FAQs */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
                aria-labelledby={`faq-${index}`}
              >
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3
                      id={`faq-${index}`}
                      className="text-lg font-semibold text-gray-900 mb-2"
                    >
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* Partners & Certifications */}
        <section className="bg-gray-50 py-12">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className=" bg-gray-100 rounded-2xl max-w-24 cursor-pointer"
              >
                <img
                  key={partner.name}
                  src={`${partner.src}`}
                  alt={`${partner.name} logo`}
                  className="h-20 w-20 rounded-2xl"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Call to Action */}
        <section className="bg-green-800 text-white p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Recycle Smarter?
          </h3>
          <p className="mb-6">
            Schedule your pickup today or find the nearest drop‑off point.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </section>
      </main>
    </>
  );
}
