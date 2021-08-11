import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Archway, ArchwayPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Archway",
  component: Archway,
} as ComponentMeta<typeof Archway>;

const Template: ComponentStory<typeof Archway> = (args: ArchwayPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Archway {...args} />
    <Archway {...args} fill="red.500" />
    <Archway {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
