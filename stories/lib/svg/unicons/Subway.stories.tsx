import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Subway, SubwayPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Subway",
  component: Subway,
} as ComponentMeta<typeof Subway>;

const Template: ComponentStory<typeof Subway> = (args: SubwayPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Subway {...args} />
    <Subway {...args} fill="red.500" />
    <Subway {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
