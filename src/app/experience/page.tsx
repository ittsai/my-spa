import Link from "next/link";
import classes from "./page.module.css"
import { SiLinkedin } from "react-icons/si";

const ExperiencePage = () => {
  return <div className="container">
    <h1>Projects</h1>
    <div className="projects">
      <div className={classes.project}>
        <h4><u>HAP - Netherlands - November 2024 - March 2025</u></h4>
        <ul>
          <li>Designed and developed an internal application to streamline CV creation and management for
            employees in Java/Kotlin and Angular/TypeScript.</li>
          <li>Created a matching engine for managers to align employee skills with project requirements, enhancing
            resource allocation.</li>
          <li>Leveraged MongoDB for flexible and efficient storage of complex CV data structures.</li>
          <li>Implemented database migration functionality to ensure seamless data transitions between versions,
            maintaining data integrity and minimising downtime.</li>
          <li>Seamlessly integrated two systems within a single platform, connecting with Monday.com to automate
            item imports into HAP, ensuring real-time updates and an enhanced user interface.</li>
          <li>The CV creation and management system is used by the internal delivery office across locations such
            as the Netherlands, Belgium, and others.</li>
        </ul>
        <p>Technologies Used: <br />
          <b>Java/Kotlin, Spring Boot, TypeScript JavaScript, MongoDB, JIRA, Git, Slack, GraphQL, Angular.JS, RESTFul APIs, Docker, UML</b></p>
        <ul>Achieved:
          <li>Integrated Monday.com with HAP. </li>
          <li>Implemented Database Migrations</li>
        </ul>
      </div>
      <div className={classes.project}>
        <h4><u>HSE Vaccination Platform - Ireland - January 2021 - October 2024</u></h4>
        <ul>
          <li>Technical Advisory Services (Designed and proposed solutions to the team)</li>
          <li>Requirements Analysis with Client Stakeholders</li>
          <li>Used CI/CD pipelines to streamline deployment processes</li>
          <li>Developed frontend components using JavaScript and backend functionalities in Java, utilizing SOQL
            for database CRUD operations</li>
          <li>Collaboration with MuleSoft Developers</li>
          <li>Data Analysis and Migration Script Development</li>
        </ul>
        <p>Technologies Used: <br />
          <b>Salesforce (Apex, Lightning), Java, JavaScript, MuleSoft, SQL, JIRA, Git, Slack</b></p>
        <ul>Achieved:
          <li>Salesforce 2021 Partner Innovation Award for Services to Government & Public Sector: HSE for Republic of Ireland</li>
          <li>2022 MCA Awards for &apos;Change and Transformation in the Public Sector&apos;</li>
          <li>1.3 million patients created via integration</li>
          <li>11 million GP searches</li>
          <li>6.7 million vaccination messages sent</li>
          <li>6.6 million address lookups</li>
          <li>8.5 million health identifier lookups</li>
        </ul>
        <p>Fully Remote work with international team</p>
      </div>
      <hr />
      <div className={classes.project}>
        <h4><u>Project: Bencom Group - Netherlands - July 2019 - January 2021</u></h4>
        <ul>
          <li>Technical Advisory Services</li>
          <li>Requirements Analysis with Client Product Owner</li>
          <li>Apex / Aura / Flow Programming</li>
          <li>Data Analysis and Migration Script Development</li>
        </ul>
        <p>Technologies Used: <br />
          <b>Salesforce (Apex, Lightning), Java, JavaScript, SQL, JIRA, Slack</b></p>
        <ul>Achieved:
          <li>Migrated Poliswijzer from Salesforce Class to Lightning and enhanced their system&apos;s performance and user experience</li>
        </ul>
      </div>
      <p>More information to <Link href="https://www.linkedin.com/in/iting-tsai/" target="_blank"> <SiLinkedin /></Link></p>
    </div>
  </div>
}

export default ExperiencePage;