export interface WeightOption {
  label: string;
  dimensions: string;
  hasValve: boolean;
  without: [number, number, number, number];
  withValve: [number, number, number, number] | null;
}

export interface ProductVariant {
  id: string;
  name: string;
  subtitle?: string;
  colors?: string[];
  colorImages?: Record<string, string[]>;
  colorWeightImages?: Record<string, Record<string, string>>;
  gallery?: string[];
  filterGroup?: string;
  features: string[];
  moq?: string;
  weights: WeightOption[];
}

export interface ProductData {
  slug: string;
  name: string;
  image: string;
  variants: ProductVariant[];
}

// ─── FLAT BOTTOM BAG ────────────────────────────────────────────────────────

export const flatBottomBagData: ProductData = {
  slug: "flat-bottom-bag",
  name: "Flat Bottom Bag",
  image: "/flat-bottom-bag.png",
  variants: [
    {
      id: "recyclable-flat-bottom",
      name: "Recyclable Flat Bottom",
      subtitle: "9 colours · Regular zipper · Mono-material LDPE · 3 sizes",
      colors: ["Black", "White", "Latte", "Lavender", "Peach", "Pink", "Transparent", "Blue", "Pistachio"],
      filterGroup: "Recyclable Flat Bottom",
      colorImages: {
        "Black": ["/Recyclable Flat Bottom black.webp"],
        "White": ["/Recyclable Flat Bottom white.webp"],
        "Blue": ["/Recyclable Flat Bottom blue.webp"],
        "Latte": ["/Recyclable Flat Bottom latte.webp"],
        "Lavender": ["/Recyclable Flat Bottom lavender.webp"],
        "Pink": ["/Recyclable Flat Bottom pink.webp"],
        "Peach": ["/Recyclable Flat Bottom peach.webp"],
        "Pistachio": ["/Recyclable Flat Bottom pistachio.webp"],
        "Transparent": ["/Recyclable Flat Bottom Transparent.webp"],
      },
      features: ["Regular zipper", "Mono-material LDPE", "9 colours", "3 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "155×195×60 mm", hasValve: true, without: [0.275, 0.261, 0.248, 0.234], withValve: [0.365, 0.351, 0.338, 0.324] },
        { label: "500 g", dimensions: "175×230×80 mm", hasValve: true, without: [0.374, 0.355, 0.337, 0.318], withValve: [0.464, 0.445, 0.427, 0.408] },
        { label: "1000 g", dimensions: "200×250×100 mm", hasValve: true, without: [0.443, 0.421, 0.399, 0.377], withValve: [0.533, 0.511, 0.489, 0.467] },
      ],
    },
    {
      id: "recyclable-flat-bottom-bw",
      name: "Recyclable Flat Bottom – B&W",
      subtitle: "Black & White · Pocket zipper · Mono-material LDPE · 2 sizes",
      colors: ["Black", "White"],
      filterGroup: "Recyclable Flat Bottom",
      colorImages: {
        "Black": ["/Recyclable Flat Bottom black with pocket zip.webp"],
        "White": ["/Recyclable Flat Bottom white with pocket zip.webp"],
      },
      features: ["Pocket zipper", "Mono-material LDPE", "Black & White", "2 sizes"],
      moq: "250 pcs (with valve) / 500 pcs (without valve)",
      weights: [
        { label: "250 g", dimensions: "120×200×80 mm", hasValve: true, without: [0.280, 0.266, 0.252, 0.238], withValve: [0.370, 0.356, 0.342, 0.328] },
        { label: "1000 g", dimensions: "145×340×90 mm", hasValve: true, without: [0.448, 0.426, 0.403, 0.381], withValve: [0.538, 0.516, 0.493, 0.471] },
      ],
    },
    {
      id: "metallized-flat-bottom",
      name: "Metallized Flat Bottom",
      subtitle: "White & Black — PET12+VMPET12+LDPE",
      colors: ["White", "Black"],
      colorImages: {
        "Black": ["/metallized-flat-bottom-black.webp"],
        "White": ["/metallized-flat-bottom-white.webp"],
      },
      features: ["Pocket zipper", "Metallized", "3 sizes + no-zipper option"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "120×200×80 mm", hasValve: true, without: [0.253, 0.240, 0.228, 0.215], withValve: [0.343, 0.330, 0.318, 0.305] },
        { label: "500 g", dimensions: "130×255×90 mm", hasValve: true, without: [0.295, 0.280, 0.266, 0.251], withValve: [0.385, 0.370, 0.356, 0.341] },
        { label: "1000 g (with zipper)", dimensions: "145×340×90 mm", hasValve: true, without: [0.377, 0.358, 0.339, 0.320], withValve: [0.467, 0.448, 0.429, 0.410] },
        { label: "1000 g (no zipper)", dimensions: "145×340×90 mm", hasValve: true, without: [0.360, 0.342, 0.324, 0.306], withValve: [0.450, 0.432, 0.414, 0.396] },
      ],
    },
    {
      id: "kraft-paper-flat-bottom",
      name: "Kraft Paper Flat Bottom",
      subtitle: "KraftPaper50+VMPET12+LDPE60",
      colors: ["Kraft Paper"],
      colorImages: {
        "Kraft Paper": ["/Flat Bottom Kraft.webp"],
      },
      features: ["Pocket zipper", "Kraft paper", "Metallized"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "120×200×80 mm", hasValve: true, without: [0.230, 0.219, 0.207, 0.196], withValve: [0.320, 0.309, 0.297, 0.286] },
        { label: "500 g", dimensions: "130×255×90 mm", hasValve: true, without: [0.272, 0.258, 0.245, 0.231], withValve: [0.362, 0.348, 0.335, 0.321] },
        { label: "1000 g (with zipper)", dimensions: "145×340×90 mm", hasValve: true, without: [0.355, 0.337, 0.320, 0.302], withValve: [0.445, 0.427, 0.410, 0.392] },
        { label: "1000 g (no zipper)", dimensions: "145×340×90 mm", hasValve: true, without: [0.337, 0.320, 0.303, 0.286], withValve: [0.427, 0.410, 0.393, 0.376] },
      ],
    },
    {
      id: "paper-look-flat-bottom",
      name: "Paper-Look Flat Bottom",
      subtitle: "No metallization — WhitePaper45/PET12",
      colors: ["White Paper", "Illuminating Yellow", "Olive Green", "Ultimate Gray"],
      colorImages: {
        "White Paper": ["/Flat Bottom white paper.webp"],
        "Olive Green": ["/Flat Bottom Olive green.jpeg"],
        "Illuminating Yellow": ["/Flat Bottom yellow.webp"],
        "Ultimate Gray": ["/Flat Bottom gray.webp"],
      },
      colorWeightImages: {
        "White Paper": {
          "250 g (with window)": "/Flat Bottom white paper with window.webp",
        },
      },
      features: ["Pocket zipper", "No metallization", "Window option available"],
      moq: "500 pcs",
      weights: [
        { label: "250 g (paper top)", dimensions: "155×195×60 mm", hasValve: true, without: [0.230, 0.219, 0.207, 0.196], withValve: [0.320, 0.309, 0.297, 0.286] },
        { label: "250 g (with window)", dimensions: "120×200×80 mm", hasValve: true, without: [0.246, 0.234, 0.221, 0.209], withValve: [0.336, 0.324, 0.311, 0.299] },
        { label: "1000 g (paper top)", dimensions: "200×250×100 mm", hasValve: true, without: [0.355, 0.337, 0.320, 0.302], withValve: [0.445, 0.427, 0.410, 0.392] },
        { label: "1000 g", dimensions: "145×340×90 mm", hasValve: true, without: [0.377, 0.358, 0.339, 0.320], withValve: [0.467, 0.448, 0.429, 0.410] },
      ],
    },
  ],
};

