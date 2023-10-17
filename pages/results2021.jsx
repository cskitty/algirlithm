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
          <Title>2021 results</Title>
          <p className={"mt-6"}>
            Congratulations to everyone who competed! Please fill out{" "}
            <a
              href="https://forms.gle/pbMUPq4egf1Smwa87"
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
              href="https://www.hackerrank.com/algirlithm-novice-division"
            >
              Novice
            </a>
            ,{" "}
            <a
              className="link"
              href="https://www.hackerrank.com/algirlithm-advanced-division"
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
            <li>Shamiya Lin, Prisha Singh, Nithika Carthikeyan</li>
            <li>Trisha Sabadra</li>
            <li>Eliana Wang, Michelle Gao, Amber Tien</li>
          </ol>
          <SubSubtitle>Advanced Division</SubSubtitle>
          <ol className={"text-lg list-decimal list-inside"}>
            <li>Maria Chrysafis</li>
            <li>Lauren Ji</li>
            <li>Sahithi Morla, Priyanka Sadagopan</li>
          </ol>
        </Section>
      </div>
    </main>
  );
};

export default Results;
