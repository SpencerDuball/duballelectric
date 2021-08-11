import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Venus, VenusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Venus",
  component: Venus,
} as ComponentMeta<typeof Venus>;

const Template: ComponentStory<typeof Venus> = (args: VenusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Venus {...args} />
    <Venus {...args} fill="red.500" />
    <Venus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
