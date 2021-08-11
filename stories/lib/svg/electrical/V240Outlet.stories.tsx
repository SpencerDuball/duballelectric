import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { V240Outlet, V240OutletPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/V240Outlet",
  component: V240Outlet,
} as ComponentMeta<typeof V240Outlet>;

const Template: ComponentStory<typeof V240Outlet> = (
  args: V240OutletPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <V240Outlet {...args} />
    <V240Outlet {...args} fill="red.500" />
    <V240Outlet {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
