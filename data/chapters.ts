// This file contains all chapters for each subject
export interface Chapter {
  id: string
  name: string
  description: string
  content?: string
  subjectId: string
}

export interface ChapterContent {
  title: string
  sections: {
    title: string
    content: string
    subsections?: {
      title: string
      content: string
    }[]
  }[]
}

// Chapters for all subjects
export const chapters: Chapter[] = [
  // Endodontics chapters
  {
    id: 'introduction',
    name: 'Introduction to Endodontics',
    description: 'Basic concepts and principles of endodontics',
    subjectId: 'endodontics'
  },
  {
    id: 'pulp-anatomy',
    name: 'Pulp Anatomy',
    description: 'Structure and function of dental pulp',
    subjectId: 'endodontics'
  },
  {
    id: 'diagnosis',
    name: 'Endodontic Diagnosis',
    description: 'Methods for diagnosing pulpal and periapical diseases',
    subjectId: 'endodontics'
  },
  {
    id: 'instruments',
    name: 'Endodontic Instruments',
    description: 'Tools and equipment used in root canal therapy',
    subjectId: 'endodontics'
  },
  {
    id: 'access-preparation',
    name: 'Access Preparation',
    description: 'Creating access to the root canal system',
    subjectId: 'endodontics'
  },
  {
    id: 'cleaning-shaping',
    name: 'Cleaning and Shaping',
    description: 'Techniques for preparing the root canal',
    subjectId: 'endodontics'
  },
  {
    id: 'obturation',
    name: 'Obturation',
    description: 'Filling the root canal system',
    subjectId: 'endodontics'
  },
  {
    id: 'complications',
    name: 'Complications and Failures',
    description: 'Managing problems in endodontic treatment',
    subjectId: 'endodontics'
  },
  {
    id: 'retreatment',
    name: 'Endodontic Retreatment',
    description: 'Procedures for failed root canal treatments',
    subjectId: 'endodontics'
  },
  {
    id: 'surgery',
    name: 'Endodontic Surgery',
    description: 'Surgical interventions in endodontics',
    subjectId: 'endodontics'
  },

  // Periodontics chapters
  {
    id: 'introduction',
    name: 'Introduction to Periodontics',
    description: 'Basic concepts and principles of periodontics',
    subjectId: 'periodontics'
  },
  {
    id: 'anatomy',
    name: 'Periodontal Anatomy',
    description: 'Structure and function of the periodontium',
    subjectId: 'periodontics'
  },
  {
    id: 'etiology',
    name: 'Etiology of Periodontal Diseases',
    description: 'Causes and risk factors for periodontal diseases',
    subjectId: 'periodontics'
  },
  {
    id: 'classification',
    name: 'Classification of Periodontal Diseases',
    description: 'Categories and types of periodontal conditions',
    subjectId: 'periodontics'
  },
  {
    id: 'examination',
    name: 'Periodontal Examination',
    description: 'Methods for assessing periodontal health',
    subjectId: 'periodontics'
  },
  {
    id: 'treatment-planning',
    name: 'Treatment Planning',
    description: 'Developing comprehensive periodontal treatment plans',
    subjectId: 'periodontics'
  },
  {
    id: 'non-surgical',
    name: 'Non-Surgical Therapy',
    description: 'Non-invasive approaches to periodontal treatment',
    subjectId: 'periodontics'
  },
  {
    id: 'surgical',
    name: 'Surgical Therapy',
    description: 'Surgical interventions for periodontal diseases',
    subjectId: 'periodontics'
  },
  {
    id: 'maintenance',
    name: 'Periodontal Maintenance',
    description: 'Long-term care following periodontal therapy',
    subjectId: 'periodontics'
  },
  {
    id: 'implants',
    name: 'Periodontal Aspects of Dental Implants',
    description: 'Relationship between periodontics and implantology',
    subjectId: 'periodontics'
  },

  // Oral Pathology chapters
  {
    id: 'introduction',
    name: 'Introduction to Oral Pathology',
    description: 'Basic concepts and principles of oral pathology',
    subjectId: 'oral-pathology'
  },
  {
    id: 'developmental',
    name: 'Developmental Disorders',
    description: 'Abnormalities arising during development',
    subjectId: 'oral-pathology'
  },
  {
    id: 'inflammatory',
    name: 'Inflammatory Conditions',
    description: 'Pathological processes involving inflammation',
    subjectId: 'oral-pathology'
  },
  {
    id: 'infectious',
    name: 'Infectious Diseases',
    description: 'Conditions caused by microorganisms',
    subjectId: 'oral-pathology'
  },
  {
    id: 'cysts',
    name: 'Cysts of the Jaws',
    description: 'Fluid-filled pathological cavities',
    subjectId: 'oral-pathology'
  },
  {
    id: 'tumors-benign',
    name: 'Benign Tumors',
    description: 'Non-cancerous neoplasms of the oral cavity',
    subjectId: 'oral-pathology'
  },
  {
    id: 'tumors-malignant',
    name: 'Malignant Tumors',
    description: 'Cancerous lesions of the oral cavity',
    subjectId: 'oral-pathology'
  },
  {
    id: 'immune',
    name: 'Immune-Mediated Diseases',
    description: 'Conditions resulting from immune system dysfunction',
    subjectId: 'oral-pathology'
  },
  {
    id: 'salivary',
    name: 'Salivary Gland Pathology',
    description: 'Diseases affecting the salivary glands',
    subjectId: 'oral-pathology'
  },
  {
    id: 'bone',
    name: 'Bone Pathology',
    description: 'Diseases affecting the jawbones',
    subjectId: 'oral-pathology'
  },

  // Add chapters for other subjects following the same pattern
  // For brevity, I'm only including a few subjects with detailed chapters
  // You would continue this pattern for all subjects

  // Example for Oral Surgery (abbreviated)
  {
    id: 'introduction',
    name: 'Introduction to Oral Surgery',
    description: 'Basic principles and concepts of oral surgery',
    subjectId: 'oral-surgery'
  },
  {
    id: 'extraction',
    name: 'Exodontia',
    description: 'Principles and techniques of tooth extraction',
    subjectId: 'oral-surgery'
  },

  // Example for Prosthodontics (abbreviated)
  {
    id: 'introduction',
    name: 'Introduction to Prosthodontics',
    description: 'Basic principles of dental prosthetics',
    subjectId: 'prosthodontics'
  },
  {
    id: 'fixed',
    name: 'Fixed Prosthodontics',
    description: 'Crowns, bridges, and other permanent restorations',
    subjectId: 'prosthodontics'
  }
]

