import { motion } from "framer-motion";

const logos = [
  {
    name: "Yazaki",
    url: "https://images.squarespace-cdn.com/content/v1/56215673e4b08ff533e23bf1/a48e1ee8-bc4a-411f-ade2-e7d6c3516b22/Yazaki.png",
  },
  {
    name: "Indofil Industries",
    url: "https://transparentcapital.co.in/assets/img/Indofil-acquires-Italian-Agrowin-Biosciences.jpg",
  },
  {
    name: "Apar Industries",
    url: "https://apar.com/wp-content/uploads/2023/05/APAR_Media_Kit/APAROriginalIDlWithBrandLine050820.jpg",
  },
  {
    name: "Simpolo Ceramics",
    url: "https://flow.page/_next/image?url=https%3A%2F%2Fcdn.flowpage.com%2Fimages%2F569a8059-a454-4c99-b579-6b5815cfb0a2-profile-picture%3Fm%3D1655717717&w=384&q=75",
  },
  {
    name: "Kalmar",
    url: "https://ml-eu.globenewswire.com/Resource/Download/56356d53-0555-43ff-bc8b-3b151de3aba0?size=3",
  },
  {
    name: "Trio",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzsiaWgAY-IwhLgx3WAghgj_GFpvkqzDgiA&s",
  },
  {
    name: "Rbz",
    url: "https://rbzjewellers.com/wp-content/uploads/2024/11/rbz_logo-removebg-preview.png",
  },
  {
    name: "Blue Dart DHL",
    url: "https://static.theprint.in/wp-content/uploads/2023/09/Untitled-design-33-2-696x392.jpg?compress=true&quality=80&w=800&dpr=1.5",
  },
  {
    name: "Asian Granito",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah_cnQdEE5g2_8_FcGunrzeN1uZTooU8oAA&s",
  },
  {
    name: "Presteel",
    url: "https://www.presteel.fi/application/files/9215/7200/4814/Presteel_logo.png",
  },
  {
    name: "Rossari",
    url: "https://www.rossari.com/wp-content/uploads/2019/12/rossari-logo.png",
  },
];

export default function ClientLogos() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Top clients across the Nation
        </motion.h2>

        <div className="relative overflow-hidden">
          {/* Scrolling container */}
          <div className="logo-track">
            {/* Logos */}
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-24 w-48 flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-16 max-w-[180px] object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
