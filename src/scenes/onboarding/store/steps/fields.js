const professionSpecialty = {
  default: [
    'Family & General Dentistry',
    'Anesthesiology',
    'Endodontics',
    'Oral & Maxillofacial Surgery',
    'Orthodontics',
    'Pedodontics',
    'Periodontics',
    'Prosthodontics',
    'Radiology',
    'Other',
  ],
  dentist: [
    'Family & General Dentist',
    'Anesthesiologist',
    'Endodontist',
    'Oral & Maxillofacial Surgeon',
    'Orthodontist',
    'Pedodontist',
    'Periodontist',
    'Prosthodontist',
    'Radiologist',
    'Other',
  ],
}

export const professional = [
  {
    forceAllow: true,
    step: '1',
    nextStep: '2',
    complete: false,
    needsComplete: true,
    title: 'Contact Information',
    sidebar: {
      title: 'Sign Up Today',
      subTitle: 'Professionals',
      description: 'and learn how to qualify for your free scrubs!',
      svg: 'shirt',
      order: ['subTitle', 'title', 'hr', 'description', 'svg'],
    },
    fields: [
      {
        fields: [
          {
            name: 'first_name',
            label: 'First Name',
            type: 'input',
            required: true,
          },
          {
            name: 'last_name',
            label: 'Last Name',
            type: 'input',
            required: true,
          },
        ],
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'input',
        formType: 'email',
        required: true,
      },
      {
        name: 'password',
        label: 'Password',
        type: 'input',
        formType: 'password',
        required: true,
      },
      {
        name: 'verify_password',
        label: 'Verify Password',
        type: 'input',
        formType: 'password',
        required: true,
      },
    ],
  },
  {
    step: '2',
    nextStep: '3',
    complete: false,
    needsComplete: true,
    title: 'Address Information',
    sidebar: {
      title: 'DayHire &tm;',
      description: 'Never depend on an early morning phone call again. DayHire  is a location based, on-demand hiring alternative to calling a temp agency.',
      svg: 'mobile',
      order: ['svg', 'title', 'description'],
    },
    fields: [
      {
        name: 'street',
        label: 'Street Address',
        type: 'input',
        required: true,
      },
      {
        name: 'state',
        label: 'State',
        type: 'input',
        required: true,
      },
      {
        name: 'city',
        label: 'City',
        type: 'input',
        required: true,
      },
      {
        name: 'postal_code',
        label: 'Postal Code',
        type: 'input',
        formType: 'number',
        required: true,
      },
    ],
  },
  {
    step: '3',
    nextStep: 'complete',
    complete: false,
    needsComplete: true,
    title: 'Profession Information',
    sidebar: {
      title: 'Work When you Want',
      titleSubLarge: 'Make What you Need',
      description: 'Temping with StaffingDog is flexible and rewarding, helping dental professionals meet their career and financial goals.',
      svg: 'desktop_search',
      order: ['svg', 'title', 'subTitleLarge', 'description'],
    },
    fields: [
      {
        name: 'profession',
        label: 'Profession',
        type: 'dropdown',
        required: true,
        options: [
          'Dental Hygienist',
          'Dental Assistant',
          'Dentist',
          'Front Office',
          'Other',
        ],
      },
      {
        name: 'speciality',
        label: 'Speciality',
        type: 'dropdown',
        optionsByValue: {
          name: 'profession',
          options: {
            'Dental Hygienist': professionSpecialty.default,
            'Dental Assistant': professionSpecialty.default,
            Dentist: professionSpecialty.dentist,
            'Front Office': professionSpecialty.default,
            Other: professionSpecialty.default,
          },
        },
      },
      {
        name: 'availability',
        label: 'Availability',
        type: 'dropdown',
        options: [
          { value: 'All' },
          { value: 'Temporary' },
          { value: 'Full Time' },
          { value: 'Part Time' },
        ],
      },
    ],
  },
  {
    step: 'complete',
    complete: false,
    needsComplete: false,
    title: 'Setup Complete',
  },
]

export const practice = [
  {
    forceAllow: true,
    step: '1',
    nextStep: '2',
    complete: false,
    needsComplete: true,
    title: 'Account Information',
    sidebar: {
      title: 'Sign Up Today',
      subTitle: 'Dental Practice',
      description: 'See how your office can cut hiring and recruiting costs by as much as 70% through our automated hiring network.',
      svg: 'computer',
      order: ['subTitle', 'title', 'svg', 'hr', 'description'],
    },
    fields: [
      {
        fields: [
          {
            name: 'first_name',
            label: 'First Name',
            type: 'input',
            required: true,
          },
          {
            name: 'last_name',
            label: 'Last Name',
            type: 'input',
            required: true,
          },
        ],
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'input',
        formType: 'email',
        required: true,
      },
      {
        name: 'password',
        label: 'Password',
        type: 'input',
        formType: 'password',
        required: true,
      },
      {
        name: 'verify_password',
        label: 'Verify Password',
        type: 'input',
        formType: 'password',
        required: true,
      },
    ],
  },
  {
    step: '2',
    nextStep: '3',
    complete: false,
    needsComplete: true,
    title: 'Practice Address',
    sidebar: {
      title: 'DayHire &tm;',
      description: 'Never depend on an early morning phone call again. DayHire  is a location based, on-demand hiring alternative to calling a temp agency.',
      svg: 'mobile',
      order: ['svg', 'title', 'description'],
    },
    fields: [
      {
        name: 'street',
        label: 'Street Address',
        type: 'input',
        required: true,
      },
      {
        name: 'state',
        label: 'State',
        type: 'input',
        required: true,
      },
      {
        name: 'city',
        label: 'City',
        type: 'input',
        required: true,
      },
      {
        name: 'postal_code',
        label: 'Postal Code',
        type: 'input',
        formType: 'number',
        required: true,
      },
    ],
  },
  {
    step: '3',
    nextStep: 'complete',
    complete: false,
    needsComplete: true,
    title: 'Practice Information',
    sidebar: {
      title: 'Work When you Want',
      titleSubLarge: 'Make What you Need',
      description: 'Temping with StaffingDog is flexible and rewarding, helping dental professionals meet their career and financial goals.',
      svg: 'desktop_search',
      order: ['svg', 'title', 'subTitleLarge', 'description'],
    },
    fields: [
      {
        name: 'practice_name',
        label: 'Practice Name',
        type: 'input',
        required: true,
      },
      {
        name: 'practice_type',
        label: 'Practice Type',
        type: 'dropdown',
        required: true,
        options: [
          { value: 'Dental Hygienist' },
          { value: 'Dental Assistant' },
          { value: 'Dentist' },
          { value: 'Front Office' },
          { value: 'Office Manager' },
          { value: 'Anesthesiologist' },
          { value: 'Other' },
        ],
      },
      {
        fields: [
          {
            name: 'practice_first_name',
            label: 'First Name',
            type: 'input',
            required: true,
          },
          {
            name: 'practice_last_name',
            label: 'Last Name',
            type: 'input',
            required: true,
          },
        ],
      },
      {
        name: 'practice_email',
        label: 'Email Address',
        type: 'input',
        formType: 'email',
        required: true,
      },
    ],
  },
  {
    step: 'complete',
    complete: false,
    needsComplete: false,
    title: 'Setup Complete',
  },
]

export default { professional, practice }