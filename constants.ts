import { ModuleData } from './types';

export const COURSE_MODULES: ModuleData[] = [
  {
    id: 1,
    title: "Foundations of Visual Prompting",
    subtitle: "Understanding subjects, environments, intention, and professional structure.",
    description: "What is a 'professional' image? What a prompt actually does is map intent into tokens the model understands. Learn the core structure: subject, context, camera, lighting, style, color, detail, purpose, and negative cues.",
    topics: ["Mapping intent to tokens", "Professional prompt structure", "Reading generation output"],
    exercises: "Analyze three existing professional images and list 10 promptable attributes.",
    content: [
      {
        heading: "The Language of Tokens",
        body: "A prompt is not a conversation; it is a set of coordinates. When you type 'beautiful', the model doesn't feel emotion; it looks for pixels associated with the token 'beautiful' in its training data (often high saturation, symmetry, or soft lighting). To get professional results, you must stop describing how you *feel* about the image and start describing the *attributes* that create that feeling."
      },
      {
        heading: "The Professional Prompt Structure",
        body: "Random words yield random results. Professional prompting follows a hierarchy that mimics a film set workflow:\n\n1. **Subject:** Who or what is the focus? (e.g., '30-year-old software engineer')\n2. **Environment:** Where are they? (e.g., 'Modern open-plan office, blurred background')\n3. **Cinematography:** How is it shot? (e.g., '85mm lens, shallow depth of field, eye-level angle')\n4. **Lighting:** How is it lit? (e.g., 'Softbox lighting, rim light, cool color temperature')\n5. **Style & Aesthetics:** What is the vibe? (e.g., 'Corporate photography, sleek, high resolution')\n\nBy adhering to this order, you ensure the AI prioritizes the most critical visual elements first."
      }
    ],
    realLifeApplication: "In a real client scenario, you receive a brief like 'We need a fresh, energetic photo for our tech blog.'\n\n**How to handle it:**\n1. **Deconstruct:** 'Fresh' = Daylight balanced lighting, high key. 'Energetic' = Candid action, smiling expression, dynamic angle.\n2. **Drafting:** Do not write 'Make it energetic'. Write 'Candid mid-shot of a laughing developer typing on a laptop, sun-drenched office, motion blur on hands, 50mm lens.'\n3. **Iteration:** If the result looks 'fake', check your style tokens. Remove 'digital art' and add 'raw photo, film grain'."
  },
  {
    id: 2,
    title: "Mastering Subject Definition",
    subtitle: "Controlling character, appearance, actions, and pose.",
    description: "Deep dive: specifying subject identity, demographics, wardrobe, pose, expression, accessories. Micro-prompts: how small phrase changes alter results.",
    topics: ["Subject Identity & Demographics", "Micro-prompts ('smiling' vs 'subtly smiling')", "Expanded subject blocks"],
    exercises: "Create 5 subject prompts for different use-cases (profile, hero, thumbnail, product, event).",
    content: [
      {
        heading: "Specificity is Control",
        body: "The AI defaults to the average. If you prompt 'a man', you get the statistical average of all men in the training data (often a generic Caucasian male in a t-shirt). To break the 'AI look', you must define specific demographics.\n\n*   **Age:** '20-year-old' vs '60-year-old'\n*   **Ethnicity & Heritage:** Be specific (e.g., 'Korean-American', 'Nigerian', 'Scandinavian').\n*   **Wardrobe:** Texture matters. 'Wool sweater' renders differently than 'Leather jacket'."
      },
      {
        heading: "Micro-Prompts and Emotional Nuance",
        body: "Adjectives carry weight. A 'smiling' subject often looks maniacal in AI generation. \n\n**Better alternatives:**\n*   'Subtly smiling'\n*   'Smirk'\n*   'Neutral expression'\n*   'Intense gaze'\n\nDefining the *eyes* usually fixes the soul of the image: 'Catchlight in eyes, focused gaze'."
      }
    ],
    realLifeApplication: "When creating brand assets for diversity and inclusion campaigns, generic prompts fail.\n\n**How to handle it:**\nUse **Subject Blocks**. Create a text file with pre-defined personas for your brand.\n*   *Persona A:* 'Professional Hispanic woman, 40s, wearing navy blazer, glasses, curly hair.'\n*   *Persona B:* 'Creative Gen-Z male, Japanese, bleached hair, oversized hoodie.'\n\nPaste these blocks into your prompt structure to ensure consistent casting across different marketing materials."
  },
  {
    id: 3,
    title: "Environment & Context Design",
    subtitle: "Crafting realistic, cinematic, or minimal backgrounds.",
    description: "Use cases: studio, office, outdoor, on-location, minimal background, stylized set. Depth cues and background complexity — when to ask for bokeh vs full environmental detail.",
    topics: ["Depth cues & Bokeh", "Negative space for text", "Set dressing"],
    exercises: "Convert a vague environment prompt into a full scene description.",
    content: [
      {
        heading: "Context vs. Subject Competition",
        body: "A busy background fights for attention. You must direct the AI on how much detail to render in the environment.\n\n*   **Studio:** 'Solid grey background', 'Infinite white cyclorama'. Good for e-commerce.\n*   **Environmental Portrait:** 'Busy Tokyo street at night, neon signs'. Good for storytelling.\n*   **Depth Cues:** To separate subject from background, use 'Bokeh', 'Blurred background', or 'Shallow depth of field'. This mimics professional lens physics."
      },
      {
        heading: "Designing for Text Overlays (Negative Space)",
        body: "Designers often need empty space for headlines. AI loves to fill every corner. You must explicitly request emptiness.\n\n**Keywords:** 'Minimalist composition', 'Negative space on the right', 'Clean wall background', 'Wide angle shot'.\n\n*Tip:* Sometimes prompting for a 'single color wall' or 'minimalist architecture' is the best way to force negative space."
      }
    ],
    realLifeApplication: "You are designing a website hero banner where text will overlay the left side of the image.\n\n**How to handle it:**\n1.  **Aspect Ratio:** Set to 16:9 or wider (21:9).\n2.  **Prompting:** 'Wide shot of a modern office desk, subject on the right side, empty clean wall on the left side, soft window light.'\n3.  **Post-Processing:** Even with good prompts, you might need to use 'Generative Fill' in Photoshop to extend the background further if the text doesn't fit."
  },
  {
    id: 4,
    title: "Camera, Composition & Lens Theory",
    subtitle: "Using focal lengths, framing, and depth-of-field for professional realism.",
    description: "Practical guide to lens selection: 35mm, 50mm, 85mm, 24mm wide, telephoto effects. Framing rules: rule-of-thirds, centered compositions, headroom.",
    topics: ["Lens selection (35mm vs 85mm)", "Focal compression", "Framing rules"],
    exercises: "For three target outputs (LinkedIn headshot, website hero, Instagram post), choose lens + composition specs.",
    content: [
      {
        heading: "The Lens Defines the Reality",
        body: "AI models understand photography gear. Specifying a lens changes not just the blur, but the geometry of the face.\n\n*   **24mm / Wide Angle:** Distorts faces close up (big nose effect), but great for architecture and vast landscapes. Dynamic and energetic.\n*   **50mm:** The 'Human Eye' view. Natural, honest, standard for documentary style.\n*   **85mm / 100mm:** The 'Portrait King'. Flattens facial features (flattering), compresses the background, creates creamy bokeh. Essential for professional headshots.\n*   **200mm:** Extreme compression. The background looks giant and close to the subject."
      },
      {
        heading: "Camera Angles",
        body: "*   **Eye-level:** Neutral, connecting.\n*   **Low-angle:** Makes subject look powerful, heroic.\n*   **High-angle:** Makes subject look smaller, approachable, or vulnerable.\n*   **Top-down / Flat-lay:** Essential for food and product photography."
      }
    ],
    realLifeApplication: "You need a LinkedIn profile picture vs. a dynamic Instagram travel shot.\n\n**How to handle it:**\n*   **LinkedIn:** Prompt '85mm lens, f/1.8 aperture'. This ensures the background is blurred (hiding the messy office) and the face looks proportional and professional.\n*   **Instagram Travel:** Prompt 'GoPro style' or '24mm wide angle, selfie perspective'. This captures the scenery behind the person and feels more spontaneous and 'influencer-like'."
  },
  {
    id: 5,
    title: "Lighting for Professional Image Generation",
    subtitle: "Soft lighting, cinematic lighting, rim light, studio setups, mood lighting.",
    description: "Lighting fundamentals: key, fill, rim, backlight, ambient, directional, HDR. Cinematic lighting recipes: softbox portrait, moody low-key, documentary daylight.",
    topics: ["3-point lighting", "Cinematic recipes", "Color temperature"],
    exercises: "Translate three photographic lighting setups into prompt lines and generate variations.",
    content: [
      {
        heading: "Light is Emotion",
        body: "Bad lighting is the #1 giveaway of AI images (often looking flat or plasticky). Force specific lighting setups to increase realism.\n\n*   **Softbox / Diffused Light:** Flattering, soft shadows. Good for corporate and beauty.\n*   **Hard Light / Direct Sunlight:** High contrast, sharp shadows. Good for fashion and dramatic scenes.\n*   **Rim Light / Backlight:** A light behind the subject that creates a glowing outline (halo). Separates dark hair from a dark background.\n*   **Volumetric Lighting:** Visible light beams (God rays) through fog or dust. Instantly adds atmosphere."
      },
      {
        heading: "Color Temperature",
        body: "Don't just say 'lighting'. Say 'Warm Golden Hour sunlight' (orange/yellow) or 'Cool Blue Moonlight' (blue/cyan). Mixing temperatures (e.g., 'Warm desk lamp in a cool blue room') creates professional color contrast."
      }
    ],
    realLifeApplication: "A client wants a 'Moody Tech Startup' vibe versus a 'Trustworthy Bank' vibe.\n\n**How to handle it:**\n*   **Tech Startup:** Use 'Dark environment, neon accents, monitor glow on face, rim light'. This feels modern and edgy.\n*   **Bank:** Use 'Broad daylight, soft window lighting, high-key, airy'. This feels transparent and safe. Avoid shadows on the face for trust-based imagery."
  },
  {
    id: 6,
    title: "Visual Style Consistency",
    subtitle: "Photorealistic, cinematic, editorial, illustration, minimal, or branded styles.",
    description: "Use a single visual style per prompt — avoid conflicting descriptors. Style libraries: Photorealistic, Cinematic, Editorial, Minimalist. How to lock style across a series.",
    topics: ["Style tokens", "Avoiding style conflict", "Brand consistency"],
    exercises: "Create a style token for 'JobMelvo brand visual' and list 10 prompts using that token.",
    content: [
      {
        heading: "The 'Style Token' Strategy",
        body: "To maintain consistency across a website or campaign, you cannot reinvent the prompt every time. You need a 'Style Token'—a set of keywords you append to the end of every prompt.\n\n**Example Style Token:**\n'...Shot on Fujifilm XT-4, film grain, editorial photography, muted tones, soft focus.'\n\nBy pasting this block at the end of every prompt (whether it's a picture of a person, a desk, or a building), you glue the visual identity together."
      },
      {
        heading: "Avoiding Conflicting Styles",
        body: "Do not mix '3D render' with 'Photorealistic'. Do not mix 'Studio lighting' with 'Candid iPhone photo'. These confuse the model and result in a weird 'uncanny valley' hybrid. Pick one medium and stick to it."
      }
    ],
    realLifeApplication: "You are generating a storyboard for a video ad. The frames must look like they belong to the same movie.\n\n**How to handle it:**\n1.  Define the **Global Style:** 'Cinematic movie still, anamorphic lens, teal and orange color grading'.\n2.  **Seed Control:** (If available) Use the same 'Seed' number for consistent noise patterns.\n3.  **Keep the End Fixed:** Change the Subject and Action at the start of the prompt, but keep the Camera, Lighting, and Style sections identical for every frame."
  },
  {
    id: 7,
    title: "Color Theory & Mood Control",
    subtitle: "Warm/cool palettes, contrast, brand colors, storytelling through color.",
    description: "Using color to convey brand/feeling: palettes, contrasts, saturation. How to request brand colors precisely and when to use descriptive vs hex-like language.",
    topics: ["Brand palettes", "Descriptive vs Hex colors", "Contrast for text overlays"],
    exercises: "Create three palette-specific prompts for 'CA Firm', 'JobMelvo', and 'Personal Brand'.",
    content: [
      {
        heading: "Descriptive Colors vs. Brand Guidelines",
        body: "AI models generally don't understand specific Hex codes (e.g., #0ea5e9). They understand descriptive color language.\n\n*   Instead of 'Brand Blue', use 'Slate blue', 'Electric blue', 'Navy', or 'Cyan'.\n*   **Duotone:** Requesting a 'Duotone style of navy and coral' is a powerful way to force strict branding colors.\n*   **Color Dominance:** 'Dominant red tones' or 'Monochromatic green palette' helps align the generation with website CSS."
      },
      {
        heading: "Psychology of Color",
        body: "*   **Blue:** Trust, corporate, technology (Cool temperature).\n*   **Orange/Yellow:** Energy, creativity, youth (Warm temperature).\n*   **Black/Gold:** Luxury, premium, exclusivity.\n*   **White/Grey:** Minimalism, cleanliness, modern."
      }
    ],
    realLifeApplication: "Your client's brand colors are Orange and Dark Grey. You need images for their website.\n\n**How to handle it:**\nDon't force every object to be orange. It looks tacky. \nInstead, prompt for natural occurrences of the color:\n*   'A modern office with **warm wooden accents** (orange-ish) and **concrete walls** (grey).'\n*   'Subject wearing a **sunset-orange scarf** in a **dimly lit slate-grey room**.'\n*   'Cinematic lighting with **warm rim light**.'\nSubtlety is the hallmark of professional branding."
  },
  {
    id: 8,
    title: "High-Detail Quality Enhancement",
    subtitle: "Sharp details, natural textures, realistic shadows, removing the AI look.",
    description: "Keywords that improve fidelity: ultra-detailed, high-resolution, photorealistic, natural skin texture, film grain. When to ask for post-processing cues.",
    topics: ["Fidelity keywords", "Post-processing cues", "Aspect ratios (16:9, 4:5)"],
    exercises: "Produce a 'print-quality' prompt for a product shoot and a 'web-hero' prompt for a landing page.",
    content: [
      {
        heading: "Texture is the Enemy of 'Plastic AI'",
        body: "Default AI generation creates smooth, plastic-looking skin. You must explicitly request imperfection to achieve realism.\n\n**Keywords for Realism:**\n*   'Natural skin texture', 'Pores', 'Subtle imperfections', 'Film grain', 'ISO 400 noise'.\n*   For objects: 'Scratched metal texture', 'Fingerprints on glass', 'Dust particles', 'Fabric weave'."
      },
      {
        heading: "Resolution and Upscaling",
        body: "Prompts like '4k', '8k', and 'UHD' don't actually change the pixel resolution of the output, but they steer the model towards training data that was tagged as high quality. Use 'Sharp focus' to avoid the dreamy, soft AI haze."
      }
    ],
    realLifeApplication: "You are printing a generated image for a trade show banner (large format).\n\n**How to handle it:**\n1.  **Prompt:** Ensure you use 'High resolution, sharp details, raw photography'.\n2.  **Generation:** Generate the image at the model's maximum resolution.\n3.  **Post-Process:** You **must** use an AI Upscaler (like Topaz Gigapixel or Magnific AI) before printing. The raw generation is rarely enough DPI for print. The prompt is only step 1; the pipeline is step 2."
  },
  {
    id: 9,
    title: "Negative Prompting & Error Prevention",
    subtitle: "Avoiding distortions, artifacts, unwanted elements, text, or AI flaws.",
    description: "Common AI artifacts: extra limbs, misaligned eyes, garbled text. A negative prompt primer: how to phrase exclusions.",
    topics: ["Common artifacts", "Phrasing exclusions", "Troubleshooting flowchart"],
    exercises: "Given a faulty generation, write a corrective negative prompt set.",
    content: [
      {
        heading: "What is Negative Prompting?",
        body: "Positive prompts tell the AI what to include. Negative prompts tell it what to avoid. This is crucial for cleaning up results without changing the core idea.\n\n**Standard Negative Stack:**\n'Bad anatomy, extra fingers, missing limbs, blurry, low quality, watermark, text, signature, ugly, deformed, pixelated, cartoon, 3d render' (if aiming for photo)."
      },
      {
        heading: "Troubleshooting Logic",
        body: "*   **Issue:** The face looks weird.\n    *   **Fix:** Add 'distorted face, bad eyes' to negative. Move the camera closer (AI struggles with faces in wide shots).\n*   **Issue:** Text is appearing on the wall.\n    *   **Fix:** Add 'text, watermark, typography' to negative.\n*   **Issue:** Image looks like a drawing.\n    *   **Fix:** Add 'illustration, painting, drawing' to negative."
      }
    ],
    realLifeApplication: "You are generating hands holding a phone, and the AI keeps giving 6 fingers.\n\n**How to handle it:**\n1.  **Negative Prompt:** strictly add 'extra fingers, bad anatomy, mutated hands'.\n2.  **Composition Trick:** Re-prompt to hide the hands. 'Over the shoulder shot looking at phone screen' (hands out of frame) or 'Cropped close up on phone screen'.\n3.  **In-Painting:** Don't keep generating the whole image. Generate a good base, then use In-Painting tools to mask just the hand and re-generate only that area until it's correct."
  },
  {
    id: 10,
    title: "Purpose-Based Prompt Engineering",
    subtitle: "Website banners, thumbnails, brand visuals, print layouts, and consistency.",
    description: "Purpose-first prompting: website hero banners, thumbnails, LinkedIn profile images. Branding blueprints with examples.",
    topics: ["Purpose-first mindset", "Branding blueprints", "Usage scenarios"],
    exercises: "Create 3 full prompts for each brand blueprint (hero, profile, social thumbnail).",
    content: [
      {
        heading: "Start with the 'Why'",
        body: "Before writing a visual description, ask: Where will this live?\n\n*   **Website Hero:** Needs to be wide (16:9), low contrast on one side for text, clean.\n*   **YouTube Thumbnail:** Needs to be high contrast, saturated, expressive faces, simple background (to be read at small sizes).\n*   **Instagram Story:** Vertical (9:16), lifestyle aesthetic, 'imperfect' framing to look authentic."
      },
      {
        heading: "The Branding Blueprint",
        body: "Create a 'Recipe' for your clients.\n\n**Example: 'Tech Recruiter Brand'**\n*   **Subject:** Diverse, young professionals, smart casual.\n*   **Environment:** Co-working spaces, glass, plants.\n*   **Lighting:** Bright, airy, high-key.\n*   **Color:** Slate blue accents.\n*   **Style:** Candid, documentary, not posed."
      }
    ],
    realLifeApplication: "You are delivering a folder of assets to a Web Developer.\n\n**How to handle it:**\n1.  **File Naming:** Rename your files from 'Gen-28374.png' to 'Hero_Office_Blue_SpaceForText.png'.\n2.  **Variations:** Don't just send one. Send the 'Close up', the 'Wide', and the 'Darker version'. Developers need options for responsive design (mobile vs desktop layouts).\n3.  **Check Contrast:** squint at the image. If you can't see the subject clearly, it won't work on a small mobile screen."
  }
];

export const APPENDIX_DATA = {
  title: "Appendix: Templates & Checklists",
  templates: [
    { name: "LinkedIn Headshot", prompt: "Professional portrait of a 30-year-old Indian male software engineer, warm softbox lighting, 85mm lens, shallow depth-of-field, photorealistic, natural skin texture, minimal blurred office background, centered composition, high-resolution." },
    { name: "Website Hero (Tech)", prompt: "Wide landscape hero image of a modern open-plan tech office, cinematic lighting, ambient window light, slate-blue brand palette, space on left for headline text, photorealistic, high resolution, minimal props." },
    { name: "Product Shot", prompt: "Premium product photograph of matte-black wireless earbuds on a reflective dark surface, top-down 45-degree angle, soft studio lighting, subtle reflection, ultra-sharp details, photorealistic." }
  ],
  checklist: [
    "Subject", "Environment", "Camera & Lens", "Lighting", "Style", "Colors", "Detail enhancements", "Purpose", "Negative prompts", "Aspect Ratio"
  ]
};