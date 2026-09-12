const productDetails = {
  features: [
    'Precision-engineered stainless steel construction',
    'Reliable performance for continuous production',
    'Easy operation and maintenance',
    'Customizable to meet specific requirements',
    'Compliant with modern manufacturing standards',
  ],
};

function createProduct(id, name, image, shortDescription, description, category, extraFeatures = []) {
  return {
    id,
    name,
    image: `/assets/${image}`,
    shortDescription,
    description,
    category,
    features: [...productDetails.features, ...extraFeatures],
  };
}

export const products = [
  createProduct(
    '50kg-cream-mixer-laboratory',
    '50kg Cream Mixer (Laboratory)',
    '50kg-cream-mixer-laboratory.png.png',
    'Compact laboratory-scale cream mixer ideal for R&D and small-batch production.',
    'Our 50kg Laboratory Cream Mixer is engineered for precision blending of cosmetic creams, lotions, and pharmaceutical ointments. Designed for research laboratories and pilot production, this machine delivers uniform mixing with controlled shear for sensitive formulations. Built with premium stainless steel and advanced scraping technology for consistent product quality.',
    'Cream Mixers',
    ['Ideal for laboratory and pilot-scale production', 'Uniform homogenization for creams and lotions']
  ),
  createProduct(
    'cream-mixer-200kg',
    'Cream Mixer 200kg',
    'cream-mixer-200kg.png.png',
    'Mid-capacity cream mixer for efficient cosmetic and pharmaceutical batch production.',
    'The 200kg Cream Mixer offers the perfect balance of capacity and precision for growing manufacturing operations. Featuring advanced scraping blades and temperature-controlled mixing, this machine ensures homogeneous blending of viscous creams, gels, and pastes with exceptional consistency batch after batch.',
    'Cream Mixers',
    ['200kg batch capacity', 'Temperature-controlled mixing vessel']
  ),
  createProduct(
    'cream-mixer-300kg',
    'Cream Mixer 300kg',
    'cream-mixer-300kg.png.png',
    'High-capacity cream mixer designed for commercial cosmetic manufacturing.',
    'Built for demanding production environments, our 300kg Cream Mixer delivers industrial-grade performance with superior mixing efficiency. The robust design accommodates high-viscosity formulations while maintaining product integrity through gentle yet thorough homogenization.',
    'Cream Mixers',
    ['300kg production capacity', 'Heavy-duty industrial construction']
  ),
  createProduct(
    'cream-mixer-500kg',
    'Cream Mixer 500kg',
    'cream-mixer-500kg.png.png',
    'Large-scale cream mixer for high-volume cosmetic and pharmaceutical production.',
    'Engineered for large-scale manufacturing, the 500kg Cream Mixer combines power and precision to handle substantial production volumes. Advanced scraping technology and variable speed control ensure uniform product quality across every batch.',
    'Cream Mixers',
    ['500kg batch capacity for high-volume production', 'Variable speed control system']
  ),
  createProduct(
    'cream-mixer-scraper-1000kg',
    'Cream Mixer Scraper 1000kg',
    'cream-mixer-scraper-1000kg.png.png',
    'Industrial 1000kg cream mixer with advanced scraper technology.',
    'Our flagship 1000kg Cream Mixer with Scraper Technology represents the pinnacle of mixing engineering. Designed for major cosmetic and pharmaceutical manufacturers, this machine handles large batches with exceptional efficiency, featuring dual scraping action for complete vessel coverage and zero dead zones.',
    'Cream Mixers',
    ['1000kg industrial capacity', 'Advanced dual scraper technology', 'Zero dead-zone mixing']
  ),
  createProduct(
    'cream-mixer-3500kg',
    'Cream Mixer 3500kg',
    'cream-mixer-3500kg.png.png',
    'Ultra-large capacity cream mixer for enterprise-scale manufacturing.',
    'The 3500kg Cream Mixer is our largest capacity mixing solution, built for enterprise-level cosmetic and pharmaceutical production facilities. This powerhouse machine delivers consistent, high-quality mixing for the most demanding production schedules.',
    'Cream Mixers',
    ['3500kg ultra-large capacity', 'Enterprise-scale production ready']
  ),
  createProduct(
    'cream-mixer-3500kg-filling-6head',
    'Cream Mixer 3500kg with 6-Head Filling',
    'cream-mixer-3500kg-and cream-filling-6head.png.png',
    'Integrated 3500kg mixer and 6-head filling system for complete production line efficiency.',
    'This integrated production solution combines our 3500kg Cream Mixer with a precision 6-head filling machine, creating a seamless workflow from mixing to packaging. Ideal for high-volume manufacturers seeking maximum efficiency and reduced handling between processes.',
    'Integrated Systems',
    ['Integrated mixing and filling solution', '6-head precision filling system', 'Streamlined production workflow']
  ),
  createProduct(
    'cream-filling-2head',
    'Cream Filling Machine (2 Head)',
    'cream-filling-machine-2head.png.png',
    'Dual-nozzle cream filling machine for accurate, efficient packaging.',
    'Our 2-Head Cream Filling Machine delivers precise volumetric filling for jars, tubes, and containers. Designed for cosmetic creams, lotions, and pharmaceutical ointments, this machine ensures consistent fill weights with minimal product waste.',
    'Filling Machines',
    ['Dual-nozzle filling heads', 'Precise volumetric dosing']
  ),
  createProduct(
    'cream-filling-4head',
    'Cream Filling Machine (4 Head)',
    'cream-filling-machine-4head.png.png',
    'Four-head filling system for increased production throughput.',
    'The 4-Head Cream Filling Machine quadruples your filling capacity while maintaining exceptional accuracy. Perfect for medium to large-scale cosmetic manufacturers requiring reliable, high-speed packaging operations.',
    'Filling Machines',
    ['Four simultaneous filling nozzles', 'High-speed production capability']
  ),
  createProduct(
    'cream-filling-6head',
    'Cream Filling Machine (6 Head)',
    'cream -filling-machine-6head.png.png',
    'Six-head precision filling machine for high-volume production lines.',
    'Engineered for maximum throughput, our 6-Head Cream Filling Machine handles high-volume production with precision and reliability. Advanced pneumatic controls ensure consistent fill volumes across all nozzles simultaneously.',
    'Filling Machines',
    ['Six precision filling nozzles', 'Advanced pneumatic control system']
  ),
  createProduct(
    'cream-lotion-filling-single',
    'Cream & Lotion Filling Machine (Single Nozzle)',
    'cream-and-lotion-filling- machine-single-nozzle.png.png',
    'Versatile single-nozzle filler for creams, lotions, and liquid products.',
    'This Single Nozzle Filling Machine offers versatile filling capabilities for a wide range of cosmetic and pharmaceutical products. Its compact design makes it ideal for startups and specialized product lines requiring flexible, accurate filling.',
    'Filling Machines',
    ['Single nozzle versatility', 'Compact footprint for flexible placement']
  ),
  createProduct(
    'automatic-filling-capping',
    'Automatic Filling & Capping Machine',
    'automatic-filling-capping-machine.png.png',
    'Fully automated filling and capping system for streamlined packaging.',
    'Our Automatic Filling & Capping Machine combines precision filling with automated capping in one integrated unit. This solution dramatically reduces manual labor while ensuring consistent, professional packaging for cosmetic and pharmaceutical products.',
    'Capping Machines',
    ['Automated filling and capping integration', 'Reduced manual labor requirements']
  ),
  createProduct(
    'automatic-powder-filling',
    'Automatic Powder Filling Machine',
    'automatic-powder-filling machine.png.png',
    'Precision powder filling system for cosmetic and pharmaceutical applications.',
    'Designed for accurate dispensing of dry powders, talcs, and granular products, this Automatic Powder Filling Machine ensures consistent weights and clean operation. Ideal for cosmetic compacts, pharmaceutical powders, and specialty dry formulations.',
    'Filling Machines',
    ['Precision powder dispensing', 'Suitable for cosmetic and pharmaceutical powders']
  ),
  createProduct(
    'laboratory-colloid-mill',
    'Laboratory Colloid Mill Machine',
    'laboratory-colloid-mill-machine.png.png',
    'Precision colloid mill for fine particle size reduction and emulsification.',
    'Our Laboratory Colloid Mill delivers ultra-fine particle size reduction and emulsification for cosmetic creams, pharmaceutical suspensions, and specialty formulations. Essential for achieving smooth textures and stable emulsions in premium product lines.',
    'Processing Machines',
    ['Ultra-fine particle size reduction', 'Stable emulsion production']
  ),
  createProduct(
    'laboratory-silver-san',
    'Laboratory Silver San Mixing System',
    'laboratory-silver-san.png.png',
    'Compact laboratory mixing system for research and development.',
    'The Laboratory Silver San Mixing System provides versatile mixing capabilities in a compact laboratory format. Perfect for formulation development, quality testing, and small-batch production of cosmetic and pharmaceutical products.',
    'Mixing Systems',
    ['Compact laboratory design', 'Versatile mixing applications']
  ),
  createProduct(
    'silver-san',
    'Silver San Mixing System',
    'silver-san.png.png',
    'Professional-grade Silver San mixing system for production environments.',
    'The Silver San Mixing System is a proven solution for liquid and semi-solid product manufacturing. Built with premium materials and engineered for reliability, this system serves cosmetic and pharmaceutical manufacturers across Pakistan.',
    'Mixing Systems',
    ['Professional production-grade system', 'Proven reliability across industries']
  ),
  createProduct(
    'silver-san-liquid-mixing',
    'Silver San Liquid Mixing System',
    'silver-san-liquid-mixing.png.png',
    'Specialized liquid mixing system for lotions, serums, and liquid formulations.',
    'Engineered specifically for liquid product manufacturing, the Silver San Liquid Mixing System ensures thorough blending of lotions, serums, toners, and liquid pharmaceuticals. Advanced agitation technology maintains product stability and homogeneity.',
    'Mixing Systems',
    ['Optimized for liquid formulations', 'Advanced agitation technology']
  ),
  createProduct(
    'tank-1000kg',
    '1000kg Storage Tank',
    'tank-1000kg.png.png',
    'Industrial 1000kg stainless steel storage tank for cosmetic and pharmaceutical use.',
    'Our 1000kg Storage Tank provides secure, hygienic storage for raw materials, intermediate products, and finished formulations. Constructed from premium stainless steel with optional heating and cooling capabilities for temperature-sensitive products.',
    'Storage & Support',
    ['1000kg storage capacity', 'Optional temperature control']
  ),
  createProduct(
    'conveyor-table-10feet',
    'Conveyor Table (10 Feet)',
    'conveyor-table-10feet.png.png',
    '10-foot conveyor table for efficient material handling in production lines.',
    'This 10-Foot Conveyor Table streamlines material movement between production stations. Built for durability and smooth operation, it integrates seamlessly with filling, capping, and packaging equipment for optimized workflow.',
    'Storage & Support',
    ['10-foot conveyor length', 'Seamless production line integration']
  ),
  createProduct(
    'trolley',
    'Industrial Trolley',
    'trolley.png.png',
    'Heavy-duty industrial trolley for safe material transport in manufacturing facilities.',
    'Our Industrial Trolley is designed for safe and efficient transport of materials, containers, and equipment within manufacturing facilities. Robust construction ensures reliable performance in demanding production environments.',
    'Storage & Support',
    ['Heavy-duty construction', 'Ergonomic material handling']
  ),
  createProduct(
    'shrink-wrap-machine',
    'Shrink Wrap Machine',
    'shrink-wrap-machine.png.png',
    'Professional shrink wrapping machine for secure product packaging.',
    'The Shrink Wrap Machine provides professional-grade packaging for cosmetic and pharmaceutical products. Creates tamper-evident, aesthetically pleasing packaging that protects products during storage and transit.',
    'Packaging Machines',
    ['Professional shrink wrapping', 'Tamper-evident packaging solution']
  ),
  createProduct(
    'work-all-brands',
    'Trusted by Leading Brands',
    'work-all-brands.png.png',
    'Proudly serving Pakistan\'s leading beauty and cosmetics companies.',
    'New Al Khan Engineering Works has earned the trust of numerous leading beauty and cosmetics companies across Pakistan. Our machinery powers production lines for some of the nation\'s most recognized brands, delivering consistent quality and reliable performance.',
    'Branding',
    ['Trusted by leading Pakistani brands', 'Proven track record of excellence']
  ),
  createProduct(
  'tank-100kg',
  '100kg Tank',
  'tank-100kg.png.png',
  '100kg stainless steel mixing tank.',
  'High-quality 100kg stainless steel tank suitable for cosmetic and pharmaceutical production.',
  'Mixing Tanks',
  ['100kg capacity', 'Stainless steel construction']
),
createProduct(
  'jar-sealing-machine',
  'Jar Sealing Machine',
  'jar-sealing-machine.png.png',
  'Automatic jar sealing machine.',
  'Professional jar sealing machine for secure and efficient sealing of cosmetic and pharmaceutical containers.',
  'Packaging Machines',
  ['Fast sealing', 'Reliable performance']
),
];

export const productCategories = [
  'All',
  'Cream Mixers',
  'Filling Machines',
  'Capping Machines',
  'Mixing Systems',
  'Processing Machines',
  'Packaging Machines',
  'Integrated Systems',
  'Storage & Support',
  'Branding',
];

export const galleryImages = products
  .filter((p) => p.category !== 'Branding')
  .map((p) => ({
    id: p.id,
    src: p.image,
    alt: p.name,
    category: p.category,
  }));

export const brandingImages = [
  { id: 'hero', src: '/assets/hero.png.png', alt: 'New Al Khan Engineering Works' },
  { id: 'work-all-brands', src: '/assets/work-all-brands.png.png', alt: 'Trusted by Leading Brands' },
  { id: 'logo', src: '/assets/logo.png.png', alt: 'New Al Khan Engineering Works Logo' },
];
