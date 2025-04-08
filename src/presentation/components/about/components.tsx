import { FC, memo } from "react";
import { Box, Heading, Text, List } from "@chakra-ui/react";
import CountUp from "react-countup";
import { StatItem, SkillItem, EducationItem } from "../../@types/about.types";

export const StatItemComponent: FC<{ data: StatItem }> = memo(({ data }) => (
  <Box 
    w="full" 
    p={4} 
    borderRadius="md" 
    border="1px solid" 
    borderColor="gray.200"
  >
    <Heading size="md" mb={2}>
      +<CountUp duration={4} end={data.number} delay={2} /> {data.title}
    </Heading>
    <Text fontSize="sm">{data.description}</Text>
  </Box>
));

export const SkillList: FC<{ title: string; items: SkillItem[] }> = memo(({ title, items }) => (
  <Box my={8}>
    <Heading size="lg" textAlign="center" mb={4}>{title}</Heading>
    <List.Root >
      {items.map((item, index) => (
        <List.Item key={index}>
          <Heading size="sm" mb={1}>{item.name}</Heading>
          <Text fontSize="sm">{item.description}</Text>
        </List.Item>
      ))}
    </List.Root>
  </Box>
));

export const EducationItemComponent: FC<{ data: EducationItem }> = memo(({ data }) => (
  <Box mb={8}>
    <Heading size="md" mb={2}>{data.degree}</Heading>
    <Text fontWeight="bold" fontSize="md" mb={1}>{data.institution}</Text>
    <Text fontSize="sm" mb={1}>{data.duration}</Text>
    <Text fontSize="sm">{data.description}</Text>
  </Box>
));