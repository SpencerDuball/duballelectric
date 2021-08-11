import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  VerticalDistributeBottom,
  VerticalDistributeBottomPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalDistributeBottom",
  component: VerticalDistributeBottom,
} as ComponentMeta<typeof VerticalDistributeBottom>;

const Template: ComponentStory<typeof VerticalDistributeBottom> = (
  args: VerticalDistributeBottomPropsI
) => (
  <Box display="flex" gap="20px">
    <VerticalDistributeBottom {...args} />
    <VerticalDistributeBottom {...args} fill="red.500" />
    <VerticalDistributeBottom {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