// Helper function to get chapters by subject ID
export function getChaptersBySubjectId(subjectId: string): Chapter[] {
  return chapters.filter((chapter) => chapter.subjectId === subjectId)
}

// Helper function to get a specific chapter
export function getChapter(
  subjectId: string,
  chapterId: string
): Chapter | undefined {
  return chapters.find(
    (chapter) => chapter.subjectId === subjectId && chapter.id === chapterId
  )
}

// Sample chapter content for demonstration
export const chapterContents: Record<string, ChapterContent> = {
  'endodontics-introduction': {
    title: 'Introduction to Endodontics',
    sections: [
      {
        title: 'Definition and Scope',
        content:
          'Endodontics is the branch of dentistry concerned with the morphology, physiology, and pathology of the human dental pulp and periradicular tissues. Its study and practice encompass the basic and clinical sciences including the biology of the normal pulp and the etiology, diagnosis, prevention, and treatment of diseases and injuries of the pulp and associated periradicular conditions.'
      },
      {
        title: 'Historical Development',
        content:
          'The field of endodontics has evolved significantly over the past century. Early treatments were often focused on pain relief without addressing the underlying causes. Modern endodontics began to take shape in the early 20th century with improved understanding of pulpal diseases and the development of more effective techniques and materials.'
      },
      {
        title: 'Scope of Endodontics',
        content:
          'Endodontic treatment encompasses several procedures including vital pulp therapy, non-surgical root canal treatment, endodontic retreatment, periradicular surgery, treatment of traumatic dental injuries, endodontic implants, and bleaching of endodontically treated teeth.',
        subsections: [
          {
            title: 'Vital Pulp Therapy',
            content:
              'Procedures aimed at preserving the vitality of the pulp, including pulp capping and pulpotomy.'
          },
          {
            title: 'Root Canal Treatment',
            content:
              'The complete removal of the pulp tissue followed by cleaning, shaping, and filling of the root canal system.'
          }
        ]
      },
      {
        title: 'Importance in Dental Practice',
        content:
          'Endodontic procedures are essential components of comprehensive dental care. The preservation of natural teeth through endodontic treatment offers several advantages over extraction and replacement, including maintenance of natural appearance, efficient chewing function, normal biting force and sensation, protection of other teeth from excessive wear, and cost-effectiveness compared to extraction and replacement.'
      },
      {
        title: 'Future Directions',
        content:
          'The field of endodontics continues to advance with developments in regenerative endodontics, bioactive materials, advanced imaging techniques, minimally invasive approaches, and computer-aided instrumentation and obturation.'
      }
    ]
  },
  'periodontics-introduction': {
    title: 'Introduction to Periodontics',
    sections: [
      {
        title: 'Definition and Scope',
        content:
          'Periodontics is the dental specialty focused on the prevention, diagnosis, and treatment of diseases affecting the supporting structures of the teeth. These structures, collectively known as the periodontium, include the gingiva (gums), periodontal ligament, cementum, and alveolar bone.'
      },
      {
        title: 'Historical Development',
        content:
          'The recognition of periodontal diseases dates back to ancient civilizations, but modern periodontics began to develop in the late 19th and early 20th centuries. Significant advances in understanding the etiology, pathogenesis, and treatment of periodontal diseases have occurred over the past century.'
      },
      {
        title: 'Importance in Dental Practice',
        content:
          'Periodontal health is fundamental to overall oral health and function. Periodontal diseases are among the most common chronic diseases affecting humans worldwide and are a major cause of tooth loss in adults. Additionally, research has established associations between periodontal diseases and various systemic conditions, including cardiovascular disease, diabetes, and adverse pregnancy outcomes.'
      }
    ]
  }
}

// Helper function to get chapter content
export function getChapterContent(
  subjectId: string,
  chapterId: string
): ChapterContent | undefined {
  return chapterContents[`${subjectId}-${chapterId}`]
}
