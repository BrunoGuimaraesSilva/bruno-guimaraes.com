import { Stack, Text } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@presentation/ui/timeline";
import ResponsiveContainer from "@presentation/wrappers/ResponsiveContainer";
import { t } from "i18next";

const Timeline = () => {
    type Event = {
        title: string;
        date: string;
        description: string;
      };

  const eventsArray = t("timeline:events", {
    returnObjects: true,
  }) as Event[];


  return (
    <ResponsiveContainer containerProps={{ style: { maxHeight: "100%" } }}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        {t("timeline:title")}
      </Text>
        <TimelineRoot size={"lg"}>
          {eventsArray.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineContent width="auto" m={3}>
                <TimelineTitle>{event.date}</TimelineTitle>
              </TimelineContent>
              <TimelineConnector />
              <TimelineContent>
                <TimelineTitle>{event.title}</TimelineTitle>
                <p>{event.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineRoot>
    </ResponsiveContainer>
  );
};

export default Timeline;
