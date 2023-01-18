import { SectionRowDefinition } from "models/components/SectionRowDefinition";
import { PropsWithChildren, useState } from "react";
import { SectionRow } from "./SectionRow";
import { v4 as uuid } from 'uuid';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

export interface SectionProps extends PropsWithChildren {
  header: string;
  rows: SectionRowDefinition[];
  expandByDefault?: boolean;
}

export const Section = (props: SectionProps) => {
  const {header, rows, expandByDefault: expanded} = props;
  const [isExpanded, setExpanded] = useState(expanded);

  const toggleExpand = () => setExpanded(current => !current);

  return (
    <div className="mb-6 mr-3 overflow-hidden md:w-1/2">
      <div className="flex justify-between md:grid md:grid-cols-2">
        <h2 className="text-white font-bold text-lg mb-2">{header}</h2>
        <Arrow onClick={toggleExpand} className={`md:hidden ${!isExpanded ? "rotate-180" : ""}`}/>
      </div>
      <div className={`md:h-full ${isExpanded ? 'h-full' : 'h-0'}`}>
        {rows.map(row => <SectionRow key={uuid()} label={row.label} value={row.value}/>)}
      </div>
    </div>
  )
}