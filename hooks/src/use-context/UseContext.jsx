import Heading from "./section-heading/Heading";
import Section from "./section-heading/Section";
import ThemeProvider from "./theme/ThemeProvider";
import ThemeToggler from "./theme/ThemeToggler";

export default function UseContext() {
  return (
    <>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>

      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    </>
  );
}
