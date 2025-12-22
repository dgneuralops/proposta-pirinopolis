import { LucideIcon } from 'lucide-react';

export interface ModuleItem {
  id: string;
  title: string;
  price: number;
  monthly?: number;
  description: string;
  features: string[];
  icon: LucideIcon;
  isOptional: boolean;
  required?: boolean; // If true, cannot be unchecked
}

export interface TimelinePhase {
  id: number;
  name: string;
  days: string;
  startDay: number;
  endDay: number;
  description: string;
}

export interface TermItem {
  title: string;
  items: string[];
  icon: LucideIcon;
}
