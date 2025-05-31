import type { NavigateFunction } from "react-router-dom"

interface ThemeContextType {
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>,
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    isFocused: boolean,
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>,
    selectedRegion: string,
    setSelectedRegion: React.Dispatch<React.SetStateAction<string>>
    navigate: NavigateFunction
}

