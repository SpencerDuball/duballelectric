import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WireNut, WireNutPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/WireNut",
  component: WireNut,
} as ComponentMeta<typeof WireNut>;

const Template: ComponentStory<typeof WireNut> = (args: WireNutPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <WireNut {...args} />
    <WireNut {...args} fill="red.500" />
    <WireNut {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
