import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BorderBottom, BorderBottomPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderBottom",
  component: BorderBottom,
} as ComponentMeta<typeof BorderBottom>;

const Template: ComponentStory<typeof BorderBottom> = (
  args: BorderBottomPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BorderBottom {...args} />
    <BorderBottom {...args} fill="red.500" />
    <BorderBottom {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
