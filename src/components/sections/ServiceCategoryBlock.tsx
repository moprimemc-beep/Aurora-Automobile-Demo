import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import type { ImageSlotKey } from "@/lib/content/images";
import { IMAGE_SLOTS, imageAlt } from "@/lib/content/images";
import type { ServiceCategory } from "@/lib/content/services";
import type { Locale } from "@/i18n/routing";

export async function ServiceCategoryBlock({
  category,
  number,
  image,
  reverse = false,
  tone = "base",
}: {
  category: ServiceCategory;
  number: string;
  image: ImageSlotKey;
  reverse?: boolean;
  tone?: "base" | "raised";
}) {
  const imageSlot = IMAGE_SLOTS[image];
  const t = await getTranslations("servicesPage");
  const locale = (await getLocale()) as Locale;

  return (
    <Section id={category.id} tone={tone}>
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className={cn("relative aspect-[4/5] lg:h-full", reverse && "lg:order-2")}>
            <MediaFrame
              src={imageSlot.path}
              alt={imageAlt(image, locale)}
              className="h-full min-h-[320px] rounded-lg"
              devLabel={`Service category: ${category.title}`}
            />
          </Reveal>

          <div className={cn(reverse && "lg:order-1")}>
            <Reveal>
              <SectionLabel number={number}>{category.title}</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-ink-400 mt-5 max-w-lg text-base leading-relaxed sm:text-lg">
                {category.intro}
              </p>
            </Reveal>

            <ul className="border-line-500/60 mt-10 border-t">
              {category.services.map((service, index) => (
                <Reveal as="li" key={service.slug} delay={0.04 + index * 0.03}>
                  <div className="border-line-500/60 border-b py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-accent-500 font-mono text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-ink-50 text-lg font-medium tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-ink-400 mt-2.5 ml-9 max-w-md text-sm leading-relaxed">
                      {service.text}
                    </p>
                    <p className="text-ink-600 mt-2 ml-9 text-sm italic">{service.benefit}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1} className="mt-8">
              <TextLink href="/kontakt">{t("consultationCta")}</TextLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
