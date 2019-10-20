export default {
  name: "certifications",
  title: "Certifications",
  type: "object",
  fields: [
    {
      name: "certification",
      title: "Certification",
      description: "What is the name of the cerficiation",
      type: "string"
    },
    {
      name: 'details',
      title: 'Details',
      description: "Any other relevant details, or a longer description",
      type: 'blockContent'
    },
    {
      name: "dateCertified",
      title: "Date Certified",
      description: "When your certification became official",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today"
      }
    }
  ],
  preview: {
    select: {
      title: "certification",
      dateCertified: "dateCertified"
    },
    prepare({ title = "No title", dateCertified }) {
      return {
        title,
        subtitle: dateCertified
      };
    }
  }
};
