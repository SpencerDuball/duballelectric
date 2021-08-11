import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MouseAlt2, MouseAlt2PropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MouseAlt2",
  component: MouseAlt2,
} as ComponentMeta<typeof MouseAlt2>;

const Template: ComponentStory<typeof MouseAlt2> = (args: MouseAlt2PropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <MouseAlt2 {...args} />
    <MouseAlt2 {...args} fill="red.500" />
    <MouseAlt2 {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
