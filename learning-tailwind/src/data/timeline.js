// Function to calculate duration based on start date
function calculateDuration(startDate) {
  const today = new Date();
  const diffInMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  return diffInMonths + " months";
}

// Start date
const startDate = new Date("October 5, 2023");

// Calculate duration dynamically
const duration = calculateDuration(startDate);

// Array of job experiences
const jobExperiences = [
  {
    year: "Today",
    title: " Full Stack Software Engineer",
    duration: duration,
    details:
      "I helped in development of additional features for a Japanese Company. Our tech stack consisted of SpringBoot, Thymeleaf, Java, Maven, and a handful of other languages and tools.",
  },
  {
    year: "2023",
    title: "Bachelor's Degree in Computer Engineering",
    duration: "4 years",
    details:
      "I pursued the knowledge that a computer Engineering had to offer. I learned about computer architecture and hardware, software engineering, an array of programming, and aspects of artificial intelligence.",
  },
];

export default jobExperiences;