// ─── DOYPACK BAG ────────────────────────────────────────────────────────────

export const doypbackBagData: ProductData = {
  slug: "doypack-bag",
  name: "Doypack Bag",
  image: "/doypack-bag.png",
  variants: [
    {
      id: "recyclable-doypack",
      name: "Recyclable Doypack",
      subtitle: "Mono-material LDPE",
      colors: ["White", "Purple (Very Peri)", "Green (Emerald)", "Red (Viva Magenta)"],
      colorImages: {
        "White": ["/Doy Pack Recyclable White.webp"],
        "Green (Emerald)": ["/Doy Pack Recyclable emerald.webp"],
        "Purple (Very Peri)": ["/Doy Pack Recyclable purple.webp"],
        "Red (Viva Magenta)": ["/Doy Pack Recyclable red.webp"],
      },
      features: ["Regular zipper", "4 colours", "Mono-material"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "200×190×72 mm", hasValve: true, without: [0.319, 0.303, 0.287, 0.271], withValve: [0.409, 0.393, 0.377, 0.361] },
      ],
    },
    {
      id: "soft-touch-doypack",
      name: "Soft Touch Doypack",
      subtitle: "PET12+tact-lac/LDPE110white",
      colors: ["White", "Black", "Pine", "Blue", "Orange", "Illuminating Yellow", "Olive Green", "Ultimate Gray"],
      colorImages: {
        "White": ["/Doy Pack Soft Touch White.webp"],
        "Black": ["/Doy Pack Soft Touch Black.webp"],
        "Blue": ["/Doy Pack Soft Touch Blue.webp"],
        "Ultimate Gray": ["/Doy Pack Soft Touch Grey.webp"],
        "Olive Green": ["/Doy Pack Soft Touch Olive.webp"],
        "Orange": ["/Doy Pack Soft Touch Orange.webp"],
        "Pine": ["/Doy Pack Soft Touch Pine.webp"],
        "Illuminating Yellow": ["/Doy Pack Soft Touch Yellow.webp"],
      },
      features: ["Regular zipper", "8 colours", "No foil"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "200×190×72 mm", hasValve: true, without: [0.319, 0.303, 0.287, 0.271], withValve: [0.409, 0.393, 0.377, 0.361] },
      ],
    },
    {
      id: "metallized-doypack",
      name: "Metallized Doypack",
      subtitle: "MatteOPP20+Al-foil7+LDPE80",
      colors: ["White", "Black", "Brown", "Gold", "Red"],
      colorImages: {
        "White": ["/Doy Pack White.webp"],
        "Black": ["/Doy Pack Black.webp"],
        "Brown": ["/Doy Pack Brown.webp"],
        "Gold": ["/Doy Pack Gold.webp"],
        "Red": ["/Doy Pack Red.webp"],
      },
      features: ["Regular zipper", "5 colours", "Metallized", "5 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "100 g", dimensions: "130×200×64 mm", hasValve: true, without: [0.136, 0.129, 0.122, 0.116], withValve: [0.226, 0.219, 0.212, 0.206] },
        { label: "250 g", dimensions: "140×240×80 mm", hasValve: true, without: [0.186, 0.177, 0.167, 0.158], withValve: [0.276, 0.267, 0.257, 0.248] },
        { label: "500 g", dimensions: "180×280×90 mm", hasValve: true, without: [0.222, 0.211, 0.200, 0.189], withValve: [0.312, 0.301, 0.290, 0.279] },
        { label: "1000 g", dimensions: "210×380×110 mm", hasValve: true, without: [0.306, 0.291, 0.275, 0.260], withValve: [0.396, 0.381, 0.365, 0.350] },
        { label: "3000 g", dimensions: "320×500×150 mm", hasValve: true, without: [0.486, 0.462, 0.437, 0.413], withValve: [0.576, 0.552, 0.527, 0.503] },
      ],
    },
    {
      id: "silver-glossy-doypack",
      name: "Silver Glossy Doypack",
      subtitle: "PET12+Al-foil7+LDPE80",
      colors: ["Silver"],
      colorImages: {
        "Silver": ["/Doy Pack Silver Glossy.webp"],
      },
      features: ["Regular zipper", "Silver gloss", "Metallized", "4 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "100 g", dimensions: "130×200×64 mm", hasValve: true, without: [0.119, 0.113, 0.107, 0.101], withValve: [0.209, 0.203, 0.197, 0.191] },
        { label: "250 g", dimensions: "140×240×80 mm", hasValve: true, without: [0.171, 0.162, 0.154, 0.145], withValve: [0.261, 0.252, 0.244, 0.235] },
        { label: "500 g", dimensions: "180×280×90 mm", hasValve: true, without: [0.188, 0.179, 0.169, 0.160], withValve: [0.278, 0.269, 0.259, 0.250] },
        { label: "1000 g", dimensions: "210×380×110 mm", hasValve: true, without: [0.271, 0.257, 0.244, 0.230], withValve: [0.361, 0.347, 0.334, 0.320] },
      ],
    },
    {
      id: "kraft-paper-doypack",
      name: "Kraft Paper Doypack",
      subtitle: "KraftPaper50+VMPET12+LDPE40",
      colors: ["Kraft Paper"],
      colorImages: {
        "Kraft Paper": ["/Doy Pack Kraft.webp"],
      },
      features: ["Regular zipper", "Kraft paper", "Metallized", "5 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "100 g", dimensions: "130×200×64 mm", hasValve: true, without: [0.130, 0.124, 0.117, 0.111], withValve: [0.220, 0.214, 0.207, 0.201] },
        { label: "250 g", dimensions: "140×240×80 mm", hasValve: true, without: [0.177, 0.168, 0.159, 0.150], withValve: [0.267, 0.258, 0.249, 0.240] },
        { label: "500 g", dimensions: "180×280×90 mm", hasValve: true, without: [0.190, 0.181, 0.171, 0.162], withValve: [0.280, 0.271, 0.261, 0.252] },
        { label: "1000 g", dimensions: "210×380×110 mm", hasValve: true, without: [0.274, 0.260, 0.247, 0.233], withValve: [0.364, 0.350, 0.337, 0.323] },
        { label: "3000 g", dimensions: "320×500×150 mm", hasValve: true, without: [0.489, 0.465, 0.440, 0.416], withValve: [0.579, 0.555, 0.530, 0.506] },
      ],
    },
    {
      id: "window-doypack-kraft",
      name: "Doypack with Window – Kraft",
      subtitle: "KraftPaper50+PET12+LDPE55 · No valve",
      colors: ["Kraft Paper"],
      colorImages: {
        "Kraft Paper": ["/Doy Pack Kraft + window.webp"],
      },
      features: ["Regular zipper", "Window", "No foil", "No valve"],
      moq: "500 pcs",
      weights: [
        { label: "70 g", dimensions: "100×170×60 mm", hasValve: false, without: [0.089, 0.085, 0.080, 0.076], withValve: null },
        { label: "100 g", dimensions: "130×200×64 mm", hasValve: false, without: [0.130, 0.124, 0.117, 0.111], withValve: null },
        { label: "250 g", dimensions: "140×240×80 mm", hasValve: false, without: [0.159, 0.151, 0.143, 0.135], withValve: null },
      ],
    },
    {
      id: "window-doypack-pine",
      name: "Doypack with Window – Pine",
      subtitle: "WhitePaper45+PET12+LDPE40 · No valve",
      colors: ["Pine Paper"],
      colorImages: {
        "Pine Paper": ["/Doy Pack Pine + window.webp"],
      },
      features: ["Regular zipper", "Window", "No foil", "No valve"],
      moq: "500 pcs",
      weights: [
        { label: "100 g", dimensions: "130×200×64 mm", hasValve: false, without: [0.212, 0.201, 0.191, 0.180], withValve: null },
        { label: "250 g", dimensions: "140×240×80 mm", hasValve: false, without: [0.256, 0.243, 0.230, 0.218], withValve: null },
      ],
    },
  ],
};

