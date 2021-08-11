import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MapMarkerQuestion, MapMarkerQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MapMarkerQuestion",
  component: MapMarkerQuestion,
} as ComponentMeta<typeof MapMarkerQuestion>;

const Template: ComponentStory<typeof MapMarkerQuestion> = (
  args: MapMarkerQuestionPropsI
) => (
  <Box display="flex" gap="20px">
    <MapMarkerQuestion {...args} />
    <MapMarkerQuestion {...args} fill="red.500" />
    <MapMarkerQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
