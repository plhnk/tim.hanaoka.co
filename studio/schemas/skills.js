export default {
  name: "skills",
  title: "Skills",
  type: "object",
  fields: [
    {
      name: "skill",
      title: "Skill",
      description: "A 1-5 word description of the skill",
      type: "string"
    },
    {
      name: "experience",
      title: "Experience",
      description: "When did you first start learning this skills?",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
        calendarTodayLabel: "Today"
      }
    },
    {
      name: "description",
      title: "Description",
      description: "A brief summary of this skill",
      type: "blockContent"
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    }
  ],
  preview: {
    select: {
      title: "skill",
      experience: "experience",
    },
    prepare({ title = "No title", experience }) {
      return {
        title,
        experience: experience
      };
    }
  }
};
