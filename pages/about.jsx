import Section from "@/components/Section";
import Organizer from "@/components/Organizer";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";
import amy from "@/team/amy.jpeg";
import kelly from "@/team/kelly.png";
import melody from "@/team/melody.png";
import nicole from "@/team/nicole.jpeg";
import tarushii from "@/team/tarushii.jpeg";
import crystal from "@/team/crystal.png";
import juheon from "@/team/juheon.png";
import logo from "@/team/logo.png";
import ryan from "@/team/ryan.png";
import david from "@/team/david.jpeg";
import claire from "@/team/claire.jpeg";
import maggie from "@/team//maggie.png";
import jenna from "@/team/jenna.jpg";
import nino from "@/team/nino.jpg";
import trisha from "@/team/trisha.jpg";
import amys from "@/team/amys.png";
import cindy from "@/team/cindy.jpeg";
import charlotte from "@/team/charlotte.jpeg";
import haarika from "@/team/haarika.jpeg";
import hamsika from "@/team/hamsika.jpeg";
import hillary from "@/team/hillary.jpeg";
import reeti from "@/team/reeti.png";

const team = [
  { name: "Melody Yu", role: "head organizer", image: melody },
  { name: "Crystal Yang", role: "head organizer", image: crystal },
];

const problem_testers = [
  {
    name: "Ryan Chou",
    role: "problem tester",
    image: ryan,
    link: "https://www.ryanchou.dev",
  },
  {
    name: "Amy Sun",
    role: "problem tester",
    image: amys,
  },
];

const problem_writers = [
  {
    name: "Jenna Lee",
    role: "organizer",
    image: jenna,
  },
  {
    name: "Nino (Nintsi) Chkhaidze",
    role: "organizer",
    image: nino,
  },
  {
    name: "Trisha Sabadra",
    role: "organizer",
    image: trisha,
  },
  {
    name: "Cindy Yang",
    role: "organizer",
    image: cindy,
  },
  {
    name: "Charlotte Li",
    role: "organizer",
    image: charlotte,
  },
  {
    name: "Haarika Pappu",
    role: "organizer",
    image: haarika,
  },
  {
    name: "Hamsika Pappu",
    role: "organizer",
    image: hamsika,
  },
  {
    name: "Hillary Yang",
    role: "organizer",
    image: hillary,
  },
  
  {
    name: "Reeti Rout",
    role: "organizer",
    image: reeti,
  },
];

const past_team = [
  { name: "Maggie Liu", role: "organizer", image: maggie },
  { name: "Amy Chang", role: "organizer", image: amy },
  { name: "Kelly Zhou", role: "organizer", image: kelly },
  { name: "Nicole Xu", role: "organizer", image: nicole },
  { name: "Tarushii Goel", role: "organizer", image: tarushii },
  { name: "Juheon Rhee", role: "organizer", image: juheon },
  { name: "Maria Chrysafis", role: "organizer", image: logo },
  { name: "Claire Zhang", role: "problem tester", image: claire },
];

const About = () => {
  return (
    <main className={"bg-pink-50 min-h-screen py-12"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title className={"mb-4"}>about</Title>
          <p className={"text-xl font-medium"}>
            alGIRLithm is a student-led organization working to inspire the next
            generation of female computer scientists by making competitive
            programming accessible to high school girls. We aim to increase
            girls’ interest, confidence, and participation in computer science
            and competitive programming, fields that continue to experience
            female underrepresentation today, by providing opportunities, role
            models and a community.
          </p>
        </Section>
        <Section>
          <Subtitle>Head Organizers</Subtitle>
          <p>
            Our contest is organized by students from high schools all around
            the world.
          </p>
          <div
            className={
              "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            }
          >
            {team.map((person) => (
              <Organizer key={person.name} {...person} />
            ))}
          </div>
        </Section>
        <Section>
          <Subtitle>Team</Subtitle>
          <div
            className={
              "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            }
          >
            {problem_writers.map((person) => (
              <Organizer key={person.name} {...person} />
            ))}
          </div>
          <div
            className={
              "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            }
          >
            {problem_testers.map((person) => (
              <Organizer key={person.name} {...person} />
            ))}
          </div>
        </Section>
        <Section>
          <Subtitle>Past Organizers</Subtitle>
          <div
            className={
              "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            }
          >
            {past_team.map((person) => (
              <Organizer key={person.name} {...person} />
            ))}
          </div>
        </Section>
        <Section>
          <Subtitle>Contact Us</Subtitle>
          <p className={"text-xl"}>
            If you would like to help out with organizing the contest, fill out{" "}
            <a
              className="link"
              href="https://forms.gle/2bCPiCiPdA5Ezoi68"
              target="_blank"
              rel="noreferrer"
            >
              this form
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
};

export default About;