// ─── RECYCLABLE BAGS ────────────────────────────────────────────────────────

export const recyclableBagsData: ProductData = {
  slug: "recyclable-bags",
  name: "Recyclable Bags",
  image: "/recyclable-bags.png",
  variants: [
    {
      id: "recyclable-flat-bottom",
      name: "Recyclable Flat Bottom",
      subtitle: "9 colours · Regular zipper · Mono-material LDPE · 3 sizes",
      colors: ["Black", "White", "Latte", "Lavender", "Peach", "Pink", "Transparent", "Blue", "Pistachio"],
      filterGroup: "Recyclable Flat Bottom",
      colorImages: {
        "Black": ["/Recyclable Flat Bottom black.webp"],
        "White": ["/Recyclable Flat Bottom white.webp"],
        "Blue": ["/Recyclable Flat Bottom blue.webp"],
        "Latte": ["/Recyclable Flat Bottom latte.webp"],
        "Lavender": ["/Recyclable Flat Bottom lavender.webp"],
        "Pink": ["/Recyclable Flat Bottom pink.webp"],
        "Peach": ["/Recyclable Flat Bottom peach.webp"],
        "Pistachio": ["/Recyclable Flat Bottom pistachio.webp"],
        "Transparent": ["/Recyclable Flat Bottom Transparent.webp"],
      },
      features: ["Regular zipper", "Mono-material LDPE", "9 colours", "3 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "155×195×60 mm", hasValve: true, without: [0.275, 0.261, 0.248, 0.234], withValve: [0.365, 0.351, 0.338, 0.324] },
        { label: "500 g", dimensions: "175×230×80 mm", hasValve: true, without: [0.374, 0.355, 0.337, 0.318], withValve: [0.464, 0.445, 0.427, 0.408] },
        { label: "1000 g", dimensions: "200×250×100 mm", hasValve: true, without: [0.443, 0.421, 0.399, 0.377], withValve: [0.533, 0.511, 0.489, 0.467] },
      ],
    },
    {
      id: "recyclable-flat-bottom-bw",
      name: "Recyclable Flat Bottom – B&W",
      subtitle: "Black & White · Pocket zipper · Mono-material LDPE · 2 sizes",
      colors: ["Black", "White"],
      filterGroup: "Recyclable Flat Bottom",
      colorImages: {
        "Black": ["/Recyclable Flat Bottom black with pocket zip.webp"],
        "White": ["/Recyclable Flat Bottom white with pocket zip.webp"],
      },
      features: ["Pocket zipper", "Mono-material LDPE", "Black & White", "2 sizes"],
      moq: "250 pcs (with valve) / 500 pcs (without valve)",
      weights: [
        { label: "250 g", dimensions: "120×200×80 mm", hasValve: true, without: [0.280, 0.266, 0.252, 0.238], withValve: [0.370, 0.356, 0.342, 0.328] },
        { label: "1000 g", dimensions: "145×340×90 mm", hasValve: true, without: [0.448, 0.426, 0.403, 0.381], withValve: [0.538, 0.516, 0.493, 0.471] },
      ],
    },
    {
      id: "recyclable-doypack",
      name: "Recyclable Doypack",
      subtitle: "Mono-material LDPE",
      colors: ["White", "Purple (Very Peri)", "Green (Emerald)", "Red (Viva Magenta)"],
      colorImages: {
        "White": ["/Doy Pack Recyclable White.webp"],
        "Green (Emerald)": ["/Doy Pack Recyclable emerald.webp"],
        "Purple (Very Peri)": ["/Doy Pack Recyclable purple.webp"],
        "Red (Viva Magenta)": ["/Doy Pack Recyclable red.webp"],
      },
      features: ["Regular zipper", "4 colours", "Mono-material"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "200×190×72 mm", hasValve: true, without: [0.319, 0.303, 0.287, 0.271], withValve: [0.409, 0.393, 0.377, 0.361] },
      ],
    },
  ],
};

