import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  MapPin,
  Code2,
  Network,
  Boxes,
  Cpu,
  Wrench,
  GraduationCap,
  Award,
  TrendingUp,
  FileSearch,
  GitPullRequest,
  Bug,
  BookOpen,
  Database,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/data";

/** Maps serialisable IconName strings (from data.ts) to Lucide components. */
export const iconMap: Record<IconName, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  fileText: FileText,
  mapPin: MapPin,
  code: Code2,
  network: Network,
  boxes: Boxes,
  cpu: Cpu,
  wrench: Wrench,
  graduation: GraduationCap,
  award: Award,
  trendingUp: TrendingUp,
  fileSearch: FileSearch,
  gitPullRequest: GitPullRequest,
  bug: Bug,
  bookOpen: BookOpen,
  database: Database,
};

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
