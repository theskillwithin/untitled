import { positions, getPositionTypesByPosition } from '@sdog/definitions/jobs'

export const professional = [
  {
    forceAllow: true,
    step: '1',
    nextStep: '2',
    previousStep: 0,
    complete: false,
    needsComplete: true,
    needsCompleteIfToken: false,
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
            autoFocus: true,
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
        validation: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'input',
        formType: 'password',
        required: true,
        validation: 'password',
        subLabel: '( 8+ characters containing 6+ unique characters )',
      },
      {
        name: 'password_confirmation',
        label: 'Verify Password',
        type: 'input',
        formType: 'password',
        required: true,
        validation: 'passwordMatch',
      },
    ],
  },
  {
    step: '2',
    nextStep: '3',
    previousStep: '1',
    complete: false,
    needsComplete: true,
    needsCompleteIfToken: true,
    title: 'Address Information',
    sidebar: {
      title: '<strong>DayHire &trade;</strong>',
      description:
        'Never depend on an early morning phone call again. DayHire is a location based, on-demand hiring alternative to calling a temp agency.',
      svg: 'mobile',
      order: ['svg', 'title', 'description'],
    },
    fields: [
      {
        name: 'street',
        label: 'Street Address',
        type: 'input',
        required: true,
        validation: 'minChars3',
        autoFocus: true,
      },
      {
        name: 'city',
        label: 'City',
        type: 'input',
        required: true,
        validation: 'minChars3',
      },
      {
        name: 'state',
        label: 'State',
        type: 'dropdown',
        required: true,
        options: [
          { label: 'Alabama', value: 'AL' },
          { label: 'Alaska', value: 'AK' },
          { label: 'Arizona', value: 'AZ' },
          { label: 'Arkansas', value: 'AR' },
          { label: 'California', value: 'CA' },
          { label: 'Colorado', value: 'CO' },
          { label: 'Connecticut', value: 'CT' },
          { label: 'Delaware', value: 'DE' },
          { label: 'Florida', value: 'FL' },
          { label: 'Georgia', value: 'GA' },
          { label: 'Hawaii', value: 'HI' },
          { label: 'Idaho', value: 'ID' },
          { label: 'Illinois', value: 'IL' },
          { label: 'Indiana', value: 'IN' },
          { label: 'Iowa', value: 'IA' },
          { label: 'Kansas', value: 'KS' },
          { label: 'Kentucky', value: 'KY' },
          { label: 'Louisiana', value: 'LA' },
          { label: 'Maine', value: 'ME' },
          { label: 'Maryland', value: 'MD' },
          { label: 'Massachusetts', value: 'MA' },
          { label: 'Michigan', value: 'MI' },
          { label: 'Minnesota', value: 'MN' },
          { label: 'Mississippi', value: 'MS' },
          { label: 'Missouri', value: 'MO' },
          { label: 'Montana', value: 'MT' },
          { label: 'Nebraska', value: 'NE' },
          { label: 'Nevada', value: 'NV' },
          { label: 'New Hampshire', value: 'NH' },
          { label: 'New Jersey', value: 'NJ' },
          { label: 'New Mexico', value: 'NM' },
          { label: 'New York', value: 'NY' },
          { label: 'North Carolina', value: 'NC' },
          { label: 'North Dakota', value: 'ND' },
          { label: 'Ohio', value: 'OH' },
          { label: 'Oklahoma', value: 'OK' },
          { label: 'Oregon', value: 'OR' },
          { label: 'Pennsylvania', value: 'PA' },
          { label: 'Rhode Island', value: 'RI' },
          { label: 'South Carolina', value: 'SC' },
          { label: 'South Dakota', value: 'SD' },
          { label: 'Tennessee', value: 'TN' },
          { label: 'Texas', value: 'TX' },
          { label: 'Utah', value: 'UT' },
          { label: 'Vermont', value: 'VT' },
          { label: 'Virginia', value: 'VA' },
          { label: 'Washington', value: 'WA' },
          { label: 'West Virginia', value: 'WV' },
          { label: 'Wisconsin', value: 'WI' },
          { label: 'Wyoming', value: 'WY' },
        ],
      },
      {
        name: 'zip',
        label: 'Postal Code',
        type: 'input',
        formType: 'number',
        required: true,
        validation: 'minDigits5',
      },
    ],
  },
  {
    step: '3',
    nextStep: 'complete',
    previousStep: '2',
    complete: false,
    needsComplete: true,
    needsCompleteIfToken: true,
    title: 'Profession Information',
    sidebar: {
      title: '<strong>Work When you Want</strong>',
      titleSubLarge: 'Make What you Need',
      description:
        'Temping with StaffingDog is flexible and rewarding, helping dental professionals meet their career and financial goals.',
      svg: 'desktop_search',
      order: ['svg', 'title', 'subTitleLarge', 'description'],
    },
    fields: [
      {
        name: 'profession',
        label: 'Profession',
        type: 'dropdown',
        required: true,
        options: [...positions],
        autoFocus: true,
      },
      {
        name: 'specialty',
        label: 'Specialty',
        type: 'dropdown',
        optionsByValue: {
          name: 'profession',
          options: positions.reduce(
            (listOfPositionTypeOptions, positionType) => ({
              ...listOfPositionTypeOptions,
              [positionType.value]: getPositionTypesByPosition(positionType.value),
            }),
            {},
          ),
        },
      },
      {
        name: 'availability',
        label: 'Availability',
        type: 'multi-select',
        options: [
          { label: 'Full Time (Permanent)', value: 'full_time' },
          { label: 'Part Time (Permanent)', value: 'part_time' },
          { label: 'Temp', value: 'temp' },
        ],
        required: true,
      },
      {
        name: 'hourly_wage',
        label: 'Hourly Wage',
        type: 'input',
        required: true,
      },
    ],
  },
  {
    step: 'complete',
    previousStep: '3',
    complete: false,
    needsComplete: false,
    needsCompleteIfToken: false,
    title: 'Setup Complete',
  },
]

