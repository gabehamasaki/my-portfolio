import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from '@/context';
import { ProjectImageCarousel } from './ProjectImageCarousel';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  images?: string[];
  index: number;
}

export function ProjectCard({ title, description, tech, link, github, images, index }: ProjectCardProps) {
  const { t } = useTranslation();
  const { theme, isDark } = useTheme();

  return (
    <motion.div
      className={`group relative flex h-full min-h-80 flex-col ${theme.cardBg} ${theme.border} border p-8 overflow-hidden transition-all duration-500`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500" />

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(124,58,237,0.1)]" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {images && images.length > 0 && <ProjectImageCarousel images={images} title={title} />}

        <div className="mb-4 flex shrink-0 items-start justify-between">
          <h3 className={`text-2xl font-serif transition-colors duration-300 group-hover:text-purple-400`}>
            {title}
          </h3>
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                className={`p-2 ${theme.textTertiary} hover:text-purple-400 transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {link && (
              <a
                href={link}
                className={`p-2 ${theme.textTertiary} hover:text-purple-400 transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className={`${theme.textSecondary} mb-6 min-h-[4.5rem] flex-1 leading-relaxed`}>
          {description}
        </p>

        <TooltipProvider>
          <div className={`mt-auto flex shrink-0 flex-wrap gap-2${isDark ? ' dark' : ''}`}>
            {tech.map((techLabel) => {
              const hintKey = techLabel.toLowerCase();
              const hint = t(`projects.techHints.${hintKey}`, { defaultValue: '' });
              const hasHint = hint.length > 0;
              const badgeClassName = `text-xs uppercase tracking-wider px-3 py-1.5 rounded-full ${isDark ? 'bg-white/5 text-purple-300' : 'bg-black/5 text-purple-600'} border border-purple-500/20 transition-all duration-300 hover:border-purple-500/50${hasHint ? ' cursor-help' : ''}`;

              if (!hasHint) {
                return (
                  <span key={techLabel} className={badgeClassName}>
                    {techLabel}
                  </span>
                );
              }

              return (
                <Tooltip key={techLabel}>
                  <TooltipTrigger asChild>
                    <span className={badgeClassName} tabIndex={0}>
                      {techLabel}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="normal-case tracking-normal leading-relaxed">
                    {hint}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </motion.div>
  );
}
