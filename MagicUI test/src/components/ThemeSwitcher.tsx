import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { themes, applyTheme, getInitialTheme, ThemeName } from '@/lib/theme-config';

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(getInitialTheme());

  useEffect(() => {
    applyTheme(currentTheme);
  }, []);

  const handleThemeChange = (themeName: string) => {
    const theme = themeName as ThemeName;
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  return (
    <div className="flex items-center gap-2">
      <Palette className="h-4 w-4 text-muted-foreground" />
      <Select value={currentTheme} onValueChange={handleThemeChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(themes).map(([key, theme]) => (
            <SelectItem key={key} value={key}>
              {theme.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
