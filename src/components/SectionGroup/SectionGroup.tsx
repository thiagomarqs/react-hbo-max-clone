import { Section } from "components/Section/Section";
import { SectionDefinition } from "models/components/SectionDefinition";
import { v4 as uuid } from "uuid";

export interface SectionGroupProps {
  sections: SectionDefinition[];
}

export const SectionGroup = (props: SectionGroupProps) => {
  const { sections } = props;
  return (
    <div className="ml-7 mb-5">
      {sections.map(section => <Section key={uuid()} header={section.header} rows={section.rows} expandByDefault={section.expandByDefault}/>)}
    </div>
  )
}