import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Ankh, AnkhPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ankh",
  component: Ankh,
} as ComponentMeta<typeof Ankh>;

const Template: ComponentStory<typeof Ankh> = (args: AnkhPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Ankh {...args} />
    <Ankh {...args} fill="red.500" />
    <Ankh {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
