import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { IMAGE_SLOTS, type ImageSlotKey } from "@/lib/content/images";

export function StoryChapter({
  number,
  eyebrow,
  title,
  children,
  image,
  reverse = false,
  tone = "base",
}: {
  number: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: ImageSlotKey;
  reverse?: boolean;
  tone?: "base" | "raised";
}) {
  const imageSlot = IMAGE_SLOTS[image];

  return (
    <Section tone={tone}>
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className={cn("relative aspect-[4/5] lg:h-full", reverse && "lg:order-2")}>
            <MediaFrame
              src={imageSlot.path}
              alt={imageSlot.alt}
              className="h-full min-h-[340px] rounded-lg"
              devLabel={`Kapitel ${number}: ${title}`}
            />
          </Reveal>

          <div className={cn("flex flex-col justify-center", reverse && "lg:order-1")}>
            <Reveal>
              <SectionLabel number={number}>{eyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-ink-50 mt-6 max-w-lg text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 max-w-lg space-y-4">
              {children}
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
