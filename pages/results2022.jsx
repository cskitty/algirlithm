import Link from "next/link";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";
import { SubSubtitle } from "@/components/Titles";

const Results = () => {
  return (
    <main className={"bg-primary-50 min-h-screen py-12"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title>2022 results</Title>
          <p className={"mt-6"}>
            Congratulations to everyone who competed! Please fill out{" "}
            <a
              href="https://forms.gle/gHx5vhARuUzVfoaH7"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              this feedback form
            </a>
            ; we'd love to hear your feedback about the contest!
          </p>
        </Section>
        <Section>
          <Subtitle>Problems</Subtitle>
          <p>
            If you would like to upsolve, you can submit your solutions to the
            HackerRank contests:{" "}
            <a
              className="link"
              href="https://www.hackerrank.com/contests/algirlithm-2022-novice/challenges"
            >
              Novice
            </a>
            ,{" "}
            <a
              className="link"
              href="https://www.hackerrank.com/contests/algirlithm-2022-advanced/challenges"
            >
              Advanced
            </a>
            .
          </p>
        </Section>
        <Section>
          <Subtitle>Results</Subtitle>
          <p>Here are the top 3 teams from each division.</p>
          <SubSubtitle>Novice Division</SubSubtitle>
          <ol className={"text-lg list-decimal list-inside"}>
            <li>Jessica J., Julia W., Viola X.</li>
            <li>Amy S., Elaine X., Isabella S.</li>
            <li>Justine T.</li>
          </ol>
          <br/>
          <h2>*“Prison Break” test data was invalid, and was not counted in the final scores. We apologize for the inconvenience!</h2>
          <SubSubtitle>Advanced Division</SubSubtitle>
          <ol className={"text-lg list-decimal list-inside"}>
            <li>Ketevan T., Nino C.</li>
            <li>Charlotte L.</li>
            <li>Trisha S., Ryka C. Anisha R.</li>
          </ol>
        </Section>
        <Section>
          <p className={"mt-6"}>
            Click {" "}
            <Link href={"/results2021"}>
              <a className="link text-primary-500 font-semibold">here </a>
            </Link>
            to view the 2021 results!
          </p>
        </Section>
      </div>
    </main>
  );
};

export default Results;
