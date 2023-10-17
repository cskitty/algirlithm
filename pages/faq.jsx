import Blobs from "@/components/Blobs";
import Section from "@/components/Section";
import { Subtitle } from "@/components/Titles";
import { Title } from "@/components/Titles";

const faq = [
  {
    question: "Is previous programming experience required?",
    answer: (
      <>
        Yes, you should have at least some prior programming experience in Java,
        C++ or Python to be able to compete. If you have taken AP Computer
        Science A, you should be well prepared to enter our Novice division!
      </>
    ),
  },
  {
    question: "What is competitive programming?",
    answer: (
      <>
        Competitive programming is a mind sport where programmers solve
        well-defined problems within a time constraint. It’s a great way to
        strengthen your coding and problem-solving skills while having fun!
      </>
    ),
  },
  {
    question: "How do I use HackerRank?",
    answer: (
      <>
        Make a shared account with your team on{" "}
        <a
          className="link"
          href="https://hackerrank.com"
          target="_blank"
          rel="noreferrer"
        >
          HackerRank's website
        </a>
        . Every member should register for and submit a working solution to{" "}
        <a
          className="link"
          href="https://www.hackerrank.com/algirlithm-sample-contest"
          target="_blank"
          rel="noreferrer"
        >
          this sample contest
        </a>{" "}
        to make sure she is ready for the official competition!
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <main className={"bg-purple-50 min-h-screen py-12"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title className={"mb-4"}>faq</Title>
          <p>Some frequently asked questions.</p>
          <div className={"my-8 space-y-6"}>
            {faq.map((f) => (
              <div
                key={f.question}
                className={
                  "text-gray-600 hover:text-gray-900 hover:bg-white hover:duration-150 duration-500 -mx-4 px-4 py-2 rounded-lg"
                }
              >
                <h2 className={"mb-2 text-2xl font-medium"}>{f.question}</h2>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
          <p>
            For more information about competitive programming and contest
            input/output, visit the{" "}
            <a
              className="link"
              href="https://joincpi.org"
              target="_blank"
              rel="noreferrer"
            >
              Competive Programming Initiative
            </a>{" "}
            and{" "}
            <a
              className="link"
              href="https://usaco.guide"
              target="_blank"
              rel="noreferrer"
            >
              USACO Guide
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
};

export default FAQ;
