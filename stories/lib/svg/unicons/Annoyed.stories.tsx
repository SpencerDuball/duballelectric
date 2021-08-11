import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Annoyed, AnnoyedPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Annoyed",
  component: Annoyed,
} as ComponentMeta<typeof Annoyed>;

const Template: ComponentStory<typeof Annoyed> = (args: AnnoyedPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Annoyed {...args} />
    <Annoyed {...args} fill="red.500" />
    <Annoyed {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
