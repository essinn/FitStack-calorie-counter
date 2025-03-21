// constants/nav.ts

interface NavItem {
  name: string;
  href: string;
  translationKey: string;
}

export const navItems: NavItem[] = [
  { 
    name: "Home", 
    href: "/dashboard",
    translationKey: "home"  // Added
  },
  { 
    name: "BMI Calculator", 
    href: "/bmi-calculator",
    translationKey: "bmi"  // Added
  },
  { 
    name: "Calorie Calculator", 
    href: "/calorie-calculator",
    translationKey: "calorie"  // Added
  },
];