// ─── SIDE GUSSET BAG ────────────────────────────────────────────────────────

export const sideGussetBagData: ProductData = {
  slug: "side-gusset-bag",
  name: "Side Gusset Bag",
  image: "/side-gusset-bag.png",
  variants: [
    {
      id: "soft-touch-side-gusset",
      name: "Soft Touch Side Gusset",
      subtitle: "PET12+tact-lac/LDPE110white",
      colors: ["White", "Black", "Pine", "Blue", "Orange"],
      colorImages: {
        "White": ["/Side Gusset Soft Touch White.webp"],
        "Black": ["/Side Gusset Soft Touch Black.webp"],
        "Pine": ["/Side Gusset Soft Touch Pine.webp"],
        "Blue": ["/Side Gusset Soft Touch Blue.webp"],
        "Orange": ["/Side Gusset Soft Touch Orange.webp"],
      },
      features: ["No zipper", "5 colours", "No foil"],
      moq: "500 pcs",
      weights: [
        { label: "1000 g", dimensions: "135×360×70 mm", hasValve: true, without: [0.287, 0.273, 0.258, 0.244], withValve: [0.377, 0.363, 0.348, 0.334] },
      ],
    },
    {
      id: "metallized-side-gusset-standard",
      name: "Metallized Side Gusset",
      subtitle: "5 colours · MatteOPP20+Al-foil7+LDPE80 · No zipper",
      colors: ["White", "Black", "Brown", "Gold", "Red"],
      colorImages: {
        "White": ["/Side Gusset White.webp"],
        "Black": ["/Side Gusset Black.webp"],
        "Brown": ["/Side Gusset Brown.webp"],
      },
      features: ["No zipper", "5 colours", "Metallized", "3 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "80×250×64 mm", hasValve: true, without: [0.120, 0.114, 0.108, 0.102], withValve: [0.210, 0.204, 0.198, 0.192] },
        { label: "500 g", dimensions: "90×320×60 mm", hasValve: true, without: [0.164, 0.156, 0.148, 0.139], withValve: [0.254, 0.246, 0.238, 0.229] },
        { label: "1000 g", dimensions: "135×360×70 mm", hasValve: true, without: [0.222, 0.211, 0.200, 0.189], withValve: [0.312, 0.301, 0.290, 0.279] },
      ],
    },
    {
      id: "kraft-side-gusset",
      name: "Kraft Paper Side Gusset",
      subtitle: "KraftPaper50+VMPET12+LDPE40",
      colors: ["Kraft Paper"],
      features: ["No zipper", "Kraft paper", "Metallized", "4 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "80×250×64 mm", hasValve: true, without: [0.091, 0.086, 0.082, 0.077], withValve: [0.181, 0.176, 0.172, 0.167] },
        { label: "500 g", dimensions: "90×320×60 mm", hasValve: true, without: [0.136, 0.129, 0.122, 0.116], withValve: [0.226, 0.219, 0.212, 0.206] },
        { label: "1000 g", dimensions: "135×360×70 mm", hasValve: true, without: [0.214, 0.203, 0.193, 0.182], withValve: [0.304, 0.293, 0.283, 0.272] },
        { label: "2000 g", dimensions: "180×420×100 mm", hasValve: true, without: [0.241, 0.229, 0.217, 0.205], withValve: [0.331, 0.319, 0.307, 0.295] },
      ],
    },
    {
      id: "silver-glossy-side-gusset",
      name: "Silver Glossy Side Gusset",
      subtitle: "PET12+Al-foil7+LDPE80",
      colors: ["Silver"],
      features: ["No zipper", "Silver gloss", "Metallized", "3 sizes"],
      moq: "500 pcs",
      weights: [
        { label: "250 g", dimensions: "80×250×64 mm", hasValve: true, without: [0.116, 0.110, 0.104, 0.099], withValve: [0.206, 0.200, 0.194, 0.189] },
        { label: "500 g", dimensions: "90×320×60 mm", hasValve: true, without: [0.157, 0.149, 0.141, 0.133], withValve: [0.247, 0.239, 0.231, 0.223] },
        { label: "1000 g", dimensions: "135×360×70 mm", hasValve: true, without: [0.210, 0.200, 0.189, 0.179], withValve: [0.300, 0.290, 0.279, 0.269] },
      ],
    },
  ],
};

// ─── PRODUCT MAP ────────────────────────────────────────────────────────────

export const PRODUCT_MAP: Record<string, ProductData> = {
  "flat-bottom-bag": flatBottomBagData,
  "doypack-bag": doypbackBagData,
  "recyclable-bags": recyclableBagsData,
  "side-gusset-bag": sideGussetBagData,
};
