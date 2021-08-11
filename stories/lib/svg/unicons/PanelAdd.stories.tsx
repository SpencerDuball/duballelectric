import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PanelAdd, PanelAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PanelAdd",
  component: PanelAdd,
} as ComponentMeta<typeof PanelAdd>;

const Template: ComponentStory<typeof PanelAdd> = (args: PanelAddPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <PanelAdd {...args} />
    <PanelAdd {...args} fill="red.500" />
    <PanelAdd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
