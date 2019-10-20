export default {
  name: 'education',
  title: 'Education',
  type: 'object',
  fields: [
    {
      name: 'institution',
      title: 'Institution',
      description: 'A college, univerisity, trade school or any other academic institution',
      type: 'string'
    },
    {
      name: 'degree',
      title: 'Degree',
      description: 'The official title for the certificate or degree you received',
      type: 'string'
    },
    {
      name: 'additionalDegree',
      title: 'Degree',
      description: 'If you double-majored, or received an additional degree',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      description: 'The city and state where the institution is located',
      type: 'string'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      description: 'Typically something general, like "Fall 2019"',
      type: 'string'
    },
    {
      name: 'endDate',
      title: 'End Date',
      description: 'Typically something general, like "Spring 2020"',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'institution',
      startDate: 'startDate',
      endDate: 'endDate',
      location: 'location',
      degree: 'degree',
    },
    prepare ({ title = 'No title', startDate, EndDate, location, degree }) {
      return {
        title,
        subtitle: degree,
        startDate: startDate,
        endDate: endDate,
        location: location,
      }
    }
  }
}
