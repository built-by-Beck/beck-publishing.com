import type { ProjectExtendedDetails } from "./types";

export const extinguisherTrackerDetails: ProjectExtendedDetails = {
  projectTypeLabel: "Life Safety SaaS / Fire Extinguisher Inspection Platform",
  shortDescription:
    "ExtinguisherTracker is a fire extinguisher inspection and asset tracking platform built to help facilities manage monthly inspections, search extinguisher records faster, track pass/fail status, organize locations, and generate cleaner inspection documentation.",
  sections: [
    {
      title: "Full Project Overview",
      paragraphs: [
        "ExtinguisherTracker started from a real problem I dealt with in the field: fire extinguisher inspections were being handled with paper, pen, printed lists, handwritten notes, and manual searching. That works when the list is small, but once a facility has hundreds of extinguishers spread across multiple buildings, floors, departments, parking decks, stairwells, mechanical rooms, and storage areas, the old way gets slow fast.",
        "The original process created too much wasted time. If an extinguisher was missing, moved, blocked, replaced, or had a different serial number, tracking that information meant flipping through paper, writing notes by hand, trying to remember where something was found, and later transferring that information somewhere else. Searching for one extinguisher could turn into a scavenger hunt. Finding patterns across locations was even harder.",
        "I built ExtinguisherTracker because I knew there had to be a better way. The goal was simple at first: make inspections faster and easier. But the more I worked through the real-world problems, the bigger the project became. What started as a basic way to replace paper lists grew into a full inspection and asset tracking system designed around how fire extinguisher work actually happens in the field.",
      ],
    },
    {
      title: "The Problem It Solves",
      paragraphs: [
        "Fire extinguisher inspections are not just a checklist. They are a moving target.",
        "In a large facility, extinguishers can be moved, replaced, blocked, damaged, discharged, mislabeled, missing, duplicated, or installed in the wrong location. Paper lists do not handle that well. They can tell you what should be there, but they do not make it easy to track what actually happened during the inspection.",
        "The biggest problems ExtinguisherTracker is built to solve are:",
      ],
      bullets: [
        "Paper inspection lists are slow to search.",
        "Handwritten notes can be hard to read, lose detail, or get separated from the record.",
        "Large facilities need better organization by building, floor, area, and location.",
        "Inspectors need to quickly know what has passed, failed, or still needs to be checked.",
        "Replaced extinguishers need better tracking so old serial numbers do not keep showing up like active assets.",
        "Managers need cleaner inspection records without manually rebuilding reports every month.",
        "Facilities need a faster way to find a specific extinguisher by asset number, serial number, barcode, or location.",
        "Repeated issues need to be easier to spot.",
        "Inspection history should be searchable instead of buried in stacks of paperwork.",
      ],
      paragraphsAfterBullets: [
        "ExtinguisherTracker turns the inspection process into a searchable, organized, digital workflow.",
      ],
    },
    {
      title: "Why I Built It",
      paragraphs: [
        "I built ExtinguisherTracker because I was tired of watching a real job get slowed down by outdated tools.",
        "When you are walking a hospital, facility, or large property checking extinguisher after extinguisher, the software should work the way the job works. It should help you move fast, stay organized, and document problems clearly. It should not make you fight the system.",
        "This project came from hands-on experience, not from guessing. I knew the pain points because I had dealt with them directly. I had used the paper lists. I had searched for missing extinguishers. I had seen how one small record problem could create confusion later. I had seen how much time could be wasted just trying to confirm whether an extinguisher was inspected, replaced, failed, moved, or still pending.",
        "I wanted to build something practical. Not a pretty demo. Not a fake portfolio app. A real tool for a real workflow.",
        "That is what made this project different. I was not building from a tutorial. I was solving a problem I understood from the inside.",
      ],
    },
    {
      title: "How It Started",
      paragraphs: [
        "The first version came from the simplest possible idea: replace the paper list.",
        "At the beginning, inspections were basically handled with printed sheets, handwritten initials, notes, and manual tracking. I started thinking about how much faster the process would be if the extinguisher list was searchable, organized by section, and easy to update from a phone, tablet, or computer.",
        "The early version was small. It focused on basic extinguisher records and inspection status. Then new problems kept showing up:",
      ],
      bullets: [
        "How do I search by serial number?",
        "How do I search by asset number?",
        "How do I separate buildings and sections?",
        "How do I track pass/fail status?",
        "How do I handle missing extinguishers?",
        "How do I handle replaced extinguishers?",
        "How do I keep retired serial numbers from showing up as active?",
        "How do I generate useful records at the end of the month?",
        "How do I make it simple enough to use while walking the facility?",
      ],
      paragraphsAfterBullets: [
        "Each problem forced the project to grow. That is how ExtinguisherTracker turned from a simple checklist idea into a serious SaaS product.",
      ],
    },
    {
      title: "What ExtinguisherTracker Does",
      paragraphs: [
        "ExtinguisherTracker helps users manage fire extinguisher inspection records through a digital dashboard.",
        "The platform is designed to let users:",
      ],
      bullets: [
        "Add and manage extinguisher records.",
        "Organize extinguishers by building, area, section, floor, or workspace.",
        "Search quickly by asset number, serial number, location, or vicinity.",
        "Mark extinguishers as pass, fail, pending, missing, replaced, or needing attention.",
        "Track inspection notes.",
        "View inspection history.",
        "Separate active extinguishers from retired or replaced ones.",
        "Keep monthly inspection records organized.",
        "Export or prepare inspection reports.",
        "Reduce duplicate records and outdated information.",
        "Make large extinguisher lists easier to manage.",
      ],
      paragraphsAfterBullets: [
        "The bigger goal is to give facilities a cleaner, faster, more reliable way to manage extinguisher inspections without drowning in paper.",
      ],
    },
    {
      title: "Core Features",
      subsections: [
        {
          title: "Searchable Asset Records",
          paragraphs: [
            "The system is designed around fast searching. Instead of flipping through pages, users can search for an extinguisher by asset ID, serial number, barcode, or location details. This is one of the most important parts of the platform because speed matters when you are working across a large facility.",
          ],
        },
        {
          title: "Inspection Status Tracking",
          paragraphs: [
            "Each extinguisher can be tracked by status, such as passed, failed, pending, missing, or replaced. This makes it easier to see what work is complete and what still needs attention.",
          ],
        },
        {
          title: "Location-Based Organization",
          paragraphs: [
            "Extinguishers can be grouped by building, department, floor, parking deck, area, or custom workspace. This matters because large facilities are not one simple list. They are made of many different zones, and the software has to reflect that.",
          ],
        },
        {
          title: "Replacement Tracking",
          paragraphs: [
            "One of the most important real-world problems is handling replacements correctly. In many cases, the asset ID may stay the same, but the serial number changes because the physical extinguisher was replaced. ExtinguisherTracker is designed to archive the old serial number, keep the new extinguisher active, and prevent retired serial numbers from showing up like current equipment.",
          ],
        },
        {
          title: "Notes and Issue Tracking",
          paragraphs: [
            "The system allows users to record notes when something is blocked, missing, damaged, discharged, obstructed, incorrectly labeled, or otherwise needs attention. This helps turn field observations into usable records instead of scattered handwritten notes.",
          ],
        },
        {
          title: "Monthly Inspection Workflow",
          paragraphs: [
            "The platform is designed around recurring monthly inspections. Users need to know what has been checked this month, what is still pending, and what failed. ExtinguisherTracker is built to support that workflow instead of treating inspections like random one-time events.",
          ],
        },
        {
          title: "Reporting and Records",
          paragraphs: [
            "The goal is to help users create cleaner inspection records that can be reviewed, exported, or used for documentation. Instead of rebuilding information manually, the system keeps records organized as the inspection work happens.",
          ],
        },
        {
          title: "SaaS Subscription Structure",
          paragraphs: [
            "ExtinguisherTracker is planned as a SaaS product with subscription tiers based on the number of extinguishers or facility needs. This turns the project into more than an internal tool. It becomes a real product that can potentially serve other businesses, facilities, schools, churches, warehouses, and property managers.",
          ],
        },
      ],
    },
    {
      title: "AI and Automation Direction",
      paragraphs: [
        "ExtinguisherTracker is also being designed with AI-assisted features in mind.",
        "The long-term goal is not to add AI just because it sounds good. The goal is to use AI where it can actually save time, reduce confusion, and help users make better decisions.",
        "Possible AI-assisted features include:",
      ],
      bullets: [
        "Summarizing inspection notes.",
        "Finding repeated problem areas.",
        "Helping generate inspection reports.",
        "Flagging unusual patterns.",
        "Helping users search records in plain language.",
        "Assisting with troubleshooting common inspection issues.",
        "Turning messy notes into cleaner documentation.",
      ],
      paragraphsAfterBullets: [
        "The AI direction is focused on practical workflow improvement, not gimmicks.",
      ],
    },
    {
      title: "Technical Stack",
      paragraphs: [
        "ExtinguisherTracker uses a modern web app stack designed for speed, flexibility, and future growth.",
        "Technologies and tools include:",
      ],
      bullets: [
        "React",
        "TypeScript",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
        "Stripe",
        "PWA concepts",
        "Authentication",
        "Cloud database structure",
        "Role-based access planning",
        "Search/filter workflows",
        "SaaS subscription planning",
      ],
      paragraphsAfterBullets: [
        "The project includes frontend design, database modeling, user workflow planning, subscription logic, asset tracking logic, and real-world inspection process design.",
      ],
    },
    {
      title: "What I Built / Planned",
      paragraphs: [
        "This project includes much more than a basic website.",
        "I worked through:",
      ],
      bullets: [
        "The user interface for managing extinguisher records.",
        "The data structure for storing assets, locations, inspections, notes, and history.",
        "Search behavior for large extinguisher lists.",
        "Monthly inspection workflow logic.",
        "Pass/fail/pending status handling.",
        "Replacement and retired asset logic.",
        "SaaS pricing structure.",
        "Stripe subscription planning.",
        "User account and organization concepts.",
        "Mobile/tablet-friendly field use.",
        "Export/reporting ideas.",
        "Future AI-assisted inspection support.",
      ],
      paragraphsAfterBullets: [
        "This is the kind of project that forced me to think like a developer, a technician, and a product owner at the same time.",
      ],
    },
    {
      title: "What This Project Proves",
      paragraphs: [
        "ExtinguisherTracker proves that I can take a messy real-world problem and turn it into software.",
        "It shows that I can:",
      ],
      bullets: [
        "Identify a real workflow problem.",
        "Break that problem into smaller technical pieces.",
        "Design a digital system around how people actually work.",
        "Build with React and TypeScript.",
        "Work with Firebase and Firestore data structures.",
        "Think through SaaS pricing and subscriptions.",
        "Plan user roles, organizations, and account access.",
        "Build search and filtering features around real data.",
        "Handle edge cases like replacements, retired serial numbers, missing assets, and monthly resets.",
        "Think beyond the screen and understand the real job being done in the field.",
      ],
      paragraphsAfterBullets: [
        "Most importantly, it shows that I do not just build apps to say I built them. I build tools because I see a problem and want to fix it.",
      ],
    },
    {
      title: "Why It Matters",
      paragraphs: [
        "Extinguisher inspections are part of life safety. That means the records matter. The locations matter. The inspection status matters. If an extinguisher is missing, blocked, damaged, or not properly documented, that is not just an inconvenience. It can become a real safety issue.",
        "ExtinguisherTracker matters because it brings better organization, speed, and accountability to a process that is still often handled with outdated tools.",
        "A better inspection system can help facilities:",
      ],
      bullets: [
        "Save time.",
        "Reduce confusion.",
        "Improve documentation.",
        "Find equipment faster.",
        "Track problems more clearly.",
        "Stay better prepared for inspections and audits.",
        "Keep life safety equipment easier to manage.",
      ],
    },
    {
      title: "The Bigger Vision",
      paragraphs: [
        "The bigger vision for ExtinguisherTracker is to become a full facility safety inspection platform.",
        "Fire extinguishers are the starting point, but the same system could grow into other inspection workflows, including:",
      ],
      bullets: [
        "Emergency lights",
        "Exit signs",
        "Fire doors",
        "Eyewash stations",
        "AED checks",
        "Sprinkler inspection notes",
        "Safety equipment rounds",
        "Preventive maintenance checklists",
      ],
      paragraphsAfterBullets: [
        "The long-term idea is to build a practical safety and inspection platform for people who work in the field and need software that actually understands the job.",
      ],
    },
    {
      title: "Final Pitch",
      paragraphs: [
        "ExtinguisherTracker is the project that best shows how I solve problems.",
        "It started with paper, pen, and a frustrating inspection process. It grew into a full SaaS product idea with search, asset tracking, inspection history, replacement logic, reporting, subscriptions, and future AI-assisted features.",
        "This project represents exactly how I like to build: find a real problem, understand the workflow, design a better system, and keep improving it until it becomes something useful.",
      ],
    },
  ],
};
