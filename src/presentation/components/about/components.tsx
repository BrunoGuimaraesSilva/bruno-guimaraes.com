import { FC, memo, useEffect, useRef } from "react";
import { Box, Heading, Text, List } from "@chakra-ui/react";
import { StatItem, SkillItem, EducationItem } from "../../@types/about.types";
import { animate, onScroll, utils } from "animejs";

export const StatItemComponent: FC<{ data: StatItem }> = memo(({ data }) => {
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const animation = animate(el, {
      innerHTML: [0, data.number],
      easing: "easeOutExpo",
      duration: 2500,
      modifier: utils.round(0),
      autoplay: onScroll({
        target: el,
        container: ".scroll-container",
        enter: "center top",
        onEnter: () => animation.play(),
      }),
    });
  }, [data.number]);

  return (
    <Box
    key={data.title}
      w="full"
      p={4}
      borderRadius="md"
      border="1px solid"
      borderColor="gray.200"
    >
      <Heading size="md" mb={2}>
        +<span ref={countRef}>0</span> {data.title}
      </Heading>
      <Text fontSize="sm">{data.description}</Text>
    </Box>
  );
});

export const SkillList: FC<{ title: string; items: SkillItem[] }> = memo(
  ({ title, items }) => (
    <Box my={8}>
      <Heading size="lg" textAlign="center" mb={4}>
        {title}
      </Heading>
      <List.Root>
        {items.map((item, index) => (
          <List.Item key={index}>
            <Heading size="sm" mb={1}>
              {item.name}
            </Heading>
            <Text fontSize="sm">{item.description}</Text>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  )
);

export const EducationItemComponent: FC<{ data: EducationItem }> = memo(
  ({ data }) => (
    <Box mb={8}>
      <Heading size="md" mb={2}>
        {data.degree}
      </Heading>
      <Text fontWeight="bold" fontSize="md" mb={1}>
        {data.institution}
      </Text>
      <Text fontSize="sm" mb={1}>
        {data.duration}
      </Text>
      <Text fontSize="sm">{data.description}</Text>
    </Box>
  )
);