export const practice = [
  {
    forceAllow: true,
    step: '1',
    nextStep: '2',
    previousStep: 0,
    complete: false,
    needsComplete: true,
    needsCompleteIfToken: false,
    title: 'Account Information',
    sidebar: {
      title: 'Sign Up Today',
      subTitle: 'Dental Practice',
      description:
        'See how your office can cut hiring and recruiting costs by as much as 70% through our automated hiring network.',
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
            autoFocus: true,
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
        validation: 'password',
        subLabel: '( 8+ characters containing 6+ unique characters )',
      },
      {
        name: 'password_confirmation',
        label: 'Verify Password',
        type: 'input',
        formType: 'password',
        required: true,
        validation: 'passwordMatch',
      },
    ],
  },
  {
    step: '2',
    nextStep: '3',
    previousStep: '2',
    complete: false,
    needsComplete: true,
    needsCompleteIfToken: true,
    title: 'Practice Address',
    sidebar: {
      title: 'DayHire &trade;',
      description:
        'Never depend on an early morning phone call again. DayHire  is a location based, on-demand hiring alternative to calling a temp agency.',
      svg: 'mobile',
      order: ['svg', 'title', 'description'],
    },
    fields: [
      {
        name: 'street',
        label: 'Street Address',
        type: 'input',
        required: true,
        validation: 'minChars3',
        autoFocus: true,
      },
      {
        name: 'city',
        label: 'City',
        type: 'input',
        required: true,
        validation: 'minChars3',
      },
      {
        name: 'state',
        label: 'State',
        type: 'dropdown',
        required: true,
        options: [
          { label: 'Alabama', value: 'AL' },
          { label: 'Alaska', value: 'AK' },
          { label: 'Arizona', value: 'AZ' },
          { label: 'Arkansas', value: 'AR' },
          { label: 'California', value: 'CA' },
          { label: 'Colorado', value: 'CO' },
          { label: 'Connecticut', value: 'CT' },
          { label: 'Delaware', value: 'DE' },
          { label: 'Florida', value: 'FL' },
          { label: 'Georgia', value: 'GA' },
          { label: 'Hawaii', value: 'HI' },
          { label: 'Idaho', value: 'ID' },
          { label: 'Illinois', value: 'IL' },
          { label: 'Indiana', value: 'IN' },
          { label: 'Iowa', value: 'IA' },
          { label: 'Kansas', value: 'KS' },
          { label: 'Kentucky', value: 'KY' },
          { label: 'Louisiana', value: 'LA' },
          { label: 'Maine', value: 'ME' },
          { label: 'Maryland', value: 'MD' },
          { label: 'Massachusetts', value: 'MA' },
          { label: 'Michigan', value: 'MI' },
          { label: 'Minnesota', value: 'MN' },
          { label: 'Mississippi', value: 'MS' },
          { label: 'Missouri', value: 'MO' },
          { label: 'Montana', value: 'MT' },
          { label: 'Nebraska', value: 'NE' },
          { label: 'Nevada', value: 'NV' },
          { label: 'New Hampshire', value: 'NH' },
          { label: 'New Jersey', value: 'NJ' },
          { label: 'New Mexico', value: 'NM' },
          { label: 'New York', value: 'NY' },
          { label: 'North Carolina', value: 'NC' },
          { label: 'North Dakota', value: 'ND' },
          { label: 'Ohio', value: 'OH' },
          { label: 'Oklahoma', value: 'OK' },
          { label: 'Oregon', value: 'OR' },
          { label: 'Pennsylvania', value: 'PA' },
          { label: 'Rhode Island', value: 'RI' },
          { label: 'South Carolina', value: 'SC' },
          { label: 'South Dakota', value: 'SD' },
          { label: 'Tennessee', value: 'TN' },
          { label: 'Texas', value: 'TX' },
          { label: 'Utah', value: 'UT' },
          { label: 'Vermont', value: 'VT' },
          { label: 'Virginia', value: 'VA' },
          { label: 'Washington', value: 'WA' },
          { label: 'West Virginia', value: 'WV' },
          { label: 'Wisconsin', value: 'WI' },
          { label: 'Wyoming', value: 'WY' },
        ],
      },
      {
        name: 'zip',
        label: 'Postal Code',
        type: 'input',
        formType: 'number',
        required: true,
        validation: 'minDigits5',
      },
    ],
  },
  {
    step: '3',
    nextStep: '4',
    previousStep: '2',
    complete: false,
    needsComplete: true,
    needsCompleteIfToken: true,
    title: 'Practice Information',
    sidebar: {
      title: 'Work When you Want',
      titleSubLarge: 'Make What you Need',
      description:
        'Temping with StaffingDog is flexible and rewarding, helping dental professionals meet their career and financial goals.',
      svg: 'desktop_search',
      order: ['svg', 'title', 'subTitleLarge', 'description'],
    },
    fields: [
      {
        name: 'practice_name',
        label: 'Practice Name',
        type: 'input',
        required: true,
        autoFocus: true,
      },
      {
        name: 'practice_type',
        label: 'Practice Type',
        type: 'dropdown',
        required: true,
        options: [
          { label: 'Single Practice', value: 'single_practice' },
          { label: 'Multi Practice', value: 'multi_practice' },
          { label: 'School', value: 'school' },
          { label: 'Other', value: 'other' },
        ],
      },
      {
        fields: [
          {
            name: 'contact_first_name',
            label: 'Primary First Name',
            type: 'input',
            required: true,
          },
          {
            name: 'contact_last_name',
            label: 'Primary Last Name',
            type: 'input',
            required: true,
          },
        ],
      },
      {
        name: 'contact_email',
        label: 'Primary Email Address',
        type: 'input',
        formType: 'email',
        required: true,
      },
    ],
  },
  {
    step: '4',
    nextStep: 'complete',
    previousStep: '3',
    complete: false,
    needsComplete: true,
    needsCompleteIfToken: true,
    title: 'Billing Information',
    sidebar: {
      packages: true,
      order: ['packages'],
    },
    fields: [
      {
        name: 'name_on_card',
        label: 'Name on Card',
        type: 'input',
        required: true,
        autoFocus: true,
      },
      {
        name: 'cc_number',
        label: 'Card Number',
        type: 'input',
        required: true,
      },
      {
        fields: [
          {
            name: 'expiration',
            label: 'MM/YYYY',
            placeholder: 'MM/YYYY',
            type: 'input',
            required: true,
          },
          {
            name: 'cc_cvv',
            label: 'CVC',
            type: 'input',
            required: true,
            cvc: true,
          },
        ],
      },
      {
        fields: [
          {
            name: 'billing_postal',
            label: 'Billing Postal Code',
            type: 'input',
            required: true,
          },
          {
            name: 'plan_tier',
            label: 'Select Package',
            type: 'dropdown',
            required: true,
            options: [
              { label: 'Day Hire', value: 'day_hire' },
              { label: 'Three Month', value: '3_months' },
              { label: 'Full', value: 'annual' },
            ],
          },
        ],
      },
    ],
  },
  {
    step: 'complete',
    previousStep: '3',
    complete: false,
    needsComplete: false,
    needsCompleteIfToken: false,
    title: 'Setup Complete',
  },
]

export default { professional, practice }
