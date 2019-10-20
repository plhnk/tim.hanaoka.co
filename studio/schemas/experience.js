export default {
  name: "experience",
  title: "Experience",
  type: "object",
  fields: [
    {
      name: "organization",
      title: "Organization",
      description: "Where did you gain experience?",
      type: "string"
    },
    {
      name: "location",
      title: "Location",
      description: "What city and state did you work in?",
      type: "string"
    },
    {
      name: "title",
      title: "Title",
      description: "What was your position or job title there?",
      type: "string"
    },
    {
      name: "startDate",
      title: "Start Date",
      description: 'Typically a month and year is good — "October 2019"',
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
        calendarTodayLabel: "Today"
      }
    },
    {
      name: "endDate",
      title: "End Date",
      description: 'Typically a month and year is good — "October 2019"',
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
        calendarTodayLabel: "Today"
      }
    },
    {
      name: "bulletPoints",
      title: "Bullet Points",
      description:
        "Include 3-5 brief bullet points summarizingn the value you brought to this organization",
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      organization: "organization",
      startDate: "startDate",
      endDate: "endDate",
      location: "location",
      title: "title"
    },
    prepare({ title = "No title", startDate, endDate, location, organization }) {
      return {
        title,
        startDate: startDate,
        endDate: endDate,
        location: location,
        organization: organization
      };
    }
  }
};
