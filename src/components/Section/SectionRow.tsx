export interface SectionRowProps {
  label: string;
  value: string;
}

export const SectionRow = (props: SectionRowProps) => {
  const {label, value} = props;

  return (
    <div className="grid grid-cols-2 justify-between w-full pr-5 mb-1">
      <p className="text-sm font-light md:text-base">{label}</p>
      <p className="text-sm font-light ml-2 md:text-base">{value}</p>
    </div>
  )
}