import { useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { AutoCarousel, CarouselSlide, CollectionToolbar, PaginatedVirtualGrid } from '@/components/collection';
import { getDisplayProjectKeys, PROJECT_META, type ProjectKey } from '@/data/projectsConfig';
import { useInViewport, usePagination, useViewMode } from '@/hooks';
import { useTheme } from '@/context';
import { ProjectCard } from './ProjectCard';

const PAGE_SIZE = 4;
const GRID_COLUMNS = 2;

export function ProjectsSection() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const { viewMode, setViewMode } = useViewMode('portfolio-projects-view', 'slide');
    const { ref, isInView } = useInViewport();
    const displayProjectKeys = useMemo(() => getDisplayProjectKeys(), []);
    const pagination = usePagination(displayProjectKeys, PAGE_SIZE);

    useEffect(() => {
        if (viewMode === 'grid') {
            pagination.reset();
        }
    }, [viewMode]);

    const renderProjectCard = (key: ProjectKey, index: number) => {
        const meta = PROJECT_META[key];
        return (
            <ProjectCard
                key={key}
                title={t(`projects.items.${key}.title`)}
                description={t(`projects.items.${key}.description`)}
                tech={meta.tech}
                link={meta.link}
                github={meta.github}
                images={meta.images}
                index={index}
            />
        );
    };

    return (
        <section
            id="projects"
            ref={ref}
            className={`portfolio-section px-8 py-20 ${theme.sectionBg}`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 flex-1 items-center gap-8">
                            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">{t('projects.title')}</h2>
                            <div className={`hidden flex-1 h-px sm:block ${theme.lineColor}`} />
                        </div>
                        <CollectionToolbar
                            viewMode={viewMode}
                            onViewModeChange={setViewMode}
                            showPagination
                            page={pagination.page}
                            totalPages={pagination.totalPages}
                            onPrev={pagination.prev}
                            onNext={pagination.next}
                            hasPrev={pagination.hasPrev}
                            hasNext={pagination.hasNext}
                        />
                    </div>

                    {viewMode === 'slide' ? (
                        <AutoCarousel
                            itemCount={displayProjectKeys.length}
                            slidesPerView={2}
                            autoplayEnabled={isInView}
                        >
                            {displayProjectKeys.map((key, index) => (
                                <CarouselSlide key={key} slidesPerView={2}>
                                    {renderProjectCard(key, index)}
                                </CarouselSlide>
                            ))}
                        </AutoCarousel>
                    ) : (
                        <PaginatedVirtualGrid
                            items={pagination.pageItems}
                            columns={GRID_COLUMNS}
                            estimateRowHeight={420}
                            columnClassName="grid-cols-1 md:grid-cols-2"
                            getItemKey={(key) => key}
                            renderItem={(key, index) => renderProjectCard(key, pagination.page * PAGE_SIZE + index)}
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
