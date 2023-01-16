import { SectionRowDefinition } from "./SectionRowDefinition";

export interface SectionDefinition {
  header: string;
  rows: SectionRowDefinition[];
  expandByDefault?: boolean;
}