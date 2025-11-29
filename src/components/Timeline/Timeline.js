import Window from "../Window/Window";
import "./Timeline.css";

const Timeline = ({ onClose }) => {
  const timelineEvents = [
    {
      year: "2025-present",
      title: "Co-Founder at Strategoo",
      description:
        "Started a company focused on helping people with their financial well-being by providing tools to manage and plan finances and get access to financial advice.",
      link: "https://www.strategoo.be/",
      side: "left",
    },
    {
      year: "2025-present",
      title: "Master Thesis at DataMeister",
      description:
        "Working on using machine learning to clean up 3D meshes, applying advanced AI techniques to geometric data processing.",
      link: "https://www.datameister.ai/",
      side: "right",
    },
    {
      year: "2025",
      title: "Internship at We Are",
      description:
        "Gained experience in project management and worked with modern tech stacks in real-world software development.",
      link: "https://we-are.be",
      side: "left",
    },
    {
      year: "2024-present",
      title: "Master in Computer Science Engineering",
      description:
        "Started my second master's degree, focusing on advanced computer science topics and theoretical software engineering.",
      side: "right",
    },
    {
      year: "2023",
      title: "Master Thesis at IDLab",
      description:
        "Built RustiFlow, a network traffic analysis tool that led to a published paper. Focused on high-performance packet processing using Rust.",
      link: "https://github.com/idlab-discover/RustiFlow",
      side: "left",
    },
    {
      year: "2023-2024",
      title: "Work at Alternatiefbv",
      description:
        "Started working at a SaaS company focused on invoice management and payment reminders, developing backend systems and automation tools.",
      link: "https://www.alternatief.ai/",
      side: "right",
    },
    {
      year: "2023",
      title: "Internship at We Are",
      description:
        "First internship experience working with modern web technologies and contributing to client projects.",
      link: "https://we-are.be",
      side: "left",
    },
    {
      year: "2020-2024",
      title: "Master in Information Theory",
      description:
        "Completed my first master's degree, building a strong foundation in mathematics, algorithms, and practical computer science.",
      side: "right",
    },
  ];

  return (
    <Window
      title="timeline.matisse"
      className="timeline"
      onClose={() => onClose && onClose("timeline")}
    >
      <h3>My Journey</h3>
      <div className="timeline-content">
        <div className="timeline-events-wrapper">
          <div className="timeline-line"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className={`timeline-event ${event.side}`}>
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-event-content">
                <div className="timeline-title">
                  {event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {event.title}
                    </a>
                  ) : (
                    event.title
                  )}
                </div>
                <div className="timeline-description">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default Timeline;
