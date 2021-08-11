import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Mountains, MountainsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Mountains",
  component: Mountains,
} as ComponentMeta<typeof Mountains>;

const Template: ComponentStory<typeof Mountains> = (args: MountainsPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Mountains {...args} />
    <Mountains {...args} fill="red.500" />
    <Mountains {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
