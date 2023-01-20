import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { FormEvent, useEffect, useRef, useState } from "react";

export interface SearchBarProps {
  value: string;
  setValue: Function;
  placeholder: string;
  onType: (e: FormEvent<HTMLInputElement>) => void;
  onStopTyping: Function;
}

export const SearchBar = (props: SearchBarProps) => {
  const { value, setValue, placeholder, onType, onStopTyping } = props;
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(!value || value === "") return;
    const timeoutID = setTimeout(onStopTyping, 1000);
    return () => clearTimeout(timeoutID);
  }, [value])

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    if(!inputRef) return;
    const input = inputRef.current as HTMLInputElement;
    setIsTyping(input.value.length > 0);
    onType(e);
  }

  const clearInput = () => {
    setValue("");
    setIsTyping(false);
  }

  return (
    <div className="relative h-16 w-full rounded-sm flex gap-1 items-center bg-[#a6aaf733]">
      <input value={value} ref={inputRef} autoFocus type="text" placeholder={placeholder} onChange={handleInputChange} className="pl-10 h-full w-full bg-transparent text-xl text-[#ffffffb3]"/>
      {isTyping && <ArrowIcon onClick={clearInput} className="absolute ml-2 left-0 -rotate-90" width="25px" height="25px"/>}
      {!isTyping && <SearchIcon className="absolute ml-2 left-0" width="30px" height="30px"/>}
      {isTyping && <CloseIcon onClick={clearInput} className="absolute mr-5 right-0" width="25px" height="25px"/>}
    </div>
  )
}