import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Dna, DnaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Dna",
  component: Dna,
} as ComponentMeta<typeof Dna>;

const Template: ComponentStory<typeof Dna> = (args: DnaPropsI) => (
  <Box display="flex" gap="20px">
    <Dna {...args} />
    <Dna {...args} fill="red.500" />
    <Dna {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
