// This file contains all available test exams
export interface TestQuestion {
  id: number
  question: string
  options: {
    id: string
    text: string
  }[]
  correctAnswer: string
  explanation?: string
}

export interface TestExam {
  id: string
  title: string
  description: string
  subject: string
  duration: number // in minutes
  totalQuestions: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
  questions: TestQuestion[]
}

export const testExams: TestExam[] = [
  {
    id: 'general-knowledge-basic',
    title: 'General Knowledge - Basic',
    description: 'A basic general knowledge test covering various topics',
    subject: 'General Knowledge',
    duration: 15,
    totalQuestions: 10,
    difficulty: 'Easy',
    category: 'General',
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: [
          { id: 'a', text: 'London' },
          { id: 'b', text: 'Berlin' },
          { id: 'c', text: 'Paris' },
          { id: 'd', text: 'Madrid' }
        ],
        correctAnswer: 'c',
        explanation: 'Paris is the capital and largest city of France.'
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: [
          { id: 'a', text: 'Venus' },
          { id: 'b', text: 'Mars' },
          { id: 'c', text: 'Jupiter' },
          { id: 'd', text: 'Saturn' }
        ],
        correctAnswer: 'b',
        explanation:
          'Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.'
      },
      {
        id: 3,
        question: 'What is the chemical symbol for gold?',
        options: [
          { id: 'a', text: 'Go' },
          { id: 'b', text: 'Gd' },
          { id: 'c', text: 'Au' },
          { id: 'd', text: 'Ag' }
        ],
        correctAnswer: 'c',
        explanation: "Au comes from the Latin word 'aurum' meaning gold."
      },
      {
        id: 4,
        question: 'Which of the following is not a primary color?',
        options: [
          { id: 'a', text: 'Red' },
          { id: 'b', text: 'Blue' },
          { id: 'c', text: 'Green' },
          { id: 'd', text: 'Yellow' }
        ],
        correctAnswer: 'c',
        explanation:
          'Green is a secondary color made by mixing blue and yellow.'
      },
      {
        id: 5,
        question: 'What is the largest mammal on Earth?',
        options: [
          { id: 'a', text: 'African Elephant' },
          { id: 'b', text: 'Blue Whale' },
          { id: 'c', text: 'Giraffe' },
          { id: 'd', text: 'Polar Bear' }
        ],
        correctAnswer: 'b',
        explanation:
          'The Blue Whale is the largest animal ever known to have lived on Earth.'
      },
      {
        id: 6,
        question: 'In which year did World War II end?',
        options: [
          { id: 'a', text: '1944' },
          { id: 'b', text: '1945' },
          { id: 'c', text: '1946' },
          { id: 'd', text: '1947' }
        ],
        correctAnswer: 'b',
        explanation:
          'World War II ended in 1945 with the surrender of Japan in September.'
      },
      {
        id: 7,
        question: 'What is the smallest unit of matter?',
        options: [
          { id: 'a', text: 'Molecule' },
          { id: 'b', text: 'Atom' },
          { id: 'c', text: 'Cell' },
          { id: 'd', text: 'Electron' }
        ],
        correctAnswer: 'b',
        explanation:
          'An atom is the smallest unit of ordinary matter that forms a chemical element.'
      },
      {
        id: 8,
        question: 'Which continent is the largest by area?',
        options: [
          { id: 'a', text: 'Africa' },
          { id: 'b', text: 'Asia' },
          { id: 'c', text: 'North America' },
          { id: 'd', text: 'Europe' }
        ],
        correctAnswer: 'b',
        explanation:
          'Asia is the largest continent by both area and population.'
      },
      {
        id: 9,
        question: 'What is the speed of light in vacuum?',
        options: [
          { id: 'a', text: '300,000 km/s' },
          { id: 'b', text: '299,792,458 m/s' },
          { id: 'c', text: 'Both a and b' },
          { id: 'd', text: 'None of the above' }
        ],
        correctAnswer: 'c',
        explanation:
          'The speed of light is approximately 300,000 km/s or exactly 299,792,458 m/s.'
      },
      {
        id: 10,
        question: 'Who painted the Mona Lisa?',
        options: [
          { id: 'a', text: 'Vincent van Gogh' },
          { id: 'b', text: 'Pablo Picasso' },
          { id: 'c', text: 'Leonardo da Vinci' },
          { id: 'd', text: 'Michelangelo' }
        ],
        correctAnswer: 'c',
        explanation:
          'The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519.'
      }
    ]
  },
  {
    id: 'endodontics-basics',
    title: 'Endodontics - Basic Principles',
    description:
      'Test your knowledge of basic endodontic principles and procedures',
    subject: 'Endodontics',
    duration: 30,
    totalQuestions: 15,
    difficulty: 'Medium',
    category: 'Dental',
    questions: [
      {
        id: 1,
        question: 'What is the primary goal of endodontic treatment?',
        options: [
          { id: 'a', text: 'To remove the tooth' },
          { id: 'b', text: 'To preserve the natural tooth' },
          { id: 'c', text: 'To place a crown' },
          { id: 'd', text: 'To extract the pulp only' }
        ],
        correctAnswer: 'b',
        explanation:
          'The primary goal of endodontic treatment is to preserve the natural tooth by treating the infected or damaged pulp.'
      },
      {
        id: 2,
        question:
          'Which instrument is commonly used for root canal preparation?',
        options: [
          { id: 'a', text: 'Scaler' },
          { id: 'b', text: 'Excavator' },
          { id: 'c', text: 'Endodontic file' },
          { id: 'd', text: 'Probe' }
        ],
        correctAnswer: 'c',
        explanation:
          'Endodontic files are specifically designed instruments used for cleaning and shaping root canals.'
      },
      {
        id: 3,
        question: 'What is the most common cause of pulpal pathology?',
        options: [
          { id: 'a', text: 'Trauma' },
          { id: 'b', text: 'Dental caries' },
          { id: 'c', text: 'Periodontal disease' },
          { id: 'd', text: 'Orthodontic movement' }
        ],
        correctAnswer: 'b',
        explanation:
          'Dental caries (tooth decay) is the most common cause of pulpal pathology as bacteria can reach the pulp through cavities.'
      },
      {
        id: 4,
        question: "What does the term 'obturation' refer to in endodontics?",
        options: [
          { id: 'a', text: 'Cleaning the canal' },
          { id: 'b', text: 'Shaping the canal' },
          { id: 'c', text: 'Filling the canal' },
          { id: 'd', text: 'Accessing the canal' }
        ],
        correctAnswer: 'c',
        explanation:
          'Obturation refers to the three-dimensional filling of the cleaned and shaped root canal system.'
      },
      {
        id: 5,
        question:
          'Which material is most commonly used for root canal obturation?',
        options: [
          { id: 'a', text: 'Amalgam' },
          { id: 'b', text: 'Composite resin' },
          { id: 'c', text: 'Gutta-percha' },
          { id: 'd', text: 'Glass ionomer' }
        ],
        correctAnswer: 'c',
        explanation:
          'Gutta-percha is the gold standard material for root canal obturation due to its biocompatibility and sealing properties.'
      },
      // Add more questions as needed...
      {
        id: 6,
        question: 'What is the working length in endodontics?',
        options: [
          { id: 'a', text: 'Length of the tooth' },
          { id: 'b', text: 'Length of the root' },
          {
            id: 'c',
            text: 'Distance from reference point to apical constriction'
          },
          { id: 'd', text: 'Length of the pulp chamber' }
        ],
        correctAnswer: 'c',
        explanation:
          'Working length is the distance from a coronal reference point to the apical constriction where treatment should terminate.'
      },
      {
        id: 7,
        question:
          'Which radiographic technique is most commonly used in endodontics?',
        options: [
          { id: 'a', text: 'Panoramic' },
          { id: 'b', text: 'Bitewing' },
          { id: 'c', text: 'Periapical' },
          { id: 'd', text: 'Occlusal' }
        ],
        correctAnswer: 'c',
        explanation:
          'Periapical radiographs provide the best view of the entire tooth and surrounding structures for endodontic diagnosis and treatment.'
      },
      {
        id: 8,
        question: 'What is pulp necrosis?',
        options: [
          { id: 'a', text: 'Inflammation of the pulp' },
          { id: 'b', text: 'Death of pulp tissue' },
          { id: 'c', text: 'Calcification of the pulp' },
          { id: 'd', text: 'Hyperplasia of the pulp' }
        ],
        correctAnswer: 'b',
        explanation:
          'Pulp necrosis is the death of pulp tissue, usually resulting from untreated pulpitis or trauma.'
      },
      {
        id: 9,
        question: 'Which test is most reliable for determining pulp vitality?',
        options: [
          { id: 'a', text: 'Cold test' },
          { id: 'b', text: 'Heat test' },
          { id: 'c', text: 'Electric pulp test' },
          { id: 'd', text: 'Combination of tests' }
        ],
        correctAnswer: 'd',
        explanation:
          'No single test is 100% reliable; a combination of clinical tests provides the most accurate assessment of pulp vitality.'
      },
      {
        id: 10,
        question: 'What is the apical foramen?',
        options: [
          { id: 'a', text: 'The widest part of the root canal' },
          { id: 'b', text: 'The opening at the root tip' },
          { id: 'c', text: 'The pulp chamber entrance' },
          { id: 'd', text: 'The narrowest part of the canal' }
        ],
        correctAnswer: 'b',
        explanation:
          'The apical foramen is the opening at the tip of the root through which blood vessels and nerves enter the pulp.'
      },
      {
        id: 11,
        question: 'What is the purpose of irrigation in endodontics?',
        options: [
          { id: 'a', text: 'To cool the instruments' },
          { id: 'b', text: 'To lubricate the canal' },
          { id: 'c', text: 'To disinfect and clean debris' },
          { id: 'd', text: 'All of the above' }
        ],
        correctAnswer: 'd',
        explanation:
          'Irrigation serves multiple purposes: disinfection, debris removal, lubrication, and cooling of instruments.'
      },
      {
        id: 12,
        question: 'Which is the most commonly used irrigant in endodontics?',
        options: [
          { id: 'a', text: 'Hydrogen peroxide' },
          { id: 'b', text: 'Sodium hypochlorite' },
          { id: 'c', text: 'Chlorhexidine' },
          { id: 'd', text: 'Saline solution' }
        ],
        correctAnswer: 'b',
        explanation:
          'Sodium hypochlorite is the most widely used irrigant due to its excellent antimicrobial and tissue-dissolving properties.'
      },
      {
        id: 13,
        question: 'What is a periapical lesion?',
        options: [
          { id: 'a', text: 'Infection in the pulp chamber' },
          { id: 'b', text: 'Inflammation around the root tip' },
          { id: 'c', text: 'Fracture of the root' },
          { id: 'd', text: 'Calcification of the canal' }
        ],
        correctAnswer: 'b',
        explanation:
          'A periapical lesion is an inflammatory condition that develops around the root tip, usually due to infected pulp.'
      },
      {
        id: 14,
        question: 'What is the success rate of primary endodontic treatment?',
        options: [
          { id: 'a', text: '50-60%' },
          { id: 'b', text: '70-80%' },
          { id: 'c', text: '85-95%' },
          { id: 'd', text: '100%' }
        ],
        correctAnswer: 'c',
        explanation:
          'Primary endodontic treatment has a high success rate of 85-95% when performed properly with good case selection.'
      },
      {
        id: 15,
        question:
          'What is the recommended follow-up period after endodontic treatment?',
        options: [
          { id: 'a', text: '1 month' },
          { id: 'b', text: '6 months' },
          { id: 'c', text: '1 year' },
          { id: 'd', text: '6 months to 1 year' }
        ],
        correctAnswer: 'd',
        explanation:
          'Follow-up is typically recommended at 6 months to 1 year to assess healing and treatment success.'
      }
    ]
  },
  {
    id: 'periodontics-classification',
    title: 'Periodontics - Disease Classification',
    description:
      'Test your understanding of periodontal disease classification and diagnosis',
    subject: 'Periodontics',
    duration: 25,
    totalQuestions: 12,
    difficulty: 'Medium',
    category: 'Dental',
    questions: [
      {
        id: 1,
        question:
          'According to the 2017 World Workshop classification, what is the primary criterion for staging periodontitis?',
        options: [
          { id: 'a', text: 'Age of patient' },
          { id: 'b', text: 'Severity of attachment loss' },
          { id: 'c', text: 'Number of teeth affected' },
          { id: 'd', text: 'Presence of bleeding' }
        ],
        correctAnswer: 'b',
        explanation:
          'The 2017 classification uses severity of attachment loss as the primary criterion for staging periodontitis.'
      },
      {
        id: 2,
        question: 'What characterizes Stage I periodontitis?',
        options: [
          { id: 'a', text: 'Attachment loss ≥5mm' },
          { id: 'b', text: 'Attachment loss 1-2mm' },
          { id: 'c', text: 'Attachment loss 3-4mm' },
          { id: 'd', text: 'No attachment loss' }
        ],
        correctAnswer: 'b',
        explanation:
          'Stage I periodontitis is characterized by attachment loss of 1-2mm at the site of greatest loss.'
      },
      // Add more periodontics questions...
      {
        id: 3,
        question:
          'What is the main difference between gingivitis and periodontitis?',
        options: [
          { id: 'a', text: 'Bleeding on probing' },
          { id: 'b', text: 'Presence of plaque' },
          { id: 'c', text: 'Attachment loss' },
          { id: 'd', text: 'Gingival inflammation' }
        ],
        correctAnswer: 'c',
        explanation:
          'The key difference is that periodontitis involves attachment loss, while gingivitis does not.'
      },
      {
        id: 4,
        question: 'Which grade indicates rapid progression of periodontitis?',
        options: [
          { id: 'a', text: 'Grade A' },
          { id: 'b', text: 'Grade B' },
          { id: 'c', text: 'Grade C' },
          { id: 'd', text: 'Grade D' }
        ],
        correctAnswer: 'c',
        explanation:
          'Grade C indicates rapid progression of periodontitis with evidence of progression ≥2.0 mm in 5 years.'
      },
      {
        id: 5,
        question: 'What is the clinical attachment level (CAL)?',
        options: [
          { id: 'a', text: 'Distance from gingival margin to pocket base' },
          { id: 'b', text: 'Distance from CEJ to pocket base' },
          { id: 'c', text: 'Distance from CEJ to gingival margin' },
          { id: 'd', text: 'Depth of gingival sulcus' }
        ],
        correctAnswer: 'b',
        explanation:
          'Clinical attachment level is the distance from the cemento-enamel junction to the base of the pocket.'
      },
      {
        id: 6,
        question: 'What characterizes necrotizing periodontal diseases?',
        options: [
          { id: 'a', text: 'Slow progression' },
          { id: 'b', text: 'Tissue necrosis and ulceration' },
          { id: 'c', text: 'No pain' },
          { id: 'd', text: 'Minimal bleeding' }
        ],
        correctAnswer: 'b',
        explanation:
          'Necrotizing periodontal diseases are characterized by tissue necrosis, ulceration, and typically severe pain.'
      },
      {
        id: 7,
        question: 'Which factor is most important in grading periodontitis?',
        options: [
          { id: 'a', text: 'Patient age' },
          { id: 'b', text: 'Smoking status' },
          { id: 'c', text: 'Rate of progression' },
          { id: 'd', text: 'Oral hygiene level' }
        ],
        correctAnswer: 'c',
        explanation:
          'Grading is primarily based on the rate of progression of periodontal destruction.'
      },
      {
        id: 8,
        question:
          'What is the normal probing depth of a healthy gingival sulcus?',
        options: [
          { id: 'a', text: '0-1mm' },
          { id: 'b', text: '1-3mm' },
          { id: 'c', text: '3-5mm' },
          { id: 'd', text: '5-7mm' }
        ],
        correctAnswer: 'b',
        explanation:
          'A healthy gingival sulcus typically has a probing depth of 1-3mm without attachment loss.'
      },
      {
        id: 9,
        question:
          "Which type of periodontitis was previously called 'aggressive periodontitis'?",
        options: [
          { id: 'a', text: 'Stage I Grade A' },
          { id: 'b', text: 'Stage II Grade B' },
          { id: 'c', text: 'Stage III Grade C' },
          { id: 'd', text: 'Stage IV Grade C' }
        ],
        correctAnswer: 'c',
        explanation:
          'What was previously called aggressive periodontitis is now classified as Stage III Grade C periodontitis.'
      },
      {
        id: 10,
        question: 'What is gingival recession?',
        options: [
          { id: 'a', text: 'Swelling of gingiva' },
          { id: 'b', text: 'Apical migration of gingival margin' },
          { id: 'c', text: 'Bleeding of gingiva' },
          { id: 'd', text: 'Color change of gingiva' }
        ],
        correctAnswer: 'b',
        explanation:
          'Gingival recession is the apical migration of the gingival margin, exposing the root surface.'
      },
      {
        id: 11,
        question:
          'Which bacteria is most associated with aggressive forms of periodontitis?',
        options: [
          { id: 'a', text: 'Streptococcus mutans' },
          { id: 'b', text: 'Aggregatibacter actinomycetemcomitans' },
          { id: 'c', text: 'Lactobacillus' },
          { id: 'd', text: 'Candida albicans' }
        ],
        correctAnswer: 'b',
        explanation:
          'Aggregatibacter actinomycetemcomitans is strongly associated with aggressive forms of periodontitis.'
      },
      {
        id: 12,
        question: 'What is the primary goal of periodontal therapy?',
        options: [
          { id: 'a', text: 'Tooth extraction' },
          { id: 'b', text: 'Plaque control and inflammation reduction' },
          { id: 'c', text: 'Cosmetic improvement' },
          { id: 'd', text: 'Pain relief only' }
        ],
        correctAnswer: 'b',
        explanation:
          'The primary goal is to control plaque and reduce inflammation to halt disease progression and maintain periodontal health.'
      }
    ]
  },
  {
    id: 'oral-pathology-lesions',
    title: 'Oral Pathology - Common Lesions',
    description: 'Identify and understand common oral pathological lesions',
    subject: 'Oral Pathology',
    duration: 35,
    totalQuestions: 18,
    difficulty: 'Hard',
    category: 'Dental',
    questions: [
      {
        id: 1,
        question: 'What is the most common malignant tumor of the oral cavity?',
        options: [
          { id: 'a', text: 'Adenocarcinoma' },
          { id: 'b', text: 'Squamous cell carcinoma' },
          { id: 'c', text: 'Melanoma' },
          { id: 'd', text: 'Sarcoma' }
        ],
        correctAnswer: 'b',
        explanation:
          'Squamous cell carcinoma accounts for about 90% of all oral malignancies.'
      },
      {
        id: 2,
        question: "Which lesion is characterized by a 'mulberry' appearance?",
        options: [
          { id: 'a', text: 'Fibroma' },
          { id: 'b', text: 'Papilloma' },
          { id: 'c', text: 'Granular cell tumor' },
          { id: 'd', text: 'Pyogenic granuloma' }
        ],
        correctAnswer: 'b',
        explanation:
          "Papillomas have a characteristic 'mulberry' or 'cauliflower' appearance due to their papillary surface."
      },
      // Add more oral pathology questions...
      {
        id: 3,
        question: 'What is leukoplakia?',
        options: [
          { id: 'a', text: 'A red lesion' },
          { id: 'b', text: 'A white lesion that cannot be wiped off' },
          { id: 'c', text: 'A pigmented lesion' },
          { id: 'd', text: 'An ulcerative lesion' }
        ],
        correctAnswer: 'b',
        explanation:
          'Leukoplakia is defined as a white lesion that cannot be wiped off and cannot be diagnosed as any other condition.'
      },
      {
        id: 4,
        question: 'Which virus is associated with oral hairy leukoplakia?',
        options: [
          { id: 'a', text: 'HSV-1' },
          { id: 'b', text: 'HPV' },
          { id: 'c', text: 'EBV' },
          { id: 'd', text: 'CMV' }
        ],
        correctAnswer: 'c',
        explanation:
          'Oral hairy leukoplakia is associated with Epstein-Barr virus (EBV) and commonly seen in immunocompromised patients.'
      },
      {
        id: 5,
        question:
          'What is the most common location for oral squamous cell carcinoma?',
        options: [
          { id: 'a', text: 'Hard palate' },
          { id: 'b', text: 'Tongue and floor of mouth' },
          { id: 'c', text: 'Buccal mucosa' },
          { id: 'd', text: 'Gingiva' }
        ],
        correctAnswer: 'b',
        explanation:
          'The lateral border of the tongue and floor of the mouth are the most common sites for oral squamous cell carcinoma.'
      },
      {
        id: 6,
        question: "Which condition is characterized by 'strawberry tongue'?",
        options: [
          { id: 'a', text: 'Scarlet fever' },
          { id: 'b', text: 'Geographic tongue' },
          { id: 'c', text: 'Black hairy tongue' },
          { id: 'd', text: 'Median rhomboid glossitis' }
        ],
        correctAnswer: 'a',
        explanation:
          'Strawberry tongue is a characteristic feature of scarlet fever, caused by Streptococcus pyogenes.'
      },
      {
        id: 7,
        question: 'What is a ranula?',
        options: [
          { id: 'a', text: 'A type of cyst in the maxilla' },
          { id: 'b', text: 'A mucocele in the floor of the mouth' },
          { id: 'c', text: 'A benign tumor of the tongue' },
          { id: 'd', text: 'An inflammatory lesion of the palate' }
        ],
        correctAnswer: 'b',
        explanation:
          'A ranula is a mucocele that occurs in the floor of the mouth, typically associated with the sublingual gland.'
      },
      {
        id: 8,
        question: 'Which lesion is most commonly associated with tobacco use?',
        options: [
          { id: 'a', text: 'Fibroma' },
          { id: 'b', text: 'Leukoplakia' },
          { id: 'c', text: 'Hemangioma' },
          { id: 'd', text: 'Lipoma' }
        ],
        correctAnswer: 'b',
        explanation:
          'Leukoplakia is strongly associated with tobacco use and is considered a potentially malignant disorder.'
      },
      {
        id: 9,
        question: 'What is erythroplakia?',
        options: [
          { id: 'a', text: 'A white patch' },
          { id: 'b', text: 'A red patch' },
          { id: 'c', text: 'A pigmented lesion' },
          { id: 'd', text: 'An ulcerative lesion' }
        ],
        correctAnswer: 'b',
        explanation:
          'Erythroplakia is a red patch that has a higher malignant potential than leukoplakia.'
      },
      {
        id: 10,
        question: 'Which cyst is most common in the jaws?',
        options: [
          { id: 'a', text: 'Dentigerous cyst' },
          { id: 'b', text: 'Radicular cyst' },
          { id: 'c', text: 'Keratocyst' },
          { id: 'd', text: 'Nasopalatine cyst' }
        ],
        correctAnswer: 'b',
        explanation:
          'Radicular cysts (periapical cysts) are the most common cysts of the jaws, arising from infected teeth.'
      },
      {
        id: 11,
        question: 'What characterizes lichen planus?',
        options: [
          { id: 'a', text: "White striae (Wickham's striae)" },
          { id: 'b', text: 'Red patches only' },
          { id: 'c', text: 'Pigmented lesions' },
          { id: 'd', text: 'Vesicular eruptions' }
        ],
        correctAnswer: 'a',
        explanation:
          "Oral lichen planus is characterized by white striae called Wickham's striae, often in a reticular pattern."
      },
      {
        id: 12,
        question:
          "Which condition causes 'cobblestone' appearance of oral mucosa?",
        options: [
          { id: 'a', text: "Crohn's disease" },
          { id: 'b', text: 'Ulcerative colitis' },
          { id: 'c', text: 'Celiac disease' },
          { id: 'd', text: "Behçet's disease" }
        ],
        correctAnswer: 'a',
        explanation:
          "Crohn's disease can cause a characteristic 'cobblestone' appearance of the oral mucosa."
      },
      {
        id: 13,
        question: 'What is the most common benign tumor of the oral cavity?',
        options: [
          { id: 'a', text: 'Lipoma' },
          { id: 'b', text: 'Fibroma' },
          { id: 'c', text: 'Neurofibroma' },
          { id: 'd', text: 'Hemangioma' }
        ],
        correctAnswer: 'b',
        explanation:
          'Fibroma is the most common benign tumor of the oral cavity, often resulting from chronic irritation.'
      },
      {
        id: 14,
        question: 'Which lesion is associated with HIV infection?',
        options: [
          { id: 'a', text: 'Oral hairy leukoplakia' },
          { id: 'b', text: "Kaposi's sarcoma" },
          { id: 'c', text: 'Candidiasis' },
          { id: 'd', text: 'All of the above' }
        ],
        correctAnswer: 'd',
        explanation:
          'All these lesions are commonly associated with HIV infection and immunosuppression.'
      },
      {
        id: 15,
        question: 'What is geographic tongue?',
        options: [
          { id: 'a', text: 'A malignant condition' },
          { id: 'b', text: 'A benign inflammatory condition' },
          { id: 'c', text: 'A fungal infection' },
          { id: 'd', text: 'A traumatic lesion' }
        ],
        correctAnswer: 'b',
        explanation:
          'Geographic tongue (benign migratory glossitis) is a benign inflammatory condition with unknown etiology.'
      },
      {
        id: 16,
        question: 'Which salivary gland tumor is most common?',
        options: [
          { id: 'a', text: 'Mucoepidermoid carcinoma' },
          { id: 'b', text: 'Adenoid cystic carcinoma' },
          { id: 'c', text: 'Pleomorphic adenoma' },
          { id: 'd', text: 'Warthin tumor' }
        ],
        correctAnswer: 'c',
        explanation:
          'Pleomorphic adenoma is the most common salivary gland tumor, accounting for about 80% of parotid tumors.'
      },
      {
        id: 17,
        question: 'What is the characteristic feature of pemphigus vulgaris?',
        options: [
          { id: 'a', text: 'Intact blisters' },
          { id: 'b', text: 'Nikolsky sign positive' },
          { id: 'c', text: 'White striae' },
          { id: 'd', text: 'Pigmented lesions' }
        ],
        correctAnswer: 'b',
        explanation:
          'Pemphigus vulgaris shows a positive Nikolsky sign, where slight pressure causes the epithelium to separate.'
      },
      {
        id: 18,
        question: "Which condition is characterized by 'target lesions'?",
        options: [
          { id: 'a', text: 'Lichen planus' },
          { id: 'b', text: 'Erythema multiforme' },
          { id: 'c', text: 'Pemphigoid' },
          { id: 'd', text: 'Lupus erythematosus' }
        ],
        correctAnswer: 'b',
        explanation:
          "Erythema multiforme is characterized by target or bull's-eye lesions, often triggered by infections or medications."
      }
    ]
  },
  {
    id: 'dental-anatomy-basics',
    title: 'Dental Anatomy - Basic Structures',
    description:
      'Test your knowledge of basic dental anatomy and tooth morphology',
    subject: 'Dental Anatomy',
    duration: 20,
    totalQuestions: 10,
    difficulty: 'Easy',
    category: 'Dental',
    questions: [
      {
        id: 1,
        question:
          'How many permanent teeth are there in a complete adult dentition?',
        options: [
          { id: 'a', text: '28' },
          { id: 'b', text: '30' },
          { id: 'c', text: '32' },
          { id: 'd', text: '34' }
        ],
        correctAnswer: 'c',
        explanation:
          'A complete adult dentition consists of 32 permanent teeth, including wisdom teeth.'
      },
      {
        id: 2,
        question: 'Which tooth has the longest root?',
        options: [
          { id: 'a', text: 'Central incisor' },
          { id: 'b', text: 'Canine' },
          { id: 'c', text: 'First premolar' },
          { id: 'd', text: 'First molar' }
        ],
        correctAnswer: 'b',
        explanation:
          'The canine tooth typically has the longest root among all teeth.'
      },
      {
        id: 3,
        question: 'What is the hardest substance in the human body?',
        options: [
          { id: 'a', text: 'Dentin' },
          { id: 'b', text: 'Enamel' },
          { id: 'c', text: 'Cementum' },
          { id: 'd', text: 'Bone' }
        ],
        correctAnswer: 'b',
        explanation:
          'Enamel is the hardest substance in the human body, composed primarily of hydroxyapatite crystals.'
      },
      {
        id: 4,
        question:
          'How many roots does a mandibular first molar typically have?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '3' },
          { id: 'd', text: '4' }
        ],
        correctAnswer: 'b',
        explanation:
          'A mandibular first molar typically has two roots: mesial and distal.'
      },
      {
        id: 5,
        question: 'What is the junction between enamel and cementum called?',
        options: [
          { id: 'a', text: 'DEJ' },
          { id: 'b', text: 'CEJ' },
          { id: 'c', text: 'PDL' },
          { id: 'd', text: 'ACJ' }
        ],
        correctAnswer: 'b',
        explanation:
          'The cemento-enamel junction (CEJ) is where the enamel and cementum meet at the neck of the tooth.'
      },
      {
        id: 6,
        question: 'Which teeth are considered succedaneous?',
        options: [
          { id: 'a', text: 'Primary teeth' },
          { id: 'b', text: 'Permanent teeth that replace primary teeth' },
          { id: 'c', text: 'Wisdom teeth' },
          { id: 'd', text: 'Supernumerary teeth' }
        ],
        correctAnswer: 'b',
        explanation:
          'Succedaneous teeth are permanent teeth that replace primary teeth (incisors, canines, and premolars).'
      },
      {
        id: 7,
        question: 'What is the normal eruption sequence for permanent teeth?',
        options: [
          { id: 'a', text: 'Incisors, canines, premolars, molars' },
          { id: 'b', text: 'Molars, incisors, premolars, canines' },
          {
            id: 'c',
            text: 'First molars, incisors, premolars, canines, second molars'
          },
          { id: 'd', text: 'Canines, incisors, molars, premolars' }
        ],
        correctAnswer: 'c',
        explanation:
          'The typical sequence is: first molars (6 years), central incisors, lateral incisors, first premolars, canines, second premolars, second molars.'
      },
      {
        id: 8,
        question: 'Which surface of a posterior tooth faces the cheek?',
        options: [
          { id: 'a', text: 'Lingual' },
          { id: 'b', text: 'Mesial' },
          { id: 'c', text: 'Buccal' },
          { id: 'd', text: 'Distal' }
        ],
        correctAnswer: 'c',
        explanation:
          'The buccal surface of posterior teeth faces the cheek (buccinator muscle).'
      },
      {
        id: 9,
        question: 'What is the function of the periodontal ligament?',
        options: [
          { id: 'a', text: 'To produce enamel' },
          { id: 'b', text: 'To attach the tooth to the alveolar bone' },
          { id: 'c', text: 'To form dentin' },
          { id: 'd', text: 'To protect the pulp' }
        ],
        correctAnswer: 'b',
        explanation:
          'The periodontal ligament attaches the tooth root to the alveolar bone and provides support and proprioception.'
      },
      {
        id: 10,
        question: 'Which teeth typically have two roots in the maxilla?',
        options: [
          { id: 'a', text: 'Incisors' },
          { id: 'b', text: 'Canines' },
          { id: 'c', text: 'Premolars' },
          { id: 'd', text: 'Molars' }
        ],
        correctAnswer: 'c',
        explanation:
          'Maxillary premolars, particularly the first premolar, commonly have two roots (buccal and lingual).'
      }
    ]
  }
]

// Helper functions
export function getTestExamById(id: string): TestExam | undefined {
  return testExams.find((exam) => exam.id === id)
}

export function getTestExamsByCategory(category: string): TestExam[] {
  return testExams.filter((exam) => exam.category === category)
}

export function getTestExamsBySubject(subject: string): TestExam[] {
  return testExams.filter((exam) => exam.subject === subject)
}

export function getTestExamsByDifficulty(
  difficulty: 'Easy' | 'Medium' | 'Hard'
): TestExam[] {
  return testExams.filter((exam) => exam.difficulty === difficulty)
}

// Get all unique categories
export function getCategories(): string[] {
  return [...new Set(testExams.map((exam) => exam.category))]
}

// Get all unique subjects
export function getSubjects(): string[] {
  return [...new Set(testExams.map((exam) => exam.subject))]
}
