// This file contains all the dental subjects with their details
export interface Subject {
  id: string
  name: string
  description: string
  icon?: string
}

export const subjects: Subject[] = [
  {
    id: 'endodontics',
    name: 'Endodontics',
    description: 'Root canal therapy and related procedures'
  },
  {
    id: 'periodontics',
    name: 'Periodontics',
    description: 'Treatment of gum diseases and supporting structures'
  },
  {
    id: 'oral-pathology',
    name: 'Oral Pathology',
    description: 'Study of diseases affecting the oral cavity'
  },
  {
    id: 'oral-surgery',
    name: 'Oral Surgery',
    description: 'Surgical procedures of the mouth and jaw'
  },
  {
    id: 'prosthodontics',
    name: 'Prosthodontics',
    description: 'Replacement of missing teeth and related structures'
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    description: 'Correction of teeth and jaw alignment'
  },
  {
    id: 'radiology',
    name: 'Radiology',
    description: 'Diagnostic imaging of oral and maxillofacial regions'
  },
  {
    id: 'pedodontics',
    name: 'Pedodontics',
    description: 'Dental care for children'
  },
  {
    id: 'operative',
    name: 'Operative Dentistry',
    description: 'Restoration of teeth'
  },
  {
    id: 'anatomy',
    name: 'Anatomy',
    description: 'Study of oral and facial structures'
  },
  {
    id: 'physiology',
    name: 'Physiology',
    description: 'Function of oral and facial structures'
  },
  {
    id: 'community-dentistry',
    name: 'Community Dentistry',
    description: 'Public health aspects of dentistry'
  },
  {
    id: 'dental-materials',
    name: 'Dental Materials',
    description: 'Materials used in dental procedures'
  },
  {
    id: 'dental-anesthesia',
    name: 'Dental Anesthesia & Dental Hygiene',
    description: 'Pain control and oral hygiene'
  },
  {
    id: 'microbiology',
    name: 'Microbiology',
    description: 'Study of microorganisms related to oral health'
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry',
    description: 'Chemical processes in oral health'
  },
  {
    id: 'general-pathology',
    name: 'General Pathology',
    description: 'Study of disease processes'
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    description: 'Medical conditions affecting dental care'
  },
  {
    id: 'general-surgery',
    name: 'General Surgery',
    description: 'Surgical principles relevant to dentistry'
  }
]

// Helper function to get a subject by ID
export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((subject) => subject.id === id)
}
